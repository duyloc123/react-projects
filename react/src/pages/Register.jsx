import React from 'react';

function Register() {
  const userName = React.useRef(null);
  const passWord = React.useRef();
  const email = React.useRef();
  const [errors, setErrors] = React.useState({});

  function handleSubmit(event) {
    event.preventDefault();
    if(errors.Username === "" && errors.Password === "" && errors.Email === "") {
      console.log("Đăng ký thành công");
      const newUser = {
        Username: userName.current.value,
        Password: passWord.current.value
      }
      localStorage.setItem("user", JSON.stringify(newUser));

      // Get localStorage
      // const infoUser = localStorage.getItem("user");
      // const userObject = JSON.parse(infoUser);
      // console.log(userObject);

    } else {
      console.log("Đăng ký thất bại");
    }
  }

  function validationInput(ref, minLength, fieldName) {
    const value = ref.current.value.trim();
    let errorMsg = "";

    switch (true) {
      case value === "":
        errorMsg = (`${fieldName} không được để trống!`);
        break;
      case value.length < minLength:
        errorMsg = (`${fieldName} không được dưới ${minLength} kí tự!`);
        break;
      case fieldName === "Email" && !value.includes("@"):
        errorMsg = "Email phải có kí tự @!";
        break;
      default:
        errorMsg = "";
    }

    setErrors((prevState) => ({
      ...prevState,
      [fieldName]: errorMsg
    }))
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-3xl text-blue-500">Register</h1>
      <div className='flex justify-center mt-5'>
        <form onSubmit={handleSubmit} className='w-[500px] flex flex-col items-start border-1 p-4'>
          <label htmlFor="userName">User name:</label>
          <input
            className="w-full border rounded my-2 pl-2 py-1"
            id='userName'
            type='text'
            ref={userName}
            onChange={() => validationInput(userName, 10, "Username")}
          />
          {errors.Username && <p className='text-red-500'>{errors.Username}</p>}
          <label htmlFor="passWord">Password:</label>
          <input
            className="w-full border rounded my-2 pl-2 py-1"
            id='passWord'
            type='password'
            ref={passWord}
            onChange={() => validationInput(passWord, 5, "Password")}
          />
          {errors.Password && <p className = "text-red-500">{errors.Password}</p>}
          <label htmlFor="email">Email:</label>
          <input type="email"
            className='w-full border rounded my-2 pl-2 py-1'
            id='email'
            ref={email}
            onChange={() => validationInput(email, 5, "Email")}
          />
          {errors.Email && <p className = "text-red-500">{errors.Email}</p>}
          <button type='submit'
            className='w-full bg-blue-500/30 rounded p-1 mt-2 cursor-pointer hover:bg-blue-700
            transition duration-300 ease-in-out'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
