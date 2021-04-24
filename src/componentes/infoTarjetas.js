import React, {Component} from "react"
import Modal from 'react-uikit-modal';
import velocity from 'velocity-animate';

<>
<script src="js/uikit.min.js"></script>
<script src="js/uikit-icons.min.js"></script>
</>

class Personas extends Component {
    
  constructor(props){
    super(props)
    this.state = {  

      color: props.colorFondo,
    
  }

}

animateIn (modal, dialog) {
  this.setState({show: true});
  velocity(modal, {opacity: 1}, {display: 'block'}, 300);
  velocity(dialog, {translateY: 1, opacity: 1}, {display: 'block'}, 200);
}

animateOut (modal, dialog) {
  this.setState({show: false});
  velocity(modal, {opacity:0}, { display: 'none' }, 300);
  velocity(dialog, {translateY: -100, opacity: 0}, { display: 'none' }, 200);
}

CambiarColor (nuevoColor){
        
  this.setState({
      color: nuevoColor
  })

}






    render() { 
    return(
        <>

    

<div className="card tarjetas"  style= {{width: 20 + "rem", borderWidth: "medium", borderColor: this.state.color }}

onMouseEnter={this.CambiarColor.bind(this, "#03BFCB")}
onMouseLeave={this.CambiarColor.bind(this, this.props.colorFondo)}

>
<button type="button" data-uk-close onClick={this.props.pasarBorrar.bind(this,  this.props.personasRecorridas.login.uuid)}

style={ {  
  
  width: 30 + "px" ,
  padding: 10 + "px",
  marginLeft: 280 + "px",

 }  }        

> </button>
      
        <img className="round"  alt=" "  src={this.props.personasRecorridas.picture.large} />
        <div className="card-body">
    
    
      <h5 className="card-title"
      style={ {  
         fontWeight: "bold",
       }  }        
       >{this.props.personasRecorridas.name.last},  {this.props.personasRecorridas.name.first } </h5>

       <p className="card-text"> </p>
       <p className="card-text"> {this.props.personasRecorridas.dob.date.substring(0,10)} - {this.props.personasRecorridas.dob.age} años</p>
     
<button type="button" className="btn btn-light" style={ {   width: 50 + "%",}  } onClick={this.props.pasarMover.bind(this,  this.props.personasRecorridas.login.uuid)}       

>  Izquierda </button>

<button  type="button" className="btn btn-light" style={ {   width: 50 + "%",}  }   onClick={this.props.Mover.bind(this,  this.props.personasRecorridas.login.uuid)}       

>  Derecha </button>



<Modal
          
          close
          show={this.state.show}
          trigger={{
            body: 'Ver detalle',
            animate: {
              'in': (modal, dialog) => this.animateIn(modal, dialog),
              out: (modal, dialog) => this.animateOut(modal, dialog)
            }
          }}
        >
          <div className="data-uk-modal" 
          style={ {  
          paddingInline: 12 + "px",
          padding: 20 + "px",
          textAlign: "left",
       }  }  
           >
              
          
          <h2 className="data-uk-modal-title" 
          style={ {  
            fontWeight:"bold",
         }  }
          >{this.props.personasRecorridas.name.first} {this.props.personasRecorridas.name.last}  </h2>
          <p>
           {this.props.personasRecorridas.email}
          </p>
          <p>
           {this.props.personasRecorridas.location.street.name}   {this.props.personasRecorridas.location.street.number}
          </p>
          <p>
          {this.props.personasRecorridas.city} {this.props.personasRecorridas.state}
          </p>
          <p>
           {this.props.personasRecorridas.country}
          </p>
          <p>
           {this.props.personasRecorridas.postcode}
          </p>
          <p>
           {this.props.personasRecorridas.registered.date.substring(0,10)}
          </p>
          <p>
           {this.props.personasRecorridas.phone}
          </p>
          </div>

          
        </Modal> 


      

    
      </div>
                      
      </div>


                      

        </>
    )
    }
  }

    export default Personas