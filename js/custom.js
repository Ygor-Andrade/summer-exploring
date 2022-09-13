/*  ///////////////////  FUNÇÕES   ////////////////////  */
const aviso = (msg)=> {
  alert(msg)
}

const mostraIdade = ()=>{
  let span = document.getElementById('txt-idade')
  let campoIdade = document.getElementById('idade')
  span.innerText = campoIdade.value
}


var dataAtual = new Date()
const mostradata = ()=>{
 let dia = dataAtual.getDay()
 let mes = dataAtual.getMonth() + 1
 let ano = dataAtual.getFullYear()
 let hora = dataAtual.getHours()
 let valor = dia + '/' + mes + '/' + ano + ' - ' + hora 

 document.getElementById('dt-cadastro').value = valor
}

//Preenche o select "estado" com os estados da API do IBGE
const getEstados = ()=>{
  let api = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
  let select = document.getElementById('estado')


//Le a API através do fetch(), o primeiro 1 then captura os dados, e o segundo then trata os dados
fetch(api).then(resposta => resposta.json).then(json => {
 console
})

}






/* ---------------------------------------------------- */





/* //////////// EVENTOS E EXECUÇÕES AUTOMÁTICAS  /////////// */

getEstados()

mostraIdade()
document.getElementById('idade').addEventListener('change', mostraIdade)

mostradata()

//Inicializa animações scroll do AOS
AOS.init();


// Impede o envio do formulario quando os campos estão inválidos
( ()=> {
  'use strict'

  //  variavel captura a tags <form> que contem a classe "needs-validation"
 
  var forms = document.querySelectorAll('.needs-validation')

  // executa para cada formulario da variavel form
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