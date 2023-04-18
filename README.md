# REACT

- 인터랙티브 웹 제작을 위한 JS 라이브러리
- (바닐라) HTML 요소 → JS 조작 <br>
  (리액트) REACT 요소 → HTML 반영
- 가상DOM을 적용하여 상태 변화가 있을 때 DOM 요소 중 변화한 컴포넌트만 재렌더링npm
<!-- * html 요소를 객체화하여 js로 조작하는 기존의 방식과는 반대로, react-dom으로 생성한 객체를 html 문서에 반영함. -->

## (1) CRA를 이용한 프로젝트 생성

### 1) 명령어

`npx create-react-app {project-name} --template mini`

 <!-- npx create-react-app {project-name} --template typescript -->

- boilerplate [create-react-app](https://create-react-app.dev/) 사용
  > - 기본 디렉토리 구성
  > - react, react-dom, react-scripts 및 dependency 라이브러리 설치
  > - react-scripts를 사용하여 package.json에 npm command 정의

```js
// scripts
  start: react-scripts start,
  build: react-scripts build,
  test: react-scripts test,
  eject: react-scripts eject,
  serve: serve -s build,
  build-and-serve: npm run build && npm run serve
```

### 2) 서버 구동

`cd {project-name}` → `npm start`

## (2) 상태 관리

### 1) 재렌더링

- 컴포넌트의 불변성,
- TODO: 처음부터 다시 코드가 실행됨
  - State가 변경된 컴포넌트
  - Props가 변경된 컴포넌트
  - 재렌더링된 컴포넌트 아래의 모든 컴포넌트
  - Context를 참조하는 모든 컴포넌트
- memoization: 중복 계산 방지
  - 컴포넌트: React.memo
  - 함수: useCallback
  - 변수: useMemo

* state가 바뀌면 재렌더링
* useEffect: 재렌더링 수동 설정

### 2) 상태 관리

- 글로벌 State 관리 라이브러리: Redux, Recoil, Apollo Client

## (3) 라이프사이클

- 마운팅, 업데이팅, 언마운팅

## (4) hooks

- ⚓hook: state와 생명주기 기능에 갈고리를 걸어 **원하는 시점에 정해진 함수를 실행되도록 만든 것**
-      * Returns a stateful value, and a function to update it.

- _useState_: 상태 저장 값과 이 값을 업데이트하는 함수를 반환합니다.
- _useEffect_: useNotification, useAxios
- _useRef_
- useContext: 상태 저장 값과 이 값을 업데이트하는 함수를 반환합니다.
- useReducer: 일반적으로 'useReducer'는 다음과 같은 복잡한 상태 논리를 가진 경우 'useState'보다 선호됩니다
- useMemo는 deps 중 하나가 변경된 경우에만 memo화된 값을 재계산합니다.
  <!-- componentDidMount / componentDidUpdate / componentWillUnmount -->
# new-project
