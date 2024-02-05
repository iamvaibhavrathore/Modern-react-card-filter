import React from 'react';
import { filterData } from '../data';


const Filter = ({filterData, props}) => {
    let category = props.category;
    let setCategory = props.setCategory;
    function filterHandler() {
        setCategory(title);
    }
  return (
    <div className=' w-11/12 flex-wrap flex max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>  /* Flex wrap is used in responsive, ek ke niche ek  */
        {filterData.map((data) => {
            <button key = {data.id} className= {`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category === data.title? "" : ""}`} 
           
            onClick={ () => filterHandler(data.title)} >
                {data.title} </button>
        })}
    </div> 
  )
}

export default Filter;
