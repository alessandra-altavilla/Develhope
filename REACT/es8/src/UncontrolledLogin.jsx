export default function UncontrolledLogin() {
  function handleLogin(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const username = formData.get("username")
    const password = formData.get("password")

    console.log({username, password})
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
        </div>
      </div>
    </form>
  );
}
