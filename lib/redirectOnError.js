import Router from "next/router";

const redirectOnError = ctx => {
  if (typeof window === "undefined") {
    ctx.res.writeHead(302, { Location: "/login" });
    ctx.res.end();
  } else {
    Router.push("/login");
  }
};

export default redirectOnError;
