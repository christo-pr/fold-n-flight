import { navigate } from "@reach/router"
import { useEffect } from "react"
import routes from "../routes"
import { authService } from "../services"

export default function Logout() {
  useEffect(() => {
    authService.removeToken()

    navigate(routes.landing)
  }, [])

  return null
}
