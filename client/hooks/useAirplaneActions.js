import { useCallback, useState } from "react"
// import { authService } from "../services"

const AIRPLANE_URL = process.env.API_URL + "/airplanes"

function useAirplaneActions(airplane) {
  const [actionError, setActionError] = useState(null)

  const updateAirplaneById = useCallback(() => {
    const url = AIRPLANE_URL + "/" + airplane.id
    console.log("updateAirplaneById -> url", url)

    // fetch(url, {
    //   method: "PUT",
    //   body: JSON.stringify(airplane),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${authService.getToken()}`,
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the jwt expiration.
    //     authService.handleAuthenticationError(data.error)

    //     if (data.error) {
    //       setError(error)
    //       return
    //     }

    //     setError(null)
    //   })
  }, [airplane])

  return {
    updateAirplaneById,
    actionError,
  }
}

export default useAirplaneActions
