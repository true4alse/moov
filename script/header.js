document.addEventListener("DOMContentLoaded",function(){

    // 메뉴 버튼 누르면 전체 메뉴 영역이 나옴
    let btn_all_menu = document.querySelector("#btn_all_menu")
    let hidden_menu = document.querySelector(".hidden_menu")
    let btn_close_hidden_menu = document.querySelector("#btn_close_hidden_menu")

    let menuState = false;
    btn_all_menu.addEventListener("click",function(){
        if(menuState==false){
            btn_all_menu.children[0].innerHTML = `<img src="./img/icn_close.svg" alt="닫기버튼">`
            hidden_menu.classList.add("on")    
            menuState=true
        }else{
            btn_all_menu.children[0].innerHTML = `<img src="./img/icn_menu.svg" alt="메뉴버튼">`
            hidden_menu.classList.remove("on")    
            menuState=false
        }
        // hidden_menu.classList.toggle("on")
    })
    

})