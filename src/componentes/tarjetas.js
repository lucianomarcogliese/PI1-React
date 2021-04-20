
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
             
            // 1) obtengo la posicion de la card.
            // 2) clickea en boton la posicion se mueve
            // funcion tipo borrar, ( , pasarle la posicion)
            // 

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
       

    borrar = (idx) => {
    
        let resultado = this.state.personas.filter ((item) => {
          return item.login.uuid !== idx
        })
        console.log(resultado);
        this.setState({personas:resultado})
        };   
    render() {

 
    return(
            
        <> 
            <div className= "contenedor"> 

            <input className="form-control"  placeholder="Filtrado por nombre " value={this.state.text} onChange={(text) => this.filter(text)}/>
            <input className="form-control"  placeholder="Filtrado por apellidos " value={this.state.text} onChange={(text) => this.filterDos(text)}/>
            <input className="form-control"  placeholder="Filtrado por edad " value={this.state.text} onChange={(text) => this.filterTres(text)}/>
            
             {   

            
            this.state.personas.map((infoDePersona) => {
      
    return (

        
              <Personas personasRecorridas = {infoDePersona}  pasarBorrar={this.borrar} key= {infoDePersona.login.uuid} colorFondo= "red" />  
            
                              
            )
                                                     }) 

              }

            </div>
            
            <input className="form-control "  id="numero" placeholder="Ingrese un valor " value={this.state.texto}/>
          <button    onClick={this.masTarjetas.bind(this)} > Cargar mas </button>
          <button
          onClick = {this.reset.bind(this)}                    
        > reset</button> 
          
       </>  
    )      
}
}



export default Contactos



