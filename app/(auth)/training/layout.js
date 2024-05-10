import { logout } from "@/actions/auth";
import "./auth.css";

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header id="auth-header">
          <p> Welcome Back!</p>
          <form action={logout}>
            <button>logout</button>
          </form>
        </header>
        {children}
      </body>
    </html>
  );
};

export default layout;
