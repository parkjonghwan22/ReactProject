
## GptMusic


![GptMusic](https://github.com/parkjonghwan22/project3/assets/118948122/9bdd5a0a-e14c-4637-b8a5-ad4e2363f9ba)

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

> ## 5. 게시글 작


- 

<br><br>

--- 

### 🛠️ 작업 환경

## 기술 스택

<img src="https://img.shields.io/badge/nextjs-000?style=for-the-badge&logo=nextdotjs&logoColor=white"> <img src="https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/amplify-FF9900?style=for-the-badge&logo=awsamplify&logoColor=white"> <img src="https://img.shields.io/badge/heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"> <img src="https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white"> <img src="https://img.shields.io/badge/mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white">  <img src="https://img.shields.io/badge/ipfs-65C2CB?style=for-the-badge&logo=ipfs&logoColor=white"> <img src="https://img.shields.io/badge/swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black"> 


## API
 <img src="https://img.shields.io/badge/eden_ai-412991?style=for-the-badge&logo=openai&logoColor=white"> <img src="https://img.shields.io/badge/coingecko_api-00874D?style=for-the-badge&logo=&logoColor=white"> <img src="https://img.shields.io/badge/pinata_api-E4405F?style=for-the-badge&logo=&logoColor=white">
