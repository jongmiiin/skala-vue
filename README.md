# skala-vue

SKALA 프론트엔드(Vue.js) 실습을 위한 프로젝트다. Vue 3와 Vite로 구성되어 있다.

## 화면 구성

원래 실습은 `App.vue` 하나에 모든 컴포넌트를 나열하는 방식이었지만, 화면이 늘어날수록 관리가 어려워질 것 같아 vue-router로 페이지를 분리하는 구조를 도입했다. vue-router 자체는 Weather 실습 4단계(라우터 적용)에서 다루는 내용이라 커리큘럼상 아직 배우지 않은 부분이었는데, 미리 찾아보고 프로젝트 전체 구조에 적용해봤다.

- `App.vue`는 Header/NavBar/Footer와 `<RouterView>`만 갖는 공통 셸(shell) 역할만 한다.
- `/` (`HomeView.vue`) — 실습 목록을 카드 형태로 보여주는 랜딩 페이지.
- `/basic` (`BasicView.vue`) — Vue 기초 문법 실습 화면.
- `/composition` (`CompositionView.vue`) — Composition API 실습 화면.
- `/component` (`ComponentView.vue`) — 컴포넌트(생명주기·props/emit·슬롯) 실습 화면.
- `/weather/task1`, `/weather/task2`, `/weather/task3` (`weather/WeatherTask1-3.vue`) — Weather 실습 화면(단계별로 화면을 분리).

새 실습을 시작할 때마다 컴포넌트 폴더 추가 → View 추가 → 라우트 등록 → 홈 화면에 카드 추가, 이 네 단계만 반복하면 되는 구조로 만들었다.

## 실습 단원 목록

| 단원        | 경로                                 | 개요                                                    |
| ----------- | ------------------------------------ | ------------------------------------------------------- |
| Vue 기초    | `/basic`                             | Vue 3 기본 문법을 예제 단위로 실행하며 학습              |
| Composition | `/composition`                       | Composition API(ref/reactive/computed/watch) 예제 학습  |
| Component   | `/component`                         | 컴포넌트 생명주기, props/emit, 슬롯 예제 학습            |
| Weather     | `/weather/task1` - `/weather/task3`  | 날씨 대시보드를 총 5단계로 계획하고, 현재 3단계까지 진행 |

## Vue 기초 실습

- 기능 요약: `/basic`에서 Vue 3 기본 문법(디렉티브, 이벤트 처리, v-model, scoped style 등)을 예제 단위로 실행하며 학습했다.
- 트러블슈팅: 다중 체크박스/라디오 버튼이 가로로 나란히 배치되지 않고 세로로 줄바꿈되는 문제가 있었다. 원인은 `practice.css`의 `input` 전역 선택자가 `type` 구분 없이 체크박스/라디오에도 `padding`/`border`/`border-radius`를 적용해 네이티브 체크박스 크기를 과도하게 키운 것이었고, 여기에 브라우저 기본 여백을 정리해주는 `main.css`/`base.css` 리셋(`box-sizing: border-box; margin: 0;`)이 프로젝트에 없어 문제가 더 두드러졌다. 참고용 실습 프로젝트의 `base.css`/`main.css`를 가져와 `main.js`에서 import해 리셋을 적용하는 방식으로 해결했다.
- 개인적으로 추가한 부분: (해당 없음 — 과제 요구사항을 그대로 실행/실습)

## Composition 실습

- 기능 요약: `/composition`에서 Composition API 기초를 예제 단위로 실행하며 학습했다. ref/reactive 반응형 상태 선언(`ReactiveRef.vue`, `ReactiveReactive.vue`), computed(`ComputedBasic.vue`), watch/watchEffect의 다양한 패턴(단일 값 감시, 다중 값 감시, deep watch, ref/reactive 배열 감시 등)을 각각 독립된 예제 컴포넌트로 나눠 확인했다.
- 트러블슈팅: (겪은 문제와 해결 과정)
- 개인적으로 추가한 부분: (본인만의 데이터 등 요구사항 이상으로 시도해본 것)

## Component 실습

- 기능 요약: `/component`에서 컴포넌트 생명주기(`LifecycleParent.vue`/`LifecycleChild.vue`), props/emit을 통한 부모-자식 데이터 흐름(`PropsEmitsParent.vue`/`PropsEmitsChild.vue`), 기본·이름·스코프 슬롯(`SlotDefaultParent.vue`, `SlotNamedParent.vue`, `SlotScopedParent.vue`와 각 Child 컴포넌트) 세 가지 주제를 예제 단위로 실행하며 학습했다.
- 트러블슈팅: (겪은 문제와 해결 과정)
- 개인적으로 추가한 부분: (본인만의 데이터 등 요구사항 이상으로 시도해본 것)

## Weather 실습

Weather 과제는 하나의 화면을 단계적으로 발전시키는 방식으로 진행했다. 각 단계는 이전 단계의 결과물을 이어받아 기능을 추가한다.

### 1단계 — Mockup (`WeatherMockup.vue`)

- 기능 요약: weatherList를 ref로 선언해 정적 도시 데이터를 v-for로 렌더링한다. 카드를 클릭하면 상태바 문구가 갱신되고, 상세보기 버튼을 클릭하면 click.stop으로 카드 클릭과 분리되어 alert로 상세 정보를 보여준다. 온도 25도를 기준으로 배지를 다르게 표시한다.
- 트러블슈팅: (겪은 문제와 해결 과정)
- 개인적으로 추가한 부분: (본인만의 데이터 등 요구사항 이상으로 시도해본 것)

### 2단계 — Composition (`WeatherComposition.vue`)

- 기능 요약: computed로 만든 filteredWeatherList가 검색어에 따라 목록을 실시간으로 필터링한다. 검색 결과가 없으면 안내 문구를 보여준다. watch로 selectedCityInfo 변화를, watchEffect로 searchQuery 변화를 각각 콘솔에 로그로 남긴다.
- 트러블슈팅:
- 개인적으로 추가한 부분:

### 3단계 — Component (`WeatherParent.vue`)

- 기능 요약: 2단계의 단일 컴포넌트 구조를 `WeatherParent.vue`(부모)와 `SearchBar.vue`, `WeatherCard.vue`(자식)로 분리했다. `SearchBar`는 입력값을 `update-query` 이벤트로, `WeatherCard`는 카드 클릭과 상세보기를 각각 `select-card`/`click-detail` 이벤트로 부모에 전달하고, 부모는 `cityItem` 등 데이터를 props로 자식에 내려주는 단방향 데이터 흐름(props 하향, emit 상향)을 실습했다.
- 트러블슈팅: (겪은 문제와 해결 과정)
- 개인적으로 추가한 부분: (본인만의 데이터 등 요구사항 이상으로 시도해본 것)
