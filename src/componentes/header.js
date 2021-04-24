import '../app.css';


        function Header (){
            return(
              
                    <header className="header" >
                            <nav className="bg-light bck"  style={{height: 100 + "px"}} >
        
                                    <h2 className="text-left position-relative "  style={ {top: 30 + "%", fontFamily:"Raleway", paddingLeft: 15 + "px", fontWeight: "bolder", color:"#231E39"}}>
                                          Lista de contactos
                                    </h2>
                            </nav>
        
                    </header>
            
            );
        }
        
        export default Header
   