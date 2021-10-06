import React,{useContext} from 'react'
import useForm from '../useForm'

export default function Form(){

  const {data, handleChange, handleSubmit, errors} = useForm()


  return(
    <div className="form-section">

      <div className="form-section-msg">
        <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
              type="text"
              name="firstName"
              value={data.firstName}
              placeholder ="First Name"
              onChange={handleChange}
          />
        <p className="error-field">{errors.firstName}</p>
        {errors.firstName && <i className="ri-error-warning-fill"></i>}
        </div>

        <div>
          <input
              type="text"
              name="lastName"
              value={data.lastName}
              placeholder ="Last Name"
              onChange={handleChange}
          />
          <p className="error-field">{errors.lastName}</p>
          {errors.lastName && <i className="ri-error-warning-fill"></i> }
        </div>

        <div>
          <input
              type="email"
              name="mail"
              value={data.mail}
              placeholder ="Email Address"
              onChange={handleChange}
          />
          <p className="error-field">{errors.mail}</p>
          {errors.mail && <i className="ri-error-warning-fill"></i>}
        </div>

        <div>
          <input
              type="password"
              name="password"
              value={data.password}
              placeholder ="Password"
              onChange={handleChange}
          />
          <p className="error-field">{errors.password}</p>
          {errors.password && <i className="ri-error-warning-fill"></i>}
        </div>

        <div>
          <button type="submit">Claim your free trial</button>
        </div>

        <p><small>By clicking the button, you are agreeing to our <strong>Terms and Services</strong></small></p>

      </form>
    </div>
  )
}
//
// <i className="ri-error-warning-fill"></i>
// <i className="ri-checkbox-circle-fill"></i>
