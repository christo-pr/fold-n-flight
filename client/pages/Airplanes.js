import { Link } from "@reach/router"
import React from "react"
import { Airplane } from "../components"
import { useAirplanes } from "../hooks"

export default function Airplanes() {
  const { airplanes, loading, error } = useAirplanes()

  return (
    <div className="uk-section uk-section-muted uk-margin-large-top admin-airplanes">
      <div className="uk-container">
        <div data-uk-grid className="uk-padding">
          <Link to="/admin/airplane/1">
            {airplanes.map((airplane) => (
              <Airplane airplane={airplane} />
            ))}
          </Link>
        </div>
      </div>
    </div>
  )
}
