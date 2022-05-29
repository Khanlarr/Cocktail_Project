import React from 'react';
import useFetchApi from './useFetchApi';
import { useState } from 'react';
import '../App.css';
export default function Test() {
 
    const [title,setTitle]= useState('');
    const [name,setName]= useState('Cocktails');
   const {data:cocktails,pedding,error}=useFetchApi('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+title);
  return (
    <div className='cocktail'>
        <div className='form'>
         <form>
            <label htmlFor="txt">Search Your Favorite Cocktail</label>
            <input type="text" 
            id='txt'
             required
             value={title}
             onChange={(e)=>setTitle(e.target.value)}/>
        </form>
        </div>
        <h1 className='title'>{name}</h1>
         {error&& <div>{error}</div>}
        {pedding && <div className='loading'>Loading...</div> }
        <div className='cocktails'>
      {
      (cocktails!==null)?(
          cocktails.map((cocktail)=>{  
            return( 
            <div className='cock' key={cocktail.idDrink}>
            <img src={cocktail.strDrinkThumb} alt="" />
            <div className='str'>
            <h1>{cocktail.strDrink}</h1>
            <h3>{cocktail.strGlass}</h3>
            <p>{cocktail.strAlcoholic}</p>
            <a href={`/lists/${cocktail.idDrink}`}><button>DETAILS</button></a>
            </div>
            </div>
           ) }
      )):<div className='ckt'>No Cocktails Matched Your Search Criteria</div>
      }
        </div>  
    </div>
  );
}
