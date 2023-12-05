
## GptMusic


![GptGif](https://github.com/parkjonghwan22/project3/assets/118948122/01f64a9a-f828-4e00-becd-cdcd544d3014)

https://jjerry.store/


- GptMusic은 **ChatGPT**를 활용한 음악 커뮤니티 사이트입니다.
  
<br>

---

### 📋 GptMusic 관련 주요기능 소개

<br>

> ## 1. 피아노 건반

- 사용자가 키보드 및 마우스로 피아노 건반을 칠 수 있습니다. 
- 치는 건반은 색깔과 소리가 나며 연주할 수 있습니다.

<br> <br>

> ## 2. 악보이미지 렌더링

- 사용자가 친 건반을 통해 5가지의 음계를 ChatGpt 에게 prompt 로 질문합니다.
- 일정한 질문의 형식과 컨셉, 길이를 정한 prompt 를 통해 ChatGpt 로 부터 악보데이터(ABC notation)를 받습니다.
- 악보데이터(ABC notation) 형태의 데이터를 abcjs 라이브러리를 사용하여 악보이미지를 렌더할 수 있게 맞춤 가공하여 악보이미지를 렌더하게됩니다.

<br><br>

> ## 3. 악보이미지 다운로드

- 렌더링된 악보이미지를 다운로드 할 수 있습니다.
  
<br><br>

> ## 4. 악보 재생

- 악보이미지를 소리로 재생하기 위해 MidiWriter라이브러리를 사용하여 악보이미지의 데이터를 MIDI 파일로 변환합니다.
- MIDI 파일은 가장 일반적인 소리 생성 방법중 하나로서, 악보에서 사용되는 음악 이벤트 데이터를 포함하고있어서 소리로 재생할 수 있습니다

<br><br>

> ## 5. 게시글 작성

- 사용자들이 자유롭게 게시글을 작성, 수정, 삭제할 수 있습니다. 

<br><br>

--- 

### 🛠️ 기술 스택

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"> <img src="https://img.shields.io/badge/Express-black?style=for-the-badge&logo=&logoColor=black"> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=MySQL&logoColor=black">

---

### 🧑🏻‍💻 Member

팀장 장경호 <br>
팀원 박종환 <br>
팀원 이세욱 <br>
