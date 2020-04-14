import React, { useEffect } from "react"
import { authService } from "../services"

export default function Airplanes(props) {
  useEffect(() => {
    authService.checkAuth(props.path)
  }, [])

  return <div>Airplanes</div>
}
