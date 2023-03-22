import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  let authenticationLinks;

  if (localStorage.jwt === undefined) {
    authenticationLinks = (
      <ul>
        <li>
          <a href="/signup">Signup</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    );
  } else {
    authenticationLinks = (
      <li>
        <LogoutLink />
      </li>
    );
  }

  return (
    <header>
      <a href="/">Home</a> | <a href="/areas">Areas</a> | <a href="/ascents">my ascents</a> |{" "}
      <a href={authenticationLinks}>{authenticationLinks}</a>
    </header>
  );
}
