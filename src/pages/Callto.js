import React from 'react'

function Callto() {
  return (
    <>
     <section id="cta">
    <div class="title-text">
      <h2 class="cta-heading">Download this App Today!</h2>
      <p class="text-white pt-3">It is a long established fact that a reader will be distracted by the readable content
        of a page when looking
        at its layout It is a long established fact that a reader will be distracted It is a long established fact.</p>
    </div>

    <div class="row justify-content-center d-flex pb-5">
      <div class="d-flex justify-content-center flex-row">
        <div class="buttons flex-row d-flex">
          <i class="apple fa-brands fa-apple"></i>

          <div class="button-text">
            <p> <span>Available</span> <br/>
              on App Store</p>
          </div>
        </div>
        <div class="buttons flex-row d-flex">
          <i class="apple fa-brands fa-google-play"></i>

          <div class="button-text">
            <p> <span>Available</span> <br/>
              on Play Store</p>
          </div>
        </div>
      </div>
    </div>


  </section>
 
    </>
  )
}

export default Callto
