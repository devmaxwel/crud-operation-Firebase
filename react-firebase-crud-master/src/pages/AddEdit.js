import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./AddEdit.css";
import fireDb from "../firebase";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  contact: "",
  serial: "",
  Problem_of_device:"",
  Amount_Charged:"",
  Amount_Paid:"",
  served_by: "",
  status: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  const { name, contact, status, serial , Problem_of_device, Amount_Charged, Amount_Paid, served_by } = state;

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setData({ ...snapshot.val() });
      } else {
        setData({});
      }
    });

    return () => {
      setData({});
    };
  }, [id]);

  useEffect(() => {
    if (id) {
      setState({ ...data[id] });
    } else {
      setState({ ...initialState });
    }

    return () => {
      setState({ ...initialState });
    };
  }, [id, data]);


  const handleOnChange=(e)=>{
    const {name, value} = e.target;
      setState({ ...state, [name]: value})
  }







  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !serial || !contact || !status) {
      toast.error("Please provide value in each input field");
    } else {
      if (!id) {
        fireDb.child("contacts").push(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact Added Successfully");
          }
        });
      } else {
        fireDb.child(`contacts/${id}`).set(state, (err) => {
          if (err) {
            toast.error(err);
          } else {
            toast.success("Contact Updated Successfully");
          }
        });
      }

      setTimeout(() => history.push("/"), 500);
    }
  };


  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >


        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeHolder="Your Name..."
          value={name || ""}
          onChange={handleOnChange}
        />


        <label htmlFor="email">Serial Number</label>
        <input
          type="text"
          id="serial"
          name="serial"
          placeHolder="Serial..."
          value={serial || ""}
          onChange={handleOnChange}
        />
        
        <label htmlFor="email">Problem of Device</label>
        <textarea
          cols='20' 
          rows='10' id="Problem_of_device" 
          value={Problem_of_device || ""}
          name='Problem_of_device'
          onChange={handleOnChange}>
            
           
        </textarea>

        <label htmlFor="email">Amount_Charged</label>
        <input
          type="text"
          id="Amount_Charged"
          name="Amount_Charged"
          placeHolder="Your Email..."
          value={ Amount_Charged || ""}
          onChange={handleOnChange}
          />

        <label htmlFor="email">Amount_Paid</label>
        <input
          type="number"
          id="Amount_Paid"
          name="Amount_Paid"
          placeHolder="Amount..."
          value={Amount_Paid || ""}
          onChange={handleOnChange}
        />

      <label htmlFor="email">Served By</label>
        <input
          type="text"
          id="served_by"
          name="served_by"
          placeHolder="Served By..."
          value={served_by || ""}
          onChange={handleOnChange}
        />



        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeHolder="Your Contact No. ..."
          value={contact || ""}
          onChange={handleOnChange}
        />


        <label htmlFor="name">Status</label>
        <input
          type="text"
          id="status"
          name="status"
          placeHolder="Your Status..."
          value={status || ""}
          onChange={handleOnChange}
        />


        <input type="submit" value={id ? "Update" : "Save"} />


      </form>
    </div>
  );
};

export default AddEdit;
