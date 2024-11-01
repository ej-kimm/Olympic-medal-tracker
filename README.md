# 🥇 올림픽 메달 리스트

## ✨ 소개

각국의 메달을 추가하고 관리할 수 있는 앱입니다! 국가별 금메달, 은메달, 동메달 수를 입력해서 메달 정보를 기록하고 업데이트 할 수 있는 1인 미니 프로젝트입니다

## 🧷 기술 스택

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">

## 📋 기능

1. 메달 집계 리스트 출력 및 CRUD 기능 구현

2. 메달 집계 정렬(금메달, 은메달, 동메달 별로)

3. 로컬스토리지에 메달 저장

## 📁 디렉터리 구조

```
/olympic-medals-tracker
├── /public
├── /src
│   ├── /components
│   │   ├── AddMedal.jsx
│   │   ├── MedalList.jsx
│   │   ├── MedalFormInput.jsx
│   │   ├── SortButton.jsx
│   │   └── /ui
│   │       └── Button.jsx
│   ├── /styles
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

- App.jsx

  > `메달 정보를 관리`합니다. `로컬 스토리지`에서 메달 목록을 읽어와 초기 상태를 설정합니다.

- AddMedal.jsx

  > 사용자로부터 메달 정보를 입력받는 `폼 컴포넌트`입니다. 국가명, 금메달, 은메달, 동메달 수를 입력할 수 있으며, 제출 시 로컬 상태에 저장된 메달 목록에 추가합니다

- MedalList.jsx

  > `등록된 메달 목록을 표시하는 컴포넌트`입니다. 메달 데이터를 테이블 형식으로 나열하며, 각 국가의 메달 수와 함께 삭제 버튼을 제공합니다. 메달을 금메달, 은메달, 동메달 수에 따라 정렬할 수 있는 기능도 포함되어 있습니다.

- MedalFormInput.jsx

  > `입력 필드 컴포넌트`로, 국가명, 금메달, 은메달, 동메달의 입력을 처리합니다. 재사용 가능하도록 구성되어 있습니다.

- SortButton.jsx

  > `메달 리스트를 정렬하기 위한 버튼 컴포넌트`입니다. 클릭 시 정렬 기준을 변경하고, 메달 리스트의 표시 방식을 조정합니다.

- /ui/Button.jsx
  > 재사용 가능한 버튼 UI컴포넌트입니다.
