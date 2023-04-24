import React from "react";
import { useState } from "react";
import ccc from "./ccc logo.png";
import "./style.css";
import axios from "axios";
import swal from "sweetalert";

const Reg = () => {
  const [Name, setName] = useState();
  const [StudentNumber, setStudentNumber] = useState("");
  const [CollegeEmailId, setCollegeEmailId] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Year, setYear] = useState("");
  const [Section, setSection] = useState("");
  const [Branch, setBranch] = useState("");

  // const[verified,setVerified]= useState(false);
  // function onChange(value) {
  //   console.log("Captcha value:", value);
  //   setVerified(true);
  // }

  function handleName(e) {
    if (/^[a-zA-Z ]*$/.test(e.target.value) || e.target.value === "") {
      setName(e.target.value);
      document.getElementById("invalidName").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("name").style.borderColor = "white";
      } else {
        document.getElementById("name").style.borderColor = "green";
      }
    } else {
      document.getElementById("invalidName").style.visibility = "visible";
      document.getElementById("name").style.borderColor = "red";
    }
  }

  function handleStdNo(e) {
    if (/^(22|21)(00|10|1[123]|15[34]|16[49]|31|40)([0-9]{3})$/.test(e.target.value) || /^(22|21)(00|10|1[123]|15[34]|16[49]|31|40)([0-9]{4})$/.test(e.target.value) || /^(22)(00|10|1[123]|15[34]|16[49]|31|40)([A-Za-z0-9]{4})$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setStudentNumber(e.target.value);
      document.getElementById("invalidRoll").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("roll").style.borderColor = "white";
      } else {
        document.getElementById("roll").style.borderColor = "green";
      }
    } else {
      document.getElementById("invalidRoll").style.visibility = "visible";
      document.getElementById("roll").style.borderColor = "red";
    }
  }

  function handleMail(e) {
    if (/^[a-zA-Z]+(22|21|20)(00|1[0123]|15[34]|16[49]|31|40)([0-9]{3})(@akgec\.ac\.in)$/.test(e.target.value) ||
      e.target.value === ""
    ) {
      setCollegeEmailId(e.target.value);
      document.getElementById("invalidEmail").style.visibility = "hidden";
      if (e.target.value === "") {
        document.getElementById("email").style.borderColor = "white";
      } else {
        document.getElementById("email").style.borderColor = "green";
      }
    } else {
      document.getElementById("invalidEmail").style.visibility = "visible";
      document.getElementById("email").style.borderColor = "red";
    }
  }

  function handleNum(e) {
    if (/^[0-9]*$/.test(e.target.value) && e.target.value !== "") {
      if (e.target.value >= 1000000000 && e.target.value <= 1000000000000) {
        setPhoneNumber(e.target.value);
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("num").style.borderColor = "green";
      } else {
        document.getElementById("num").style.borderColor = "red";
        document.getElementById("invalidNum").style.visibility = "visible";
      }
    } else {
      if (e.target.value === "" || e.target.value === undefined) {
        document.getElementById("invalidNum").style.visibility = "hidden";
        document.getElementById("num").style.borderColor = "#443C68";
      } else {
        document.getElementById("invalidNum").style.visibility = "visible";
        document.getElementById("num").style.borderColor = "red";
      }
    }
  }
  const handleYearSelect = (event) => {
    setYear(event.target.value);
  };
  const handleBranchSelect = (event) => {
    setBranch(event.target.value);
  };
  const handleSectionSelect = (event) => {
    setSection(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      Name: Name,
      StudentNumber: StudentNumber,
      CollegeEmailId: CollegeEmailId,
      PhoneNumber: PhoneNumber,
      Year: Year,
      Section: Section,
      Branch: Branch,
    };
    const data1 = {
      email: CollegeEmailId,
    };
    axios
      .post("https://sheetdb.io/api/v1/4saunidi78lkx", data)
      .then((response) => {
        // alert("Form Submitted Successfully");
        swal({
          title: "Thank you for registering to PyWizardry",
          text: "Check Your Email",
          icon: "success",
          button: "OK",
        });

        setName("");
        setStudentNumber("");
        setCollegeEmailId("");
        setPhoneNumber("");
        setYear("");
        setSection("");
        setBranch("");

        axios
          .post("https://pywizardry.onrender.com/api/email", data1)
          .then((response) => {
            console.log(response);
          })
          .catch(function (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.log(error.response.data);
              console.log(error);
              console.log(error.response.headers);
              console.log(data1);
              console.log(data);
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser
              // and an instance of http.ClientRequest in node.js
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
          });
      });
  };

  {
    return (
      <>
        <body>
          <div className="data">
            <div className="info">
              <img className="ccc-logo" src={ccc} alt="ccc logo" />
              <h2 className="ccc">Cloud Computing Cell</h2>
              <h4>Presents</h4>
              <h1>
                Py<b style={{ color: "red" }}>Wizardry</b>
              </h1>
              <h3>A Python Fundamentals & Game Development Workshop.</h3>
            </div>
            <div className="RegInBox">
              <h2>
                Register <b style={{ color: "red" }}>Fast</b>
              </h2>
              <form autoComplete="on" onSubmit={handleSubmit}>
                <input
                  type="name"
                  name="data[Name]"
                  placeholder="Enter Name"
                  required
                  id="name"
                  onClick={handleName}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleName(e);
                  }}
                  value={Name}
                />
                <p className="valid" id="invalidName">
                  Enter a valid name consisting of alphabets only.
                </p>
                <input
                  type="text"
                  name="data[Student Number]"
                  placeholder="Enter Student Number"
                  required
                  id="roll"
                  onChange={(e) => {
                    setStudentNumber(e.target.value);
                    handleStdNo(e);
                  }}
                  value={StudentNumber}
                />
                <p className="valid" id="invalidRoll">
                  Enter a valid student number consisting of numbers only.
                </p>
                <input
                  type="email"
                  name="data[College Email Id]"
                  placeholder="Enter College Email Id"
                  required
                  id="email"
                  onChange={(e) => {
                    setCollegeEmailId(e.target.value);
                    handleMail(e);
                  }}
                  value={CollegeEmailId}
                />
                <p className="valid" id="invalidEmail">
                  Only college email Id is allowed.
                </p>
                <input
                  type="tel"
                  name="data[Phone Number]"
                  placeholder="Enter Phone Number"
                  required
                  id="num"
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                    handleNum(e);
                  }}
                  value={PhoneNumber}
                />
                <p className="valid" id="invalidNum">
                  Number should only contain 10 digits.
                </p>
                {/* <input
                  type="Year"
                  name="data[Year]"
                  placeholder="Enter Year"
                  required
                  id="year"
                  onChange={(e) => setYear(e.target.value)}
                  value={Year}
                /> */}
                
                <div className="SB">
                <div className="dropdown-container">
                  <select
                    id="year-dropdown"
                    onChange={(e) => {
                      setYear(e.target.value);
                      handleYearSelect(e);
                    }}
                    value={Year}
                  >
                    <option value="">Year</option>
                    <option value="1st Year">1st Year</option>
                    <option value="2nd Year">2nd Year</option>
                  </select>
                </div>
                {/* <div class="dropdown dropdown-dark">
    <select name="two" class="dropdown-select">
      <option value="">Select…</option>
      <option value="1">Option #1</option>
      <option value="2">Option #2</option>
      <option value="3">Option #3</option>
    </select>
  </div> */}
                  <div className="dropdown-container">
                    <select
                      id="year-dropdown"
                      onChange={(e) => {
                        setBranch(e.target.value);
                        handleBranchSelect(e);
                      }}
                      value={Branch}
                    >
                      <option value="">Branch</option>
                      <option value="CSE">CSE</option>
                      <option value="CS">CS</option>
                      <option value="CSE(AIML)">CSE(AIML)</option>
                      <option value="CSE(DS)">CSE(DS)</option>
                      <option value="CSE(Hindi)">CSE(Hindi)</option>
                      <option value="CSIT">CSIT</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="Electrical">Electrical</option>
                      <option value="AIML">AIML</option>
                      <option value="Machincal">Machincal</option>
                      <option value="Civil">Civil</option>
                    </select>
                  </div>
                  <div className="dropdown-container">
                    <select
                      id="year-dropdown"
                      onChange={(e) => {
                        setSection(e.target.value);
                        handleSectionSelect(e);
                      }}
                      value={Section}
                    >
                      <option value="">Section</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      
                      <option value="3">3</option>
                      <option value="S1">S1</option>
                      
                      <option value="S2 Year">S2</option>
                      <option value="S3 Year">S3</option>
                      
                      <option value="S4 Year">S4</option>
                      <option value="S5 Year">S5</option>
                      
                      <option value="S6 Year">S6</option>
                      <option value="S7 Year">S7</option>
                      
                      <option value="S8 Year">S8</option>
                      <option value="S9 Year">S9</option>
                      <option value="S10 Year">S10</option>
                      <option value="S11 Year">S11</option>
                      <option value="S12 Year">S12</option>
                      <option value="S13 Year">S13</option>
                      <option value="S14 Year">S14</option>
                      <option value="S15 Year">S15</option>
                      <option value="S16 Year">S16</option>
                      <option value="S17 Year">S17</option>
                      <option value="S18 Year">S18</option>
                      <option value="S19 Year">S19</option>
                      <option value="S20 Year">S20</option>

                    </select>
                  </div>
                  {/* <input
                    type="Section"
                    name="data[Section]"
                    placeholder="Enter Section"
                    required
                    id="sect"
                    onChange={(e) => setSection(e.target.value)}
                    value={Section}
                  />
                  <input
                    type="Branch"
                    name="data[Branch]"
                    placeholder="Enter Branch"
                    required
                    id="branch"
                    onChange={(e) => setBranch(e.target.value)}
                    value={Branch}
                  /> */}
                </div>
                <div 
                  className="g-recaptcha"
                  data-type="image"
                  data-sitekey="6LdNuaclAAAAABLXotEQiWPvHOu0-QpdeYO85aCp"
                  required
                ></div>

                <input type="submit" name="Register" value="Register" />
              </form>
            </div>
          </div>
        </body>
      </>
    );
  }
};

export default Reg;
