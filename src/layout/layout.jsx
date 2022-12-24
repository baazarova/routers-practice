import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './layout.css'

export const Layout = ()=>{
    return(
        <>
        <header className="header">
        <div>
          <Link className="links" to="/">Home</Link>
        </div>
        <div>
          <Link className="links" to="/about">About</Link>
        </div>
        <div>
          <Link className="links" to="/contacts">Contacts</Link>
        </div>
        
      </header>
      <main className="main">
        <Outlet/>
      </main>
        </>
    )
}