var eKey = document.querySelector('.card.Key :last-child')
var eLocation = document.querySelector('.card.Location :last-child')
var eWhich = document.querySelector('.card.Which :last-child')
var eCode = document.querySelector('.card.Code :last-child')
var alter = document.querySelector('.alert')
var box = document.querySelector('.box')
var result = document.querySelector('.result')
document.addEventListener('keydown', e=>{
    
    alter.classList.add('hide');
    box.classList.remove('hide')

    eKey.innerHTML = e.key
    eCode.innerText = e.code 
    eLocation.innerHTML = e.location
    eWhich.innerHTML = e.which
    result.innerText = e.key
})