



export function Items({item,addToCart}) {
  return (
    <div className="col mt-5">
      <div className="card h-100 shadow-sm border-0 rounded-4">
        <img
          src={`public/img/${item.imagen}`}
          className="card-img-top rounded-top-4"
          alt="Nintendo Switch"
        />

        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title text-dark fw-bold">{item.nombre}</h5>
          <p className="card-text text-muted small">
           {item.descripcion}
          </p>
          <div className="d-flex m-0 p-0">
            <i className="bi bi-star-fill me-1 text-warning"></i>
            <i className="bi bi-star-fill me-1 text-warning"></i>
            <i className="bi bi-star-fill me-1 text-warning"></i>
            <i className="bi bi-star-fill me-1 text-warning"></i>
            <i className="bi bi-star-fill me-1 text-warning"></i>
          </div>
          <span className="fw-bold text-success fs-5">${item.precio}</span>
        </div>

        <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
          
          <button className="btn btn-sm w-100 btn-danger rounded-pill p-2" onClick={()=>addToCart(item)}>
            <i className="bi bi-cart-plus ms-2 me-1 "></i>
            <span className="me-2 fw-bold">Agregar al carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
}
