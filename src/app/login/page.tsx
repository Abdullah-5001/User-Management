import { Login } from "@/actions/login";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page </h1>
      <form action={Login}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter  your email"
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
