import React from 'react'

import { Link } from 'react-router-dom' 

function Navbar() {
  return (
    <>
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Personal Growth</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  ms-5">
        <li class="nav-item  ms-5">
        <Link class="nav-link" to="/">Home</Link>
  
        </li>
        <li class="nav-item  ms-5">
          <Link class="nav-link" to="/post">blog</Link>
        </li>
       </ul>
     </div>
  </div>
</nav>
    </div>
    </>
  )
}

export default Navbar