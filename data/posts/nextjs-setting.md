# NextJs 설치

터미널에서 만들고자하는 폴더로 이동후

`npx create-next-app@latest` 명령어를 통해 next를 설치할 수 있다.

https://nextjs.org/docs/getting-started/installation
공식문서에도 자세히 나와있으니 참고해보자

---

# TailwindCss 세팅

## 설치

Next 설치할 때 Tailwind설치 여부를 물어보는데 그때 설치하면
Tailwind가 같이 설치된다.
package.json에 dependencies를 보면
tailwindcss 3.3.3 버전이 설치되어있는 것을 확인 할 수 있다.

## tailwind.config.js

그리고 tailwind.config 파일도 기본적으로 세팅이 되어있는데
content 배열 안에 있는 내용은 각각
pages 안에, components 안에, app 폴더 안에서 tailwind를 사용하겠다고
명시한 것이다.

여기서 만약 src directory를 사용한다면
src directory 안에 있는 모든 것들에 tailwind를 적용시키도록 설정할 수 있다.

나는 프로젝트에서 src directory를 사용할 것이기 때문에
기존 내용들을 지우고 `'./src/**/*.{js,ts,jsx,tsx,mdx}',`만 기입했다.

## global css

스타일을 import하기 위해서
app 폴더에 있는 global.css 파일에

@tailwind base;
@tailwind components;
@tailwind utilities;

3가지를 제일 위에다 기입하면 된다.

그리고 app/layout.tsx에 global.css를 import하면된다.

---

# 폰트 설정

app/layout.tsx 에서

Open_Sans를 import 하고
html 태그에 className을 sans.className으로 설정하면 된다.

page가 아니라 layout에서 해야하는 이유는
layout html 전반적으로 font를 설정해줄 수 있기 때문이다.

---

# tsconfig 설정

## target

수정하기 전에는 target이 es5라고 되어있다.
하지만 최근에는 웬만한 브라우저는 모두 es6 이상을 지원해주기 때문에
es6로 변경하는 것이 좋다.

예전 버전으로 설정하면 예전 버전을 지원하기 위해 코드가 길어지고
커질 수 있기 때문에 불필요하게 예전 버전으로 설정하는 것은 지양해야한다.

---

# ts module 에러 해결

next 13.4.13버전은 처음 실행을 할 때 부터 ts module에러가 발생한다.
이를 해결하기 위해서는 tsconfig 파일을 수정하면 된다.

```
"module": "esnext",
"moduleResolution": "node",
```

module과 moduleResolution을 위와 같이 변경하면 오류가 해결된다.
