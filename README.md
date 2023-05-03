안녕하세요. 이력서 레포지토리입니다.

목 적 : 주로 어드민 업무로인한 보여줄 코드의 부재 및 개발의 흥미를 높이기 위한 프로젝트

사용 기술 : React, Tailwind, Recoil, git

간단 설명 : CRA를 통한 프로젝트 생성, gh-pages 를 이용한 정적페이지 배포
전체적인 컨셉은 벨로그 / 원티드 이력서 템플릿

추가예정

- [ ] 다크모드
- [ ] 색, 디자인 컨셉 테일윈드에 적용
- [ ] 간단한 반응형 (765 / 1200)

폴더구조 및 설명

📦src
┣ 📂components
┃ ┣ 📂common // 공용으로 사용하는 컴포넌트
┃ ┃ ┣ 📜Footer.tsx
┃ ┃ ┣ 📜Header.tsx
┃ ┃ ┗ 📜SideMenu.tsx
┃ ┗ 📂main // 각 페이지에서 사용하는 컴포넌트
┃ ┃ ┣ 📜Career.tsx
┃ ┃ ┗ 📜Intro.tsx
┣ 📂container // api 호출이나, 데이터 처리
┃ ┗ 📂main
┃ ┃ ┗ 📜index.tsx
┣ 📂pages // 전체적인 페이지 스타일
┃ ┗ 📜main.tsx
┣ 📂styles
┃ ┗ 📜global.css
┣ 📜App.tsx
┣ 📜index.tsx
┣ 📜react-app-env.d.ts
┣ 📜reportWebVitals.ts
┗ 📜setupTests.ts

작업 로그

- 2023 / 5 / 3 - 기본적인 레이아웃 작성 및 gh-pages를 이용한 정적페이지 배포
