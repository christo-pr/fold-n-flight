import React, { useEffect } from "react"
import { authService } from "../services"

export default function Auth(props) {
  useEffect(() => {
    authService.checkAuth(props.path)
  }, [])

  return (
    <div>
      <h2>Auth Layout</h2>
      {props.children}
    </div>
  )
}
