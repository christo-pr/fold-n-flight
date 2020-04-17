import { Router } from "@reach/router"
import React from "react"
import "./App.scss"
import {
  Admin,
  AirplaneDetail,
  Airplanes,
  Auth,
  Landing,
  Login,
  Logout,
} from "./pages"
import routes from "./routes"

function App() {
  return (
    <>
      <Router>
        <Landing path={routes.paths.landing} default />
        <Auth path={routes.paths.auth}>
          <Login path={routes.paths.login} />
          <Logout path={routes.paths.logout} />
        </Auth>
        <Admin path={routes.paths.admin}>
          <Airplanes path={routes.paths.dashboard} default />
          <AirplaneDetail path={routes.paths.airplane} />
        </Admin>
      </Router>
    </>
  )
}

export default App
