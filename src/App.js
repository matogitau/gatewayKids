import Header from "./Layout/Header/Header";
import "./App.css";
import Main from "./pages/Main/Main";
import Footer from "./Layout/Footer/Footer";
import { Redirect, Route,Switch } from "react-router-dom";
import CoursesSummary from "./pages/Courses/CoursesSummary";
import Plans from "./pages/Plans/Plans";
import Login from "./pages/LoginLogout/Login/Login"
import AboutUs from "./pages/AboutUs/AboutUs"
import WhyCode from "./pages/WhyCode/WhyCode"
import CourseDetails from "./pages/Courses/CourseDetails";
import ContactUs from "./pages/ContactUs/ContactUs";
import PlansDetails from "./pages/Plans/PlansDetails";
import NotFound from "./pages/NotFound/NotFound";


export default function App() {
  return (
    
    <div className="App">
      <Header className="Header" />
      <Switch> {/* to match only one and the first route */}
      <Route path="/" exact>
        <Redirect to="/Main"/>
      </Route>
      <Route path="/Main"><Main className="Main" /></Route>
      <Route path="/Courses" exact><CoursesSummary/></Route> {/* exact in higher level */}
      {/* : semicolon shows start of dynamic params */}
      <Route path="/Courses/CourseDetails/:CourseId"><CourseDetails/></Route>
      <Route path="/Plans" exact><Plans/></Route>
      <Route path="/Plans/PlansDetails/:PlanId"><PlansDetails/></Route>
      <Route path="/Login"><Login/> </Route>
      <Route path="/AboutUs"><AboutUs/></Route>
      <Route path="/WhyCode"><WhyCode/></Route>
      <Route path="/ContactUs" exact><ContactUs/></Route>
      <Route path="*"><NotFound/></Route>
      
      </Switch>
      <Footer className="Footer" />
    </div>
 
  );
}
