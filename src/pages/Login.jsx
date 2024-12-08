// src/pages/Login.jsx
import { useContext, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin, setUser, googleLogin  } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  // const handleGoogleLogin = () => {
  //   googleLogin()
  //     .then((data) => {
  //       const user = data.user; // Access the user object from the response
  
  //       const name = user.displayName;
  //       console.log(name)
  //       const email = user.email;
  //       const photoURL = user.photoURL;
  //       const userData = { name, email, photoURL };
  //       setUser(userData); // Update user state with userData
  //       navigate(location?.state?location.state:"/") // Navigate to the previous or default page
  
  //       if (userData.email) {
  //         Swal.fire({
  //           title: "Login Successful!",
  //           icon: "success",
  //           confirmButtonText: "Continue",
  //         });
  
          
  //       }
  
  //       console.log(userData); // Optional logging for debugging
  //     })
      
  //     .catch((err) => {
  //       Swal.fire({
  //         title: "Google Login Failed!",
  //         text: err.message,
  //         icon: "error",
  //         confirmButtonText: "Try Again",
  //       });
  //     });
  // };










  const handleGoogleLogin = () => {
    googleLogin()
      .then((data) => {
        const user = data.user; // Access the user object from the response
  
        const name = user.displayName;
        const email = user.email;
        const photoURL = user.photoURL;
        const userData = { name, email, photoURL };
        setUser(userData); // Update user state with userData
        console.log(location?.state);
        // navigate(``); // Navigate to the previous or default page 




       







  
        // Save or update user data in MongoDB
        fetch("http://localhost:5000/users", {
          method: "PUT", // Using PUT for upsert functionality
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData), // Send user data
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            if (data.upserted || data.modifiedCount > 0) {
              Swal.fire({
                title: "Login Successful!",
                icon: "success",
                confirmButtonText: "Continue",
              });
            } else {
              Swal.fire({
                title: "Welcome back!",
                icon: "success",
                confirmButtonText: "Continue",
              });
            }
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: "Failed to save or update user data.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          });
  
        console.log(userData); // Optional logging for debugging
      })
      .catch((err) => {
        Swal.fire({
          title: "Google Login Failed!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
      navigate( "/");
  };
  
    
    



















   
  const handleLogin = (event) => {
    event.preventDefault(); // Prevent form reload
    const email = event.target.email.value;
    const password = event.target.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;

        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.email) {
              Swal.fire({
                title: "Login Successful!",
                icon: "success",
                confirmButtonText: "Continue",
              })
             
              setUser(data);
             
              
    
             
              
              console.log(user);
            } navigate( "/");
            
            
          });
          
      }
      
    )

      .catch((error) => {
        console.error("Error during login:", error.message);
        Swal.fire({
          title: "Login Failed!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  // }

  //

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-6 flex justify-between">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 hover:bg-red-600  text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 w-full mr-2"
          >
            <FaGoogle size={20} />
            Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <NavLink to="/register" className="text-teal-600 hover:underline">
            Dont have an account? Register
          </NavLink>
        </div>
      </div>
    </div>
  );
  };

export default Login;
