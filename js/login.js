document.getElementById('body').style.display='flex';
document.getElementById('body').style.alignItems='center';
document.getElementById('body').style.justifyContent='center';



let arr_usuarios = [];

// Registro de usuarios en localStorage

function registerUser() {

    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    
    let usuarios = {email:userEmail,password:userPassword}

    arr_usuarios.push(usuarios);

    let arregloJSON = JSON.stringify(arr_usuarios)

    localStorage.setItem("arr_usuarios",arregloJSON);

    let recuperandoUsuarios = localStorage.getItem("arr_usuarios")

    recuperandoUsuarios = JSON.parse(recuperandoUsuarios)
}



let register = document.getElementById('btn__register');
register.addEventListener("click",registerUser)


// Logeo y validación de usuarios


function logUser() {

    let arr_usuarios = localStorage.getItem("arr_usuarios")

    let userEmail = document.getElementById('email').value;
    let userPassword = document.getElementById('password').value;

    arr_usuarios = JSON.parse(arr_usuarios)

    for(let usuario of arr_usuarios) {
        if(userEmail == usuario.email && userPassword == usuario.password){
        window.location.href = '../pages/pokedex.html';
        break;
    } else{
        Swal.fire({
            icon: 'error',
            title: '¡Tus datos son incorrectos!',
            text: 'No encontramos tu correo y contraseña, intentalo de nuevo!',
          })
    }}
}


let login = document.getElementById('btn__login');
login.addEventListener('click',logUser)