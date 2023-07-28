

// Cần viết lại js check đăng nhập<< chưa ổn

var username = document.getElementById('username')
var email = document.getElementById('email')
var passwords = document.getElementById('passwords')
var confirmPasswords = document.getElementById('confirmPasswords')
var form = document.querySelector('.form')

function showErro(input, message){
    let parent = input.parentElement
    let notice = parent.querySelector('.notice')

    parent.classList.add('erro')
    notice.innerText = message
}

function showOk(input){
    let parent = input.parentElement
    let notice = parent.querySelector('.notice')

    parent.classList.remove('erro')
    notice.innerText = ''
}

function checkEmtyErro(listInput){
    let isEmtyErro = false;
    listInput.forEach(element => {
        element.value = element.value.trim()

        if(element.value == ''){
            showErro(element,'Bạn chưa nhập thông tin!')
            isEmtyErro = true
        }else{
            showOk(element)
        }
    });
    return isEmtyErro
}

function checkEmailErro(input){
    const regexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value = input.value.trim()

    let isEmailErro = false
    if(regexEmail.test(input.value)){
        showOk(input)
    }else{
        showErro(input, 'Email invalid')
        isEmailErro = true
    }
    return isEmailErro
}

function checkLengtErro(input, min, max){
    input.value = input.value.trim()
    if(input.value.length < min){
        showErro(input, `Tài khoản phải có ít nhất ${min} kí tự`)
        return true
    }
    if(input.value.length > max){
        showErro(input, `Tài khoản không vượt quá ${max} kí tự`)
        return true
    }
    // showOk(input)
    return false
}

form.addEventListener('submit', function(e){
    e.preventDefault()

    let isEmtyErro =  checkEmtyErro([...document.querySelectorAll('.form input')])
    let isEmailErro = checkEmailErro(email)
    let isUsernameLengthErro = checkLengtErro(username,10,20)
    let isPasswordsLengthErro = checkLengtErro(passwords,10,20) // k hoạt động ??
    let isConfirmPasswordsLengthErro = checkLengtErro(confirmPasswords,8,16)
    // Kiểm tra và xử lý gì đó dựa trên isEmtyErro và isEmailErro
})
