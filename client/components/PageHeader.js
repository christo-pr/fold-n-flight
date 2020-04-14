import { Link, useLocation } from "@reach/router"
import React from "react"
import { authService } from "../services"

export default function PageHeader(props) {
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

  const navBarClasses = ["is-relative"]

  if (location.pathname.includes("admin")) {
    navBarClasses.push("uk-background-secondary", "uk-light")
  } else {
    navBarClasses.push("uk-navbar-container", "uk-navbar-transparent")
  }

  return (
    <nav className={navBarClasses.join(" ")} data-uk-navbar>
      <div className="uk-navbar-right">
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
