const images = [
    "images/sweet-1.jpg",
    "images/sweet-2.jpg",
    "images/sweet-3.jpg",
    "images/sweet-4.jpg",
    "images/sweet-5.jpg",
    "images/sweet-6.jpg",
    "images/sweet-7.jpg",
    "images/sweet-8.jpg",
    "images/sweet-9.jpg",
    "images/sweet-10.jpg",
    "images/sweet-11.jpg",
    "images/sweet-12.jpg",
    "images/sweet-13.jpg"
];
let imgIndex = 0;
const imgAttribute = document.getElementById('image-slider')
setInterval(() =>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    imgAttribute.setAttribute('src', imgUrl)
    imgIndex++;
}, 2000);
// Image Slider done