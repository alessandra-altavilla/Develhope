export default function UncontrolledLogin() {
  function onLogin(event) {
    event.preventDefault();

    const username = event.target.form.username.value;
    const password = event.target.form.password.value;

    console.log({ username, password });
  }
  function handleLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");

    console.log({ username, password });
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <div>
          <label>
            Username:{" "}
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Type your username..."
            />
          </label>
        </div>
        <div>
          <label>
            Password:{" "}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Type your password..."
            />
          </label>
        </div>
        <div>
          <label>
            <input name="remembrer" type="checkbox" />
            Remember me!
          </label>
        </div>
        <div>
          <button type="submit">Login!</button>
          <button onClick={onLogin}>Login2</button>
        </div>
      </div>
    </form>
  );
}
