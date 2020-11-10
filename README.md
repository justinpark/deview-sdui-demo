# 서버 기반 UI 데모 코드
Deview 2020에 강연될 "GraphQL이 가져온 에어비앤비 프론트앤드 기술의 변천사"의 데모 코드입니다.


## 데뷰 2020 강연 정보

2020년 11월 26일 10:00 ~ 10:45

세션 정보 확인하러 가기:
https://deview.kr/2020/sessions/337


### 코드 실행 하기

`yarn start`

react 웹 서버(http://localhost:3000)와 함께 GraphQL api서버(http://localhost:4000)가 함께 구동됩니다.

### 타입 스크립트 코드 생성하기

`yarn codegen`

로컬의 schema.json정보를 기반으로 폴더에 포함된 gql query정보를 typescript로 변환해줍니다.

명령어 실행 후 graphql query가 포함된 폴더 아래의 `__generated__` 폴더에 파일이 생성 됩니다.

### GraphQL서버 구동하기

`yarn api`

GraphQL api서버(http://localhost:4000)가 구동됩니다.

### GraphQL스키마 업데이트하기

`yarn update-schema`

GraphQL api서버(http://localhost:4000)가 구동되어 있는 상태에서 실행해야 합니다. 원격 graphql 서버의 스키마 정보를 schema.json으로 내려받습니다.
