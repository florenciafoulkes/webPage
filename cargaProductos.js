document.addEventListener("DOMContentLoaded", () => {
    const contenedorProductos = document.getElementById("lista-productos");

    fetch("productos.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al cargar el archivo JSON");
            }
            return response.json();
        })
        .then((productos) => {
            productos.forEach((producto) => {
                const card = document.createElement("div");
                card.classList.add("col-12", "col-md-3", "col-lg-3", "mt-4");

                card.innerHTML = `
                    <div class="card sombra">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                            <div class="card-body">
                                <h5 class="card-title">${producto.nombre}</h5>
                                <p class="card-text">$${producto.precio}</p>
                                <a href="#" class="btn btn-success btn-agregar" data-id="${producto.id}">Comprar</a>
                            </div>
                    </div>`
                ;

                contenedorProductos.appendChild(card);
            })
        })
        .catch((error)=>{
            console.error("Error al cargar los productos:", error);
        })
});