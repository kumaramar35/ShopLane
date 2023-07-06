import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup'
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Header from "../components/Header";



const RegisterPage = () => {
    const navigate = useNavigate()
    const [requestResponse,setRequestResponse] =useState({
        textMessage:'',
        alertClass:''
    })

//initialValues
    const initialValues = {
        firstName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword:""
    }

    //submit handler
    const onSubmit = (values) =>{
        console.log(values.mobile)
        
    
        // axios.post(Endpoints.REGISTER_URL,values)
        // .then((response)=>{
        //     setRequestResponse({
        //         textMessage: response.data.message,
        //         alertClass:"alert alert-success"
        //     });
        // },
        // (error)=>{
        //     setRequestResponse({
        //         textMessage: error.response.data.message,
        //         alertClass:"alert alert-success"
        //     });
        // }
        // )
        // .catch((error)=>console.log(error))
       
        
        setRequestResponse({
                    textMessage: "Register Successful",
                    alertClass:"alert alert-success"
                });
                setTimeout(() => {
                    navigate('/')
                }, 2000);
       
    }

    //validationSchema
        const validationSchema = Yup.object({
        firstName: Yup.string().required("first name is required"),
        email: Yup.string().required("Email is required").email("email must be a valid email address"),
        mobile: Yup.string().required("mobile is required"),
        password: Yup.string().required("password is required").min(6,"password must be 6 character long"),
        confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')

    });



    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount : true// will make the register button disable if the form is valid or not by giving attribute !isValid
        
    })

    
    return (
        <div>
        <Navbar />
        <Header />
        <div className="container">
            <div className="row">

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <Wrapper className="wrapper">
                    <div className={requestResponse.alertClass} role="alert">{requestResponse.textMessage}</div>
                       <div className="text-center text-secondary mb-4"><h1>Register</h1></div> 
                        
                        {/* this is the property of formik and it will handle the onSubmit */}
                        <form onSubmit={formik.handleSubmit}>
                            <div className= {formik.touched.firstName && formik.errors.firstName ? "form-group is-invalid" : "form-group"}>
                                
                                <input type="text" name="firstName" placeholder="First Name" className="form-control " value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                                    {formik.touched.firstName && formik.errors.firstName ?(
                                        <small className="text-danger">{formik.errors.firstName}</small>
                                    ): null}
                                
                            </div>

                            <div className= {formik.touched.email && formik.errors.email ? "form-group is-invalid" : "form-group"}>
                                
                                <input type="text" name="email" placeholder="Email" className="form-control mt-4" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                                {formik.touched.email && formik.errors.email? (
                                    <small className="text-danger">{formik.errors.email}</small>
                                ):null}
                            </div>

                            <div className={formik.touched.mobile && formik.errors.mobile ? "form-group is-invalid" : "form-group"}>
                               
                                <input type="text" name="mobile" placeholder="Mobile " className="form-control mt-4" value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                                    {formik.touched.mobile && formik.errors.mobile ? (
                                        <small className="text-danger">{formik.errors.mobile}</small>
                                    ):null}
                            </div>

                            <div className={formik.touched.password && formik.errors.password ? "form-group is-invalid" : "form-group"}>
                                
                                <input type="text" name="password" className="form-control mt-4" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                                {formik.touched.password && formik.errors.password ? (
                                        <small className="text-danger">{formik.errors.password}</small>
                                    ):null}
                            </div>

                            <div className={formik.touched.password && formik.errors.password ? "form-group is-invalid" : "form-group"}>
                                
                                <input type="text" name="confirmPassword" className="form-control mt-4" placeholder="Confirm Password" value={formik.values.confirmPassword} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <small className="text-danger">{formik.errors.confirmPassword}</small>
                                    ):null}
                            </div>

                            <input type="Submit" value="Register" className="btn btn-primary btn-block w-100 mt-4" disabled={!formik.isValid}/>

                        </form>
                        <br />
                        <p className="text-center" >
                            Already Register? <Link to="/login">Click Here</Link>
                        </p>
                    </Wrapper>
                </div>

                <div className="col-md-3"></div>
            </div>
        </div>
        
        </div>
    );
};

export default RegisterPage;

     


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