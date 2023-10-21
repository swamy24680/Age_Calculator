import React, {useState} from "react";
import './App.css';
function App() {
  const [birthdate, setBirthdate] = useState("");
  const [age, setAge] = useState(0);
  const calculateAge = () => {
    const birthdateDate = new Date(birthdate);
    const currentDate = new Date();
    if (!isNaN(birthdateDate.getTime())) {
      const ageInMilliseconds = currentDate - birthdateDate;
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      setAge(Math.floor(ageInYears));
    } else {
      setAge(null);
    }
  };
  return (
    <div id="id1">
      <p id="id2"><b>Age Calculator</b></p>
      <br></br>
      <p id="id4"><b>Enter your date of birth</b></p>
      <br></br>
      <center><input type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} style={{height:"25px",width:"400px"}}/></center>
      <br></br>
      <center><button onClick={calculateAge} id="id5">Calculate Age</button></center>
      <br></br>
      <p id="id3"><b>You are {age} years old</b></p>
    </div>
  );
}
export default App;