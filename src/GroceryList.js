import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './Grocery.css';
   

function GroceryList() {

  ///////state variables////////////////////////////////
  const [groceries, setGroceries] = useState([]);
  const [newGrocery, setNewGrocery] = useState({ name: '' });
  const [editIndex, setEditIndex] = useState(null);
 
///////state variables ended////////////////////////////////

   

///////added function spreed/////////////////////////////
  const addGrocery = () => {
    setGroceries([...groceries, newGrocery]);
    setNewGrocery({ name: '' });
  };

 ///////added function ended/////////////////////////////





  ///////update function/////////////////////////////
              const updateGrocery = () => {
              const newGroceries = [...groceries];
              newGroceries[editIndex] = newGrocery;
              setGroceries(newGroceries);
              setNewGrocery({ name: '' });
              setEditIndex(null);
            };
  /////////////update ended//////////////////////////////////////////




  ///////clear all function/////////////////////////////
  const clearAll = () => {
    setGroceries([]);
  };
 ///////end of  clear function/////////////////////////////

 

  ///////delate function/////////////////////////////
          const deleteGrocery = (index) => {
            const newGroceries = [...groceries];
            newGroceries.splice(index, 1);
            setGroceries(newGroceries);
          };
///////delete ended/////////////////////////////
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        editIndex !== null ? updateGrocery() : addGrocery();
      }}>
        <div>
        <ul>
 <div class="whole">
 <h1>Grocery Bud</h1>
 <input
        type="text"
        placeholder="e.g Eggs"  
        value={newGrocery.name} 
        onChange={(e) => setNewGrocery({ ...newGrocery, name: e.target.value })} />
   <button class='hov'  type="submit">{editIndex !== null ? 'Update' : 'AddItem'}</button>


   {groceries.map((grocery, index) => (
   <li key={index}>
  
    {grocery.name}
     <div>
           <FaEdit class="edit" onClick={() => setEditIndex(index)} />
           <FaTrash class="delete" onClick={() => deleteGrocery(index)} />
       </div>
   </li>
 ))}
 </div>
 <button class="clear"  type="button" onClick={() => clearAll()}>{ 'Clear All Data' }</button>
</ul>
     </div>
     </form>
    </div>
  );
}

export default GroceryList;