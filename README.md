# skala-vue

SKALA 프론트엔드(Vue.js) 실습을 위한 프로젝트다. Vue 3와 Vite로 구성되어 있다.

**배포 주소**: https://skala-vue-jm.pages.dev (Cloudflare Pages)

## 화면 구성

원래 실습은 `App.vue` 하나에 모든 컴포넌트를 나열하는 방식이었지만, 화면이 늘어날수록 관리가 어려워질 것 같아 vue-router로 페이지를 분리하는 구조를 도입했다. vue-router 자체는 Weather 실습 4단계(라우터 적용)에서 다루는 내용이라 커리큘럼상 아직 배우지 않은 부분이었는데, 미리 찾아보고 프로젝트 전체 구조에 적용해봤다.

- `App.vue`는 Header/NavBar/Footer와 `<RouterView>`만 갖는 공통 셸(shell) 역할만 한다.
- `/` (`HomeView.vue`) — 실습 목록을 카드 형태로 보여주는 랜딩 페이지.
- `/basic` (`BasicView.vue`) — Vue 기초 문법 실습 화면.
- `/composition` (`CompositionView.vue`) — Composition API 실습 화면.
- `/component` (`ComponentView.vue`) — 컴포넌트(생명주기, props/emit, 슬롯) 실습 화면.
- `/library` (`LibraryView.vue`) — 외부 라이브러리(Pinia, Axios, Element Plus 등) 실습 화면.
- `/weather/task1`, `/weather/task2`, `/weather/task3` (`weather/WeatherTask1-3.vue`) — Weather 실습 화면(단계별로 화면을 분리).
- `/weather/task4`와 그 하위 경로(`/weather/task4/:cityId`, `/weather/task4/about`) (`weather/WeatherTask4*.vue`) — Weather 4단계, 중첩 라우트를 적용한 화면.
- `/weather/task5`와 그 하위 경로(`/weather/task5/:cityId`, `/weather/task5/about`) (`weather/WeatherTask5*.vue`) — Weather 5단계(최종), Pinia 스토어로 온도 단위와 실시간 도시별 날씨 데이터를 전역 관리하는 화면.

새 실습을 시작할 때마다 컴포넌트 폴더 추가 → View 추가 → 라우트 등록 → 홈 화면에 카드 추가, 이 네 단계만 반복하면 되는 구조로 만들었다.

### 트러블슈팅 — 넓은 화면에서 레이아웃이 2단으로 깨지는 문제

뷰포트가 1024px 이상일 때 Header/NavBar가 한 행에, Main/Footer가 다음 행에 나란히 배치되며 레이아웃이 깨지는 문제가 있었다. 원인은 `create-vue` 스캐폴드가 기본으로 넣어주는 `src/assets/main.css`의 2단 데모용 미디어 쿼리(`@media (min-width: 1024px)`에서 `#app`을 `display: grid; grid-template-columns: 1fr 1fr`로 바꾸는 규칙)가 라우터·셸 구조를 도입한 뒤에도 그대로 남아 있던 것이었다. `App.vue`의 최상위 형제 4개(`AppHeader`, `AppNavBar`, `<main>`, `AppFooter`)가 이 grid의 자식이 되면서 브라우저가 자동으로 2행 2열로 배치했고, 1024px 미만에서는 미디어 쿼리가 적용되지 않아 문제가 드러나지 않았다. 해당 미디어 쿼리를 삭제해 원래 의도한 세로 스택 레이아웃(Header → NavBar → Main → Footer)으로 되돌리고, 좁은 화면에서 네비게이션 링크(7개)가 한 줄에 넘치지 않도록 `AppNavBar.vue`의 nav 스타일에 `flex-wrap: wrap`을 추가해 해결했다.

## 실습 단원 목록

| 단원        | 경로                                | 개요                                                     |
| ----------- | ----------------------------------- | -------------------------------------------------------- |
| Vue 기초    | `/basic`                            | Vue 3 기본 문법을 예제 단위로 실행하며 학습              |
| Composition | `/composition`                      | Composition API(ref/reactive/computed/watch) 예제 학습   |
| Component   | `/component`                        | 컴포넌트 생명주기, props/emit, 슬롯 예제 학습            |
| Library     | `/library`                          | Pinia, Axios, Element Plus, 최신 JS 문법 4개 주제로 학습 |
| Weather     | `/weather/task1` - `/weather/task5` | 날씨 대시보드를 총 5단계로 계획하고, 현재 5단계까지 진행 |

## Vue 기초 실습

- 기능 요약: `/basic`에서 Vue 3 기본 문법(디렉티브, 이벤트 처리, v-model, scoped style 등)을 예제 단위로 실행하며 학습
- 트러블슈팅: 다중 체크박스/라디오 버튼이 가로로 나란히 배치되지 않고 세로로 줄바꿈되는 문제가 있었다. 원인은 `practice.css`의 `input` 전역 선택자가 `type` 구분 없이 체크박스/라디오에도 `padding`/`border`/`border-radius`를 적용해 네이티브 체크박스 크기를 과도하게 키운 것이었고, 여기에 브라우저 기본 여백을 정리해주는 `main.css`/`base.css` 리셋(`box-sizing: border-box; margin: 0;`)이 프로젝트에 없어 문제가 더 두드러졌다. 참고용 실습 프로젝트의 `base.css`/`main.css`를 가져와 `main.js`에서 import해 리셋을 적용하는 방식으로 해결했다.
- 개인적으로 추가한 부분: (해당 없음 — 과제 요구사항을 그대로 실행/실습)

## Composition 실습

- 기능 요약: `/composition`에서 Composition API 기초를 예제 단위로 실행하며 학습했다. ref/reactive 반응형 상태 선언(`ReactiveRef.vue`, `ReactiveReactive.vue`), computed(`ComputedBasic.vue`), watch/watchEffect의 다양한 패턴(단일 값 감시, 다중 값 감시, deep watch, ref/reactive 배열 감시 등)을 각각 독립된 예제 컴포넌트로 나눠 학습
- 트러블슈팅:
- 개인적으로 추가한 부분:

## Component 실습

- 기능 요약: `/component`에서 컴포넌트 생명주기(`LifecycleParent.vue`/`LifecycleChild.vue`), props/emit을 통한 부모-자식 데이터 흐름(`PropsEmitsParent.vue`/`PropsEmitsChild.vue`), 기본·이름·스코프 슬롯(`SlotDefaultParent.vue`, `SlotNamedParent.vue`, `SlotScopedParent.vue`와 각 Child 컴포넌트) 세 가지 주제를 예제 단위로 실행하며 학습
- 트러블슈팅:
- 개인적으로 추가한 부분:

## Library 실습

- 기능 요약: `/library`에서 Pinia를 이용한 전역 상태 관리(state/getter/action), Axios를 이용한 HTTP 통신, Element Plus UI 컴포넌트, 최신 JavaScript(ES6+) 문법 네 가지 주제를 `LibraryView.vue` 한 화면에 순서대로 구현하며 학습
- 트러블슈팅: Element Plus의 `el-card`, `el-input`, `el-button` 등 컴포넌트를 템플릿에 썼는데 에러 없이 스타일도 안 먹고 동작도 안 하는 문제가 있었다. 원인은 `main.js`에 `element-plus` 전역 등록이 빠진 것이었다 — Vue는 미등록 컴포넌트를 만나면 콘솔에 "Failed to resolve component" 경고만 띄우고 넘어가기 때문에 에러로는 잡히지 않았다. `main.js`에 `import ElementPlus from 'element-plus'`, `import 'element-plus/dist/index.css'`를 추가하고 `app.use(ElementPlus)`로 전역 등록해 해결했다.
- 개인적으로 추가한 부분: OpenWeather API 키를 코드에 하드코딩하지 않고 `.env.local`(Vite 환경변수, git에는 커밋되지 않음)로 분리해 `import.meta.env.VITE_OPENWEATHER_API_KEY`로 읽도록 만들었다. 실제 값 없이 필요한 환경변수 이름만 보여주는 `.env.example`도 함께 커밋해뒀다. 이렇게 해두면 배포할 때(Cloudflare Pages) 같은 이름으로 환경변수 값만 등록하면 돼서, 코드를 새로 고치지 않고도 키를 가져오기 쉽다.

## Weather 실습

Weather 과제는 하나의 화면을 단계적으로 발전시키는 방식으로 진행했다. 각 단계는 이전 단계의 결과물을 이어받아 기능을 추가한다.

### 1단계 — Mockup (`WeatherMockup.vue`)

- 기능 요약: weatherList를 ref로 선언해 정적 도시 데이터를 v-for로 렌더링한다. 카드를 클릭하면 상태바 문구가 갱신되고, 상세보기 버튼을 클릭하면 click.stop으로 카드 클릭과 분리되어 alert로 상세 정보를 보여준다. 온도 25도를 기준으로 배지를 다르게 표시한다.
- 트러블슈팅:
- 개인적으로 추가한 부분:

### 2단계 — Composition (`WeatherComposition.vue`)

- 기능 요약: computed로 만든 filteredWeatherList가 검색어에 따라 목록을 실시간으로 필터링한다. 검색 결과가 없으면 안내 문구를 보여준다. watch로 selectedCityInfo 변화를, watchEffect로 searchQuery 변화를 각각 콘솔에 로그로 남긴다.
- 트러블슈팅:
- 개인적으로 추가한 부분:

### 3단계 — Component (`WeatherParent.vue`)

- 기능 요약: 2단계의 단일 컴포넌트 구조를 `WeatherParent.vue`(부모)와 `SearchBar.vue`, `WeatherCard.vue`(자식)로 분리했다. `SearchBar`는 입력값을 `update-query` 이벤트로, `WeatherCard`는 카드 클릭과 상세보기를 각각 `select-card`/`click-detail` 이벤트로 부모에 전달하고, 부모는 `cityItem` 등 데이터를 props로 자식에 내려주는 단방향 데이터 흐름(props 하향, emit 상향)을 실습했다.
- 트러블슈팅:
- 개인적으로 추가한 부분:

### 4단계 — 라우터 적용 (`WeatherTask4.vue`)

- 기능 요약: `WeatherTask4.vue`를 부모 라우트로 두고 `<RouterView>`로 자식 화면(`home`, `detail`, `about`)을 전환하는 중첩 라우트 구조를 적용했다. `WeatherTask4HomeView.vue`는 검색어를 `watch`로 감시해 `router.push`로 쿼리스트링(`?search=`)에 동기화하고, `onMounted`에서 쿼리스트링 값을 다시 읽어와 검색 상태를 복원한다. 카드 클릭 시 `router.push({ name: 'weather-task4-detail', params: { cityId } })`로 동적 라우트 파라미터를 이용해 상세 페이지로 이동하고, `WeatherTask4DetailView.vue`는 `route.params.cityId`로 해당 도시의 상세 데이터를 조회해 보여준다.
- 트러블슈팅:
- 개인적으로 추가한 부분:

### 5단계 — 스토어 적용 (`WeatherTask5.vue`)

- 기능 요약: `stores/configStore.js`(온도 단위 섭씨/화씨)와 `stores/weatherStore.js`(도시별 실시간 날씨) 두 Pinia 스토어로 Home/Detail 화면이 상태를 공유한다. `weatherStore`는 한국 주요 도시 12곳과 더움/추움 대비를 위한 해외 도시 6곳(모스크바, 헬싱키, 오슬로, 레이캬비크, 앵커리지, 남극 맥머도기지)의 좌표를 갖고 있다가, 화면 진입 시 OpenWeather 현재 날씨 API를 병렬로 호출해 실시간 데이터를 채우면서 `el-progress`로 로딩 진행률을 보여준다. `UnitToggler.vue`가 `configStore.toggleUnit()`을 호출하면 `WeatherCard.vue`와 `WeatherTask5DetailView.vue`가 함께 구독하는 `displayTemp`가 즉시 섭씨/화씨로 바뀐다.
- 트러블슈팅: `WeatherCard.vue`에서 `defineProps({...})`의 반환값을 변수에 담지 않은 채 새로 추가한 `computed` 안에서 `props.cityItem.temp`를 참조해 `props is not defined` 에러가 났다. `<script setup>`은 템플릿에서는 props를 자동으로 노출해주지만 스크립트 로직 안에서 props 값을 쓰려면 `const props = defineProps(...)`처럼 반환값을 직접 변수로 받아야 한다는 걸 확인하고 그렇게 고쳐 해결했다.
- 개인적으로 추가한 부분
  - 단위 변경 버튼도 `el-switch` + `ElMessage`로 바꿨다. `el-switch`는 boolean 값만 받기 때문에 `computed({ get, set })`으로 스토어의 문자열 `unit`과 boolean 사이를 변환하는 다리를 만들었고, `set`에서 `configStore.toggleUnit()`을 먼저 호출한 뒤 `configStore.unit`을 다시 읽어 토스트 문구를 만들어야 실제로 바뀐 단위와 메시지가 어긋나지 않는다는 걸 확인했다.
  - 하드코딩된 3개 도시 목업 데이터 대신, `weatherStore.js`에 도시 좌표 목록을 두고 화면 진입 시 OpenWeather 현재 날씨 API를 `Promise.all`로 병렬 호출해 실제 데이터를 채우도록 바꿨다. 완료된 도시 수만큼 `el-progress`가 차오르는 진짜 진행바를 붙였고(Library 실습의 `setInterval` 가짜 진행바보다 한 단계 더 나간 활용), Home과 Detail이 같은 스토어를 구독해서 상세보기에서도 실제 습도·풍속까지 확인할 수 있게 했다.
  - 처음엔 한국 도시만 있어서 온도가 다 비슷하게 몰려있었다. "더움과 추움의 차이"를 보여주려고 모스크바·헬싱키·오슬로·레이캬비크·앵커리지와 남극 맥머도기지를 좌표로 추가했다(맥머도는 지금 남반구 겨울이라 확실히 영하권으로 나옴). 배지도 `더움`/`선선함` 2단계에서 `추움`을 더해 3단계로 나눴다.
  - 처음엔 영하 20도부터 35도까지를 0퍼센트부터 100퍼센트까지로 매핑한 "더위 게이지"를 만들었는데, 18°C 같은 평범한 온도도 "더위 60%"처럼 체감과 안 맞는 숫자가 나오는 문제가 있었다(임의로 정한 온도 구간 매핑 자체가 비직관적이었음). 이 과정에서 `el-progress`가 `status`를 `success`/`exception`으로 주면 퍼센트 숫자 대신 상태 아이콘으로 자동 교체된다는 것도 배웠다(`:color`로 우회). 결국 게이지는 API가 이미 0에서 100 사이 값으로 주는 습도를 그대로 쓰는 게 훨씬 자연스러워서 "💧 습도 N%" 게이지로 정리했다.
  - 온도 구간에 따라 카드 배경색(더움 연한 빨강 / 선선함 연한 하늘색 / 추움 연한 파랑)을 은은하게 넣어 한눈에 구분되게 했다. 습도 게이지 색이 파란색이라 `추움` 배지와 헷갈려서 회색으로 바꿨고, "상세보기" 버튼은 `el-button`(파스텔 연두)으로 바꾸면서 기본 텍스트 색이 배경에 묻혀 안 보이길래 진한 색 + 굵게로 다시 조정했다. 404 페이지 버튼도 `el-button`으로 통일해 나머지 화면과 톤을 맞췄다.
