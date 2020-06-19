import React from "react";
import "./SignUp.scss";
import Background from "../../Assets/Background.jpg";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth, CreateUserProfileDocument } from "../../Firebase/firebase.utils";

// class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: ""
//     };
//   }

//   handleSubmit = async event => {
//     event.preventDefault();

//     const { displayName, email, password, confirmPassword } = this.state;

    // if (password !== confirmPassword) {
    //   alert("Passwords dont match");
    //   return;
    // }
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await CreateUserProfileDocument(user, { displayName });

    //   this.setState({
    //     displayName: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: ""
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
//   };

//   handleChange = event => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className="signup">
//         <div
//           className="signup__bg"
//           style={{ backgroundImage: `url(${Background})` }}
//         />
//         <div className="signup__container">
//           <div className="signup__shadow">
//             <h1 className="signup__title">Sign Up</h1>

//             <form action="POST" onSubmit={this.handleSubmit}>
//               <FormInput
//                 name="displayName"
//                 type="name"
//                 value={displayName}
//                 handleChange={this.handleChange}
//                 label="Name"
//                 required
//               />

//               <FormInput
//                 name="email"
//                 type="email"
//                 value={email}
//                 handleChange={this.handleChange}
//                 label="Email"
//                 required
//               />

//               <FormInput
//                 name="password"
//                 type="password"
//                 value={password}
//                 handleChange={this.handleChange}
//                 label="Password"
//                 required
//               />

//               <FormInput
//                 name="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 handleChange={this.handleChange}
//                 label="Confirm Password"
//                 required
//               />

//               <div className="signup__btn-container">
//                 <div className="signup__btn">
//                   <CustomButton type="submit"> Sign Up </CustomButton>
//                 </div>
//               </div>
//             </form>
//             <div className="signup__option">
//               <span className="signup__option--newuser">
//                 Already signed up?
//               </span>
//               <Link to="/signin" className="signup__option--link">
//                 Log in now.
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignUp;
import { Field, reduxForm } from 'redux-form'
import './SignUp.css'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap'

const SignUp = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  const onSubmit = (formValues) => {
    console.log(formValues)
    const {name,email, password,confirmpassword } = formValues;
    if (formValues && Object.keys(formValues).length !== 0)
    {
      window.alert(JSON.stringify(formValues))
      }
  }
  return (
    <div className="bgImage" >
      <form onSubmit={handleSubmit} className="SignUp-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="SignUp-text Text-Color">Sign Up</h3>
      <div className="Control-Width">
        
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            className=" Field-width "
          />
        
      </div>
      <div className="Control-Width">
       
        
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Email"
            className="Field-width"
          />
      </div>
      <div className="Control-Width">
      
      
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
            className=" Field-width"
          />
       
      </div>
      
      <div className="Control-Width">
        
          <Field
            name="confirmpassword"
            component="input"
            type="password"
            placeholder="Confirm Password"
            className=" Field-width"
          />
        
      </div>
     
      
      <div>
      <Button color="success" className="Control-Width-btn"type="submit">Submit</Button>
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button> */}
      </div>
      <div className="text-center"  >
              <span >
                Already signed up?
              </span>
              <Link to="/signin" >
                Log in now.
              </Link>
            </div>
      </form>
      </div>
  )
}

export default reduxForm({
  form: 'signup' // a unique identifier for this form
})(SignUp)
