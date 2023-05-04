import { BrowserRouter, Router, Route } from "react-router-dom"

import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"

const App = ()=> {
  return (
    <BrowserRouter>
    <Router>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/">
        <Signin />
      </Route>
      <Route path="/">
        <Signup />
      </Route>
      <Route path="/">
        <ForgotPassword />
      </Route>
    </Router>
    </BrowserRouter>
  )
}

export default App