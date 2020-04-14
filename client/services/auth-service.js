import { navigate } from "@reach/router"

const TOKEN_KEY = "fnf-token"

function isAuthenticated() {
  return localStorage.getItem(TOKEN_KEY) !== null
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function checkAuth(location) {
  switch (location) {
    case "/airplanes":
      if (isAuthenticated()) return

      return navigate("/auth/login")

    case "/auth":
      if (!isAuthenticated()) return

      return navigate("/airplanes")
  }
}

export default {
  isAuthenticated,
  setToken,
  getToken,
  checkAuth,
}
