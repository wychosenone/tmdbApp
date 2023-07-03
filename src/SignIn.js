// import React, { useContext, useState , useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { MovieContext } from './MovieContext';

// function SignIn() {
//   const navigate = useNavigate();
//   const [saveSignIn, setSaveSignIn] = useState(false);

//   const { setUsername, handleSignIn,error, setError} = useContext(MovieContext);
//   const {setSignInStatus} = useContext(MovieContext);
//   const {signInStatus} = useContext(MovieContext);

//   useEffect(() => {
//     console.log(signInStatus); // Logs the updated status after it changes
//   }, [signInStatus]);

 

//   const navToSignUp = () => {
//     navigate('/signup');
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <h2 className="text-center mt-4 mb-4">Sign In</h2>
//           <form onSubmit={handleSignIn}>
//             <div className="form-group mt-4 mb-4">
//               <label htmlFor="username" className="mb-2">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 autoComplete="off"
//                 placeholder="Enter username"
//                 required
//               />              
//             </div>
            
//             <div className="form-group">
//               <label htmlFor="password" className="mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 autoComplete="off"
//                 placeholder="Enter password"
//                 required
//               />
//               {error && (
//                 <p className="text-danger mt-2 mb-0">{error}</p>
//               )}
//             </div>

//             <div className="form-group form-check mt-4 mb-4">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="saveSignIn"
//                 checked={saveSignIn}
//                 onChange={() => setSaveSignIn(!saveSignIn)}
//               />
//               <label className="form-check-label" htmlFor="saveSignIn">
//                 Save Sign In
//               </label>
//             </div>

//             <div className="text-center">
//               <button type="submit" className="btn btn-primary mt-4 mb-4">
//                 Sign In
//               </button>
//             </div>
//           </form>
//           <p className="mt-3 text-center">
//             Don't have an account?{' '}
//             <Link to="/signup" onClick={navToSignUp}>
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignIn;
import React, { useContext, useState , useEffect} from 'react';
import { MovieContext } from './MovieContext';
import UserForm from './UserForm';


function SignIn() {
//   const [saveSignIn, setSaveSignIn] = useState(false);
  const { handleSignIn, error} = useContext(MovieContext);
//   const { setSignInStatus } = useContext(MovieContext);
  const { signInStatus } = useContext(MovieContext);

  useEffect(() => {
    console.log(signInStatus); // Logs the updated status after it changes
  }, [signInStatus]);

  return (
    <UserForm 
      formType="Sign In" 
      onSubmit={handleSignIn}
      error={error}
    />
  );
}

export default SignIn;
