import React, { useEffect } from "react"
import { PageHeader } from "../components"
import { authService } from "../services"

export default function Auth(props) {
  useEffect(() => {
    authService.checkAuth(props.path)
  }, [])

  return (
    <>
      <div className="uk-container">
        <PageHeader />
        {props.children}
      </div>
    </>
  )
}
