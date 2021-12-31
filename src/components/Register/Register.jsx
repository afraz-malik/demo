import React from 'react'
import RegisterCss from './Register.module.scss'
const Register = () => {
  return (
    <div className={RegisterCss.container}>
      <div className={RegisterCss.topbar}>
        <h2>Sign up</h2>
        <span>&#10005;</span>
      </div>
      <p>
        Sign up, create your compnay and revile useful information for your
        csutomers
      </p>
      <form>
        <div className={RegisterCss.row}>
          <div className={RegisterCss.col}>
            <label>Email</label>
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className={RegisterCss.col}>
            <label>User name</label>
            <input type="text" placeholder="Ener your user name" />
          </div>
        </div>
        <div className={RegisterCss.row}>
          <div className={RegisterCss.col}>
            <label>Password</label>
            <input type="text" placeholder="Enter your password" />
          </div>
          <div className={RegisterCss.col}>
            <label>Current password</label>
            <input type="text" placeholder="Conform your password" />
          </div>
        </div>
        <div className={RegisterCss.row}>
          <div className={RegisterCss.col}>
            <label>Company Name</label>
            <input type="text" placeholder="Enter your company name" />
          </div>
        </div>
        <input type="submit" value={'Sign up'} />
        <p>
          Already have an Account?<a href="">Log In</a>
        </p>
      </form>
    </div>
  )
}

export default Register
