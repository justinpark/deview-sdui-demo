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

## 섹션 추가하기 (예: Title 섹션 정보)

### 1. GraphQL스키마 추가하기

api.js의 typeDefs부분에 섹션 스키마를 추가합니다.

```
  type Title {
    title: String
  }
```

AvailableSection에 추가된 섹션 정보를 연결합니다.

```
union AvailableSection = ListMenu | Banner | ... | Title
```

### 2. schema.json 업데이트 하기

`yarn api` 명령어로 GraphQL API서버를 구동한 후 `yarn update-schema` 통해 변경된 스키마 정보를 다운로드 받습니다.

### 3. 섹션 Fragment 추가하기

`/src/SDUI/components` 폴더 아래에 섹션 이름에 해당하는 폴더 (예: `Title`)를 생성합니다.

생성된 폴더 아래에 `fragment.graphql` 파일을 생성한 후 추가한 섹션 스키마 정보를 입력합니다.

```
fragment TitleFragment on Title {
  title
}
```
추가된 fragment 파일을 `./src/SDUI/query.graphql` 에 포함합니다.

```
...
#import "./components/Title/fragment.graphql"

query UIQuery {
  getUI {
    sections {
      id
      sectionComponentType
      section {
        ...TitleFragment
      }
    }
    layouts {
      id
      sectionIds
    }
  }
}
```

### 4. 섹션 스키마 정보를 타입스크립트 정보로 변환하기

`yarn codegen`을 실행하여 추가한 fragment정보에 해당하는 타입스크립트 파일을 생성합니다.

### 5. 섹션 컴포넌트 생성하기

추가된 섹션 폴더 아래(예: `./src/SDUI/components/Title`)에 컴포넌트 파일 `index.tsx`를 생성합니다.

```
import React from 'react';

export default function Title() {
  return (
    <div>
      Title Section
    </div>
  );
}
```

4번 과정에서 생성된 타입스크립트 파일을 참조하여 프로퍼티의 값들을 설정합니다. (추가로 Omit을 사용하여 graphql에서 자동 생성된 `__typename` 값을 생략합니다.)

```
import React from 'react';
import { TitleFragment } from './__generated__/TitleFragment';

type Props = Omit<TitleFragment, '__typename'>;

export default function Title(props: Props) {
  return (
    <div>
      Title Section
    </div>
  );
}
```

프로퍼티 값을 활용하여 실제 컴포넌트 출력 과정을 구현합니다.

```
...
import { TitleFragment } from './__generated__/TitleFragment';

type Props = Omit<TitleFragment, '__typename'>;

export default function Title({ title }: Props) {
  return (
    <div>
      {title}
    </div>
  );
}
```

### 6. 섹션 컴포넌트 등록하기

`./src/SDUI/registry.ts` 파일에 추가된 섹션 컴포넌트를 등록합니다.

```
...
import Title from './components/Title';

export const registry: Registry = {
  TITLE: {
    component: Title,
  },
```

만약 chunk사이즈를 줄이기 위해 지연 로딩을 구현하고자 한다면 다음과 같이 dynamic import를 사용하여 등록합니다. registry의 키 값은 api의 `sectionComponentType` 정보를 참조합니다.

```
...
const titleLoader = () =>
  import(
    /* webpackChunkName: "titleSection" */
    './components/Title'
  );

export const registry: Registry = {
  TITLE: {
    component: titleLoader,
  },
```

지연 로딩 과정에서 서버 사이드 랜더링을 고려하여 서버 출력 과정을 포함하고자 한다면 다음과 같이 require부분을 추가합니다.

```
const titleLoader = () =>
  import(
    /* webpackChunkName: "titleSection" */
    './components/Title'
  );


// For server-side rendering
if (typeof window === 'undefined') {
  titleLoader.value = require('./components/Title');
}
```

### 7. API mock 데이터 추가 후 테스트하기

`api.js` 의 resolver 부분에 추가 섹션 정보를 포함하여 추가된 섹션의 출력 과정을 검증합니다.

```
const resolvers = {
  AvailableSection: {
    __resolveType(obj){

      return obj.__typename;
    },
  },
  Query: {
    getUI: () => ({
      sections: [
        {
          id: 'title01',
          sectionComponentType: 'TITLE',
          section: {
            __typename: 'Title',
            title: '데뷰 2020 데모',
          }
        },
      ],
    }),
  },
};
```

추가된 `sectionComponentType` 값 (예: `TITLE`)이 6번 과정에서 입력한 registry키 값과 동일해야합니다.

layouts에 추가된 섹션 정보의 `id`값을 참조하여 화면을 구성합니다.

```
const resolvers = {
  AvailableSection: {...},
  Query: {...},
  UIResponse: {
    layouts: () => [
      {
        id: 'MAIN',
        sectionIds: ['title01'],
      },
    ],
  }
```

동일한 id값을 여러번 배치하여 반복해서 출력하는 것도 가능합니다.

```
const resolvers = {
  ...
  UIResponse: {
    layouts: () => [
      {
        id: 'MAIN',
        sectionIds: ['title01', 'title01', 'title01'],
      },
    ],
  }
```
