import React from "react"

export default function Airplanes() {
  return (
    <div data-uk-filter="target: .airplanes-filter">
      <ul>
        <li class="uk-active" uk-filter-control>
          <a href="#">All</a>
        </li>
        <li data-uk-filter-control="filter: [data-type='easy']">
          <a href="#">Easy Airplanes</a>
        </li>
        <li data-uk-filter-control="filter: [data-type='intermediate']">
          <a href="#">Intermediate Airplanes</a>
        </li>
        <li data-uk-filter-control="filter: [data-type='advance']">
          <a href="#">Advance Airplanes</a>
        </li>
      </ul>

      <ul class="airplanes-filter">
        <li data-type="easy">Dart 1</li>
        <li data-type="easy">Dart 2</li>
        <li data-type="easy">Dart 3</li>
        <li data-type="easy">Dart 4</li>
        <li data-type="easy">Dart 5</li>
        <li data-type="easy">Dart 6</li>

        <li data-type="intermediate">Glider 1</li>
        <li data-type="intermediate">Glider 2</li>
        <li data-type="intermediate">Glider 3</li>
        <li data-type="intermediate">Glider 4</li>
        <li data-type="intermediate">Glider 5</li>
        <li data-type="intermediate">Glider 6</li>

        <li data-type="advance">advance 1</li>
        <li data-type="advance">advance 2</li>
        <li data-type="advance">advance 3</li>
        <li data-type="advance">advance 4</li>
        <li data-type="advance">advance 5</li>
        <li data-type="advance">advance 6</li>
      </ul>
    </div>
  )
}
