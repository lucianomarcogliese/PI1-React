
import React, {Component} from "react"
import Modal from 'react-uikit-modal';
import velocity from 'velocity-animate';

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

    
    
<div className="card tarjetas"  style= {{width: 15 + "rem", backgroundColor: this.state.color }}

onMouseEnter={this.CambiarColor.bind(this, "blue")}
onMouseLeave={this.CambiarColor.bind(this, this.props.colorFondo)}

>
<button       onClick={this.props.pasarBorrar.bind(this,  this.props.personasRecorridas.login.uuid)}

style={ {  
  
  width: 40 + "px" ,
  

 }  }        

>  X </button>
      
        <img className="card-img-top"  alt=" "  src={this.props.personasRecorridas.picture.large} />
        <div className="card-body">
    
    
      <h5 className="card-title">{this.props.personasRecorridas.name.last}  {this.props.personasRecorridas.name.first } </h5>

       <p className="card-text"> </p>
       <p className="card-text" type="date-date"> {this.props.personasRecorridas.dob.date} - ({this.props.personasRecorridas.dob.age} )</p>
     

    

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

          <h2>Detalle de: {this.props.personasRecorridas.name.first} </h2>
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
           {this.props.personasRecorridas.registered.date}
          </p>
          <p>
           {this.props.personasRecorridas.phone}
          </p>

          
        </Modal>


      

    
      </div>
                      
      </div>
                      

        </>
    )
    }
  }

    export default Personas

