import axios from 'axios';
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Constants from '../api/Constants';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import Header from '../components/Header'




const LoginPage = () => {
  const navigate = useNavigate();
  // for the message and alert color
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
    axios
      .post(Constants.LOGIN_URL, values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: "login successfull",
            alertClass: "alert alert-success",
          });

          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setTimeout(() => {
            localStorage.clear()
            console.log("logout")
            alert("You have been logout plz login");
            navigate('/login')
          }, 600000);

          navigate("/");
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("email is required"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
  });

  return (
    <div>
      <div className="" style={{ background: 'white' }}><Navbar /></div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Wrapper className="wrapper">
              <div className={requestResponse.alertClass} role="alert">
                {requestResponse.textMessage}
              </div>
              <div className='text-center text-secondary mb-4'><h1>Login</h1></div>
             
              <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                validateOnMount
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        
                        <Field
                          type="text"
                          name="username"
                          placeholder="Email"
                          className={
                            formik.touched.username && formik.errors.username
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="email">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>

                      <div className="form-group mt-5">
                        
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                        />
                        <ErrorMessage name="password">
                          {(errorMessage) => (
                            <small className="text-danger">{errorMessage}</small>
                          )}
                        </ErrorMessage>
                      </div>
                      <input
                        type="submit"
                        value="Login "
                        className="btn btn-primary  w-100 mt-5"
                        disabled={!formik.isValid}
                      />
                    </Form>
                  );
                }}
              </Formik>

              <br />
              <p className="text-center">
                New User? <Link to="/signup">Click Here</Link>
              </p>
            </Wrapper>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;



const Wrapper = styled.div`
 border: none;
    box-shadow: 0px 1px 3px grey;
    border-radius:8px;
    overflow:hidden;
    transition: transform 0.3s ease;
    &:hover{
        ${'' /* cursor:pointer; */}
        transform: scale(1.02);
    }
    background-color: #fff;
    padding: 40px;
    margin-top: 60px;
    border-radius: 10px;
          
  `