import { navigate } from "@reach/router"
import { useState } from "react"
import { authService } from "../services"

const ERRORS = {
  401: "Username or password are invalid.",
  404: "No user found with those credentials",
  500: "Server Error. Please try again or contact the administrator",
}

function useLogin() {
  const [error, setError] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = (e) => {
    e.preventDefault()

    fetch(authService.LOGIN_URL, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setError(ERRORS[data.error.statusCode])
          return
        }

        setError(null)
        authService.setToken(data.token)
        navigate("/admin/dashboard")
      })
      .catch(() => {
        setError(ERRORS[500])
      })
  }

  return {
    submit,
    emailInput: email,
    passwordInput: password,
    setEmail,
    setPassword,
    error,
  }
}

export default useLogin
