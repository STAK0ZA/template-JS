// some vars i need
let state="true"
let x=0
moveingback(state)
// that for make the setting box move from hidden to avisable to use
let setting = document.querySelector(".setting_icon")
setting.onclick=()=>{
    document.querySelector(".setting").classList.toggle("active")
}
// that for when i open the box and click into color change in the all padge that use main color
let licolor= document.querySelectorAll(".setting .boxes .colors li")
licolor.forEach(e=>{
    e.addEventListener("click",()=>{
        remoA$add(licolor,e)
        localStorage.setItem("color",e.dataset.color)
        document.documentElement.style.setProperty("--main-color",e.dataset.color)
    })
})

//for check if the local storge not empty then use the value in it 
if(localStorage.getItem("color")!==null)
{
    document.documentElement.style.setProperty("--main-color",localStorage.getItem("color"))
        remonly(licolor)
        licolor.forEach((e)=>{
            if(e.dataset.color===localStorage.getItem("color")){
                e.className="active"
            }}
        )
}

// that for put the value in local storgae and add class active for the target and stop the background or move it
let backbBTN=document.querySelectorAll(".buttons span")
backbBTN.forEach((e)=>{
    e.addEventListener(("click"),()=>{
        remoA$add(backbBTN,e)
        localStorage.setItem("TorF",e.dataset.tf)
        if(e.dataset.tf=="no"){
            state="false"
            moveingback(state)
        }
        else{
            state="true"
            clearInterval(x)
            moveingback(state)
        }
    })
})

// that for check if the local storge not null and if it not check for the value and put it 
if(localStorage.getItem("TorF")!==null)
    {
        remonly(backbBTN)
        backbBTN.forEach((e)=>{
            if(e.dataset.tf==localStorage.getItem("TorF"))
            {
                e.classList.add("active")
            }
        })
        if(localStorage.getItem("TorF")=="no"){
            clearInterval(x)
        }
    }

// that for make the page when i scroll to the skills make the span moves and put the % in width
let skills=document.querySelector(".skills")
let spans = document.querySelectorAll(".skill div span")
let topheight=skills.offsetTop //to get the height of top from the element
let mainheight=skills.offsetHeight-160 // to get the height of the chosen element
let windoheight=window.innerHeight //to get the height of the window pc

let gallery=document.querySelector(".gallery")
let imgss = document.querySelectorAll(".main_gallery_box img")
let galtop =gallery.offsetTop
let galin = gallery.offsetHeight-160
window.onscroll=_=>{
    if(window.scrollY>(topheight+mainheight)-windoheight) // check if the scrollY bigger than the (the section height + top height - the height of the pc)
    {
        // if it true get the target and put the % in width
        spans.forEach((e)=>{
            e.style.width=e.dataset.target
        })
    }
    if(window.scrollY>(galtop+galin)-windoheight)
    {
        imgss.forEach(e=>{
            e.classList.remove("trans")
        })
    }
}

// that for when i click on the img that make a popup slide that have the img and alt if it have and (X) for close it if iwant
let showimg=document.querySelectorAll(".main_gallery_box img")
let coverimg = document.querySelector(".cover-img")
showimg.forEach((e)=>{
    e.addEventListener("click",()=>{
        coverimg.style.display="block"
        let contan=document.createElement("div")
        contan.className="contan"
        let currt=document.createElement("img")
        currt.src=e.src
        contan.appendChild(currt)
        let closebtn= document.createElement("span")
        closebtn.innerHTML="X"
        contan.appendChild(closebtn)
        closebtn.addEventListener("click",()=>{
            coverimg.style.display="none"
            contan.remove()
        })

        
        if(e.alt!==null)
        {
            let contentimg=document.createElement("h1")
            contentimg.appendChild(document.createTextNode(e.alt))
            contan.prepend(contentimg)
        }
        coverimg.appendChild(contan)
    })
})

// that for when i click into a bullet it takes u to the section that bullet show
let bullet=document.querySelectorAll(".bullet")
bullet.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector(e.dataset.go).scrollIntoView({behavior:"smooth"})
    })
})

// the same thing that i do up^^ that for go to the links
let navlinks=document.querySelectorAll(".links ul li a")
navlinks.forEach((e)=>{
    e.addEventListener("click",()=>{
        document.querySelector(e.dataset.got).scrollIntoView({behavior:"smooth"})
    })
})

// that for make all bullets display none if i want to and save it in local storage for when i reload the page
let showbullet=document.querySelector(".allbullets")
let opbullet=document.querySelectorAll(".colors .bullets span")
opbullet.forEach((e)=>{
    e.addEventListener("click",()=>{
        remoA$add(opbullet,e)
        if(e.dataset.bul =="no"){
            showbullet.style.display="none"
            localStorage.setItem("bullets","no")
        }
        else{
            showbullet.style.display="block"
            localStorage.setItem("bullets","yes")
        }
    })
})
if( localStorage.getItem("bullets")!==null)
{
    remonly(opbullet)
    opbullet.forEach((e)=>{
        if(e.dataset.bul===localStorage.getItem("bullets")){
            e.classList.add("active")
        }
    })
    if(localStorage.getItem("bullets")=="no")
    {
        showbullet.style.display="none"
    }
    else{
        showbullet.style.display="block"
    }
}

// that for relaod the page and reset the local storge
let reset = document.querySelector(".colors button")
reset.addEventListener("click",()=>{
    localStorage.clear()
    window.location.reload()
})

// get minue and spns
let mainmenu = document.querySelector(".toggel_menu ")
let menu = document.querySelectorAll(".toggel_menu span")
// when click menu toglle class aactive 
mainmenu.onclick=function(e){
    document.querySelector(".nav .links").classList.toggle("active")
    menu.forEach((e)=>{
        e.classList.toggle("active")
    })
    e.stopPropagation()
}

// that for when i click into any thing not the menu close the menu
document.addEventListener("click",(e)=>{
    if(e.target!==mainmenu){
        document.querySelector(".nav .links").classList.add("active")
        menu.forEach((e)=>{
            e.classList.remove("active")
        })    }
})



//function for remove all active class from the elements and add for that i click 
function remoA$add(hole,chosen){
    hole.forEach((ele)=>{
        ele.classList.remove("active")
    })
    chosen.classList.add("active")
}
function remonly(hole){
    hole.forEach((ele)=>{
        ele.classList.remove("active")
    })
}



// that for make the background change photos
let img_srcs=["imgs/home/b7.jpg","imgs/home/b2.jpg","imgs/home/b3.jpg","imgs/home/b4.jpg","imgs/home/b8.jpg"]
let Hbg=document.querySelector(".nav")
let index=1
function moveingback(st){
    if(st=="true"){ 
        x= setInterval(() => {
            if(index!=img_srcs.length-1){
                Hbg.style.backgroundImage=`url(${img_srcs[index]})`
                index++
            }
            else{
                Hbg.style.backgroundImage=`url(${img_srcs[index]})`
                index=0
            }
        }, 10000);
    }else if(st=="false"){
        clearInterval(x)
    }
}
