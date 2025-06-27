# starbucks-clone

HTML/CSS 기초 학습 및 웹 페이지 클론 코딩 프로젝트입니다.  
스타벅스의 공식 웹페이지를 참고하여, 마크업 구조부터 스타일 설계까지 단계적으로 구현합니다.

---

## 목차

- [Day 1 - Head 태그 설정](#day-1)
- [Day 2 - Header 구조 및 정렬](#day-2)
- [결과 예시 스크린샷](#결과-예시-스크린샷)

---

## Day 1

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

---

## Day 2

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



</details>

---

## 결과 예시 스크린샷

아래는 Day 1까지 작업한 결과입니다.

```
![Head 설정 완료 스크린샷](./githubImage/2days.jpg)
```

※ 실제 이미지는 `/screenshots` 폴더에 저장하여 연결 필요

---


---
