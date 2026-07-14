/* ======================================
        LOADER
====================================== */


window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 500);

});





/* ======================================
        MOBILE MENU
====================================== */


const menuBtn = document.getElementById("menu-btn");

const mobileMenu = document.getElementById("mobile-menu");

const closeMenu = document.getElementById("close-menu");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        mobileMenu.classList.add("active");

    });

}



if(closeMenu){

    closeMenu.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

}




// Close menu after clicking link

const mobileLinks = document.querySelectorAll("#mobile-menu a");


mobileLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

    });

});







/* ======================================
        THEME TOGGLE
====================================== */


const themeBtn = document.getElementById("theme-toggle");

const currentTheme = localStorage.getItem("theme");



if(currentTheme === "light"){

    document.body.classList.add("light-theme");

    if(themeBtn){

        themeBtn.textContent="🌙";

    }

}




if(themeBtn){

    themeBtn.addEventListener("click",()=>{


        document.body.classList.toggle("light-theme");


        const isLight =
        document.body.classList.contains("light-theme");



        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );



        themeBtn.textContent =
        isLight ? "🌙" : "☀️";



    });

}
/* ======================================
        SCROLL PROGRESS BAR
====================================== */


const progressBar = document.getElementById("progress-bar");


window.addEventListener("scroll",()=>{


    const scrollTop = 
    document.documentElement.scrollTop;


    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;


    const scrollPercent =
    (scrollTop / scrollHeight) * 100;



    if(progressBar){

        progressBar.style.width =
        scrollPercent + "%";

    }


});







/* ======================================
        STICKY HEADER EFFECT
====================================== */


const header = document.getElementById("header");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){


        header.classList.add("scrolled");


    }else{


        header.classList.remove("scrolled");


    }


});








/* ======================================
        ACTIVE NAV LINK
====================================== */


const sections =
document.querySelectorAll("section");


const navLinks =
document.querySelectorAll(".nav-link");



window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop =
        section.offsetTop - 150;


        const sectionHeight =
        section.offsetHeight;



        if(
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ){

            current =
            section.getAttribute("id");

        }


    });



    navLinks.forEach(link=>{


        link.classList.remove("active");



        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }


    });


});








/* ======================================
        BACK TO TOP
====================================== */


const backTop =
document.getElementById("back-to-top");



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        backTop.classList.add("show");


    }else{


        backTop.classList.remove("show");


    }


});





if(backTop){


    backTop.addEventListener("click",()=>{


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });


}








/* ======================================
        SMOOTH NAVIGATION
====================================== */


document.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{


    anchor.addEventListener("click",function(e){


        const target =
        document.querySelector(
            this.getAttribute("href")
        );


        if(target){


            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});
/* ======================================
        HERO TITLE ROTATION
====================================== */

const titles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Back-End Developer",
    "Front-End Developer"
];

const heroTitle = document.querySelector(".hero h2");

let currentIndex = 0;

if (heroTitle) {

    heroTitle.style.transition = "opacity .35s ease";

    setInterval(() => {

        heroTitle.style.opacity = "0";

        setTimeout(() => {

            currentIndex = (currentIndex + 1) % titles.length;

            heroTitle.textContent = titles[currentIndex];

            heroTitle.style.opacity = "1";

        }, 350);

    }, 2500);

}


/* ======================================
        CUSTOM CURSOR
====================================== */


const cursorDot =
document.querySelector(".cursor-dot");


const cursorOutline =
document.querySelector(".cursor-outline");



window.addEventListener("mousemove",(e)=>{


    if(cursorDot){

        cursorDot.style.left =
        e.clientX + "px";

        cursorDot.style.top =
        e.clientY + "px";

    }



    if(cursorOutline){

        cursorOutline.style.left =
        e.clientX + "px";

        cursorOutline.style.top =
        e.clientY + "px";

    }


});








/* ======================================
        SCROLL REVEAL
====================================== */


const revealElements =
document.querySelectorAll(
    ".section, .project-card, .skill-card, .info-card"
);



const revealObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            entry.target.classList.add(
                "show"
            );


        }


    });


},
{
    threshold:0.15
});



revealElements.forEach(element=>{


    element.classList.add("hidden");


    revealObserver.observe(element);


});








/* ======================================
        COUNTER ANIMATION
====================================== */


const counters =
document.querySelectorAll(
    ".stat-card h3"
);



counters.forEach(counter=>{


    counter.dataset.value =
    counter.innerText;



});



const counterObserver =
new IntersectionObserver(
(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){


            const counter =
            entry.target;


            const target =
            counter.dataset.value;



            if(!isNaN(target)){


                let count=0;


                const interval =
                setInterval(()=>{


                    count++;


                    counter.innerText =
                    count;



                    if(count >= target){


                        clearInterval(interval);


                    }


                },40);


            }


        }


    });


});



counters.forEach(counter=>{

    counterObserver.observe(counter);

});







/* ======================================
        CONTACT FORM
====================================== */


const contactForm =
document.querySelector(".contact-form");



if(contactForm){


    contactForm.addEventListener(
    "submit",
    (e)=>{


        e.preventDefault();


        alert(
            "Thank you! Your message has been received."
        );


        contactForm.reset();


    });


}







/* ======================================
        PAGE READY
====================================== */


console.log(
    "Nitin Rathor Portfolio Loaded Successfully 🚀"
);
