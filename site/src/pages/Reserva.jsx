import Header from "../components/Header"

var element   = "div";
var elementwo = "section";
var elementre = "div";
var elementfo = "div";
var tempElement = "img"
var inpuElement = "input"
var elementform = "form"
var elementp = "p"


const componente = {

    name: `${tempElement}`,
    divRes:"section",
    id:"reserva"

}

const input = {

    name: `${inpuElement}`

}

const form = {
    action:"",
    method:"",
    submit:"button",
    host:"",
    chach:"",
    rash:""
}


class exeObj{

    constructor(element,elementwo,elementre,elementfo,elementform,elementp,divall,elementH1p,elemntdivP,constructForm ){
        this.element       = element
        this.elementwo     = elementwo
        this.elementre     = elementre
        this.elementfo     = elementfo
        this.elementform   = elementform
        this.elementp      = elementp
        this.elementdiv    = divall
        this.elementH1p    = elementH1p 
        this.elemntdivP    = elemntdivP 
        this.constructForm = form.submit
       
    }

    exe(){
        element         = document.createElement(`${this.element}`)
        elementwo       = document.createElement(`${this.elementwo}`)
        elementre       = document.createElement(`${this.elementre}`)
        elementfo       = document.createElement(`${this.elementfo}`)
        elementform     = document.createElement(`${this.elementform}`)
        elementp        = document.createElement(`${this.elementp}`)
        this.elementdiv = document.createElement(`${this.elementdiv}`)
        this.elementH1p = document.createElement(`${this.elementH1p}`)
        // this.elemntdivP = document.createElement(`${this.elemntdivP}`)
        this.constructForm = document.createElement(`${this.constructForm}`)

        const prinCDiv = document.createElement(`${componente.divRes}`)
        prinCDiv.setAttribute("id","reserva")
        /* const footer = document.querySelector("#root > footer");

        document.querySelector("#root").insertBefore(prinCDiv, footer) */

        document.querySelector("#root").append(prinCDiv)
        
        prinCDiv.appendChild(element)
        element.appendChild(elementwo)
        element.appendChild(this.elementdiv)
        this.elementdiv.appendChild(this.elementH1p)
        this.elementdiv.appendChild(elementwo)
        elementwo.appendChild(elementform)
        elementform.appendChild(elementre)
        elementwo.appendChild(elementfo)
        elementre.appendChild(this.constructForm)
        
    }
    attr(){
        element.setAttribute("class","divBox")
        elementwo.setAttribute("class","sectionBox")
        elementre.setAttribute("class","boxForm")
        elementfo.setAttribute("class","boxImg")
        elementp.setAttribute("class","boxp")
        this.elementdiv.setAttribute("class","divAll")
        this.elementH1p.setAttribute("class","contenThp")
        this.constructForm.setAttribute("class","btn-submit")
    }
    comp(){

        for(var im = 0; im < 0; im++){

            var ig = componente.name;
            var img = document.createElement(`${ig}`)
            img.alt = "img"
            img.src = "https://fotografiaprofissional.org/wp-content/uploads/2018/09/como-tirar-fotos-perfeitas-1.jpg"
            img.width = "400"
            elementfo.appendChild(img)
        }
        for(var inp = 1; inp < 5; inp++){

            var ip = input.name;
            var inpu = document.createElement(`${ip}`)

            inpu.className = `inputForm${inp}`
            
            elementre.appendChild(inpu)
        }

        for(var elp = 0; elp < 2; elp++){

            var elps = document.createElement(`${this.elemntdivP}`)
            
            elps.className = `divP${elp}`

            if(elps.className === "divP0"){
                elps.innerHTML = "Faça a sua reserva"
            }
            else if(elps.className === "divP1"){
                elps.innerHTML = `
                    Vencedor do Prêmio
                    Travellers' Choice,
                    concedido pelo Portal
                    TripAdvisor
                `
            }

            this.elementH1p.appendChild(elps)

        }
    }
    rende(){

        if(this.element){
            this.exe()
            this.attr()
            this.comp()

            
            var input1 = document.querySelector('.inputForm1');
                input1.placeholder = "Nome"
            var input2 = document.querySelector('.inputForm2');
                input2.placeholder = "Nome"
                input2.type = "Date"
            var input3 = document.querySelector('.inputForm3');
                input3.placeholder = "Horário"
                input3.type = "time"
            var input4 = document.querySelector('.inputForm4');
                input4.placeholder = "Número de Pessoas"
            var btn_submit = document.querySelector('.btn-submit');
                btn_submit.innerHTML = "Reservar Agora"
            
        }
        
        return this;     
    }
    }

const Exeobj = new exeObj(element,elementwo,elementre,elementfo,elementform,elementp,"div","div","p")

// function objt() {
//     var load = window.location.reload.name;

//     if(load === "reload"){
        
//         setTimeout(() => {
//         window.location.reload()
//             Exeobj.rende()
//         window.stop()   
//         },1);

//     }
// }

const rendeRscreen = {

    obj(){
        Exeobj.rende()             
    }

}

function screenReserva(){
   return(
        <div>
            <Header />
            {rendeRscreen.obj()}
        </div>
   ) 
}




export default screenReserva;