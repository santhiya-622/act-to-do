import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();
  const users = props.users;
  const setUsers = props.setusers;

  const [eusername, setEusername] = useState("");
  const [epassword, setEpassword] = useState("");
  const [econfirmPassword, setEconfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function handleConfirmPInput(evt) {
    setEconfirmPassword(evt.target.value);
  }

  function addUser() {
    if (eusername === "" || epassword === "" || econfirmPassword === "") {
      setError("All fields are required.");
      return;
    }
    if (epassword !== econfirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setUsers([...users, { username: eusername, password: epassword }]);
    navigate("/");
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-3xl font-medium">Hey Hi</h1>
        <p>Sign up here :)</p>

        {error && <p className="text-red-500">{error}</p>}

        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="username"
            value={eusername}
            onChange={handleUInput}
          />

          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="password"
            value={epassword}
            onChange={handlePInput}
          />

          <input
            type="password"
            className="w-52 border-black p-1 bg-transparent border rounded-md"
            placeholder="confirm password"
            value={econfirmPassword}
            onChange={handleConfirmPInput}
          />

          <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>
            Sign Up
          </button>

          <p>
            Already have an account?{" "}
            <Link to={"/"} className="underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
