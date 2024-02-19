# Packer
- hashiCorp에서 개발한 가상머신 이미지를 만들어주는 오픈소스
- 하나의 스크립트 만으로 여러 플랫폼(가상머신, CSP 업체 등)을 위한 가상머신 이미지를 만들어 내는 통합 툴
- (ex) AWS AMI
- Packer를 이용해 OS 이미지를 만들고, 그 OS 위에 Ansible같은 Configuration Management 툴을 이용해 소프트웨어를 설치하고 설정한다

### Packet Template 구성 요소
#### [packer in HCL](https://developer.hashicorp.com/packer/docs/templates/hcl_templates)
- block : 빌드를 구성하는데 사용하는 packet 자체 단위
    - 종류 : block, source, provisioner, variables, locals…
        - [more … ](https://developer.hashicorp.com/packer/docs/templates/hcl_templates/blocks)
- argument : 필드에 값을 할당하는 구문
- expression : 값 자체 또는 다른 변수로부터 얻어오는 값

<br>

#### [packer in json](https://developer.hashicorp.com/packer/docs/templates/legacy_json_templates)
- variables : 환경마다 달라질 변수를 정의하는 섹션
- builder : 이미지를 생성할 플랫폼 지정
    - AWS, GCP, VirtualBox, VMware, docker etc..
- Provisioner : 이미지를 생성할 때 사용할 빌드 도구


<hr>

[Reference](https://developer.hashicorp.com/packer/docs)