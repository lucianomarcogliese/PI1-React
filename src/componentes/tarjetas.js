
import Personas from "./infoTarjetas";


import React, {Component} from "react"

class Contactos extends Component {

    constructor(props){
        super(props)
        this.state = {  
                    personasOriginal:  [],
                    personas: [],
                    textoBuscar: " ",
                    textoBuscar2: " ",
                    textoBuscar3: " ",
                    cargarMas: " ",
            
                    
    
      }
    
    }

    //el componentDidMount es un metodo de ciclo de vida que hace
    //que se ejecute su contenido apenas se renderiza el componente.
    //tiene un fetch que captura la api, el data es todo el array de la api
    //setState sirve para setear datos nuevos dentro de cierto array.
    //gardamos dos veces con distinto nombre porque personas se va a ir 
    //modificando constantemente segun la funcion y personasOriginal va a 
    //servir para mostrar nuevamente el dato original sin alterar y para mostrar
    //las tarjetas originales sin filtros ni nada.  
    
    componentDidMount(){
        fetch("https://randomuser.me/api/?results=20")
        .then(resource => resource.json())
        .then(data => {
             this.setState({personas: data.results, personasOriginal: data.results} )
             
        })
      }
      filter(event){
        if (event.target.value.length !== 0) {
          
       
          var text = event.target.value
          const personas = this.state.personas
          const filtrado = personas.filter((arrayDePersonas) =>{
      
      
              const itemData = arrayDePersonas.name.first.toUpperCase()
              const textData = text.toUpperCase()
              return itemData.indexOf(textData) > -1

              //El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array 
              // ó retorna -1 si el elemento no esta presente.
          })
          this.setState({
              personas: filtrado,
              textoBuscar: text,
          })
       } else { 
        
               this.setState({personas: this.state.personasOriginal})
        }
        }
        
        
        filterDos(event){
          if (event.target.value.length !== 0) {
            
         
            var text = event.target.value
            const personas = this.state.personas
            const filtrado = personas.filter((arrayDePersonas) =>{
        
        
                const itemData = arrayDePersonas.name.last.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1
            })
            this.setState({
                personas: filtrado,
                textoBuscarDos: text,
            })
         } else { 
          
                 this.setState({personas: this.state.personasOriginal})
          }
          } 


          filterTres(event){
            if (event.target.value.length !== 0) {
              
           
              var text = event.target.value
              const personas = this.state.personas
              const filtrado = personas.filter((arrayDePersonas) =>{
          
          
                  const itemData = arrayDePersonas.dob.age.toString()
                  
                
                  return itemData.indexOf(text) > -1
              })
              this.setState({
                  personas: filtrado,
                  textoBuscarTres: text,
              })
           } else { 
            
                   this.setState({personas: this.state.personasOriginal})
            }
            } 
            
             cambiarEstilo(){
            
              var global = document.getElementById('global');

              if (global.classList.contains("global") === true) {
                
        
              global.classList.remove('global');
         
    
            var texto = document.getElementsByClassName("texto")
                
         
               var items = document.getElementById('items');
                 items.classList.remove('items');
               
      
             var globalNuevo = document.getElementById('global');              
          globalNuevo.classList.add('globalNuevo')

        
         var textoNuevo = document.getElementsByClassName("texto")
           var u;
           for (u = 0; u < texto.length; u++) {
          
          textoNuevo[u].classList.add('textoNuevo');
            
         } 
        
           var itemsNuevo = document.getElementById('items');
         itemsNuevo.classList.add('itemsNuevo')
                  
         
        }         else {

          var globalDos = document.getElementById('global');

          globalDos.classList.remove('globalNuevo');
         
          var itemsDos = document.getElementById('items');
          itemsDos.classList.remove('itemsNuevo');

          var textoDos = document.getElementsByClassName("texto")
            
             var e;
             for (e = 0; u < textoDos.length; e++) {
            
            textoDos[e].classList.remove('textoNuevo');
              
           } 
       
           
           var globalNuevoDos = document.getElementById('global');              
        globalNuevoDos.classList.add('global')

     
      
         var itemsNuevoDos = document.getElementById('items');
       itemsNuevoDos.classList.add('items')
                


        }   

            }
    

        masTarjetas(event){
        
            var global = document.getElementById('global');

              if (global.classList.contains("global") === true) {
          var numero = document.getElementById("numero").value
             if (isNaN(numero) === false && numero.length !== 0) {
               
           
            fetch("https://randomuser.me/api/?results=" + numero )
            .then(resource => resource.json())
            .then(data => {
              
              const total=   this.state.personas.concat(data.results)
                 this.setState({personas: total,  cargarMas: numero }  )

            
            })

            //con .value accedemos a lo que escribio el usuario
            //concat une dos arrays, total son los dos arrays juntos
        
          } else {
            alert("Debes indicar el valor")
          } 
        } else {
          
          //var numero = document.getElementById("numero").value
          if (isNaN(numero) === false && numero.length !== 0) {
            
        
         fetch("https://randomuser.me/api/?results=" + numero )
         .then(resource => resource.json())
         .then(data => {
           
           const total=   this.state.personas.concat(data.results)
           this.setState({personas: total,  cargarMas: numero }  )

            global.classList.remove('global');
            var texto = document.getElementsByClassName("texto")
            var items = document.getElementById('items');
             items.classList.remove('items');
            var globalNuevo = document.getElementById('global');              
            globalNuevo.classList.add('globalNuevo')
           var textoNuevo = document.getElementsByClassName("texto")
              var u;
             for (u = 0; u < texto.length; u++) {
             textoNuevo[u].classList.add('textoNuevo');} 
               var itemsNuevo = document.getElementById('items');
           itemsNuevo.classList.add('itemsNuevo')

         
         })
     
       } else  {
            alert("Debes indicar un valor")
       }
        
        
        }
      
      
      
      } 
          
        reset(){
          
                 this.setState({personas: this.state.personasOriginal} )
                 
            
          }

          moverDerecha=(idx)=> {
                 
            let posicion = this.state.personas.findIndex(resultado => resultado.login.uuid === idx);
            console.log(posicion);
            let persona= this.state.personas[posicion]
      console.log(persona);
      var end= posicion + 1
    
       var prueba =this.state.personas.splice(posicion,1)[0]
     console.log(prueba);
    
      this.state.personas.splice(end,0, prueba)
    
   
      
  this.setState({personas : this.state.personas})
  console.log(this.state.personas);

      }

      moverIzquierda=(idx)=> {
           
        let posicion = this.state.personas.findIndex(resultado => resultado.login.uuid === idx);
        console.log(posicion);
        let persona= this.state.personas[posicion]
  console.log(persona);
  var end= posicion - 1

   var prueba =this.state.personas.splice(posicion,1)[0]
 console.log(prueba);

  this.state.personas.splice(end,0, prueba)


   
this.setState({personas : this.state.personas})
console.log(this.state.personas);

  }


    borrar = (idx) => {
    
        let resultado = this.state.personas.filter ((item) => {
          return item.login.uuid !== idx
        })
        console.log(resultado);
        this.setState({personas:resultado})
        };   


        ordenPorEdadAsc(){

          var porEdad = this.state.personas.sort((a,b)=>{
            return a.dob.age - b.dob.age
          })           

            this.setState({personas: porEdad})
        }
        ordenPorEdadDesc(){

          var porEdad = this.state.personas.sort((a,b)=>{
            return  b.dob.age - a.dob.age
          })
            this.setState({personas: porEdad})
        }

        Ascendente(){
              
     var nombreAscendente =  this.state.personas.sort(function (a, b) {
            if (a.name.first > b.name.first) {
              return 1;
            }
            if (a.name.first < b.name.first) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });

          this.setState({personas:nombreAscendente})                  
       }
       Descendiente(){
              
        var nombreDescendiente =  this.state.personas.sort(function (a, b) {
               if (a.name.first < b.name.first) {
                 return 1;
               }
               if (a.name.first > b.name.first) {
                 return -1;
               }
               // a must be equal to b
               return 0;
             });
   console.log(nombreDescendiente);
             this.setState({personas:nombreDescendiente})                  
          }
          apellidoAscendente(){
              
            var nombreAscendente =  this.state.personas.sort(function (a, b) {
                   if (a.name.last > b.name.last) {
                     return 1;
                   }
                   if (a.name.last < b.name.last) {
                     return -1;
                   }
                   // a must be equal to b
                   return 0;
                 });
       
                 this.setState({personas:nombreAscendente})                  
              }

              apellidoDescendiente(){
              
                var apellidoDescendiente =  this.state.personas.sort(function (a, b) {
                       if (a.name.last < b.name.last) {
                         return 1;
                       }
                       if (a.name.last > b.name.last) {
                         return -1;
                       }
                       // a must be equal to b
                       return 0;
                     });
         
                     this.setState({personas:apellidoDescendiente})                  
                  }
          
    render() {

 
    return(
            
        <> 
        
            
            <div className="cuerpo">
            <input className="primary ghost" style={ { width: 99 + "%", marginTop: 5 + "px", marginLeft: 7 + "px" }  } placeholder="Filtrar por nombre " value={this.state.text} onChange={(text) => this.filter(text)}/>
            <input className="data-uk-search-input" style={ { width: 99 + "%", marginTop: 5 + "px", marginLeft: 7 + "px" }  } placeholder="Filtrar por apellidos " value={this.state.text} onChange={(text) => this.filterDos(text)}/>
            <input className="data-uk-search-input" style={ { width: 99 + "%", marginTop: 5 + "px", marginBottom: 5 + "px" , marginLeft: 7 + "px"}  } placeholder="Filtrar por edad " value={this.state.text} onChange={(text) => this.filterTres(text)}/>

            <div class="dropdown">
           <button className="primary" style={ { margin: 6 + "px", color: "white" }  }>Ordenar por nombre</button>
          <div class="dropdown-content">
          <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.Ascendente.bind(this)} > Nombre ascendente </button>
            <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.Descendiente.bind(this)} > Nombre descendente </button>
        </div>
      </div>
      <div class="dropdown">
           <button className="primary" style={ { margin: 6 + "px", color: "white" }  }>Ordenar por apellido</button>
          <div class="dropdown-content">
          <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.apellidoAscendente.bind(this)} > Apellido ascendente </button>
            <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.apellidoDescendiente.bind(this)} > Apellido descendente </button>
        </div>
      </div>

      <div class="dropdown">
           <button className="primary" style={ { margin: 6 + "px", color: "white" }  }>Filtrar por edad</button>
          <div class="dropdown-content">
          <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.ordenPorEdadAsc.bind(this)} > Edad ascendente </button>
            <button type="button" className="primary" style={ { margin: 6 + "px", color: "white" }  }onClick={this.ordenPorEdadDesc.bind(this)} > Edad descendente </button>
        </div>
      </div>
            
            
           
            <button type="button" className="primary ghost" style={ { margin: 6 + "px",  }  }onClick={this.cambiarEstilo.bind(this)} > Cambiar vista </button>

            <div id="global" className="data-uk-search card-container contenedor global">

          <div className="items" id="items">  

           
             {   

//this.state permite capturar los elementos que tiene adentro (esta en el constructor)
//infoDePersona es todo el array de la api recorrido. El componente personas le pasa info
//al personas de infoTarjetas y esta info se captura mediante props

            this.state.personas.map((infoDePersona) => {
      
    return (

        
              <Personas personasRecorridas = {infoDePersona}  Mover={this.moverDerecha} pasarMover={this.moverIzquierda} pasarBorrar={this.borrar} key= {infoDePersona.login.uuid} colorFondo= "white" />  
            
                              
            )
                                                     }) 
                                                     

              }
       
            
             
        </div>

            </div>
            </div>
            <div className="contenedorAgregar">
            <input className="data-uk-search-input" id="numero" 
        
        style={ { width: 99 + "%", marginTop: 5 + "px", marginBottom: 5 + "px", marginLeft: 7 + "px"  }  } 
            
            placeholder="Ingrese un valor" />

<button type="button" className="primary" style={ { margin: 10 + "px", color:"white"}  }onClick={this.masTarjetas.bind(this)} > Cargar más </button>
          <button type="button" className="primary ghost"
          onClick = {this.reset.bind(this)}                    
        > Reset</button> 
        </div>
            
       </>  
    )      
}
}



export default Contactos