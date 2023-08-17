let openBtn = document.getElementById("openBtn");
let model = document.getElementById("model");
openBtn.addEventListener("click",function(){
    modal.style.display="block";
})
let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click",function(){
    modal.style.display="none";
});
window.addEventListener("click",function(event){
    if(event.target==modal)(
        modal.style.display="none"
    )
})