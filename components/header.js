class Header extends HTMLElement {
    constructor() {
      super();
    }

  connectedCallback() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="../../index.html"><img src="../../assets/logothumbnail.png" height="45px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Products
                </a>
                <ul class="dropdown-menu">
                    <li class="dropdown-submenu"><a class="dropdown-item dropdown-toggle">Tonneau Covers</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../Pages/hardcovers.html">Hard Covers</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="../Pages/softcovers.html">Soft Covers</a></li>
                        </ul>
                      </li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/sidesteps.html">Step Bars/Running Boards</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/bedliners.html">Bed Liners</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/bedrails.html">Bed Rails</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/toolboxes.html">Tool Boxes</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/truckracks.html">Truck Racks</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#">Window Deflctors (Coming Soon)</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="../Pages/floormats.html">Floor Mats</a></li>
                 
                 
                </ul>
              </li>
            </ul>
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
 
        </ul>
       
      </div>
    </div>
  </nav>
    `;
  }
}

  customElements.define('header-component', Header);

 