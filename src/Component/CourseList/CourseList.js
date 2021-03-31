import React from 'react';
import '../Asset/bootstrap.min.css'


const CourseList = (props) => {
    //console.log(props);
    const {Subject,Instructor,Price,email,Date,id} =props.courses;
    const addCourseHandler = props.addCourseHandler;

    
    return (
        <div>
            <h1>{Subject}</h1>
            <p>Course Run by: {Instructor}</p>
            <p>Cost: {Price}</p>
            <p>For more information about the course contact: {email}</p>
            <p>Last date od registation: {Date}</p>
            <button type="button" ClassName="btn btn-primary"onClick={()=>props.addCourseHandler(props.courses)}>Add Course</button>
            
        </div>
    );
};

export default CourseList;