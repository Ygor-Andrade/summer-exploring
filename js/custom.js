/*  ///////////////////  FUNÇÕES   ////////////////////  */
const aviso = (msg)=> {
    alert(msg)
}

const mostraIdade = ()=>{
    let span = document.getElementById('txt-idade')
    let campoIdade = document.getElementById('idade')
    span.innerText = campoIdade.value
}





/* ---------------------------------------------------- */





/* //////////// EVENTOS E EXECUÇÕES AUTOMÁTICAS  /////////// */


/* aviso('Tenha um bom dia DAVE')

document.getElementById('nome').addEventListener('click', function(){
    aviso('OLÁ MUNDO!! Este é o planeta terra?')
}) */

mostraIdade()

//Inicializa animações scroll do AOS
AOS.init();


// Example starter JavaScript for disabling form submissions if there are invalid fields
( ()=> {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()