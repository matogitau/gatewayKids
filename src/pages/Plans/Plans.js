import classes from "./Plans.module.css"
import { Link } from "react-router-dom"
import Card from "../../UI/card/Card"

const PLANS = 
   ["holidayLearning",
  "schoolProgram",
  "OneonOneTuituion"]


let plansList = PLANS.map((plan)=>{
  return(
    
<li key={plan}>
<Card className={classes.CardSelf}>
  <Link to={`Plans/PlansDetails/:${plan}`}>{plan}</Link> 
  </Card> 
  </li>
 
  )
})

  const Plans =()=>{
  return(
    <div className={classes.Plans}>
    <ul >
    {plansList}
    </ul>
    </div>
  )

}

export default Plans;