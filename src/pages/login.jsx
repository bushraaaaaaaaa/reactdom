import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  <>
  <div className="form-container">
      <h2>Login Form</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
      <Link to="/home">Home</Link>
        </div>
      </form>
    </div></>
  )
}

export default Login