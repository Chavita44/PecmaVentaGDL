    const propiedades = [
    {
        tipo: "terreno",
        tipo:"terrenos",
        nombre: "Terreno en Zapopan",
        descripcion: "500m² en zona residencial con servicios.",
        imagen: "/Imagenes/terrenos/Halo1.png", // imagen local en tu carpeta
        enlace: "/HTML/terrenos/terreno1.html"
    },
    {
        tipo: "terreno",
        tipo:"terrenos",
        nombre: "Terreno en Tala",
        descripcion: "800m² en zona residencial con servicios.",
        imagen: "/Imagenes/terrenos/Tala.png", // imagen local en tu carpeta
        enlace: "/HTML/terrenos/terreno2.html"
    },
    {
        tipo: "terreno",
        tipo:"terrenos",
        nombre: "Terreno en Colima",
        descripcion: "700m² en zona residencial con servicios.",
        imagen: "/Imagenes/terrenos/Halo3.png", // imagen local en tu carpeta
        enlace: "/HTML/terrenos/terreno3.html"
    },
    {
        tipo: "terreno",
        tipo:"terrenos",
        nombre: "Terreno en Chapala",
        descripcion: "600m² en zona residencial con servicios.",
        imagen: "/Imagenes/terrenos/Halo4.png", // imagen local en tu carpeta
        enlace: "/HTML/terrenos/terreno4.html"
    },
    {
        tipo: "bodega",
        tipo:"bodegas",
        nombre: "Bodega Industrial",
        descripcion: "1200m² con acceso para tráiler.",
        imagen: "/Imagenes/bodegas/Goku.png",
        enlace: "/HTML/bodegas/bodega1.html"
    },
    {
        tipo: "bodega",
        tipo:"bodegas",
        nombre: "Bodega Refugio",
        descripcion: "1200m² con acceso para tráiler.",
        imagen: "/Imagenes/bodegas/Goku2.png",
        enlace: "/HTML/bodegas/bodega12html"
    },
    {
        tipo: "bodega",
        tipo:"bodegas",
        nombre: "Bodega MX",
        descripcion: "1200m² con acceso para tráiler.",
        imagen: "/Imagenes/bodegas/Goku3.png",
        enlace: "/HTML/bodegas/bodega3.html"
    },
    {
        tipo: "bodega",
        tipo:"bodegas",
        nombre: "Bodega Ruiseñores",
        descripcion: "1200m² con acceso para tráiler.",
        imagen: "/Imagenes/bodegas/Goku4.png",
        enlace: "/HTML/bodegas/bodega4.html"
    },
    {
        tipo: "otro",
        tipo:"otros",
        nombre: "Local Comercial",
        descripcion: "Espacio de 300m² ideal para tienda.",
        imagen: "/Imagenes/otros/Fre1.png",
        enlace: "/HTML/otros/otros1.html"
    },
    {
        tipo: "otro",
        tipo:"otros",
        nombre: "Local centro",
        descripcion: "Espacio de 300m² ideal para tienda.",
        imagen: "/Imagenes/otros/Fre2.png",
        enlace: "/HTML/otros/otros2.html"
    },
    {
        tipo: "otro",
        tipo:"otros",
        nombre: "Local piso 2",
        descripcion: "Espacio de 300m² ideal para tienda.",
        imagen: "/Imagenes/otros/Fre3.png",
        enlace: "/HTML/otros/otros3.html"
    },
    {
        tipo: "otro",
        tipo:"otros",
        nombre: "Local No Comercial",
        descripcion: "Espacio de 300m² ideal para tienda.",
        imagen: "/Imagenes/otros/Fre4.png",
        enlace: "/HTML/otros/otros4.html"
    }
    ];

    function buscar() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const contenedor = document.getElementById("listado");
    contenedor.innerHTML = "";

    const resultados = propiedades.filter(p =>
        p.tipo.includes(input) || p.nombre.toLowerCase().includes(input)
    );

    if (resultados.length === 0) {
        contenedor.innerHTML = `<div class="error">Error: no existe el producto</div>`;
        return;
    }

    resultados.forEach(p => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <a href="${p.enlace}">Ver más</a>
        `;
        contenedor.appendChild(card);
    });
    }