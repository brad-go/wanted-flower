# [원티드X위코드 프리온보딩 코스] 4주차 기업과제<br /> 🌼 꽃 정기구독 서비스

<br />

## :speaking_head: 1. 프로젝트 소개 

> 바닐라 자바스크립트를 이용하여 꾸까(https://kukka.kr/) 페이지를 구현합니다. 

- 팀 프로젝트 (3인)
- 제작기간: 2021.02.21 ~ 2021.02.24
- 팀 저장소: https://park-is-best-flower.netlify.app/

<br />

## :rocket: 2. DEMO LINK

#### 🔗 **과제물**(netlify): https://park-is-best-flower.netlify.app/ <br />

<br />

## :books: 3. 사용된 기술 스택 

![](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/BOOTSTRAP-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white)

- Webpack - v5.69.1
- Babel - v7.17.5
- JavaScript
- CSS3 
- Bootstrap v4.6.1

<br />

## :electric_plug: 4. 프로젝트 실행 방법 

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/brad-go/wanted-flower.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```
   
<br />

## 	:white_check_mark: 5. 팀 결정사항

#### 5-1. 반응형 기준

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

#### 5-2. CSS 사용 방법

협업을 용이하게 하기 위해 스타일링 방법으로 **CSS module**을 사용했고, webpack으로 번들링했습니다.

<details><summary><b>webpack 설정 보기</b></summary><div markdown="1">

#### 필요한 패키지 설치

```bash
yarn add style-loader css-loader mini-css-extract-plugin -D
```

#### webpack.config.js 파일 설정

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_env, argv) => ({
    // ...
    module: {
      rules: [
        {
          test: /\.css$/i,
          exclude: /\.module\.css$/i,
          use: [argv.mode === 'production'
            ? MiniCssExtractPlugin.loader 
            : 'style-loader', 'css-loader',
          ],
        },
        {
        test: /\.module\.css$/i,
        use: [argv.mode === 'production' ? 
          MiniCssExtractPlugin.loader
          : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'assets/css/[name].[contenthash:8].css',
        chunkFilename: 'assets/css/[name].[contenthash:8].chunk.css',
      }),
    ],
  }
})
```

</div></details>

#### 5-3. 크로스 브라우징

구현 요구 사항에 특정 부분에 한해서 IE8 지원에 대한 크로스 브라우징 지원이 있었기에 다음과 같은 방법을 사용했습니다. 

- babel을 이용하여 ES6 이후 문법으로 작성한 코드를 ES6 이전 문법으로 트랜스파일링 하였습니다. **[코드 보기](https://github.com/brad-go/wanted-flower/blob/ffa3e12138bcbdf9baecc583f6761ca6a6368d6c/.babelrc#L1)**

- postCSS의 autoprefixer를 이용하여 크로스 브라우징을 지원하도록 하였습니다. **[코드 보기](https://github.com/brad-go/wanted-flower/blob/ffa3e12138bcbdf9baecc583f6761ca6a6368d6c/postcss.config.js#L1)**

<br />

## :gear: 6. 구현사항

### 6-1. 회전하는 이미지 슬라이드 (플라워 클래스 부분)

<div align="center">
  <img src="./src/assets/readme_class.png" alt="flower class image"/>
</div>

: 양 옆의 버튼 클릭을 통해 이미지가 회전하면서 크기와 위치가 바뀌는 슬라이더를 구현했습니다. (스크린 사이즈가 pc 상태에서만 가능)

- 이미지 hover 시에 줌 효과
- 화살표 버튼 클릭 시 각 이미지가 돌아가면서 교체되며 크기와 위치가 바뀝니다. 오른쪽 자리로 이동하면 배너와 타이틀, 가격태그가 생성됩니다.  
- 원본 사이트에 없는 기능을 구현해야 했기에 [원본 사이트](https://kukka.kr/)와 다를 수 있습니다.  

### 6-2. 무한 반복 드래그 슬라이드 (배너 부분)

#### PC

<div align="center">
  <img src="./src/assets/readme_bannerPC.png" alt="banner img pc">
</div>

: 부트스트랩 4를 사용하여 레이아웃을 구성하라는 요구사항에 맞춰 **Bootstrap v4.6.1을 사용해서 레이아웃을 구성**했습니다. 

- 이미지 hover 시에 줌 효과

#### Moblie

<img src="./src/assets/readme_bannerMobile.png" alt="banner img mobile" width="70%">

: 1,024px 이하의 스크린 사이즈로 보게 되면 배너의 형태가 바뀝니다. 배너는 **드래그  무한 슬라이드**로 변경됩니다. 

- 아래 현재 슬라이드를 나타내는 버튼들을 통해서도 슬라이드를 넘길 수 있습니다. 

<br />

## :boom: 7. 핵심 트러블 슈팅

### 7-1. 회전하는 이미지 슬라이드 (플라워 클래스 부분)

#### 1) flex order에 transition 효과가 적용되지 않는 문제

##### :exclamation: 문제

&nbsp;처음에 이 부분을 구현하려고 했을때, flex의 `order` 속성을 이용해서 구현하면 될 것 같다고 생각했습니다. 각 플라워클래스들에 order 속성을 부여하고, 이들을 담을 컨테이너에 첫번째 이미지가 되었을 때만 다른 css를 적용했습니다. 그리고 버튼을 클릭했을 때, order가 변경되게 구현했습니다. 

<details><summary><b>기존 코드</b></summary><div markdown="1">

```js
// 각 플라워 클래스들
const items = document.getElementsByClassName('items');
nextBtn.addEventListener('click', () => {
  for (let i = 0; i < items.length; i++) {
    const order = item[i].style.order;
    if (order < 1) {
      order += 2
      return;
    };
    order -= 1;
  }
})
```

</div></details>
<br/>

&nbsp;그러나 각 아이템들의 order는 변경할 수 있었지만, 아이템들이 부드럽게 애니메이션과 함께 바뀌어줘야 했는데, **order를 통해서 요소의 순서를 바꿀 경우에는 transition을 통한 애니메이션 효과가 적용되지 않았습니다**. 

##### :white_check_mark: 해결

&nbsp;같은 부모 요소 아래에 있는 요소의 앞이나 뒤로 삽입할 수 있는 `before()`와 `after()` 메서드를 이용해서 해결할 수 있었습니다. 그리고 요소의 transtion을 1초로 설정했기에, setTimeout을 이용해서 자연스러운 효과를 주었습니다. 

```js
// 각 플라워 클래스들
const items = document.getElementsByClassName('items');

nextBtn.addEventListener('click', () => {
  ...
  setTimeout(() => {
    ...
    items[2].after(items[0]);
  }, 1000);
  ...
}
```

#### 2) JS가 이미지를 불러오지 못하는 문제

##### :exclamation: 문제

&nbsp;회전하는 이미지 슬라이드를 구현했는데, 각 이미지 크기가 맞지 않아서 계속 이들을 담고 있는 컨테이너의 높이가 달라져서 보기에 불편했습니다. 이를 해결하기  위해서는 세 이미지의 크기가 같아야 했지만 본 사이트에 없는 기능이었기에 이미지가 제공되지 않았습니다. 그래서 간단한 수정을 통해 크기를 맞췄고, assets 폴더에 넣고 이미지 태그의 src에 경로를 넣어주었습니다. 

&nbsp;그러나 **경로가 분명했음에도, 이미지가 불러와지지 않았습니다.** 경로 확인을 위해 css에서 경로를 입력해서 확인해보면 이미지가 잘 불러와졌습니다. 

##### :white_check_mark: 해결

&nbsp;JS에서 프로젝트 내의 이미지를 불러오기 위해서 추가적인 웹팩 설정을 통해서 해결할 수 있었습니다. 

<details><summary><b>수정사항 보기</b></summary><div markdown="1">

##### 필요한 패키지 설치

  ```bash
  yarn add -D file-loader raw-loader url-loader
  ```

##### webpack.config.js 파일 수정

  ```js
  module.exports = (env, argv) => ({
    // 기존 설정
    mode: 'development',
    devServer: { static: './dist' },
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: { keep: /\.git/ },
      // 추가 설정
      assetModuleFilename: 'assets/[hash][ext][query]',
      publicPath: '/',
    },
    // html, css 설정 부분
    // 추가 설정
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  })
  ```

</div></details>

##### [플라워 클래스 전체 코드 보기](https://github.com/brad-go/wanted-flower/blob/c936efa27030f82ba7ba74bcd8fd255d5bf6a402/src/modules/FlowerClass/FlowerClass.js)

<br />

### 7-2. 무한 반복 드래그 슬라이드 (배너 부분)

#### 1) 무한 반복 슬라이드의 반응형 구현

##### :exclamation: 문제

&nbsp;무한 슬라이드를 구현하기 위해 기존의 한 줄로 위치한 두 가지 배너 요소를 `cloneNode()` 메서드를 이용해서 클론하는 방법을 사용했습니다. 그리고 트랙의 넓이를 수정하는 함수 `updateWidth()`와 초기 위치를 수정하는 함수 `setTrackInitialPosition()`를 만들어서 적용시켰습니다. 그러나 **화면의 크기가 조정됨에 따라 슬라이드들의 크기와 트랙의 넓이, 위치가 조정되지 않았습니다.**

<details><summary><b>기존 코드</b></summary><div markdown="1">

```js
const setTrackInitialPosition = () => {
    const translatedValue = -slideWidth * slideCount;
    track.style.transform = `translateX(${translatedValue}px)`;
  };

const updateWidth = () => {
  slideWidth = carousel.offsetWidth - PADDING;
  track.style.width = `${slideWidth * newSlideCount}px`;
  track.classList.remove(styles.animated);
};

const makeSlideClones = () => {
  for (let i = 0; i < slideCount; i++) {
    let cloneSlide = slides[i].cloneNode(true);
    cloneSlide.classList.add('clone');
    track.appendChild(cloneSlide);
  }
  for (let i = slideCount - 1; i >= 0; i--) {
    let cloneSlide = slides[1].cloneNode(true);
    cloneSlide.classList.add('clone');
    track.prepend(cloneSlide);
  }

  updateWidth();
  setTrackInitialPosition();
  if (window.innerWidth > 1024) track.style.transform = 'none';
};
```

</div></details>

##### :white_check_mark: 해결

&nbsp;반응형으로 구현하기 위해  `resize` 이벤트를 이용했고, 이를 통해서 화면 크기에 따라 클론으로 생성한 슬라이드가 보여지거나 보여지지 않게 했습니다. 

```js
const handleResize = () => {
  const cloneSlides = document.querySelectorAll('.clone');
  const screenSize = window.innerWidth;
  if (screenSize < 1024) {
    cloneSlides.forEach((cloneSlide) =>
      cloneSlide.classList.remove(styles.hidden),
    );
    updateWidth();
    return;
  }
  cloneSlides.forEach((cloneSlide) =>
    cloneSlide.classList.add(styles.hidden),
  );

  track.classList.remove(styles.animated);
  track.style.transform = 'none';
  track.style.left = 0;
};

window.addEventListener('resize', handleResize);
```

&nbsp;클론을 생성했기에 **슬라이드 트랙과 슬라이드들의 넓이를 조정**해야 했고, 기존 슬라이드가 처음으로 보여지게 하기 위해 **슬라이드 트랙의 위치도 조정**해야 했습니다. 생성한 클론의 초기 위치를 수정하고 각 슬라이들의 `width`를 수정해서 화면에 제대로 보여지게 하기 위해서 `resize` 이벤트가 일어날때마다 슬라이드들의 크기를 조정하기 위해 함수 `updateWidth()`를 수정했습니다. 

```js
const updateWidth = () => {
  slideWidth = carousel.offsetWidth - PADDING;
  const newSlideCount = slides.length;

  // 수정 사항
  for (let i = 0; i < newSlideCount; i++) {
    slides[i].style.width = `${slideWidth}px`;
  }
  track.style.width = `${slideWidth * newSlideCount}px`;
  track.classList.remove(styles.animated);

  // 수정 사항
  setTrackInitialPosition();
  setTimeout(() => {
    track.classList.add(styles.animated);
  });
};
```

&nbsp;화면 크기가 조정될때마다 각 슬라이드들의 `width`를 수정하고 트랙의 초기 위치를 조절해주는 함수를 호출해줬습니다. 

**[코드 보기](https://github.com/brad-go/wanted-flower/blob/c936efa27030f82ba7ba74bcd8fd255d5bf6a402/src/modules/Banner/Banner.js#L98)**

#### 2) 드래그로 슬라이드 넘기기

##### :exclamation: 문제

&nbsp;마우스 이벤트를 통해서 드래그를 통해서 슬라이드가 이동될수 있게 구현할 수 있었지만, **일정거리 이상 마우스를 드래그하면 슬라이드를 넘기고, 일정거리 이하로 마우스를 드래그하면 슬라이드가 원위치되게 해야 했습니다**. 그래서 현재 위치에서 시작 위치를 뺌으로써 이동거리를 구했고, 조건문을 통해 일정거리 이상이면 idx를 증가시키거나 감소시킨 후 `moveSlide()` 함수를 호출해서 슬라이드가 넘어가게 만들었습니다. 그러나 **`mousemove` 이벤트에서 너무 많은 이벤트가 일어나서 슬라이드의 idx가 너무 커져 너무 많이 이동되는 문제**가 생겼습니다. 

##### :white_check_mark: 해결

&nbsp;**디바운싱**을 통해서 이 문제를 해결할 수 있었습니다. 0.2초동안 일어나는 이벤트에서 마지막 함수만 호출되게 만들었고, 이를 통해 슬라이드를 하나씩 넘길 수 있도록 만들었습니다. 

```js
let debouncer;

const handleMouseMove = (e) => {
  if (!clicked) return;
  if (debouncer) clearTimeout(debouncer);

  ...

  debouncer = setTimeout(() => {
    track.classList.add(styles.animated);
    checkBoundary(moveX);
  }, 200);
};
```

&nbsp;그리고 각 이벤트가 일어날 때마다 슬라이드 이미지가 온전히 보일 수 있도록 `setTrackInitailPosition()` 함수를 호출해서 슬라이드가 잘려보이지 않게 만들어 문제를 해결할 수 있었습니다. 

##### [배너 전체 코드보기](https://github.com/brad-go/wanted-flower/blob/c936efa27030f82ba7ba74bcd8fd255d5bf6a402/src/modules/Banner/Banner.js#L1)

<br />

## :open_file_folder: 7. 디렉토리 구조

```bash
.
└─ src
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

<br />

## :pray: 8. 회고 및 느낀점

&nbsp;자바스크립트와 CSS의 새로운 사용법을 알게된 프로젝트였습니다. 아주 조금이지만 웹팩을 직접 다루게 되었고, 이를 통해 자바스크립트와 CSS를 CRA에서 사용하듯이 리액트 프로젝트를 진행하듯이 프로젝트를 만들 수 있었습니다. 자바스크립트에서는 로컬 이미지를 불러오는 것조차 웹팩 설정이 필요하단 것을 처음 알게되었고, CRA가 얼마나 많은 것을 도와주고 있다는 것을 새삼 느낄 수 있었습니다. 

&nbsp;또, 회전하는 이미지 슬라이드와 무한 드래그 슬라이드. 지금까지 만들어보지 못한 어렵다고만 생각한 기능을 만들어볼 수 있는 프로젝트였습니다. 짧은 시간 동안 많은 걸 배울 수 있는 프로젝트였기에 기억에 남을 것 같습니다. 