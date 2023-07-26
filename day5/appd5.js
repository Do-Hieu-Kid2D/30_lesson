var btnSearch = document.querySelector('.search__icon')

btnSearch.addEventListener('click', function(){
    this.parentElement.classList.toggle('open');
    this.previousElementSibling.focus();
})