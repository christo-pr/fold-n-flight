import { navigate } from "@reach/router"
import { useEffect } from "react"
import { authService } from "../services"

export default function Logout() {
  useEffect(() => {
    authService.removeToken()

    navigate("/")
  }, [])

  return null
}
