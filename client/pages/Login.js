import React from "react"
import LogoImg from "../assets/img/fnf-icon.png"
import { useLogin } from "../hooks"

export default function Airplanes() {
  const {
    emailInput,
    passwordInput,
    setEmail,
    setPassword,
    submit,
    error,
  } = useLogin()

  return (
    <div className="uk-container">
      {error && (
        <div className="uk-flex uk-flex-center">
          <div
            className="uk-alert-danger uk-width-1-2 uk-text-center"
            data-uk-alert
          >
            <p>{error}</p>
          </div>
        </div>
      )}
      <div className="uk-text-center uk-margin-large-top">
        <img src={LogoImg} alt="" />
      </div>
      <form
        onSubmit={submit}
        className="uk-flex uk-flex-column uk-flex-middle uk-margin-large-top"
      >
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large"
            type="text"
            value={emailInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="uk-margin">
          <input
            className="uk-input uk-form-width-large"
            type="password"
            value={passwordInput}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>

        <div className="uk-margin">
          <button type="submit" className="uk-button uk-button-primary">
            Continue
          </button>
        </div>
      </form>
    </div>
  )
}
