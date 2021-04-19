import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="bg-blue-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className="inline-flex items-center py-7 px-3 mr-4 text-red-500 hover:text-yellow-300 text-4xl font-bold cursive tracking-widest "
            activeClassName="text-white"
          >
            Feriel
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex  items-center py-3 px-3 mr-4 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex  items-center py-3 px-3 mr-4 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-blue-100 bg-blue-700"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 mr-4 rounded text-blue-200 hover:text-yellow-300"
            activeClassName="text-blue-100 bg-blue-700"
          >
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
