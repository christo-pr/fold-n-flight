import { navigate } from "@reach/router"
import { useEffect, useState } from "react"
import routes from "../routes"
import { authService } from "../services"

const BASE_URL = process.env.API_URL + "/airplanes"

function handleAuthenticationError(error) {
  if (!error) return

  const statusCode = error.statusCode

  switch (statusCode) {
    case 401:
      navigate(routes.logout)
      break
  }
}

function useAirplaneApi(id, options = {}) {
  const [airplanes, setAirplanes] = useState([])
  const [airplane, setAirplane] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const url = id ? BASE_URL + id : BASE_URL

  useEffect(() => {
    // Start loading state
    setLoading(true)

    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authService.getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Stop loading
        setLoading(false)

        // Handle the jwt expiration.
        handleAuthenticationError(data.error)

        // Set error and return
        if (data.error) {
          setError(data.error.message)
          return
        }

        // Reset error
        setError(null)

        // Set the airplane for the details instead of the list
        if (id) {
          setAirplane(data)
        } else {
          setAirplanes(data)
        }
      })
      .catch(() => {
        // Stop loading
        setLoading(false)
        setError("Server Error: try again or contact the administrator")
      })
  }, [])

  return {
    airplane,
    airplanes,
    loading,
    error,
  }
}

export default useAirplaneApi
