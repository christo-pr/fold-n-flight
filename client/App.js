import { Router } from "@reach/router"
import React from "react"
import "./App.scss"
import { Airplanes, Auth, Login, Register } from "./pages"

function App() {
  return (
    <>
      <Router>
        <Auth path="/auth">
          <Login path="login" />
          <Register path="register" />
        </Auth>
        <Airplanes path="/airplanes" />
      </Router>
    </>
  )
}

export default App
