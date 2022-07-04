const button = document.getElementById('button')
let i = 0

button.addEventListener('click', (event) => {
   event.preventDefault()

   const email = document.getElementById('email')
   const password = document.getElementById('password')
   
   if (email.value == 'Kleiton' && password.value == 'jjj') {
    alert('Parabens')
   }

   if(email.value != 'Kleiton' || password.value != 'jjj') {
       alert('vc errou')
       i++  
    }

    if (i >= 3){
        alert('Você chegou o limite de tentativas')
    }
})