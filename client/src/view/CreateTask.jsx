import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createData } from "../store/action";
import Swal from "sweetalert2";

function CreateTask() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");

  function submitData(e) {
    e.preventDefault();
    const data = {
      title,
      category,
    };
    dispatch(createData(data));
    Swal.fire("Created!", "You create a new task!", "success");
    history.push("/");
  }

  function backToHome() {
    history.push("/");
  }

  return (
    <div>
      <form className="container" onSubmit={submitData}>
        <div className="my-3">
          <label className="font-bold mb-3">Category</label>
          <select
            class="form-select"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option selected value="">
              Open this select menu
            </option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Mobile">Mobile</option>
          </select>
        </div>
        <div>
          <label className="font-bold mb-3">Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          ></input>
        </div>
        <div className="my-3">
          <button className="btn btn-primary" type="submit">
            Sent
          </button>
          <button className="btn btn-danger ml-3" onClick={() => backToHome()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateTask;
