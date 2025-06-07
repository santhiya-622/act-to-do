import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [ruser, setRuser] = useState(true);

  const users = props.users;

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {
    const userFound = users.find((item) => item.username === eusername && item.password === epassword);

    if (userFound) {
      console.log("Login Successful");
      navigate("/landing", { state: { user: eusername } });
    } else {
      console.log("Login Failed");
      setRuser(false);
      setEusername(""); // Optional: Clear input fields on failure
      setEpassword(""); // Optional: Clear input fields on failure
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        {ruser ? (
          <p>I help you manage your activities after you login :)</p>
        ) : (
          <p className="text-red-500">Invalid username or password. Please try again!</p>
        )}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="username"
            value={eusername}
            onChange={handleUInput}
          />

          <input
            type="password" // Changed to 'password' type for security
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="password"
            value={epassword}
            onChange={handlePInput}
          />

          <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
            Login
          </button>

          <p>
            Don't have an account?{" "}
            <Link to={"/signup"} className="underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
