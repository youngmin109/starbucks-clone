# starbucks-clone

<details>
<summary> Day 1</summary>

### 문자 인코딩 설정
- `<meta charset="UTF-8" />`  
  → 한글 및 특수문자 인식 가능  
  → **UTF-8**: 초성·중성·종성 분리 저장

---

### 뷰포트 설정
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - **width=device-width**: 디바이스 화면 너비에 맞춤
  - **initial-scale**: 초기 배율 설정 (1.0 = 100%)
  - 기타 옵션:
    - `user-scalable=no`: 사용자 확대/축소 비허용
    - `maximum-scale`, `minimum-scale`: 최대/최소 배율 설정

---

### 오픈 그래프 (Open Graph)
- 웹페이지를 **SNS 공유 시 보여줄 정보 설정**

### 트위터 카드
- 웹페이지가 소셜 미디어로 공유될 때 우선적으로 활용되는 정보를 지정

### 파비콘
- 웹페이지를 나타내는 아이콘, 로고를 설정
- 자동적으로 루트경로의 favicon.ico 파일을 로딩하며, 좀 더 선명한 로고를 원할 때는 <link />를 작성

### Google Fonts & Google Material Icons
- 폰트는 라이선스를 꼭 확인해야한다.
- 구글에서 제공하는 머터리얼 아이콘을 무료로 사용 가능 (디자이너에게 매번 요청하는게 아닌)

