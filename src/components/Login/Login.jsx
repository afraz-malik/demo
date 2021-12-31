import React from 'react'
import LoginCss from './Login.module.scss'
const Login = () => {
  return (
    <div className={LoginCss.container}>
      <div className={LoginCss.topbar}>
        <h2>Log in</h2>
        <span>&#10005;</span>
      </div>
      <p>
        Log in, manage company and revile useful information for your customers
      </p>
      <form>
        <div className={LoginCss.row}>
          <div className={LoginCss.col100}>
            <label>Company</label>
            <input type="text" placeholder="Company" />
          </div>
        </div>

        <div className={LoginCss.row}>
          <div className={LoginCss.col}>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className={LoginCss.col}>
            <div className={LoginCss.password}>
              <label>Password</label>
              <span>Forgot password?</span>
            </div>
            <input type="text" placeholder="Enter your password" />
          </div>
        </div>

        <div className={LoginCss.row}>
          <div className={LoginCss.col100}>
            <div>
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">Keep me logged in</label>
            </div>
          </div>
        </div>
        <input type="submit" value={'Log in'} />
        <p>
          Don’t have an Account?<a href="">Sign Up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
