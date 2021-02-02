import React, { useEffect ,useState} from 'react';
import Recipe from './Recipe'

const App = () => {
  let ID = "e1fb9723";
  const KEY = "1d2102407e9fe15254f75d31cf093df9";

   const [recpies, setrecpie] = useState([])
   
useEffect(() => {
  getRecipe()
}, [])

const getRecipe = async () =>{
  const request = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${ID}&app_key=${KEY}`);
  const data = await request.json();
  setrecpie(data.hits)
  console.log(data.hits)
}

    return (
      <div>
        <form>
          <input type="text" />
          <button type="submit">CLick</button>
        </form>
        {
          recpies.map((recpie, index) =>(
            <Recipe key={index} title={recpie.recipe.label} image={recpie.recipe.image} cal={recpie.recipe.calories}/>
          ))
        }
      </div>
    )
  
}

export default App;