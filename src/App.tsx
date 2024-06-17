import { useEffect, useState } from "react";
import "./App.css";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function App() {
  const [email, setEmail] = useState<string>();
  const [name, setName] = useState<string>();
  const [otp, setOtp] = useState<string>();
  const [timer, setTimer] = useState<number>(30);

  const responseMessage = (response: any) => {
    const decodedUser: any = jwtDecode(response.credential);
    console.log(decodedUser);
    setEmail(decodedUser.email);
    setName(decodedUser.name);
    generateOtp();
    setTimer(30);
  };

  const errorMessage = (error: any) => {
    console.log(error);
  };

  const logout = () => {
    googleLogout();
    setEmail("");
    setName("");
  };

  const generateOtp = () => {
    const otp = `${Math.floor(100000 + Math.random() * 900000)}`;
    setOtp(otp);
  };

  useEffect(() => {
    if (timer <= 0) {
      generateOtp();
      setTimer(30);
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prevTimeLeft) => prevTimeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, otp]);

  return (
    <>
      <h1>ULTAINFINITY GLOBAL GROUP</h1>
      {name && (
        <>
          <div>Logged In user: {name}</div>
          <div>Email Address: {email}</div>
          <div>OTP: {otp} </div>
          <div>OTP Expires in {timer} sec </div>
        </>
      )}
      {!name && (
        <div className="card">
          <GoogleLogin
            onSuccess={responseMessage}
            onError={() => errorMessage}
          />
        </div>
      )}
      {name && (
        <div>
          <button onClick={logout}> Logout User </button>
        </div>
      )}
    </>
  );
}

export default App;
