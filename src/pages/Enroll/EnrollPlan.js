/* here we create an enroll cart 
we will receieve a plan id,name and amount
we have created a dummy holday learning object*/

import Button from "../../UI/Button/Button"
import Overlays from "../../UI/Overlays/Overlays"
import classes from "./EnrollPlan.module.css"
const holidayLearning ={
  id:"holidayLearning",
  name:"holidayLearning",
  amount:"2000"
}

const EnrollPlan = (props)=>{
return (
  <Overlays>
<div className={classes.EnrollPlan}>
<span>{holidayLearning.id}</span>
<span>{holidayLearning.name}</span>
<span>{holidayLearning.amount}</span>
</div>
<div className={classes.EnrollPlanOrder}>
<Button>Enroll</Button>
<Button>close</Button>
</div>
</Overlays>
)
}
export default EnrollPlan