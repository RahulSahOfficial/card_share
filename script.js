const sharebutton=document.querySelector(".sharebutton")
const sharebox=document.querySelector(".sharebox")

sharebutton.addEventListener("click",function(){
    sharebox.classList.toggle("active")
    sharebutton.classList.toggle("active")
})

// To remove the sharebox if user click anywhere else 
window.addEventListener('click',function(event){
    if(event.target != sharebox && event.target.parentNode != sharebox && event.target != sharebutton && event.target.parentNode != sharebutton ){
        sharebox.classList.remove("active")
        sharebutton.classList.remove("active")
    }
});