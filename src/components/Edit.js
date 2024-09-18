import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Edit = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://66d44c305b34bcb9ab3e3239.mockapi.io/crud/${id}`, {
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
            <h1>Update Data</h1>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Enter Age</label>
              <input
                type="Number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Your Age"
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>Enter Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="form-control"
              ></input>
            </div>
            <br />
            <div className="d-grid">
              <input
                type="submit"
                value="Update"
                className="btn btn-primary"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
