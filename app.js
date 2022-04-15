const thumbnail = document.querySelectorAll(".thumbnail")
const image = document.querySelector(".product-pic")

img = '<img src="images/image-product-2.jpg" class="product-pic">'

function changePic(dataIndex){
    let src = `images/image-product-${dataIndex}.jpg`
    image.src = src
}

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