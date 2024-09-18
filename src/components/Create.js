import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://66d44c305b34bcb9ab3e3239.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <div className="m-2">
            <Link to={"/"}>
              <button className="btn btn-primary">Redirect To Read Data</button>
            </Link>
          </div>

          <div className="bg-primary p-4 text-center">
            <h1>Create Data</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Enter Age</label>
              <input
                type="Number"
                placeholder="Enter Your Age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="submit"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
          {/* {name}
          <br />
          {age}
          <br />
          {email} */}
        </div>
      </div>
    </>
  );
};

export default Create;
