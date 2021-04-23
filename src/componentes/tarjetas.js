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
                    horizontal: 100 + "%",
                    
    
      }
    
    }
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
            
             
    

        masTarjetas(event){
          var numero = document.getElementById("numero").value
             if (isNaN(numero) === false && numero.length !== 0) {
               
           
            fetch("https://randomuser.me/api/?results=" + numero )
            .then(resource => resource.json())
            .then(data => {
              
              const total=   this.state.personas.concat(data.results)
                 this.setState({personas: total,  cargarMas: numero }  )

            
            })
        
          } else {
            alert("Debes indicar el valor")
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

  cambiarHorizontal (nuevoTamaño){
    if (this.state.horizontal === 100 + "%") {
      this.setState({
          horizontal: nuevoTamaño
      })

     
  }

  else 
      this.setState({
          horizontal: 100 + "%"
      })

  
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

    render() {

 
    return(
            
        <> 
            

            <input className="data-uk-search-input" style={ { width: 99 + "%", marginTop: 5 + "px", marginLeft: 7 + "px" }  } placeholder="Filtrar por nombre " value={this.state.text} onChange={(text) => this.filter(text)}/>
            <input className="data-uk-search-input" style={ { width: 99 + "%", marginTop: 5 + "px", marginLeft: 7 + "px" }  } placeholder="Filtrar por apellidos " value={this.state.text} onChange={(text) => this.filterDos(text)}/>
            <input className="data-uk-search-input" style={ { width: 99 + "%", marginTop: 5 + "px", marginBottom: 5 + "px" , marginLeft: 7 + "px"}  } placeholder="Filtrar por edad " value={this.state.text} onChange={(text) => this.filterTres(text)}/>
           
            <button type="button" className="btn btn-dark" style={ { margin: 10 + "px" }  }onClick={this.Ascendente.bind(this)} > Nombre ascendente </button>
            <button type="button" className="btn btn-dark" style={ { margin: 10 + "px" }  }onClick={this.Descendiente.bind(this)} > Nombre Descendiente </button>
            <button type="button" className="btn btn-dark" style={ { margin: 10 + "px" }  }onClick={this.ordenPorEdadAsc.bind(this)} > Edad Asc </button>
            <button type="button" className="btn btn-dark" style={ { margin: 10 + "px" }  }onClick={this.ordenPorEdadDesc.bind(this)} > Edad Desc </button>
           
            <button    onClick={this.cambiarHorizontal.bind(this, 200 + "%" )}       

            >  Cambiar vista </button>

            <div className= "data-uk-search contenedor" style={ {  
              
              width: this.state.horizontal ,
              
            
             }  }> 

            
            
             {   

            
            this.state.personas.map((infoDePersona) => {
      
    return (

        
              <Personas personasRecorridas = {infoDePersona}  Mover={this.moverDerecha} pasarMover={this.moverIzquierda} pasarBorrar={this.borrar} key= {infoDePersona.login.uuid} colorFondo= "white" />  
            
                              
            )
                                                     }) 

              }

            </div>
            
            {/* <input className="form-control "  id="numero" placeholder="Ingrese un valor " value={this.state.texto}/> */}
            <input className="data-uk-search-input" id="numero" 
        
        style={ { width: 99 + "%", marginTop: 5 + "px", marginBottom: 5 + "px", marginLeft: 7 + "px"  }  } 
            
            placeholder="Ingrese un valor" />
       
       
       
       
          <button type="button" className="btn btn-dark" style={ { margin: 10 + "px" }  }onClick={this.masTarjetas.bind(this)} > Cargar mas </button>
          <button type="button" className="btn btn-dark"
          onClick = {this.reset.bind(this)}                    
        > Reset</button> 
          
       </>  
    )      
}
}



export default Contactos