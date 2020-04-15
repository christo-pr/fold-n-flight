import React from "react"
import ReactDOM from "react-dom"
import "regenerator-runtime/runtime" // Parcel async/await hot fix
import App from "./App"

// Render App
ReactDOM.render(<App />, document.getElementById("root"))
