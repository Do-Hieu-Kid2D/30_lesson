
var images = document.querySelectorAll('.image img')
var prev = document.querySelector('.prev')
var right = document.querySelector('.right')
var close = document.querySelector('.close')

var galleryIng = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallary(){

    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }

    if(currentIndex == 7){
        right.classList.add('hide')
    }else{
        right.classList.remove('hide')
    }
    galleryIng.src = images[currentIndex].src
    gallery.classList.add('show');
}

// Gán sự kiện cho mỗi ảnh nếu dc ấn thì gán thêm class vào phần tử có class tên: gallery
images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallary()
    })
})

close.addEventListener('click', function(){
    gallery.classList.remove('show')
})

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallary()
    }
})

prev.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallary()
    }
})

right.addEventListener('click', function(){
    if(currentIndex < 7){
        currentIndex++
        showGallary()
    }
})