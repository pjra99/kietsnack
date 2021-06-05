import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import AfterLogin from "./AfterLogin.js";
import BeforeLogin from "./BeforeLogin.js";
import {SignIn, EnterOTP} from "./SignIn.js";
import CanteenMenu from "./CanteenMenu.js"
import AdminSignIn from "./AdminSignIn.js"

function App() {
    return(
     <Router>
         <Switch>
             <Route exact path="/">
                 <BeforeLogin />
             </Route>

             <Route path="/afterlogin">
                 <AfterLogin />
             </Route>

             <Route path="/adminsignin">
                 <AdminSignIn />
             </Route>

             <Route path="/signin">
                 <SignIn />
             </Route>

            <Route path="/enterotp">
                <EnterOTP />
            </Route>

             <Route path="/canteenmenu">
                 <CanteenMenu />
             </Route>

         </Switch>
     </Router>
    );
}

export default App