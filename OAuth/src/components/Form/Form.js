import React, { Fragment, useState } from "react";
import Logo from "../Logo";
import "./Form.css";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import GitHubLogin from "react-github-login";
import { facebookAppId, githubClientId, googleClientId } from "../../config";

const Form = ({ history }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (firstName === "" || email === "" || password === " ") {
      console.log("Please Enter complete details ");
    } else {
      // Handle Api Submission Here
      // Call to API
      console.log(formData);
      //If logged in successfull
      if (true) console.log("Redirecting");
      return history.push("/loggedin");
    }
  };

  const responseGoogle = (response) => {
    console.log(response);
    if (response.profileObj) return history.push("/loggedin");
    else alert("Logine Failed");
  };

  const responseFacebook = (response) => {
    console.log(response);
    if (response.accessToken) return history.push("/loggedin");
    else alert("Login Failed");
  };

  const onSuccess = (response) => {
    console.log("success", response);
    if (response.code) return history.push("/loggedin");
    else alert("Logine Failed");
  };
  const onFailure = (response) => console.error("failure", response);

  return (
    <Fragment>
      <Logo />
      <div className='card shadow-lg p-3 mb-5 bg-white rounded col-6 mx-auto'>
        <form onSubmit={(e) => onSubmit(e)}>
          <h3>
            <h4 className='font text-center'>SIGN UP</h4>
          </h3>

          <h2 className='text-center font'>Create your Account</h2>
          <p className='text-center font'>
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
          <div className='row'>
            <div className='col'>
              {/* Pass function call to Google Auth on button click*/}
              <div style={{ width: "50%" }} className='float-right'>
                <GoogleLogin
                  clientId={googleClientId}
                  buttonText='Login'
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                  // render={(renderProps) => (
                  //   <button style={{}}>
                  //     <i class='fa fa-google fa-1x' aria-hidden='true'></i>
                  //     {" "}
                  //     Google Login
                  //   </button>
                  // )}
                />
              </div>
            </div>
            <div className='col'>
              {/* Pass function call to Facebook Auth on button click*/}
              <div style={{ width: "50%" }} className='float-left mx-auto'>
                <div
                  class='fb-login-button'
                  data-size='medium'
                  data-button-type='login_with'
                  data-layout='rounded'
                  data-auto-logout-link='false'
                  data-use-continue-as='false'
                  data-width=''>
                  <FacebookLogin
                    appId={facebookAppId}
                    autoLoad={true}
                    fields='name,email,picture'
                    onClick={""}
                    callback={responseFacebook}
                  />
                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className='form-group'>
            <input
              name='firstName'
              type='text'
              className='form-control'
              placeholder='First Name'
              value={firstName}
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <input
              name='lastName'
              type='text'
              className='form-control'
              placeholder='Last Name'
              value={lastName}
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <input
              name='email'
              type='email'
              className='form-control'
              placeholder='Email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <br />
            <input
              name='password'
              type='password'
              className='form-control'
              placeholder='Password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <p>
            By clicking Sign Up, you agree to our <a href=''>Terms Of Use</a>{" "}
            and our <a href=''>Privacy Policy.</a>
          </p>
          <button
            type='submit'
            className='btn btn-dark btn-block'
            onClick={(e) => onSubmit(e)}>
            Sign Up
          </button>
        </form>
        <br />

        <GitHubLogin
          className={""}
          clientId={githubClientId}
          redirectUri=''
          onSuccess={onSuccess}
          onFailure={onFailure}
        />
      </div>
    </Fragment>
  );
};

export default Form;

// <button type='submit' className='btn btn-light btn-block'>
//                   <i
//                     class='fa fa-facebook-official fa-1x'
//                     aria-hidden='true'></i>
//                   Sign Up with Facebook
//                 </button>
