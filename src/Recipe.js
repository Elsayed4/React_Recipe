import React from 'react';

const Recipe = ({title,cal,image}) => {
 
   return(
       <div>
         <p>{title}</p>
         <p>{cal}</p>
         <img src={image} />
       </div>
   )



}

export default Recipe;