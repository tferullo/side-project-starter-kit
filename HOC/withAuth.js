import React from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import cookie from "js-cookie";
import { firebase } from "../lib/firebase-service";

export const auth = ctx => {
  const { token } = nextCookie(ctx);

  // If there's no token, it means the user is not logged in.
  if (
    !token &&
    !ctx.pathname.includes("login") &&
    !ctx.pathname.includes("register")
  ) {
    if (typeof window === "undefined") {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    } else {
      Router.push("/login");
    }
  }

  return token;
};
function withAuth(Page) {
  const AuthPage = props => {
    const [appUser, setAppUser] = React.useState(null);

    React.useEffect(() => {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          setAppUser(user);
          const token = await user.getIdToken();
          cookie.set("token", token, { expires: 1 });
          return fetch("/api/login", {
            method: "POST",
            // eslint-disable-next-line no-undef
            credentials: "include",
            headers: new Headers({ "Content-Type": "application/json" }),
            body: JSON.stringify({ token })
          });
        }
        setAppUser(null);
      });
    }, []);
    return <Page {...props} user={appUser} />;
  };
  AuthPage.getInitialProps = async ctx => {
    const token = auth(ctx);

    const componentProps =
      Page.getInitialProps && (await Page.getInitialProps(ctx));

    return { ...componentProps, token };
  };
  return AuthPage;
}

export default withAuth;
