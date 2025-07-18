## starbucks-clone

HTML/CSS 기초 학습 및 웹 페이지 클론 코딩 프로젝트입니다.  
스타벅스의 공식 웹페이지를 참고하여, 단계적으로 구현합니다.

### Day 1

<details>
<summary>Head 태그 설정 요약</summary>

### 문자 인코딩 설정

```html
<meta charset="UTF-8" />
```

- 한글 및 특수문자 인식 가능
- UTF-8: 초성·중성·종성으로 분리 저장하는 표준 인코딩 방식

---

### 뷰포트 설정

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- width=device-width: 디바이스 가로 폭에 맞춤
- initial-scale: 초기 배율 설정
- 기타 옵션:
  - user-scalable=no
  - maximum-scale
  - minimum-scale

---

### 오픈 그래프 (Open Graph)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- SNS 공유 시 메타 정보로 사용됨

---

### 트위터 카드

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```

- 트위터 공유 시 메타 정보로 사용됨

---

### 파비콘

```html
<link rel="icon" href="./favicon.png" />
```

- 브라우저 탭에 표시되는 아이콘
- `.ico`는 기본 적용, `.png`는 직접 지정 필요
- 추천 크기: 16x16, 32x32, 500x500

---

### Google Fonts & Material Icons

```html
<!-- 나눔고딕 폰트 적용 -->
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet" />

<!-- 머터리얼 아이콘 사용 -->
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

- 구글에서 제공하는 무료 리소스
- 폰트 사용 시 라이선스 확인 필요

</details>

### Day 2

<details>
<summary>Header 구조 및 정렬 방식</summary>

### 이미지 기본 속성 및 정렬

- 이미지 기본 height: `75px`
- 인라인 요소의 기본 베이스라인 공백 제거 → `display: block` 사용

---

### 정렬 방식 1 - 가운데 정렬 (가장 일반적인 패턴)

```css
header {
  background-color: royalblue;
}
header .inner {
  width: 1100px;
  height: 120px;
  margin: 0 auto;
}
```

- `.inner`에 고정 너비 부여
- `margin: 0 auto`로 수평 중앙 정렬

---

### 정렬 방식 2 - 수직 중앙 정렬 (로고 등 위치 조정)

```css
.logo {
  height: 75px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
}
```

- 상하 위치 기준을 0으로 지정
- 요소에 `height` 필수
- 부모 요소는 `position: relative` 필요


- a태그에서 링크가 준비되어있지 않을때,
javascript:void(0)과 # 해쉬코드를 작성하는 2가지 방법이 있음

javascript 연동시 defer 속성 확인할 것! 

아래는 Day 2까지 작업한 결과입니다.

```
![Head 설정 완료 스크린샷](./githubImage/2days.png)
```


</details>


### Day 3

<details>
<summary>드롭다운 메뉴, 스크롤 이벤트, BEM 네이밍 정리</summary>

### 드롭다운 메뉴 구현

- `<header>` 안의 `.badges` 요소를 기준으로 **스크롤 이벤트 발생 시 배지 숨김/보임 처리**
- 외부 라이브러리:
  - `lodash`: `_.throttle()` 함수로 스크롤 이벤트 제한
  - `GSAP`: 애니메이션 처리 (투명도 및 display)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
```

```javascript
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));
```

- `_.throttle(함수, 시간)`  
  → 지정된 시간 간격으로 함수 실행 제한 (성능 최적화)
- `gsap.to()`  
  → 요소에 대해 애니메이션 처리

---

### inner 클래스의 역할

```css
.inner {
  width: 1100px;
  margin: 0 auto;
}
```

- 고정된 넓이로 **한 줄의 콘텐츠를 가운데로 정렬**해주는 컨테이너 역할

---

### BEM 네이밍 방식

- **BEM**: Block Element Modifier  
  HTML 클래스 이름의 체계적인 작성법

```html
<!-- 예시 -->
<div class="menu">
  <div class="menu__item"></div>
  <div class="menu__item menu__item--active"></div>
</div>
```

- `block__element`: 블록 내의 구성 요소
- `block--modifier`: 블록의 상태나 변형 (예: `is-active`, `--disabled`)

---

### position: absolute / fixed 의 너비 줄어듦 현상

- `absolute`, `fixed` 요소는 **기본적으로 내용만큼의 너비만 가짐**
- `width`를 명시하지 않으면 inline-block처럼 줄어들 수 있음
- 해결법:
  ```css
  position: absolute;
  width: 100%;
  ```
  
아래는 Day 3까지 작업한 결과입니다.

```
![Head 설정 완료 스크린샷](./githubImage/3days.png)
```


</details>

### Day 4

<details>
<summary>Body 섹션 진입 및 순차적 이미지 페이드인</summary>

### Body 섹션 구성 시작

- 지금까지는 `<header>` 영역을 작업했고, 이번부터는 본격적으로 `<body>` 섹션 작업 시작
- 구조보다 **시각적 효과와 레이아웃 연출** 중심으로 작업 진행

---

### 스타일 클래스 설계 및 재사용 방식

- 버튼 디자인을 CSS에서 미리 만들어두고, HTML에 클래스로 호출하여 재사용
- 상태/크기 등을 클래스 조합으로 처리

```html
<button class="btn btn--primary">버튼1</button>
<button class="btn btn--secondary btn--large">버튼2</button>
```

- `btn`: 공통 버튼 디자인  
- `btn--primary`, `btn--secondary`: 버튼 상태 구분  
- `btn--large`: 버튼 크기 구분

---

### GSAP을 이용한 순차적 이미지 페이드인 효과

- `.visual .fade-in` 요소들에 대해 순서대로 나타나는 애니메이션 적용
- 외부 라이브러리 **GSAP** 사용

```javascript
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 요소마다 0.7초씩 딜레이
    opacity: 1                // 점점 나타나게 함
  });
});
```

- `querySelectorAll()`로 대상 요소 선택  
- `forEach()`로 반복 처리  
- `gsap.to()`로 애니메이션 적용  
- `delay`: 등장 시점을 순차적으로 설정


</details>

### Day 5

<details>
<summary>요소 슬라이드 (Swiper.js 활용)</summary>

### Swiper.js 슬라이드 기능 도입

- **Swiper.js**는 터치 슬라이드 기능을 제공하는 JS 라이브러리
- `.min.js` 파일은 웹 배포용으로 최적화된 **압축 버전** 사용
- 공지 영역 `.notice-line` 안에 세로 방향 슬라이드를 구현

```html
<!-- 라이브러리 불러오기 -->
<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
```

```javascript
// Swiper 인스턴스 생성: new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',  // 슬라이드 방향: 세로
  autoplay: true,         // 자동 재생
  loop: true              // 루프 재생
});
```

- `.swiper-container` 내부에서 `.swiper-slide` 요소들이 순차적으로 슬라이딩됨

---

### CSS에서 `calc()` 함수 활용

- CSS `calc()` 함수로 슬라이드 컨테이너의 전체 너비 계산 가능

```css
width: calc(819px * 3);
```

- 위 예시는 슬라이드 3개의 총 너비를 계산하는 방식
- `calc()`는 다양한 단위를 조합해서 연산할 수 있음 (`px`, `%`, `em`, 등)

---

### Swiper 클래스 주의

- 슬라이드 중 현재 활성화된 요소에는 `swiper-slide-active` 클래스가 자동으로 붙음  
→ 특정 슬라이드에만 **스타일 적용**할 때 유용함

---

### 배경 채우기 디자인 팁

- 슬라이드 좌우 공간에 색을 채울 때, `bg-left`, `bg-right`와 같은 클래스명을 부여하여  
  배경색을 지정하고 **주 콘텐츠와의 연결감을 표현**

```html
<div class="bg-left"></div>
<div class="swiper-container"> ... </div>
<div class="bg-right"></div>
```

- 배경을 콘텐츠 영역과 동일한 색으로 설정하여 화면의 좌우가 빈 것처럼 보이지 않도록 구성

---



</details>

### Day 6

<details>
<summary>유튜브 영상 삽입 및 랜덤 애니메이션 설정</summary>

### 유튜브 영상 삽입 (16:9 비율 유지)

- 유튜브 영상은 기본적으로 **가로 세로 비율이 16:9**
- CSS로 이 비율을 유지하려면, **padding-top 방식**을 사용

```css
.video-container {
  position: relative;
  padding-top: 56.25%; /* 9 / 16 * 100 */
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

- `padding-top: 56.25%`는 16:9 비율을 의미  
- `iframe`은 `absolute`로 배치하여 전체 공간을 채움

---

### 유튜브 영상 ID 확인 방법

- 영상 주소 예시:
  ```
  https://www.youtube.com/watch?v=4nguaDnt2GU&list=RD4nguaDnt2GU
  ```
- `watch?v=` 뒤에 오는 문자열이 유튜브의 **영상 ID**

```html
<iframe src="https://www.youtube.com/embed/4nguaDnt2GU" ...></iframe>
```

---

### GSAP에서 곡선형 애니메이션 적용 (ease 옵션)

- `ease` 옵션을 통해 애니메이션의 **속도 곡선**을 설정할 수 있음

```javascript
gsap.to(element, {
  x: 100,
  duration: 1,
  ease: Power1.easeInOut
});
```

- `Power1.easeInOut`: 부드럽게 시작해서 부드럽게 멈추는 곡선
- 그 외에도 `Bounce`, `Back`, `Elastic` 등 다양한 이징 함수 존재

---

### 랜덤 숫자 생성 함수 (소수점 포함)

- **범위 내에서 소수점 두 자리까지의 랜덤 숫자**를 생성하는 함수

```javascript
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
```

- `Math.random()`을 활용해 `min ~ max` 범위의 값 생성
- `.toFixed(2)`로 소수점 2자리까지 제한
- `parseFloat()`을 통해 문자열 → 숫자로 변환

---

### 예시 사용 시나리오

- 눈송이나 요소들이 랜덤 위치로 움직이는 애니메이션 구현 시  
  → `x`, `y`, `scale`, `delay`, `duration` 등 다양하게 활용 가능


</details>

