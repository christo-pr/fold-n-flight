import { useCallback, useState } from "react"
import { authService } from "../services"

const AIRPLANE_URL = process.env.API_URL + "/airplanes"

function useAirplaneActions(airplane) {
  const [actionError, setActionError] = useState(null)
  const [success, setSuccess] = useState(false)

  const updateAirplaneById = useCallback(() => {
    const url = AIRPLANE_URL + "/" + airplane.id
    setSuccess(false)

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(airplane),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authService.getToken()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the jwt expiration.
        authService.handleAuthenticationError(data.error)

        if (data.error) {
          setActionError(error)
          return
        }

        setActionError(null)
        setSuccess(true)
      })
  }, [airplane])

  return {
    updateAirplaneById,
    actionError,
    success,
  }
}

export default useAirplaneActions
