console.log("script running...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sideber').classList.toggle('sideberGo');
    if(document.querySelector('.sideber').classList.contains('sideberGo')){
        document.querySelector('.ham').style.display ='inline'
        document.querySelector('.cross').style.display ='none'
    }
    else{
        document.querySelector('.cross').style.display ='inline'
        setTimeout(()=>{
            document.querySelector('.ham').style.display ='none'
        },300);
        
    }
})