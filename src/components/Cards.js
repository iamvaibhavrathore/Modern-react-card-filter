import Card from './Card';
import React, { useState } from 'react'

const Cards = ({ courses, props }) => {
    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (category === "All") {


            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData => {
                    allCourses.push(courseData);
                })
            })
            return allCourses;
        }
        else{
            //mai sirf specific category ka array pass krunga
            return courses[category];
        }

    }


    return (
        <div>
            {
                getCourses().map((course) => {
                    <Card key={course.id}
                        course={course}
                        likedCourses={likedCourses}
                        setLikedCourses={setLikedCourses} />
                })
            }
        </div>
    )
}

export default Cards