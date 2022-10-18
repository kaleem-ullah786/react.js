import React from 'react'

function Navbar() {
  return (
    <>
       <section id="title">

    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container-fluid">

        <a className="navbar-brand h1 fw-bold " href="#">
          <i className="fa-sharp fa-solid fa-globe main-icon "></i>
          Apps</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="#">Price</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark fw-bold" href="#">FAQ</a>
            </li>
            <li classNameName="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-dark fw-bold" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Pages
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>

          </ul>

        </div>
      </div>
    </nav>



    <div className="top-container">
      <div className="row m-0">
        <div className="col-lg-6 col-md-12 text-white left-bar">
          <h1 className="big-heading">The Best App <br/> in the Universe</h1>
          <p className="text-white">It is a long established fact that a reader will be distracted by the readable content
            of a page when looking
            .
            <br/>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking

          </p>
          <button className="title-btn">Load more items</button>

        </div>


        <div className="col-lg-6  col-md-12 title-ie">
          <img className="title-image mb-5" src="assets/image/abcd.png" alt=""/>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Navbar
