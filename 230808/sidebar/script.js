const sidebar = document.getElementById('sidebar')
const trigger = document.getElementById('trigger')
const overlay = document.querySelector('.overlay') //class는 querySelector로 찾고, .을 꼭 붙여야 함!!


trigger.addEventListener('click',()=>{ 
    //sidebar에 open 클래스가 있는지 유무
    if(sidebar.classList.contains('open')){ //true, 'open' 클래스가 있다면 삭제
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
        trigger.textContent="열기"
    } else { //false, open 클래스가 없을 경우
        sidebar.classList.add('open')
        overlay.classList.add('open')
        trigger.textContent = '닫기'
    }
})
// sidebar.classList.toggle('open') > 눌러도 버튼 이름이 바뀌지 않음

overlay.addEventListener('click',()=>{
    if(sidebar.classList.contains('open')){
        sidebar.classList.remove('open')
        overlay.classList.remove('open')
    }
})