export function Fotter() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <img
              src="src/img/igtechnology.png"
              alt="Logo"
              width="auto"
              height="40"
              className="d-inline-block align-text-top"
            />
            <p>
              Tu tienda de tecnología favorita. Encuentra celulares, consolas y
              laptops a los mejores precios.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <p>Email: info@IGTechnology.com</p>
            <p>Tel: +1 (809) 123-4567</p>
            <p>Dirección: Santo Domingo, RD</p>
          </div>
        </div>

        <hr className="border-top border-light" />

        <div className="text-center">
          <p className="mb-0">
            &copy; 2025 IGTechnology. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
