import { useParams} from 'react-router-dom'
import { useEffect,useState } from 'react';
export default function Lists() {
    const {idDrink}=useParams();
    let url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+idDrink;
    const[blog,setBlog]=useState(null);
    const [pedding,setPedding]=useState(true)
    const [error,setError]=useState(null)
    useEffect(()=>{
      setTimeout(() => {
          fetch(url)
    .then((res)=>{
        if(!res.ok){
            throw Error("Yanlisdir")
        }
     return  res.json();
    })
    .then(data=>{
        setBlog(data)
        console.log(data)
        setPedding(false)
        setError(null)
    })
    .catch(err=>{
         setPedding(false)
        setError(err.message)
    })
      }, 1000);
  },[url])
    return (
    <div>
     {error&& <div>{error}</div>}
        {pedding && <div className='loading'>Loading...</div> }
      {blog&&(
          <div className='lists'>
            {console.log(blog.drinks)}
            <a href="/"><button>BACK HOME</button></a>
            <h2>{blog.drinks[0].strDrink}</h2>
            <div className='main'>
                <img src={blog.drinks[0].strDrinkThumb} alt="" />
                <ul>
                    <li><h1><span>Name :</span>{blog.drinks[0].strDrink}</h1></li>
                    <li><h1><span>Category :</span>{blog.drinks[0].strCategory}</h1></li>
                    <li><h1><span>Info :</span>{blog.drinks[0].strAlcoholic}</h1></li>
                    <li><h1><span>Glass :</span>{blog.drinks[0].strGlass}</h1></li>
                    <li className='li1'><h1><span>Instructons :</span>{blog.drinks[0].strInstructions}</h1></li>
                    <li className='li2'><h1><span>Ingredients :</span>
                        {(blog.drinks[0].strIngredient1?blog.drinks[0].strIngredient1:'')+"  "+(blog.drinks[0].strIngredient2?blog.drinks[0].strIngredient2:'')+"  "+(blog.drinks[0].strIngredient3?blog.drinks[0].strIngredient3:'')+"  "+(blog.drinks[0].strIngredient4?blog.drinks[0].strIngredient4:'')+"  "+(blog.drinks[0].strIngredient5?blog.drinks[0].strIngredient5:'')}</h1></li>
                </ul>
            </div>
          </div>  
      )}
    </div>
  );
}

