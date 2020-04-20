import React from "react"
import { EditableInput } from "../components"
import { useAirplaneActions, useAirplaneApi } from "../hooks"

export default function AirplaneDetails(props) {
  const { id } = props
  const { airplane, setAirplane, loading, error } = useAirplaneApi(id)
  const { updateAirplaneById, actionError } = useAirplaneActions(airplane)

  const handleChange = (chunk) => {
    setAirplane({ ...airplane, ...chunk })
  }

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
                {airplane &&
                  Object.keys(airplane).map(
                    (k) =>
                      k !== "id" && (
                        <li key={k} className="is-relative">
                          <EditableInput
                            type={k}
                            value={airplane[k]}
                            onChange={handleChange}
                          />
                        </li>
                      )
                  )}
              </ul>
              <button
                className="uk-button uk-button-primary"
                onClick={updateAirplaneById}
              >
                Save
              </button>
              {actionError && (
                <div className="uk-alert-danger" data-uk-alert>
                  <small>
                    There has been an error while updating the resource. <br />
                    Please contact Administrator
                  </small>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
