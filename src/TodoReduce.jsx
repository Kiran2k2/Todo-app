import React, { useReducer, useState } from 'react'


let initialItems=[]
let itemsReducer=(currentItems,itemsAction)=>{
    switch(itemsAction.type){
        case "ADD":return[...currentItems,itemsAction.payload]
        case "DEL":let remainingItems=currentItems.filter((i,id)=>{
            return id!==itemsAction.payload
        })
        return remainingItems;
        case "CLEAR" :return[]
        default: return currentItems
    }
}

function TodoReduce() {
let[item,setItem]=useState("");
let[items,imtemsDispatcher]=useReducer(itemsReducer,initialItems)

let changeItem=({target:{value}})=>{
    setItem(value);

}
let additems=()=>{
    imtemsDispatcher({type:"ADD",payload:item})
    setItem("")
}
let deleteItem=(id)=>{
    imtemsDispatcher({type:"DEL",payload:id})
}
let deleteAllItems=()=>{
    imtemsDispatcher({type:"CLEAR"})
}

  return (
    <div>
      <input type="text" placeholder="Add Items" onChange={changeItem} value={items}/>
      <button onClick={additems}> Add</button>
      <hr />
      <ol>
        {items.map((i,index)=>{

        return <li key={index}>{i} <button onClick={()=>{

          deleteItem(index)
        }}>X</button></li>
        })}
      </ol>
      <button onClick={deleteAllItems}>Clear All</button>
      




    </div>
  )
}

export default TodoReduce