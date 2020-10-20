import React from 'react'

function Body() {
    return (
    <div class="container-fluid m-0 p-0">
      {/* Subheader */}
      <div class="row">
        <div class="col-12 subheader d-flex justify-content-center align-items-center">
          <a  class="linkSubheader" href="/#">FIFA 21 Ultimate disponible : jouez dès maintenant ! - Version next gen incluse</a>
        </div>
      </div>

      {/* Carousel */}
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" interval="10000">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="img/fifa21.jpg" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/fifaPromo.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/FUT.jpg" alt="Third slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/consolesOccas.jpg" alt="Fourth slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="img/ride4.jpg" alt="Fifth slide" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>

    </div>
    )
}

export default Body;