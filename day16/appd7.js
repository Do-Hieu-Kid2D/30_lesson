
var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoveAll = document.querySelector('.remove')
var tags = ['Notejs', 'Java']

function renderTags(){
    content.innerHTML = ''
    for(let i = 0; i<tags.length;i++){
        const tag = tags[i]
        content.innerHTML += `<li>
        ${tag}
        <i class="fa-solid fa-x" onclick="removeTag(${i})"></i>
      </li>`
    }
    content.appendChild(input)
    input.focus()
}  

// renderTags()

input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        tags.push(input.value.trim())
        renderTags()
        input.value = ''
    }
})

function removeTag(index){
    console.log(index)
    tags.splice(index,1)
    renderTags()
}

btnRemoveAll.addEventListener('click',  function(){
    tags = []
    renderTags()
})