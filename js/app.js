
// Constructores 
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
function UI() {}

//llena las opciones de los años
UI.prototype.llenarOpciones =()=>{
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){ 
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//muware alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    if(tipo === 'error'){
        div.classList.add('mensaje', 'alert alert-danger');
    }else{
        div.classList.add('mensaje', 'alert alert-success');
    }

    div.classList.add('mensaje', 'alert-dismissible');
    div.textContent = mensaje;

    //insertar en el html
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('.text-warning'));

    
}



    document.addEventListener('DOMContentLoaded', () => {
        ui.llenarOpciones(); //llenar opciones de años
})

//instanciar UI
const ui = new UI();


eventListeners();
function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    //leer marca seleccionada del select
    const marca = document.querySelector('#marca').value;

    //leer el año seleccionado del select
    const year = document.querySelector('#year').value;

    //tipo de seguro
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca ==="" || year === "" || tipo === ""){
        //mostrar error
        ui.mostrarMensaje('Faltan datos', 'error');
    }else{
        // //crear instancia de seguro
        // const seguro = new Seguro(marca, year, tipo);

        // //cotizar el seguro
        // const resultado = seguro.cotizarSeguro();

        // //mostrar el resultado
        // ui.mostrarResultado(resultado, seguro);
    }
}

