import classes from "./CourseDetails.module.css"
import Card from '../../UI/card/Card';
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import { Route } from "react-router-dom";
/* params reads parameters after : */
const CourseDetails = () => {
  const param = useParams()
  const paramId = param.CourseId
  return (
    <Card>
      <div className={classes.Course}>
        <Card>
      <p>Course</p>
      <p>Course Id : {paramId}</p>
      </Card>
      {/* to be shown only if we 
      enter /courses/CourseId/id/comment */}
      <Route path={`/Courses/CourseDetails/:${paramId}/Comments`}>        
       <Comments courseId={paramId}/>
     </Route>
      </div>
    </Card>
  );
};

export default CourseDetails;