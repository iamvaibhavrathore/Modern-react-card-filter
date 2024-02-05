import React from 'react'
import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import { toast } from "react-toastify";


const Card = (({ course, props }) => {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function clickHandler(){
        if(likedCourses.includes(course.id)) {
            //phle se like hua pada h
            setLikedCourses( (prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else{
            //phle se like nhi h ye course
            //insert karna h ye course liked courses me
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else{
                //non empty phle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
        }
    }
    return (
        <div>
            <div>
                <img src={course.image.url} />

            </div>
            <div>
                <button onClick={clickHandler}>
                    {
                        !likedCourses.includes(course.id)? (<FcLikePlaceholder fontSize="1.75rem"/>) : (<FcLike fontSize="1.75rem"/>)
                    }

                </button>
            </div>
            <div>
                <p>{course.title}</p>
                <p>
                    {
                        course.description.length > 100 ? 
                        (course.description.substr(0,100) + "...") : (course.description)
                    }
                    </p>
            </div>
        </div>
    )
})

export default Card;