import React, { useState } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards"
import { useEffect } from "react";
import { toast } from "react-toastify";
import Card from "./components/Card";
import Spinner from "./components/Spinner";


const App = () => {

  const [courses, setCourses] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  useEffect(() => {   //to fetch API 
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(apiUrl);
        const output = await response.json();
        setCourses(output.data);

      } catch (error) {
        toast.error("Somethig is wrong");

      }
      setLoading(false);
    }
    fetchData();
  }, []);



  return (
    <div className=" flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter
          filterData={filterData} 
          category = {category}
          setCategory = {setCategory}/>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
        }
      </div>

    </div>
  )
};

export default App;
