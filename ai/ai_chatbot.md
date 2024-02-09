설명

AIaas : AI를 클라우드에서 구현해서 제공하는 서비스

클라우드 기반 AI 서비스 특징
- 구현성 : 이미 구현되어 있는 AI 서비스를 API로 가져다 쓸 수 있다
- 접근성 
    - 솔루션 개발을 위해 별도로 AI 모델을 만드는데 시간이 오래 걸려 정작 원하는 서비스 개발이 늦어진다
    - 고사양을 필요로 하는 AI 서비스임에도 불구하고 사용자는 단말 기기에 관계없이 클라우드 서비스 이용 가능

AIaas 유형 : 챗봇
- 자연 언어 처리 알고리즘을 사용하여 대화를 배우고 답변을 제공

—

챗봇 구성
언어 및 프레임워크
- python 
    - 데이터 처리, 시각화, 자연어 처리 등 인공지능 분야에서 필수적인 다양한 라이브러리와 모듈을 제공
    - 데이터 분석에 강한 언어 중 하나
        -  NumPy, Pandas, Matplotlib, Scikit-learn 등 다양한 라이브러리와 모듈을 활용하여 데이터 처리와 분석을 수행할 수 있기 때문
    - Jupyter Notebook이라는 대화형 개발 도구를 제공하므로, 개발자들은 데이터를 시각화하고 분석하며, 결과를 공유하기 위해 보고서를 작성 가능
- Streamlit- 
    - 프론트엔드 개발 기술이 없는 개발자라도 python 만으로 웹 개발을 할 수 있는 기술 스택
    - streamlit이 많은 부분을 추상화하여 제공하기 때문에 코드가 짧고 간결
    - streamlit cloud는 github 레파지토리에 소스코드를 올려놓은 것 만으로 서비스를 배포할 수 있다
    - 파이썬 기반이므로 기존 파이썬으로 개발된 데이터, AI 서비스 코드를 그대로 살리면서 개발할 수 있다 
- faiss
    - 페이스북 AI 연구팀이 개발한 백터 디비
    - 기존 유클리드 거리, 코사인 유사성 벡터 쌍 거리 계산이 아닌 여러 최적화 기법을 사용해 대량 고차원 벡터에서 유사 벡터를 빠르게 검색 가능
    - 파시스는 벡터간 유사성 계산에 집중하기 때문에 데이터를 벡터 형태로 변환하는 과정(워드 임베딩)은 추가로 필요하다




[streamlit ref]
https://modulabs.co.kr/blog/data-science-streamlit/
https://blog.firstpenguine.school/97

[faiss ref]
https://dajeblog.co.kr/16-faiss%EC%97%90-%EB%8C%80%ED%95%9C-%EB%AA%A8%EB%93%A0-%EA%B2%83/

<hr>

자체 정보 기반 검색 체계 
1. Blob Storage 
    - Blob Storage 내부 리소스인 Storage Account 네임스페이스를 생성 -> 이는 account 내부에 저장된 모든 개체에 고유 이름을 포함한 주소를 갖게 만든다
    - ppt, pdf, word 등 다양한 자료를 스토리지에 업로드한다
2. Cognitive Search
    - Blob Storage 내 파일들을 연동해와서 페이지 단위로 쪼갠다
    - 인지검색 리소스에서는 데이터를 쪼개고 이미지 글 추출이나 핵심 구문 추출 등 추가 기술을 사용해서 데이터 형태를 향상시킨다
    - 최종적으로 데이터 형태를 index 형식으로 만들어 저장
    - 이제 원본 데이터에 접근하는 것이 아닌 index 데이터에 쿼리를 날려 가장 유사한 답변을 받아온다
3. Azure OpenAI
- GPT를 포함한 다양한 언어모델을 클라우드에서 사용할 수 있도록 Rest API 액세스를 제공
- 인지 검색에서 응답받은 결과를 openAi의 GPT을 통해 사용자에게 전달할 답변을 생성

자체 정보 데이터를 기반으로 GPT가 답변을 생성할 뿐이지 스스로 언어모델을 학습시키는 과정이 아니므로 파인튜닝과는 다르다

RAG
LLM

 
[openai ref]
https://www.youtube.com/live/_bxXFkDR_KA?si=ZK_YgtZuKkI_aOxY

