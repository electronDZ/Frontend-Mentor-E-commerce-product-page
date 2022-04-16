const thumbnail = document.querySelectorAll(".thumbnail")
const image = document.querySelector(".product-pic")
const controlBtn = document.querySelectorAll(".counter-btn")
const counter =  document.querySelector(".cpt")
const navToggleBtn = document.querySelectorAll(".nav-btn")
const cart = document.querySelector(".cart-container")
const cartBtn = document.querySelector(".header-icon")
const addBtn = document.querySelector(".addBtn")
const deleteItemBtn = document.querySelector(".delete-icon")
const toggleLBbtns = document.querySelectorAll(".LB_btn")
const lightBox = document.querySelector("#lightbox")


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
        thumbnail.forEach(thmb1 => thmb1.classList.remove("active-pic"))
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
            console.log("previeususis button clicked")
            if (picCpt > 1) {
                picCpt--
            }else if(picCpt === 1){
                picCpt = 4
            }
            changePic(picCpt)
            
        }else if(btn === picBtn[1]){
            console.log("next button clicked")

            if (picCpt < 4) {
                picCpt++
                
            }else if(picCpt === 4){
                picCpt = 1
            }
            changePic(picCpt)
        }
    })
})


//! toggle cart 
//? toggle cart fuction 
function toggleCart(){
    cartBtn.addEventListener("click", () => {
        cart.classList.toggle("active")
    })
}
//?hide cart  function
function hideCart(){
    cart.classList.remove("active")
}
toggleCart()

//! adding to cart 


const emptyText = document.querySelector(".empty-cart"),
      checkOutBtn = document.querySelector(".checkout"),
      products = document.querySelector(".product-selected"),
      itemNmbr = document.querySelector(".itemNmbr"),
      cpt1 = document.querySelector(".cpt1"),
      total = document.querySelector(".total")


var cptUser 
function addToCart(){
    cptUser = cpt
    if(parseInt(cptUser) > 0){
        emptyText.classList.add("hidden")
        checkOutBtn.classList.remove("hidden")
        products.classList.remove("hidden")
        itemNmbr.classList.remove("hidden")
        itemNmbr.innerText = `${cptUser}`
        cpt1.innerHTML = `${cptUser}`
        total.innerText = "  "+"$"+(cptUser*125)+(".00")
    }
}

addBtn.addEventListener("click", addToCart)

//? update itemNum & empty cart
function updateNum(){
    cptUser--
    if (cptUser===0) {
        emptyText.classList.remove("hidden")
        checkOutBtn.classList.add("hidden")
        products.classList.add("hidden")
        itemNmbr.classList.add("hidden")
    }else{
        emptyText.classList.add("hidden")
        checkOutBtn.classList.remove("hidden")
        products.classList.remove("hidden")
        itemNmbr.classList.remove("hidden")
        itemNmbr.innerText = `${cptUser}`
        cpt1.innerHTML = `${cptUser}`
        total.innerText = "  "+"$"+(cptUser*125)+(".00")
    }
}


//! delete items

deleteItemBtn.addEventListener("click", () => {
    console.log(cptUser)
    updateNum()
})

//! ==========light box ========= 

// ? lightbox toggle

toggleLBbtns.forEach(btn => {
    btn.addEventListener("click" , () => lightBox.classList.toggle("hidden"))
})



// ! Gallery thumbnail Click To Change
const galleryThumbnail = document.querySelectorAll(".gallery-thumbnail")
const GalleryImage = document.querySelector(".gallery-product-pic")
let GalleryImageIndex =1;

galleryThumbnail.forEach(thmb => {
    thmb.addEventListener("click",()=>{
        let src = `images/image-product-${thmb.dataset.index}.jpg`
        GalleryImage.src = src
        galleryThumbnail.forEach(thmb1 => thmb1.classList.remove("active-pic"))
        thmb.classList.add("active-pic")
        GalleryImageIndex = thmb.dataset.index
    })
})


// ! change Gallery Pic function
function changeGalleryPic(dataIndex){
    let src = `images/image-product-${dataIndex}.jpg`
    GalleryImage.src = src
}

// ! LightBox picture navigatour

const GallerypicBtn = document.querySelectorAll(".gallery-btn")
GallerypicBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log("before clicke",GalleryImageIndex)
        if (btn === GallerypicBtn[0]) {
            if (GalleryImageIndex > 1) {
                GalleryImageIndex--
                refreshActiveGalleryThumbnail(GalleryImageIndex)
            }else if(GalleryImageIndex === 1){
                GalleryImageIndex = 4
                refreshActiveGalleryThumbnail(GalleryImageIndex)
            }
            changeGalleryPic(GalleryImageIndex)
            
        }else if(btn === GallerypicBtn[1]){
            if (GalleryImageIndex < 4) {
                GalleryImageIndex++
                refreshActiveGalleryThumbnail(GalleryImageIndex)
                
            }else if(GalleryImageIndex === 4){
                GalleryImageIndex = 1
                refreshActiveGalleryThumbnail(GalleryImageIndex)
            }
            changeGalleryPic(GalleryImageIndex)
        }
        console.log("after clicke",GalleryImageIndex)
    })
})

// refresh  Active gallery thumbail pic
function refreshActiveGalleryThumbnail(GalleryImageIndex){
    galleryThumbnail.forEach(thmb1 => thmb1.classList.remove("active-pic"))
    galleryThumbnail[GalleryImageIndex-1].classList.add("active-pic")
}
