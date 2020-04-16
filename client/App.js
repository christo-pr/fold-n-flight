import { Router } from "@reach/router"
import React from "react"
import "./App.scss"
import {
  Admin,
  Airplanes,
  Auth,
  Landing,
  Login,
  Logout,
  Register,
} from "./pages"

function App() {
  return (
    <>
      <Router>
        <Landing path="/" default />
        <Auth path="/auth">
          <Login path="login" />
          <Register path="register" />
          <Logout path="logout" />
        </Auth>
        <Admin path="/admin">
          <Airplanes path="/dashboard" default />
        </Admin>
      </Router>
    </>
  )
}

export default App
