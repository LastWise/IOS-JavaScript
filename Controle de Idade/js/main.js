const button = document.getElementById('button')

button.addEventListener('click', (event) => {
    event.preventDefault()

   const ano = document.getElementById('ano')

   if (ano.value < 2004 ) {
       alert ('Você é de maior continue')
       window.location.href = "https://www.youtube.com/watch?v=8GruIvGj_Fw";
   }else {
       alert ('Você é de menor saia daqui curioso do caralho !!')
   }

})