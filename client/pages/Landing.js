import React from "react"
import AirplaneIMG from "../assets/img/airplane.png"
import { PageHeader } from "../components"

export default function Landing() {
  return (
    <>
      <div className="uk-container">
        <PageHeader />

        <div
          data-uk-filter="target: .airplanes-filter"
          className="uk-margin-large-top"
        >
          <ul className="uk-subnav uk-subnav-pill">
            <li className="uk-active" uk-filter-control="">
              <a href="#">All</a>
            </li>
            <li data-uk-filter-control="filter: [data-type='easy']">
              <a href="#">Easy Airplanes</a>
            </li>
            <li data-uk-filter-control="filter: [data-type='intermediate']">
              <a href="#">Intermediate Airplanes</a>
            </li>
            <li data-uk-filter-control="filter: [data-type='advanced']">
              <a href="#">Advanced Airplanes</a>
            </li>
          </ul>

          <ul
            className="airplanes-filter uk-margin-large-top uk-flex-center"
            data-uk-grid
          >
            <li data-type="easy">
              <div className="uk-card uk-card-small uk-card-hover uk-card-default">
                <div className="uk-card-media-top" data-banner="easy">
                  <img src={AirplaneIMG} alt="elanus" width="250" />
                </div>
                <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
              </div>
            </li>
            <li data-type="easy">
              <div className="uk-card uk-card-small uk-card-hover uk-card-default">
                <div className="uk-card-media-top" data-banner="easy">
                  <img src={AirplaneIMG} alt="elanus" width="250" />
                </div>
                <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
              </div>
            </li>
            <li data-type="easy">
              <div className="uk-card uk-card-small uk-card-hover uk-card-default">
                <div className="uk-card-media-top" data-banner="easy">
                  <img src={AirplaneIMG} alt="elanus" width="250" />
                </div>
                <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
              </div>
            </li>
            <li data-type="easy">
              <div className="uk-card uk-card-small uk-card-hover uk-card-default">
                <div className="uk-card-media-top" data-banner="easy">
                  <img src={AirplaneIMG} alt="elanus" width="250" />
                </div>
                <div className="uk-card-body">Lorem ipsum dolor sit amet.</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
