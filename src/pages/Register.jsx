// // src/pages/Register.jsx
// import { useContext, useState } from "react";
// import Swal from "sweetalert2";

// import { AuthContext } from "../provider/AuthProvider";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";

// const Register = () => {
//   const { createNewUser, setUser,user } = useContext(AuthContext);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");


//   const handleSubmit = (e) => {
//     e.preventDefault();
  
//     // Password Validation
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
  
//     if (!passwordPattern.test(password)) {
//       setError(
//         "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
//       );
//       return;
//     }
  
//     createNewUser(email, password)
//       .then((result) => {
//         const user = result.user;  // Get the user from the result
  
//         const userData = {
//           name,
//           email,
//           photoURL: user.photoURL,  // Ensure photoURL is available
//         };
  
//         // Send user data to backend
//         fetch("https://crowd-server.vercel.app/user", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             console.log(data);

//             if (data.insertedId) {
//               Swal.fire({
//                 title: "Registration Successful!",
//                 text: "You have successfully registered.",
//                 icon: "success",
//                 confirmButtonText: "OK",
//               });
//               setUser(userData);
//               // Redirect to the previous page or default to '/'
//               navigate(location?.state?.from || "/");
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//             Swal.fire({
//               title: "Error!",
//               text: err.message,
//               icon: "error",
//               confirmButtonText: "Try Again",
//             });
//           });
  
//       })
//       .catch((err) => {
//         console.log(err);
//         Swal.fire({
//           title: "Registration Failed!",
//           text: err.message, // Shows the error message
//           icon: "error",
//           confirmButtonText: "Try Again",
//         });
//       });
  
//     // Clear form after success
//     setName("");
//     setEmail("");
//     setPhotoURL("");
//     setPassword("");
//   };
  

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Photo URL
//             </label>
//             <input
//               type="url"
//               id="photoURL"
//               value={photoURL}
//               name="photo"
//               onChange={(e) => setPhotoURL(e.target.value)} // Corrected line
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
//               placeholder="Enter your photo URL (optional)"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//           <div className="flex items-center justify-between">
//             <button
//               type="submit"
//               className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         <div className="mt-6 text-center">
//           <NavLink to="/login" className="text-teal-600 hover:underline">
//             Already have an account? Login
//           </NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;     




















import { useContext, useState } from "react";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password Validation
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;

        // Update the user's profile with name and photoURL
        updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            
            // const userData = {
            //   name,
            //   email,
            //   photoURL
            // };
            // setUser(userData);
            

            // Send user data to backend
            fetch("https://crowd-server.vercel.app/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  Swal.fire({
                    title: "Registration Successful!",
                    text: "You have successfully registered.",
                    icon: "success",
                    confirmButtonText: "OK",
                  });
                   // Set the user context
                  navigate(location?.state?.from || "/"); // Redirect
                }
              })
              .catch((err) => {
                console.error(err);
                Swal.fire({
                  title: "Error!",
                  text: "Failed to save user data.",
                  icon: "error",
                  confirmButtonText: "Try Again",
                });
              });
          })
          .catch((err) => {
            console.error("Error updating profile:", err);
            Swal.fire({
              title: "Error!",
              text: "Failed to update user profile.",
              icon: "error",
              confirmButtonText: "Try Again",
            });
          });
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: "Registration Failed!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });

    // Clear form after success
    setName("");
    setEmail("");
    setPhotoURL("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Photo URL
            </label>
            <input
              type="url"
              id="photoURL"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your photo URL (optional)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <NavLink to="/login" className="text-teal-600 hover:underline">
            Already have an account? Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;
