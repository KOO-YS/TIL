# Alembic

> 데이터베이스 버전 관리

데이터베이스 스키마 변경 이력을 코드처럼 관리하기 위한 **Python SQLAlchemy 기반 마이그레이션 도구**입니다.

## 1. Alembic을 사용하는 이유
- **히스토리 관리**: 누가, 언제, 어떤 컬럼을 추가했는지 추적 가능
- **자동화**: 직접 SQL을 작성할 필요 없이 파이썬 코드를 분석해 변경사항 반영

## 2. 핵심 동작 흐름
1. **모델 수정**: SQLAlchemy 모델 클래스에서 컬럼 추가/수정
   > **Q. 클래스를 상속하기만 하면 바로 트래킹되나요?**
   > **A.** 네, 클래스 상속 후 `env.py`에서 해당 모델을 `import`하여 `metadata`에 등록만 되면 Alembic이 감지할 수 있습니다.
2. **리비전 생성**: `alembic revision --autogenerate` 명령으로 변경 내역이 담긴 파이썬 파일 생성
3. **적용**: `alembic upgrade head` 명령을 입력하여 실제 DB에 변경 사항 반영

---

## 3. alembic.ini 핵심 변수
Alembic의 설정을 담당하는 파일입니다.

| 변수명 | 역할 | 비유 |
| :--- | :--- | :--- |
| **script_location** | Alembic 본진(root) 폴더 지정 | 우리 집 주소 |
| **version_locations** | 마이그레이션 파일 저장소 (미설정 시 `script_location/versions` 사용) | 집 안의 '서류함' 위치 |
| **version_path_separator** | 경로 목록의 구분 기호 (Windows `;`, Linux `:`) | 주소록의 '쉼표' |

---

## 4. env.py: 실행 엔진
Alembic 명령어를 실행할 때 실제로 동작하는 파이썬 파일입니다.

### 실행 모드
- **Offline Mode (`run_migrations_offline`)**: DB 연결 없이 SQL 파일만 생성할 때 사용
- **Online Mode (`run_migrations_online`)**: 실제 DB에 접속해서 마이그레이션을 실행 (**실제 사용 모드**)

### 핵심 설정 및 주의사항
- **target_metadata**: Alembic이 인식할 모델 지표 (`target_metadata = Base.metadata`)
- **Import 주의**: 파이썬은 실행 시점에 읽지 않은(import 안 된) 클래스는 인식하지 못합니다. 따라서 `env.py` 상단에 모든 모델 파일을 import 해줘야 합니다.
- **순환 참조 방지 Tip**: `models/__init__.py`에 모든 모델을 임포트해두고, `env.py`에서는 `from models import Base` 하나만 가져오는 방식으로 관리하는 것이 좋습니다.

---

## 5. 마이그레이션 파일 생성 및 원리
명령어 실행 시 `고유태그_메시지명.py` 형태로 파일이 생성됩니다.
`alembic revision --autogenerate -m "add_user_table"`

### --autogenerate의 작동 원리
- Alembic이 현재 실제 DB를 훑은 뒤, 내가 작성한 SQLAlchemy 모델과 비교합니다.
- 둘 사이의 차이점(Diff)을 계산하여 `upgrade()`, `downgrade()` 함수를 자동으로 작성합니다.
- **주의**: 자동 생성된 `downgrade` 함수는 오류가 있을 수 있으므로 실행 전 반드시 확인해야 합니다.

### 버전 순서 기억 방식
- **alembic_version 테이블**: DB 내부에 생성되어 현재 적용된 최신 리비전 ID(`version_num`)를 저장합니다.
- **연결 리스트(Linked List)**: 파일 내부의 `revision`(자신의 ID)과 `down_revision`(부모 ID) 값을 확인하여 순서를 파악합니다. (파일 생성 시간은 확인하지 않음)