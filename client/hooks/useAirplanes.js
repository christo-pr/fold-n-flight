import { useEffect, useState } from "react"
import { airplaneService, authService } from "../services"

function useAirplanes() {
  const [airplanes, setAirplanes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(airplaneService.AIRPLANE_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authService.getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data)
        if (data.error) {
          setError(data.error.message)
          return
        }

        setError(null)
        setAirplanes(data)
      })
      .catch(() => {
        setError("Server Error: try again or contact the administrator")
      })
  }, [])

  return {
    airplanes,
    loading,
    error,
  }
}

export default useAirplanes
