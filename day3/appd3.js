var btnOpen = document.querySelector('.open__modal_btn')
var fullModal = document.querySelector('.modal')
var btnClose = document.querySelector('.modal__header i')
var iconClose = document.querySelector('.modal__footer button')

function toggleModal(){
    fullModal.classList.toggle('hide')
}

btnOpen.addEventListener('click',toggleModal)

fullModal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        toggleModal()
    }
})

iconClose.addEventListener('click',toggleModal)
btnClose.addEventListener('click',toggleModal)
