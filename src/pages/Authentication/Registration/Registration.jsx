import React, { useState } from "react";
import { InputField } from "../../../components/InputField"
//import styles from "./Registration.module.css";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
//import { isLogged } from "../../data/atom";
//import { isShow } from "../../data/atom";
//import ScrollToTop from "../../Components/ScrollRestore/ScrollRestore";

export default function Registration() {
  //const [isLoggedIn, setIsLoggedIn] = useRecoilState(isLogged)
  const propsData = [
    "Email: ",
    "First Name: ",
    "Last Name: ",
    "Password: ",
    "Confirm Password: ",
  ];
  const type = ["email", "text", "text", "password"];
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });
  const rawData = { ...data }
  
  function handleSubmit(event) {
    const users = getUsers();
    event.preventDefault();
    if (!data.email || !data.firstName || !data.lastName || !data.password) {
      alert("Please fill out all the details");
      return;
    }
    
    else if (data.password.length <= 7) {
      alert("Password should contain atleat 8 characters");
    } else if (data.password !== confirmPass) {
      alert("Password and Confirm Password do not match");
    }
    else if(users.find((ele)=>ele.email===data.email)){
        alert("User with this Email already exist")
      }
    else {
      const users = getUsers();
      users.push(data);
      localStorage.setItem("users", JSON.stringify(users));
      setIsLogin(!isLogin);
      alert("Registration Succesfull")
    }
  }
  function handleEmailChange(event) {
    const input = { ...data };
    input.email = event.target.value;
    setData(input);
  }
  function handleFirstNameChange(event) {
    const input = { ...data };
    input.firstName = event.target.value;
    setData(input);
  }
  function handleLastNameChange(event) {
    const input = { ...data };
    input.lastName = event.target.value;
    setData(input);
  }
  function handlePasswordChange(event) {
    const input = { ...data };
    input.password = event.target.value;
    setData(input);
  }
  function handleConfirmPasswordChange(event) {
    setConfirmPass(event.target.value);
  }
  function getUsers() {
    const users = localStorage.getItem("users"); // getting data
    try {
      if (users) {
        // users is there
        return JSON.parse(users); // parsing 
      }
    } catch (error) {
      return [];
    }
    return [];
  }

  function handleLogin(e) {
    e.preventDefault();
    const users = getUsers();

    let currentUser = users.find((ele) => ele.email == email);
    if (!currentUser) {
      alert("No User Found");
    } else if (currentUser.password === password) {
      alert("Login Succesfull");
      navigate("/");
      setIsLoggedIn(true)
    } else {
      alert("Incorrect Email or Password");
    }
  }

  return (
    <div>
      {/* <ScrollToTop/> */}
      <div >
        {isLogin ? (
          <div>
            <form onSubmit={(e) => handleLogin(e)} >
              <h1 >Login</h1>

              <InputField
                func={(e) => setEmail(e.target.value)}
                type={type[0]}
                label={propsData[0]}
              />
              <InputField
                func={(e) => setPassword(e.target.value)}
                type={type[3]}
                label={propsData[3]}
              />
              <InputField type="submit" class="submitBtn" />
              <span>Don't have an account? </span>
              <span
                
                onClick={() => setIsLogin(!isLogin)}
              >
                Register
              </span>
            </form>
          </div>
        ) : (
          <div >
            <form  onSubmit={handleSubmit} action="">
              <h1 >Register</h1>
              <InputField
                func={handleEmailChange}
                type={type[0]}
                label={propsData[0]}
              />
              <InputField
                func={handleFirstNameChange}
                type={type[1]}
                label={propsData[1]}
              />
              <InputField
                func={handleLastNameChange}
                type={type[2]}
                label={propsData[2]}
              />
              <InputField
                func={handlePasswordChange}
                type={type[3]}
                label={propsData[3]}
              />
              <InputField
                func={handleConfirmPasswordChange}
                type={type[3]}
                label={propsData[4]}
              />
              <InputField type="submit" class="submitBtn" /> <br />
              <span>Already have an Account? </span>
              <span
                
                onClick={() => setIsLogin(!isLogin)}
              >
                Login
              </span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}



// import React, { useState } from "react";

// export default function Registration() {
//   const [email, setEmail] = useState('');
//   const [password, setPass] = useState('');
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const getUsers = () => {
//     const users = localStorage.getItem('users')
//     if(users){
//       try{
//         return JSON.parse("users")
//       }catch (error){
//         return [];
//       }
//     }
//   }

//   const handleSubmit = () => {
//     const users = getUsers()

//     if(!data.email || !data.password){
//       alert('Please fill the details')
//     } else if(users.find(ele => ele.email === email )){
//       alert('User already exists')
//     } else {
//       users.push(data);
//       localStorage.setItem('users', JSON.stringify(users));
//       alert('Regestration Sucessful')
//     }
//   };

//   function login() {
//     const users = getUsers();

//     const currentUser = users.find((ele) => ele.email == email);
//     if (currentUser) {
//       if (currentUser.password !== password) {
//         alert('Enter Correct Pass');
//       } else {
//         alert('Login Success');
//       }
//     } else {
//       alert('User not registered');
//     }
//   }

//   const handleNameChange = (event) => {
//     const InputName = { ...data };
//     InputName.name = event.target.value;
//     setData(InputName);
//   };
//   const handleEmailChange = (event) => {
//     const InputEmail = { ...data };
//     InputEmail.email = event.target.value;
//     setData(InputEmail);
//   };
//   const handlePasswordChange = (event) => {
//     const InputPassword = { ...data };
//     InputPassword.password = event.target.value;
//     setData(InputPassword);
//   };
//   const handleSecondPassword = (event) => {
//     const Input2Password = { ...data };
//     Input2Password.confirmPassword = event.target.value;
//     setData(Input2Password);
//   };

  

//   return (
//     <>
//       <div>
//         <input onChange={handleNameChange} placeholder="Name"></input>
//       </div>
//       <div>
//         <input onChange={handleEmailChange} placeholder="Email"></input>
//       </div>
//       <div>
//         <input onChange={handlePasswordChange} placeholder="Password"></input>
//       </div>
//       <div>
//         <input
//           onChange={handleSecondPassword}
//           placeholder="Confirm Password"
//         ></input>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>

//       <hr></hr>
//     <input onChange={(e) => setEmail(e.target.value)} />
//       <br />
//       <input onChange={(e) => setPass(e.target.value)} />
//       <br />
//       <button onClick={login}>Login</button>
//     </>
//   );
// }
