document.addEventListener("DOMContentLoaded",function(){

    // 메뉴 버튼 누르면 전체 메뉴 영역이 나옴
    let btn_all_menu = document.querySelector("#btn_all_menu")
    let hidden_menu = document.querySelector(".hidden_menu")
    let btn_close_hidden_menu = document.querySelector("#btn_close_hidden_menu")
    btn_all_menu.addEventListener("click",function(){
        hidden_menu.classList.add("on")
    })
    btn_close_hidden_menu.addEventListener("click",function(){
        hidden_menu.classList.remove("on")
    })

})