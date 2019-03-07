### 로컬환경 도메인 설정
터미널 -> sudo vi /etc/hosts ->비밀번호 입력
아래와 같이 변경

`127.0.0.1       local.dev.agit.com`

또는

`0.0.0.0       local.dev.agit.com`

### font icon url
`https://themify.me/themify-icons`


### 파일구조

### 컨벤션

* css naming : underscore case

* component > return wrap element classname : comp_{이름}_{서브}

* git commit massage : (CREATE | UPDATE | REMOVE | FIX | TEST) + (fileName | componentName | functionName)