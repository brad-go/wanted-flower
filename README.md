<h1>원티드 프리온보딩 코스 4주차 기업과제<br />
꽃 정기구독 서비스 🌼</h1>

## 🚀 배포

🔗 **과제물**(netlify): https://park-is-best-flower.netlify.app/
<br />

## 🧑‍🤝‍🧑 팀 소개

### 저희는 Team **박이최고** 입니다.

| | 팀원 | 역할 | 
|------------------------------------------------------------ |----------------------------------------------------- |--------------------- | 
| ![](https://avatars.githubusercontent.com/u/71081893?s=25) | 이소진 [@krungy](https://github.com/krungy) | (팀장) footer, 팝업 구현 | 
| ![](https://avatars.githubusercontent.com/u/68905615?s=25) | 고동현 [@brad-go](https://github.com/brad-go) | 배너, 슬라이더 구현 |
| ![](https://avatars.githubusercontent.com/u/57004991?s=25) | 최효정 [@hyo-choi](https://github.com/hyo-choi) | GNB, 동영상 구현 | 

<br>

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/OnBoarding-Park-is-best/week4-flower.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
5. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- 협업을 용이하게 하기 위해 스타일링 방법으로 CSS module을 사용했고, webpack으로 번들링했습니다.
- babel을 이용하여 ES6 이후 문법으로 작성한 코드를 ES6 이전 문법으로 트랜스파일링 하였습니다.
- postCSS의 autoprefixer를 이용하여 크로스 브라우징을 지원하도록 하였습니다.

### 팀내 결정사항

#### 반응형 기준

```css
/* 테블릿 가로, 테블릿 세로 (해상도 768px ~ 1023px)*/
@media all and (min-width:768px) and (max-width:1023px) {
  ...
}

/* 모바일 가로, 모바일 세로 (해상도 480px ~ 767px)*/
@media all and (max-width:767px) {
  ...
}
```

- 768px, 1024px을 기준으로 반응형 웹을 구성합니다.
- PC 환경을 기준으로 CSS를 작성한 후 모바일 환경에 대한 CSS를 작성합니다.

### 팀원별 역할 분담

#### :bread:\_고동현

- 플라워 클래스 영역 구현
- 배너 영역 구현

#### :cherry_blossom:\_최효정

- GNB 영역 구현
- 동영상 영역 구현

#### :poop:\_이소진

- footer 영역 구현
- 팝업 영역 구현
  - cookie를 활용한 팝업 expire 설정

<br />

## 📂 디렉토리 구조

```bash
.
└── src
    ├── assets
    ├── constants
    ├── modules
    │   ├── FlowerClass
    │   ├── Footer
    │   ├── GNB
    │   ├── Movie
    │   └── Popup
    └── utils
```
