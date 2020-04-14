import { Router } from "@reach/router"
import React from "react"
import "./App.scss"
import { Admin, Airplanes, Auth, Landing, Login, Register } from "./pages"

function App() {
  return (
    <>
      <Router>
        <Landing path="/" default />
        <Auth path="/auth">
          <Login path="login" />
          <Register path="register" />
        </Auth>
        <Admin path="/admin">
          <Airplanes path="/dashboard" />
        </Admin>
      </Router>
    </>
  )
}

export default App
