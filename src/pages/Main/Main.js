import Button from "../../UI/Button/Button";
import Card from "../../UI/card/Card";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <>
      {/* first section displays marketing content */}
        <div className={`Main ${classes.MainMain}`}>
        {/* card has a div */}
        <Card>
          <Button            
            type={"submit"}
            className={classes.BtnShape}
          >Log me in I am New to this website</Button>
        </Card>
        <Card>
        <Button
            
            type={"submit"}
            className={classes.BtnShape}
          >Log me in I have been here before</Button>
        </Card>
        <Card>
        <Button
            type={"submit"}
            className={classes.BtnShape}
          >messages about programming</Button>
        </Card>

        <Card>
        <Button
            type={"submit"}
            className={classes.BtnShape}
          >log me in  am a parent</Button>
        </Card>
        <Card>
        <Button
            type={"submit"}
            className={classes.BtnShape}
          >Gateway junior Kids...6Yrs- 13Yrs</Button>
          
        </Card>
        <Card>       
          <Button
           type={"submit"}
            className={classes.BtnShape}
          >Gateway seniors...above 13 Yrs</Button>
        </Card>
        
      </div>

      {/* this section displays links of projects */}
      
    </>
  );
};

export default Main;
