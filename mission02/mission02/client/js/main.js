
/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/


const nav = getNode('.nav');
const li = getNodes('.nav ul>li')
const visualImage = getNode('.visual img')
const ul = getNode('ul');
const title = getNode('.container h1');

function imageChange(e){
    const target = e.target.closest('li');
    if(!target)return;
    const index = target.getAttribute('data-index');
    const body = getNode('body');
    // const bg = window.getComputedStyle(body).getPropertyValue('background')
    // bg = bg.split(',');
    // console.log(bg);
    // console.log(typeof bg);
    // console.log(index);

    const list = [...ul.children];
    // list = [...list.children];
    // console.log(list);
    list.forEach(item => removeClass(item, 'is-active'));
    target.classList.add('is-active');


    //시간 되면 그냥 코드로 넣은거 data값 받아오도록
    if(index == 1){
        //data에 corlor는 string인데 여기 있는값은 뭐지?
        css('body', 'background' , 'linear-gradient(to bottom, #ff6a00, #720400)');
        //data에 name에 있는거 tolowercase한다음에 asset값 가져오도록 수정?
        visualImage.setAttribute('src', './assets/ember.jpeg');
        title.innerHTML="EMBER";
    }
    else if(index == 2){
        css('body', 'background' , 'linear-gradient(to bottom, #1ca9f8, #000054)');
        visualImage.setAttribute('src', './assets/wade.jpeg');
        title.innerHTML="WADE";
    }
    else if(index == 3){
        css('body', 'background' , `linear-gradient(to bottom, #98d00f, #002906)`);
        visualImage.setAttribute('src', './assets/clod.jpeg');
        title.innerHTML="CLOD";
    }
    else if(index == 4){
        css('body', 'background' , `linear-gradient(to bottom, #d968e6, #30003c)`);
        visualImage.setAttribute('src', './assets/gale.jpeg');
        title.innerHTML="GALE";
    }
    
}


nav.addEventListener('click', imageChange);


