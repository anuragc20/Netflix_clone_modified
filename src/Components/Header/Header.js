// import React from "react";
// import { Link } from "react-router-dom";
// import Logo from "../../Assets/logo.png";
// import "./Header.scss";
// import { withRouter } from "react-router";
// import SearchBar from "../SearchBar/SearchBar";
// import { auth } from "../../Firebase/firebase.utils";
// import {
//   selectCurrentUser,
//   selectToggleHidden
// } from "../../Redux/User/user-selectors";
// import { ToggleMenuHidden } from "../../Redux/User/user-actions";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NavMenu from "./NavMenu";

// const Header = ({history,currentUser,currentRoute,hidden,ToggleMenuHidden}) => {
//   return (
//     <div className="header">
//       <div className="header__logo-box" onClick={() => history.push("/movies")}>
//         <img src={Logo} alt="logo" className="header__logo" />
//       </div>

//       <div className="header__options">
//         <div className="header__options-primary">
//           <Link className="header__option" to="/movies">
//             Movies
//           </Link>

//           <Link className="header__option" to="/tvshows">
//             TV Shows
//           </Link>

//           <Link className="header__option" to="/mylist">
//             My List
//           </Link>
//         </div>

//         <div className="header__searchbar">
//           <SearchBar currentRoute={currentRoute} />
//         </div>

//         {currentUser ? (
//           <div className="header__options-secondary">
//             <Link className="header__option" to="">
//               Hi, {currentUser.displayName}
//             </Link>
//             <div
//               className="header__option header__option--signout"
//               onClick={() => auth.signOut()}
//             >
//               Sign Out
//             </div>
//           </div>
//         ) : (
//           <div className="header__options-secondary">
//             <Link className="header__option" to="">
//               Hi, Guest
//             </Link>
//             <Link
//               className="header__option header__option--signin"
//               to="/signin"
//             >
//               Sign In
//             </Link>
//           </div>
//         )}
//       </div>
//       <FontAwesomeIcon
//         icon={faBars}
//         className="header__nav-menu-icon"
//         onClick={ToggleMenuHidden}
//       />
//       {hidden ? null : <NavMenu />}
//     </div>
//   );
// };

// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   hidden: selectToggleHidden(state)
// });

// const mapDispatchToProps = dispatch => ({
//   ToggleMenuHidden: () => dispatch(ToggleMenuHidden())
// });

// export default compose(
//   withRouter,
//   connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )
// )(Header);
import React from 'react'
import Logo from "../../Assets/logo.png";
import "./Header.scss";
import './Header.css'
import { Form, FormControl } from 'react-bootstrap';
import { Link ,Redirect} from "react-router-dom";
import DisplayUserDetails from '../NewComponent/DisplayUserDetails';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Header(props) {
  const SignOut = () => {
    localStorage.clear();
    props.history.push("/movies");
    window.location.reload();
    // setTimeout(() => {
    //   if (localStorage.getItem("User")) {
    //     console.log("Hi i am in signOut")
    //     this.props.history.push("/movies");
    //    }
    //     },1000 );//i tried here
        // localStorage.clear();
  }
 
  return (

    <header>

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
        <a className="navbar-brand" href="#"><strong> <Link to ="/movies"> <img src={Logo} alt="logo" className="header__logo" /> </Link></strong></a>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto Header-right ">

            <li className="p-3">  <Link to="/movies"> Movies</Link></li>
            <li className="p-3">  <Link to="/tvshows"> Tv Shows</Link></li>
            {/* <li className="p-3">  <Link to="/mylist"> My List</Link></li> */}
          </ul>
          <ul className="Header-right mr-3" >
            <li>
              <Form inline>
                <FormControl type="text" placeholder="Movies,TvShows...." className="mr-sm-2" />
                {/* <Button variant="outline-success">Search</Button> */}
               
              </Form>
            </li>
            {localStorage.getItem("User") ? <li className=" text-white mr-3 " ><Link to='/userdetails'>{JSON.parse(localStorage.getItem("User")).First_Name ?JSON.parse(localStorage.getItem("User")).First_Name:JSON.parse(localStorage.getItem('User')).name}</Link></li> : <li className=" text-white mr-3 " ><Link > Hi,Guest</Link></li>}


            {localStorage.getItem("User") ? <li className=" text-white" ><Link to="/movies" onClick={SignOut} >Sign Out</Link></li> :  <li className=" text-white" ><Link to="/signin" >Sign In</Link></li>}
           

          </ul>
        </div>
      </nav>

    </header>

  )
}

export default withRouter(connect()(Header));
 
