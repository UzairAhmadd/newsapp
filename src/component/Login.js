import React, { Component } from 'react'

export class Login extends Component {
  render() {
    return (
      <div className='m-5'>
        <h1>Login Form</h1>
        <form>
  <div className="mb-5 mt-5">
    <label htmlFor="exampleInputEmail1" className="form-label">
      Email address
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      required
    />
  </div>
  <div className="mb-5 mt-5" >
    <label htmlFor="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      required
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

      </div>
    )
  }
}

export default Login