import React, { useState } from 'react' 
 
import "./TodoApp.css" 
     
function TodoApp() { 
 
 
    let fruits=[] 
 
  
    return ( 
        <section> 
             
            <div className="add-item"> 
                <input type="text" placeholder='Add Item' /> 
                <button>Add</button> 
            </div> 
            <div className="items"> 
                {fruits.map((fruit,id) => 
                { 
                    return <div className="item"> 
                        <div className="item-name">{fruit}</div> 
                        <button>Delete</button> 
                    </div> 
            })} 
            </div> 
           
       </section> 
   ) 
   
} 
 
export default TodoApp