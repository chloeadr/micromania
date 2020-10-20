import React from 'react'

function Navbar() {
    return (
    <div class="container-fluid m-0 p-0">
    <nav class="navbar navbar-expand-lg navbar-light menu">
        <a class="navbar-brand" href="index.html">
          <img src="img/logo.svg" alt="logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#">
                <span>Next Gen</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#">
                <span>Jeux vidéos</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#">
                <span>Produits dérivés</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#" >
                <span>Digital</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#" >
                <span>Occasion</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#">
                <span>Fanzone</span>
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link menuLink" href="/#">
                <span>Magasins</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    )
    }

export default Navbar;