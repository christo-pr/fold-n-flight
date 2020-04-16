import { navigate } from "@reach/router"

const TOKEN_KEY = "fnf-token"
const LOGIN_URL = process.env.API_URL + "/admin/login"

function isAuthenticated() {
  return localStorage.getItem(TOKEN_KEY) !== null
}

function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token)
}

function getToken() {
  return localStorage.getItem(TOKEN_KEY)
}

function removeToken() {
  return localStorage.removeItem(TOKEN_KEY)
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
  LOGIN_URL,
  isAuthenticated,
  setToken,
  getToken,
  removeToken,
  checkAuth,
}
