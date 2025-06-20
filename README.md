# starbucks-clone# 

## Day 1 - 2025.06.20

<details>
<summary> head 태그 설정 요약</summary>

### 문자 인코딩 설정
- `<meta charset="UTF-8" />`  
  → 한글 및 특수문자 인식 가능  
  → **UTF-8**: 초성·중성·종성 분리 저장 (권장)

---

### 뷰포트(Viewport) 설정
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  - **width=device-width**: 디바이스 화면 너비에 맞춤
  - **initial-scale**: 초기 배율 설정 (1.0 = 100%)
  - 기타 옵션:
    - `user-scalable=no`: 사용자 확대/축소 비허용
    - `maximum-scale`, `minimum-scale`: 최대/최소 배율 설정

---

### 오픈 그래프 (Open Graph)
- 웹페이지를 **SNS 공유 시 보여줄 정보 설정**
```html
<meta property="og:type" content="website" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
