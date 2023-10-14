import React from 'react'

export default function nav() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-info bg-primary">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
    <img className='img-responsive logo' src='logo.png'/>
    
    <form className="form-inline my-2 my-lg-0 fm-w">
      <input className="form-control mr-sm-2" type="search" placeholder="Search for the products, Brands and more" aria-label="Search" />
    </form>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
    <li className="nav-item active">
        <a className="nav-link text-white" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link text-white" href="#">Become a seller <span className="sr-only"></span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link text-white" href="#">Sign in <span className="sr-only"></span></a>
      </li>
      <li className="nav-item  ">
        <a className="nav-link text-white" href="#">Cart <span className="sr-only"></span></a>
      </li>
     
      
    </ul>
  </div>
</nav>
    </>
  )
}

