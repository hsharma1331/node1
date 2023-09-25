const signInbtnLink= document.querySelector('.signInbtn-link');
const signUpbtnLink= document.querySelector('.signUpbtn-link');
const container= document.querySelector('.container');

signUpbtnLink.addEventListener('click',()=>{
    container.classList.toggle('active');
});
signInbtnLink.addEventListener('click',()=>{
    container.classList.toggle('active');
});