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
    case "/admin":
      if (isAuthenticated()) return

      return navigate("/auth/login")

    case "/auth":
      if (!isAuthenticated()) return

      return navigate("/admin/dashboard")
  }
}

export default {
  isAuthenticated,
  setToken,
  getToken,
  checkAuth,
}
