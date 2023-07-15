# 네이버 로그인 페이지 구현


---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---
변수 설정
- [ ] n_input : document.querySelector로 class 설정하여 내용 받아오기
> n에는 id, pw, log가 들어감
> log는 네이버 버튼 눌렸는지 판단하는 변수


- [ ] n_value : n_input의 value값

---

- addEventListner
> [id, pw] addEventListner
>> 'input'값으로 설정(입력에 따라 변경하며 값 읽도록 하기 위해)
>> input들어올 때 마다 value_id update
>> emailReg함수에 value_id 값 넣어서 boolean 정보 각 n_error에 입력
>> 만약 n_error값이 false라면 class에 is--invalid 추가
>> 만약 n_error값이 true라면 class에 is--invalid 삭제
>>> is--invalid => 각 입력 칸 아래에 빨간색 오류 글자 뜨도록

> [log] addEventListner
>> 'click'값으로 설정(로그인 버튼 눌렸을 때 실행하도록)
>> 기본적으로 이동하도록 설정이 되어있어서 default값 실행되지 않도록 preventDefault값 넣어서 적용
>> 입력받은 id와 입력받은 pw가 user id및 pw와 같다면 welcome.html로 이동