import '../app.css';
const myStyle = {
   
    bottom: 0,
    width: 100 + "%",
    textAlign: "right",
    height: 50 + "px",
    paddingTop: 10 + "px",
    paddingRight: 10 + "px",
    color: "darkgrey",

}
function Footer () {

    
    return(

        
        <footer className="bg-light" style={ myStyle} >
        
                <p className= "font-weight-light" >Sol Arancibia y Luciano Marcogliese</p>
         
    </footer>
    )
}

export default Footer