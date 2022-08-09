import { useState } from "react";
import axios from "axios";
function App() {
  const [details, setdetails] = useState({
    email: "",
    password: "",
  });
  const url = "http://localhost:8000/posts";
  const clickhandle = (e) => {
    e.preventDefault();

    axios
      .post(url, {
        email: details.email,
        password: details.password,
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div className="container-fluid ">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              name="email"
              type="email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
              value={details.email}
              onChange={(e) =>
                setdetails({ ...details, email: e.target.value })
              }
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              name="password"
              type="password"
              class="form-control"
              id="inputPassword4"
              placeholder="Password"
              value={details.name}
              onChange={(e) =>
                setdetails({ ...details, password: e.target.value })
              }
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={clickhandle}>
          Sign in
        </button>
      </form>
    </div>
  );
}

export default App;
