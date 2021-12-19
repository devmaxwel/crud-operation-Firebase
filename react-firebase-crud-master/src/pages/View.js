import React, { useState, useEffect } from "react";
import fireDb from "../firebase";
import { useParams, Link } from "react-router-dom";
import "./View.css";

const View = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fireDb
      .child(`contacts/${id}`)
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser({ ...snapshot.val() });
        } else {
          setUser({});
        }
      });
  }, [id]);



  console.log("user", user);

  
  return (
    <div style={{ marginTop: "150px" }}>
      <div className="card">
        <div className="card-header">
          <p>User Contact Detail</p>
        </div>
        <div className="container">
          <strong>ID: </strong>
          <span>{id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Serial Number: </strong>
          <span>{user.serial}</span>
          <br />
          <br />
          <strong>Poblem_Of_Device: </strong>
          <span>{user.Problem_of_device}</span><br/>

          <strong>Amount_Charged: </strong>
          <span>{user.Amount_Charged}</span>
          <br />
          <br />
          <strong>Amount_Paid: </strong>
          <span>{user.Amount_Paid}</span>
          <br />
          <br />
          <strong>Served By: </strong>
          <span>{user.served_by}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <strong>Status: </strong>
          <span>{user.status}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-edit">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
