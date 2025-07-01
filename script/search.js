document.addEventListener("DOMContentLoaded",function(){

    const btn_search = document.querySelector("#btn_search")
    const search = document.querySelector(".search")

    btn_search.addEventListener("click",function(e){
        e.preventDefault()
        search.classList.add("on")
    })

})