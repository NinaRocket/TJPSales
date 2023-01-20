class Footer extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <section class="footer">
    <!-- Footer -->
    <footer class="text-center text-white" style="background-color: #041d34;">
      <!-- Grid container -->
      <div class="container p-4 pb-0">
        <!-- Section: CTA -->
        <section class="">
          <p class="d-flex justify-content-center align-items-center">
            <span class="me-3">Copyright © 2022  TJP Sales LLC</span>
            
          </p>
        </section>
        <!-- Section: CTA -->
      </div>
      <!-- Grid container -->
  
      <!-- Copyright -->
      <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
        <span class="me-3">Created by enRocket Dev <img src="./assets/Nina Rocket Icon Black.png" style="height:30px;"></span>
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </section>
  <style>
  .footer {
    position: sticky;
    top: 100vh;
  }
  </style>
   `;
  }
}

  customElements.define('footer-component', Footer);

 