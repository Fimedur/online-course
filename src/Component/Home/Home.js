import React from 'react';
import { useEffect, useState } from 'react';
import CourseList from '../CourseList/CourseList';
import data from '../../Data/data.json'
import './Home.css'
import Cart from '../Cart/Cart';


const Home = () => {
    const [course, setCourse] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
      setCourse(data);      
    }
    )
    const addCourseHandler = (course) =>{
        console.log("course added", course);
        const newCourse = [...cart,course]
        setCart(newCourse);
    }
    return (
        <div>
            <div className="main-container" >
                <div className="course-container">
                    <ul>
                        {
                            course.map(course => <CourseList addCourseHandler={addCourseHandler} courses={course}></CourseList>)
                            
                        }
                    </ul>
                </div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;