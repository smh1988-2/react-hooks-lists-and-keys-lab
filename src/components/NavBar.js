import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const myLinks = links.map(link => <li> <a key={link} href={link} >{link}</a> </li>)

  return <nav>{myLinks}</nav>;
}

export default NavBar;
