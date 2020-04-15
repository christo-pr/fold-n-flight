import { Link, useLocation } from "@reach/router"
import React from "react"
import { authService } from "../services"

export default function PageHeader() {
  const location = useLocation()
  const navigationLinks = {
    Home: {
      href: "/",
      isActive: location.pathname === "/",
      show: true,
    },
    Dashboard: {
      href: "/admin/dasboard",
      isActive: location.pathname === "/admin/dasboard",
      show: authService.isAuthenticated(),
    },
    Login: {
      href: "/auth/login",
      isActive: location.pathname.includes("auth"),
      show: !authService.isAuthenticated(),
      pullRight: true,
    },
    Logout: {
      href: "/auth/logout",
      isActive: location.pathname.includes("auth"),
      show: authService.isAuthenticated(),
      pullRight: true,
    },
  }

  return (
    <nav
      className="uk-navbar-container uk-navbar-transparent uk-light is-relative"
      data-uk-navbar
    >
      <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
          {Object.keys(navigationLinks).map((linkName) => {
            const classes = []
            const link = navigationLinks[linkName]

            if (!link.show) return

            if (link.isActive) classes.push("uk-active")

            if (link.pullRight) classes.push("link-right")

            return (
              <li key={linkName} className={classes.join(" ")}>
                <Link to={link.href}>{linkName}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
