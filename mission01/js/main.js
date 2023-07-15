
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}



const id_input = document.querySelector('.user-email-input');

let value_id = id_input.value;

id_input.addEventListener('input', () => {
  value_id = id_input.value;
  let iderror = emailReg(value_id);
  if(iderror == false){
    id_input.classList.add('is--invalid');
  }
  else{
    id_input.classList.remove('is--invalid');
  }
})


const pw_input = document.querySelector('.user-password-input');

let value_pw = pw_input.value;

pw_input.addEventListener('input', () => {
  value_pw = pw_input.value;
  let pwerror = pwReg(value_pw);
  if(pwerror == false){
    pw_input.classList.add('is--invalid');
  }
  else{
    pw_input.classList.remove('is--invalid');
  }
})



const log_input = document.querySelector('.btn-login');

let value_log = log_input.value;

log_input.addEventListener('click', (event) => {
  event.preventDefault();
  value_log = log_input.value;
  if(value_id==user.id && value_pw==user.pw){
    window.location.href = 'welcome.html';
  }
})