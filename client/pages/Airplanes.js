import React from "react"
import { Airplane } from "../components"
import { useAirplaneApi } from "../hooks"

export default function Airplanes() {
  const { airplanes, loading, error } = useAirplaneApi()

  return (
    <div className="uk-section uk-section-muted uk-margin-large-top admin-airplanes">
      <div className="uk-container">
        <div data-uk-grid className="uk-padding">
          {airplanes.map((airplane) => (
            <Airplane key={airplane.id} airplane={airplane} />
          ))}
        </div>
      </div>
    </div>
  )
}
