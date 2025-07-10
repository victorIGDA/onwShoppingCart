


export function Header() {
  return (
<header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark position-relative">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="src/img/igtechnology.png" alt="Logo" height="30" />
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
          <li className="nav-item"><a className="nav-link active" href="#">Productos</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
          <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>

          <div className="d-flex justify-content-center align-item-center">
          <li className="nav-item cart-wrapper ms-5 ps-5 mt-1">
            <i className="bi bi-cart4 text-white fs-5 p-2 bg-danger" ></i>

            <div className="cart-dropdown">
              <p className="text-center fw-bold">Tu carrito</p>

              <table className="table table-borderless align-middle mb-2">
                <thead>
                  <tr className="text-center">
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td><img src="item_01.jpg" alt="producto" /></td>
                    <td>Lukather</td>
                    <td><strong>$299</strong></td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-dark btn-sm me-1">-</button>
                        <span>1</span>
                        <button className="btn btn-dark btn-sm ms-1">+</button>
                      </div>
                    </td>
                    <td><button className="btn btn-danger btn-sm"><i className="bi bi-x"></i></button></td>
                  </tr>
                </tbody>
              </table>

              <div className="d-flex justify-content-between px-2">
                <strong>Total pagar:</strong> <span className="fw-bold text-success">$899</span>
              </div>

              <div className="mt-3 text-center">
                <button className="btn btn-dark w-100 fw-bold">VACIAR CARRITO</button>
              </div>
            </div>
          </li>
          </div>

        </ul>
      </div>
    </div>
  </nav>
</header>
  );
}
