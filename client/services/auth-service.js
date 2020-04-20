import { navigate } from "@reach/router"
import routes from "../routes"

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
    case routes.paths.admin:
      if (isAuthenticated()) return

      return navigate(routes.login)

    case routes.paths.auth:
      if (!isAuthenticated()) return

      return navigate(routes.dashboard)
  }
}

function handleAuthenticationError(error) {
  if (!error) return

  const statusCode = error.statusCode

  switch (statusCode) {
    case 401:
      navigate(routes.logout)
      break
  }
}

export default {
  LOGIN_URL,
  isAuthenticated,
  setToken,
  getToken,
  removeToken,
  checkAuth,
  handleAuthenticationError,
}
