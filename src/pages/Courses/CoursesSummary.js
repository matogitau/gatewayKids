import classes from "./CoursesSummary.module.css"
import { Link } from "react-router-dom"
import Card from "../../UI/card/Card"


const COURSES = 
  ["computing introduction",
 "Scratch",
 "Python",
 "Logical Maths",
 "Design",
 "Robotics",
 "Electronics",
 "3D modelling"]

let courseList = COURSES.map((course)=>{return(
  <li key={course}> 
  <Card className={classes.CardSelf}>
    <Link className={classes.Course} to={`/Courses/CourseDetails/:${course}`}>{course}</Link>
    </Card> 
    </li>
)})

const CoursesSummary =()=>{
  return(
    <div className={classes.Courses}>
    <ul>
    {courseList}
    </ul>
    </div>
  )

}

export default CoursesSummary;