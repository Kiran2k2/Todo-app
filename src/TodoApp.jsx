import React, { useState } from 'react';
import "./TodoApp.css";

function TodoApp() {
    let [data, setData] = useState("");
    let [fruits, setFruits] = useState([]);

    let addFruits = () => {
        setFruits([...fruits, data]);
        setData("");
    };

    let searchFruit = ({ target: { value } }) => {
        setData(value);
    };

    let deleteFruit = (index) => {
        console.log(index)
        let updatedFruits = [...fruits];
        updatedFruits.splice(index, 1);
        setFruits(updatedFruits);
    };
    let filterFruit=()=>{
        let getFruit=fruits.filter((item)=>{
            return item.includes(data)
        })
        setFruits([...getFruit])
    }
    let searchFilter=({target:{value}})=>{
        setData(value)
    }

    return (
        <section>
            <div className='search-bar'>
                <input type="text" onChange={searchFilter} />
                <button  onClick={filterFruit}>Search</button>

            </div>
            <div className="add-item">
                <input type="text" placeholder='Add Item' value={data} onChange={searchFruit} />
                <button onClick={addFruits}>Add</button>
            </div>
            <div className="items">
                {fruits.map((fruit, index) => {
                    return (
                        <div className="item" key={index}>
                            <div className="item-name">{fruit}</div>
                            <button onClick={ ()=>deleteFruit(index)} key={index}>Delete</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default TodoApp;