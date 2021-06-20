## 🖥 프로젝트 소개

React, TypeScript를 이용한 오토 이미지 슬라이드 패키지 구현

## 🎞 프로젝트 전체 구현 영상

![1](https://user-images.githubusercontent.com/60565155/122673975-1f36eb00-d20e-11eb-90b8-9e248a5fa770.gif)
![2](https://user-images.githubusercontent.com/60565155/122673988-2eb63400-d20e-11eb-94ab-b57d41111648.gif)
![3](https://user-images.githubusercontent.com/60565155/122673991-34ac1500-d20e-11eb-8749-7cf49535b16c.gif)

## 📅 프로젝트 기간

- 2021.06.19~2021.06.20

## 🔧 기술 스택

![HTML/CSS](https://img.shields.io/badge/-HTML/CSS-E44D26)  
 ![TypeScript](https://img.shields.io/badge/-TypeScript-blue)  
 ![React](https://img.shields.io/badge/-React-yellow)<br>
![SCSS](https://img.shields.io/badge/-SCSS-pink)

## 구현 내용 ⚡️

### 이미지 슬라이드 구현

- 이미지를 수동으로 컨트롤하는 좌,우 버튼 구현
- 하단에 인디케이터를 추가하여 이미지가 바뀔 때마다 이미지 순서 확인 가능, 좌,우 버튼이 아닌 인디케이터를 클릭해도 해당 이미지로 이동
- SetInterval WEB API를 이용하여 일정 시간이 지나면 자동으로 움직이도록 구현
- 이미지 슬라이드 위에 마우스 커서를 놓으면 오토 슬라이드 기능이 중지되며, 이미지 밖으로 커서를 옮기면 다시 오토 슬라이드 기능이 시작됨.
- 스타일링 시 CSS 전처리기인 SCSS 사용:
  - 코드 중복을 줄이고 유지보수를 위해 class명 nesting 기법 및 변수를 활용하기 위한 목적
  - mixin,include 기능을 이용하여 반응형 구현


## ✔︎ References

- 이 프로젝트에서 사용된 모든 이미지는 Unsplash에서 가져왔습니다.
