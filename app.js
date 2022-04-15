const thumbnail = document.querySelectorAll(".thumbnail")
const image = document.querySelector(".product-pic")
const controlBtn = document.querySelectorAll(".counter-btn")
const counter =  document.querySelector(".cpt")
const navToggleBtn = document.querySelectorAll(".nav-btn")


// ! number item counter
var cpt = 0

// ! change Pic function
function changePic(dataIndex){
    let src = `images/image-product-${dataIndex}.jpg`
    image.src = src
}


// ! thumbnail Click To Change
thumbnail.forEach(thmb => {
    thmb.addEventListener("click",()=>{
        console.log(thmb.dataset.index)
        let src = `images/image-product-${thmb.dataset.index}.jpg`
        console.log(src)
        image.src = src
        thumbnail.forEach(thmb1 => {
            thmb1.classList.remove("active-pic")
        })
        thmb.classList.add("active-pic")
    })
})

// ! Increase & Decrease item numbers
controlBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.innerText === "+") {
            cpt++
            counter.innerText = `${cpt}`
        }else if (btn.innerText === "-") {
            if (cpt > 0) {
                cpt--
                counter.innerText = `${cpt}`
            }
        }
    })
})

// ! toggle Nav-bar
const nav = document.querySelector("nav")
navToggleBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("one of nav btns clicked")
        nav.classList.toggle("active-nav")
    })
})


// ! mobile picture navigatour
let picCpt = 1;

const picBtn = document.querySelectorAll(".pic-btn")
picBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn === picBtn[0]) {
            if (picCpt > 1) {
                picCpt--
            }else if(picCpt === 1){
                picCpt = 4
            }
            changePic(picCpt)
            
        }else if(btn === picBtn[1]){
            if (picCpt < 4) {
                picCpt++
                
            }else if(picCpt === 4){
                picCpt = 1
            }
            changePic(picCpt)
        }
    })
})