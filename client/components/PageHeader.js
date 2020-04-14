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
      href: "/dasboard",
      isActive: location.pathname === "/dasboard",
      show: authService.isAuthenticated(),
    },
    Login: {
      href: "/auth/login",
      isActive: location.pathname.includes("auth"),
      show: !authService.isAuthenticated(),
    },
  }

  const navBarClasses = ["uk-navbar-container"]

  if (location.pathname.includes("admin")) {
    navBarClasses.push("uk-background-secondary")
  } else {
    navBarClasses.push("uk-navbar-transparent")
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
