function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".page", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from(".page", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from(".page img", {
       display: "inline-block",
       duratiuon:0.2
    })
    tl.from("nav",{
        opacity: 0,
        duration: 0.2
    })
   
}

loadingAnimation();

var logo = document.querySelector("#nav-l");

function logoLoading(){
    logo.addEventListener("mouseenter", function(){
        gsap.to("#nav-l img",{
             opacity:1,
             scale:1
        }) 
    })
    
    logo.addEventListener("mouseleave", function(){
        gsap.to("#nav-l img",{
             opacity:0,
             scale:0
        }) 
    })

    logo.addEventListener("mousemove", function (dets) {

        gsap.to("#nav-l img", {
            x: dets.x - logo.getBoundingClientRect().x -40 ,
            y: dets.y - logo.getBoundingClientRect().y -10
        })
    })
}
logoLoading()


var sectleft = document.querySelector("#img1");

function sectionleft1(){
    sectleft.addEventListener("mouseenter", function(){
        gsap.to("#img1 img",{
             opacity:1,
             scale:1
        }) 
    })
    
    sectleft.addEventListener("mouseleave", function(){
        gsap.to("#img1 img",{
             opacity:0,
             scale:0
        }) 
    })

    sectleft.addEventListener("mousemove", function (dets) {

        gsap.to("#img1 img", {
            x: dets.x - sectleft.getBoundingClientRect().x-40 ,
            y: dets.y - sectleft.getBoundingClientRect().y-40 
        })
    })
}
sectionleft1()

var sectleft2 = document.querySelector("#img2");

function sectionleft2(){
    sectleft2.addEventListener("mouseenter", function(){
        gsap.to("#img2 img",{
             opacity:1,
             scale:1
        }) 
    })
    
    sectleft2.addEventListener("mouseleave", function(){
        gsap.to("#img2 img",{
             opacity:0,
             scale:0
        }) 
    })

    sectleft2.addEventListener("mousemove", function (dets) {

        gsap.to("#img2 img", {
            x: dets.x - logo.getBoundingClientRect().x-140 ,
            y: dets.y - logo.getBoundingClientRect().y-140 
        })
    })
}
sectionleft2()

var sectleft3 = document.querySelector("#img3");

function sectionleft3(){
    sectleft3.addEventListener("mouseenter", function(){
        gsap.to("#img3 img",{
             opacity:1,
             scale:1
        }) 
    })
    
    sectleft3.addEventListener("mouseleave", function(){
        gsap.to("#img3 img",{
             opacity:0,
             scale:0
        }) 
    })

    sectleft3.addEventListener("mousemove", function (dets) {

        gsap.to("#img3 img", {
            x: dets.x - sectleft3.getBoundingClientRect().x-30 ,
            y: dets.y - sectleft3.getBoundingClientRect().y-50 
        })
    })
}
sectionleft3()


function navAnimation(){

    var hh = gsap.timeline();
    hh.from("nav",{
        opacity:0,
        y:-200,
        duration:3,
        // delay:0.5
    })
   
}
navAnimation()

function redirectToLoginPage() {
    // Redirect the user to the login page
    window.location.href = "sign-in.html";
}
function redirectToSignUpPage() {
    // Redirect the user to the login page
    window.location.href = "sign-up.html";
}