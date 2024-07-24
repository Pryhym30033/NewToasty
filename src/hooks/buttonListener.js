import React from "react";

function ButtonListener(button, callback){
    React.useEffect(() => {
        function pressed(event){
           if(event.code === button){
            callback(event);
        }
            
        }
    
        window.addEventListener('keyup', pressed);
        return () => {
          window.removeEventListener('keyup', pressed)
        };
      }, [button, callback]);

}





export default ButtonListener;