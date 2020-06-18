// import React from "react";
// import "./SignIn.scss";
// import Background from "../../Assets/Background.jpg";
// import FormInput from "../../Components/FormInput/FormInput";
// import CustomButton from "../../Components/CustomButton/CustomButton";
// import { Link } from "react-router-dom";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faFacebook } from "@fortawesome/free-brands-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signInWithGoogle } from "../../Firebase/firebase.utils";
// // import { signInWithFacebook } from "../../Firebase/firebase.utils";
// import { auth } from "../../Firebase/firebase.utils";
// import { Form, Button } from 'react-bootstrap'
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6" >
//       <form>
//         <p className="h5 text-center mb-4">Sign in</p>
//         <div className="grey-text p-3">
//           <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
//             success="right" />
//           <MDBInput label="Type your password" icon="lock" group type="password" validate />
//         </div>
//         <div className="text-center">
//           <MDBBtn>Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
//   </MDBContainer>
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: ""
//     };
//   }

//   handleSubmit = async event => {
//     event.preventDefault();
//     const { email, password } = this.state;

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       this.setState({ email: "", password: "" });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   handleChange = event => {
//     const { value, name } = event.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="signin" >
//         <div
//           className="signin__bg"
//           style={{ backgroundImage: `url(${Background})` }}
//         />
//         <div className="signin__container">
//           <div className="signin__shadow">
//             <h1 className="signin__title">Sign In</h1>
//             {/* <FormPage/> */}

//             <form
//               action="POST"
//               autoComplete="new-password"
//               onSubmit={this.handleSubmit}
//             >
//               <FormInput
//                 name="email"
//                 type="email"
//                 value={this.state.email}
//                 handleChange={this.handleChange}
//                 label="Email"
//                 required
//               />

//               <FormInput
//                 name="password"
//                 type="password"
//                 value={this.state.password}
//                 handleChange={this.handleChange}
//                 label="Password"
//                 required
//               />

//               <div className="signin__btn-container">
//                 <div className="signin__btn">
//                   <CustomButton type="submit" signin>
//                     {" "}
//                     Sign In{" "}
//                   </CustomButton>
//                   <CustomButton onClick={signInWithGoogle}>
//                     <FontAwesomeIcon icon={faGoogle} className="signin__google-icon" />
//                     Sign In With Google
//                   </CustomButton> 
//                    {/* <CustomButton onClick={signInWithFacebook}>
//                     <FontAwesomeIcon icon={faFacebook} className="signin__facebook-icon" />
//                     Sign In With Facebook
//                   </CustomButton>  */}
//                  </div>
//               </div>
//             </form>
           
//             <div className="signin__option">
//               <span className="signin__option--newuser">New to Netflix?</span>
//               <Link to="/signup" className="signin__option--link">
//                 Sign up now.
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// );
// };
import React, { Component } from 'react'
import './SignIn.css'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { Link } from 'react-router-dom'
import { Field, reduxForm, formValues } from 'redux-form'
import { auth } from "../../Firebase/firebase.utils";
import { signInWithGoogle } from "../../Firebase/firebase.utils";
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import compose from "compose-function";
import GoogleLogin from 'react-google-login'
// import DisplayUserDetails from '../../Components/NewComponent/DisplayUserDetails'

// const FormPage = () => {
//   const { handleSubmit, pristine, reset, submitting } = props
//   return (
//     <div  className="bgImage">
//       <div/>
//       <Form className="login-form text-center" onSubmit={handleSubmit}>
//       <h3 className="Text-Color">Sign In</h3>
//       <FormGroup className="Control-Width">
//           <Field type="email" placeholder="EMAIL" name="email" Component='input'/>
        

//       </FormGroup>
//       <FormGroup className="Control-Width">
//           <Field type="password" placeholder="Password" component='input' />
        

//       </FormGroup>
//       <Button color="success" className="Control-Width-btn"type="button" disabled={pristine || submitting} onClick={reset}>Submit</Button>
//         <GoogleLoginButton className="Google-btn" />
//         <span>New to Netflix ? </span>
//         <Link to="/signup">
//               Sign up now.
//             </Link>
     
//       </Form>
      
//       </div>
//   );
// }
  
  
//   export default reduxForm({
//        form: 'simple' // a unique identifier for this form
//      })(FormPage)


const SimpleForm = props => {
  
  const { handleSubmit, pristine, reset, submitting } = props
  console.log(props)
  
  //  const onSubmit =  async(formValues) => {
  //     console.log(formValues)
  //    const { email, password } = formValues;
  //    console.log("Hi i am in handle password   "+email,password)
  //    try {
  //          await auth.signInWithEmailAndPassword(email, password);
         
  //        } catch (error) {
  //        console.error(error);
  //    }
    
  // }
  const onSubmit =  (formValues) => {
    //  console.log(formValues)
    const { email, password } = formValues;
    // console.log("Hi i am in handle password   " + email, password)
    const user = {
      email: email,
      password: password
    };
    //console.log(user)
    
        axios.post(`http://argos-dev-api.azurewebsites.net/api/v1/login`,user)
        .then(res => {
          // console.log(res);
          // console.log(res.data.data.token)
          const user = JSON.stringify(res.data.data.user)
          const token = res.data.data.token
          // const token = res.config.token
          // console.log("UserData:" + user)
          // console.log("Token:" + token)
          const myStorage = localStorage
          
          myStorage.setItem("User", user)
          myStorage.setItem("Token", token)
          const getUserFromLocalStorage =  myStorage.getItem("User")
          const getTokenFromLocalStorage = myStorage.getItem("Token")
          // console.log("Getting UserData From LocalStorage:"+getUserFromLocalStorage)
          // console.log("Getting Token From LocalStorage:"+getTokenFromLocalStorage)
          console.log(res.isSuccess)
         
         
          setTimeout(() => {
            if (localStorage.getItem("User")) {
              props.history.push("/movies");
              window.location.reload() }
              }, 1000);
           
          
        })
      .catch(err => console.log(err))
    
      
    
  }
  const responseGoogle = (response) => {
    if (response) {
      console.log(response)
    console.log(response.profileObj)
    const user =  JSON.stringify(response.profileObj)
      const myStorage = localStorage
      myStorage.setItem("User", user)
      myStorage.setItem("Token", response.tokenId)
      props.history.push("/movies")
      window.location.reload()
    }
    
          
    //
}


  return (
    <div className="bgImage">
      <form className="login-form text-center" onSubmit={handleSubmit(onSubmit)}>
        

      <h3 className="Text-Color">Sign In</h3>
      
       
        <div className="Control-Width">
          <Field
            className='Field-width'
            name="email"
            component='input'
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="Control-Width">
          <Field
             className='Field-width'
            name="password"
            component='input'
            type="password"
            placeholder="Password"
          />
        </div>
    
      
      <div>
        
       
        <Button color="success" className="Control-Width-btn"type="submit">Submit</Button>
          {/* <GoogleLoginButton onClick={signInWithGoogle} className="Google-btn" /> */}
          <GoogleLogin
            clientId="212087023557-4bdal9q1a04qsvnv6ofmfu8g23noo3t5.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            
            className="Google-btn"
          />
        <span>New to Netflix ? </span>
        <Link to="/signup">
               Sign up now.
            </Link>
      </div>
      </form>
      </div>
  )
}



export default compose(
  withRouter, 
  reduxForm({
    form: "SimpleForm ",
  }),
  connect()
)(SimpleForm);
// export default reduxForm({
//   form: 'simple' // a unique identifier for this form
// })(SimpleForm)
// export default withRouter(connect()(SimpleForm));