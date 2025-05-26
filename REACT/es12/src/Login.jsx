import { useState } from "react";

export default function Login({ onLogin }) {
  const [data, setData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  function handleInput(event) {
    const { name, type, value, checked } = event.target;
    setData({
      ...data,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleResetForm() {
    setData({
      username: "",
      password: "",
      remember: false,
    });
  }

  function handleLogin(event) {
    event.preventDefault();
    onLogin(data);
  }

  const isLoginDisabled =
    data.username.trim() === "" || data.password.trim() === "";

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={data.username}
            onChange={handleInput}
          />
        </div>

        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={data.password}
            onChange={handleInput}
          />
        </div>

        <div>
          <label>
            <input
              name="remember"
              type="checkbox"
              checked={data.remember}
              onChange={handleInput}
            />
            Ricorda
          </label>
        </div>

        <div>
          <button
            type="submit"
            disabled={isLoginDisabled}
            style={{
              backgroundColor: data.password.length < 8 ? "red" : "green",
              color: "white",
            }}
          >
            Login
          </button>
          <button type="button" onClick={handleResetForm}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
