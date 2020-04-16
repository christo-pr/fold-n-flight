import { useEffect, useState } from "react"
import { airplaneService, authService } from "../services"

function useFetchAirplane(airplaneID) {
  const [airplane, setAirplane] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`${airplaneService.AIRPLANE_URL}/${airplaneID}`, {
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
        setAirplane(data)
      })
      .catch(() => {
        setError("Server Error: try again or contact the administrator")
      })
  }, [])

  return {
    airplane,
    loading,
    error,
  }
}

export default useFetchAirplane
