import React from "react"
import { useAirplaneApi } from "../hooks"

export default function AirplaneDetails(props) {
  const { id } = props
  const { airplane, loading, error } = useAirplaneApi(id)

  return (
    <div className="uk-section uk-section-muted uk-margin-large-top">
      <div className="uk-container">
        <div className="uk-padding">
          {error && (
            <div className="uk-alert-danger" data-uk-alert>
              <p>
                <span data-uk-icon="icon: warning"></span> {error}
              </p>
            </div>
          )}
          <div className="uk-flex uk-flex-around">
            <div className="uk-card uk-card-default uk-card-body uk-width-1-2">
              <div>test</div>
            </div>

            <div className="uk-card uk-card-default uk-card-body uk-width-1-2 uk-text-center">
              <ul className="uk-list uk-list-large uk-list-striped">
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
