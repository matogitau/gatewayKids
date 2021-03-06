import Button from "../../../UI/Button/Button";

import Input from "../../../UI/Input/Input";



const Login = () => {
  const submittedFormHandler = (e)=>{
    e.preventDefault()
    console.log("login was submitted")
  }
  return (
    <div>
      <form  onSubmit={submittedFormHandler} >        
      <Input htmlFor="emailPhone" id="emailPhone" label="Enter Email or Phone"
       input={{type:"text"}
        }></Input>
     <Button type="submit">Login</Button> 
    </form>
    </div>
  );
};

export default Login;