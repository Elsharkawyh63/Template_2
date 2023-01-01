let a = document.querySelector(".menu");
let b = document.querySelector("header nav ul");
let c = document.querySelectorAll("header nav ul li a");
let d = document.body.clientWidth;
if(d < 767){
    b.style.display = "none";
}else if(d > 767){
    b.style.display = "flex";
    b.classList.add("unorlist");
    b.classList.remove("clicko");
    for(i=0 ; i < c.length ; i++){
        c[i].classList.add("linked");
        c[i].style.padding = "40px 10px";
    }
}
document.body.onresize  = function(){
    let d = document.body.clientWidth;
    if(d < 767){
        b.style.display = "none";
        for(i = 0 ; i < pics.length ; i++){
            if(pics[i].style.flexBasis == "0%"){
                pics[i].style.flexBasis = "0%"
            }else{
                pics[i].style.flexBasis = "100%";
            }
        }
    }else if(d > 767 && d < 1199){
        b.style.display = "flex";
        b.classList.add("unorlist");
        b.classList.remove("clicko");
        for(i=0 ; i < c.length ; i++){
            c[i].classList.add("linked");
            c[i].style.padding = "40px 10px";
        }
        for(i = 0 ; i < pics.length ; i++){
            if(pics[i].style.flexBasis == "0%"){
                pics[i].style.flexBasis = "0%"
            }else{
                pics[i].style.flexBasis = "50%";
            }
        }
    }else if(d > 1199){
        for(i = 0 ; i < pics.length ; i++){
            if(pics[i].style.flexBasis == "0%"){
                pics[i].style.flexBasis = "0%"
            }else{
                pics[i].style.flexBasis = "25%";
            }
        }
        b.style.display = "flex";
        b.classList.add("unorlist");
        b.classList.remove("clicko");
        for(i=0 ; i < c.length ; i++){
            c[i].classList.add("linked");
            c[i].style.padding = "40px 10px";
        }
    }
}

a.onclick = function(){
    if(b.style.display == "none"){
        b.style.display = "flex";
        b.classList.add("clicko");
        for(i=0 ; i < c.length ; i++){
            c[i].classList.add("linked");
            c[i].style.padding = "15px";
        }
    }else{
        b.style.display = "none";
    }
    
}
let ic = document.querySelector(".ico");
let ic1 = document.querySelector("nav .form");
let ser = document.querySelector("nav .ftex");
ser.style.opacity = "0.3";
ic.onclick = function(){
    let x = document.body.clientWidth;
    let y = document.querySelector("header nav ul");
    let z = document.querySelectorAll(".linked");
    if(x > 998){
        if(ser.style.opacity == "0.3"){
            ic.style.right = "20px";
            ic1.style.width = "205px";
            ser.style.opacity = "1";
            ser.style.width = "200px";
        }else{
            ser.style.opacity = "0.3";
            ser.style.width = "40px";
            ic.style.right = "4px";
            ic1.style.width = "40px";
        }
    }else if(x > 767 && x < 998){
        if(ser.style.opacity == "0.3"){
            ic.style.right = "20px";
            ic1.style.width = "205px";
            ser.style.opacity = "1";
            ser.style.width = "200px";
            y.style.opacity = "0";
            for(i=0 ; i < z.length ;i++){
                z[i].style.fontSize = "5px";
            }
        }else{
            ser.style.opacity = "0.3";
            ser.style.width = "40px";
            ic.style.right = "4px";
            ic1.style.width = "40px";
            y.style.width = "";
            y.style.opacity = "1";
            for(i=0 ; i < z.length ;i++){
                z[i].style.fontSize = "14px";
            }
        }
    }else if(x > 440){
        if(ser.style.opacity == "0.3"){
            ic.style.right = "20px";
            ic1.style.width = "205px";
            ser.style.opacity = "1";
            ser.style.width = "200px";
        }else{
            ser.style.opacity = "0.3";
            ser.style.width = "40px";
            ic.style.right = "4px";
            ic1.style.width = "40px";
        }
    }
}
let ch1 = document.querySelector(".fa-angle-right");
let ch2 = document.querySelector(".fa-angle-left");
let bone = document.querySelector(".bone");
let btwo = document.querySelector(".btwo");
let bthree = document.querySelector(".bthree");
let bkimg = document.querySelector(".landing");
bkimg.style.backgroundImage = 'url("images/landing.jpg")';
let act = document.querySelectorAll(".landing ul li");
ch1.onclick = function(){
    if(bkimg.style.backgroundImage == 'url("images/landing.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing1.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[2].classList.add("active");
    }else if(bkimg.style.backgroundImage == 'url("images/landing1.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing2.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[0].classList.add("active");
    }else if(bkimg.style.backgroundImage == 'url("images/landing2.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[1].classList.add("active");
    }
}
ch2.onclick = function(){
    if(bkimg.style.backgroundImage == 'url("images/landing.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing2.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[0].classList.add("active");
    }else if(bkimg.style.backgroundImage == 'url("images/landing2.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing1.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[2].classList.add("active");
    }else if(bkimg.style.backgroundImage == 'url("images/landing1.jpg")'){
        bkimg.style.backgroundImage = 'url("images/landing.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[1].classList.add("active");
    }
}
function chan(e){
    let bulet = document.querySelector(`.${e}`);
    if(e == "bone"){
        bkimg.style.backgroundImage = 'url("images/landing2.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[0].classList.add("active");
    }else if(e == "btwo"){
        bkimg.style.backgroundImage = 'url("images/landing.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[1].classList.add("active");
    }else if(e == "bthree"){
        bkimg.style.backgroundImage = 'url("images/landing1.jpg")';
        for(i = 0 ; i < act.length ; i++){
            act[i].classList.remove("active");
        }
        act[2].classList.add("active");
    }
    

}
let shufle = document.querySelectorAll(".shuffle li");
let pics = document.querySelectorAll(".imgs-container .box");
function filt(e){
    let cli = document.body.clientWidth;
    if(e == "app"){
        for(i=0 ; i < shufle.length ; i++){
            shufle[i].classList.remove("active");
            if(shufle[i].innerHTML == "app"){
                shufle[i].classList.add("active"); 
            }
        }
        for(i=0 ; i < pics.length ; i++){
            if(pics[i].getAttribute("value") == "1"){
                if(cli > 768 && cli < 1199){
                    pics[i].style.flexBasis = "50%";
                }else if(cli > 1199){
                    pics[i].style.flexBasis = "25%";
                }else if(cli < 767){
                    pics[i].style.flexBasis = "100%";
                }
            }else{
                pics[i].style.flexBasis = "0%";
            }
        }
    }else if(e == "photo"){
        for(i=0 ; i < shufle.length ; i++){
            shufle[i].classList.remove("active");
            if(shufle[i].innerHTML == "photo"){
                shufle[i].classList.add("active"); 
            }
        }
        for(i=0 ; i < pics.length ; i++){
            if(pics[i].getAttribute("value") == "2"){
                if(cli > 768 && cli < 1199){
                    pics[i].style.flexBasis = "50%";
                }else if(cli > 1199){
                    pics[i].style.flexBasis = "25%";
                }else if(cli < 767){
                    pics[i].style.flexBasis = "100%";
                }
            }else{
                pics[i].style.flexBasis = "0%";
            }
        }
    }else if(e == "web"){
        for(i=0 ; i < shufle.length ; i++){
            shufle[i].classList.remove("active");
            if(shufle[i].innerHTML == "web"){
                shufle[i].classList.add("active"); 
            }
        }
        for(i=0 ; i < pics.length ; i++){
            if(pics[i].getAttribute("value") == "3"){
                if(cli > 768 && cli < 1199){
                    pics[i].style.flexBasis = "50%";
                }else if(cli > 1199){
                    pics[i].style.flexBasis = "25%";
                }else if(cli < 767){
                    pics[i].style.flexBasis = "100%";
                }
            }else{
                pics[i].style.flexBasis = "0%";
            }
        }
    }else if(e == "print"){
        for(i=0 ; i < shufle.length ; i++){
            shufle[i].classList.remove("active");
            if(shufle[i].innerHTML == "print"){
                shufle[i].classList.add("active"); 
            }
        }
        for(i=0 ; i < pics.length ; i++){
            if(pics[i].getAttribute("value") == "4"){
                if(cli > 768 && cli < 1199){
                    pics[i].style.flexBasis = "50%";
                }else if(cli > 1199){
                    pics[i].style.flexBasis = "25%";
                }else if(cli < 767){
                    pics[i].style.flexBasis = "100%";
                }
            }else{
                pics[i].style.flexBasis = "0%";
            }
        }
    }else if(e == "all"){
        for(i=0 ; i < shufle.length ; i++){
            shufle[i].classList.remove("active");
            if(shufle[i].innerHTML == "all"){
                shufle[i].classList.add("active"); 
            }
        }
        for(i=0 ; i < pics.length ; i++){
            if(cli > 768 && cli < 1199){
                pics[i].style.flexBasis = "50%";
            }else if(cli > 1199){
                pics[i].style.flexBasis = "25%";
            }else if(cli < 767){
                pics[i].style.flexBasis = "100%";
            }
        }
    }
}
let porlink = document.querySelector(".portfolio .more");
if(porlink.innerHTML == "More"){
    for(i=0 ; i < pics.length ; i++){
        if(i > 7 ){
            pics[i].style.display = "none";
        }
    }
}
porlink.onclick = function(e){
    e.preventDefault();
    if(porlink.innerHTML == "More"){
        for(i=0 ; i < pics.length ; i++){
            if(i > 7 ){
                    if(pics[i].style.flexBasis == "0%"){
                        pics[i].style.flexBasis = "0%"
                    }else{
                        pics[i].style.display = "";
                    }
            }
        }
        porlink.innerHTML = "Less";
    }else if(porlink.innerHTML == "Less"){
        for(i=0 ; i < pics.length ; i++){
            if(i > 7 ){
                pics[i].style.display = "none";
            }
        }
        porlink.innerHTML = "More";
    }
}

// counter 

// const counters = document.querySelectorAll('.number');
// const speed = 50; // The lower the slower

// counters.forEach(counter => {
// 	const updateCount = () => {
// 		const target = +counter.getAttribute('data-target');
// 		const count = +counter.innerText;

// 		// Lower inc to slow and higher to slow
// 		const inc = target / speed;

// 		// console.log(inc);
// 		// console.log(count);

// 		// Check if target is reached
// 		if (count < target) {
// 			// Add inc to count and output in counter
// 			counter.innerText = count + inc;
// 			// Call function every ms
// 			setTimeout(updateCount, 1);
// 		} else {
// 			counter.innerText = target;
// 		}
// 	};

// 	updateCount();
// });