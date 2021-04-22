let productos = {
    lista: [
        {
            id: 1,
            nombre: "JORDAN BLUE",
            modelo: "Air Jordan 3 Retro",
            anio: 2019,
            color: "Azul",
            descripcion: "La Blue Jordan presenta una parte superior de cuero completamente azul con inserciones de cuero perforado gris en los cordones y el tobillo. Las insignias tradicionales de Jumpman cubren el talón.",
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-blue.png",
        },
        {
            id: 2,
            nombre: "JORDAN CLASSIC",
            modelo: "Pure Platinium",
            anio: 2019,
            color: "Blanco",
            descripcion: "Su diseño, clásico y sobrio, está hecho completamente en la parte superior de piel blanca y toques de 'plata pura' sobre el Swoosh, la plantilla y la suela. También cuenta con perforaciones de ventilación en la puntera, una lengüeta de malla transpirable y un acolchado alrededor del tobillo para mayor comodidad.",
            describirse: function(){
                return `Hola soy$ {productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-classic.png",
        },
        {
            id: 3,
            nombre: "JORDAN GREEN",
            modelo: "Pro Green",
            anio: 2020,
            color: "Verde",
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-green.png",
        },
        {
            id: 4,
            nombre: "JORDAN HIGH",
            modelo: "High OG",
            anio: 2019,
            color: "Verde Guerra",
            descripcion: "La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil, la entresuela y el parche con la marca.",
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-high.png",
        },
        {
            id: 5,
            nombre: "JORDAN JBALVIN",
            modelo: "Balvin",
            anio: 2019,
            color: "Multicolor",
            descripcion: "Los gráficos personalizables (incluida la cara sonriente característica de Balvin) le dan un giro distintivo a la lengüeta, con imágenes similares que adornan la plantilla y el talón del calzado.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-jbalvin.png",
        },
        {
            id: 6,
            nombre: "JORDAN PINK",
            modelo: "Strawberry",
            anio: 2020,
            color: "Rosa",
            descripcion: "Está detallado en la lengüeta y el interior con ilustraciones de fresas y limones que hacen alusión a su nombre. Además, proporciona la misma amortiguación ligera de las Pink Jordan gracias a la tecnología Air.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-pink.png",
        },
        {
            id: 7,
            nombre: "JORDAN RETRO",
            modelo: "Light Smoke",
            anio: 2019,
            color: "Gris y Rojo",
            descripcion: "Las Retro Jordan estan compuestas por una parte superior de cuero blanco con superposiciones de gamuza gris y un panel de tobillo de cuero rojo.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-retro.png",
        },

        {
            id: 8,
            nombre: "JORDAN SNAKE",
            modelo: "Satin",
            anio: 2021,
            color: "Rojo, Negro y Blanco",
            descripcion: "Este Jordan consta de una parte superior de cuero blanco y rojo con lengüeta y forro de satin rojo. Los detalles de piel de serpiente sintética negra también aparecen en la parte superior. Una entresuela blanca, suela roja y un gráfico tradicional de Jordan Wings en el tobillo completan el diseño.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-snake.png",
        },
        {
            id: 9,
            nombre: "JORDAN VIOLETA",
            modelo: "ACG Terra",
            anio: 2020,
            color: "Violeta",
            descripcion: "Las famosas líneas del calzado se han mantenido sin cambios desde su inicio en el 85, pero esta versión modificada del clásico tiene una unidad Zoom Air en el talón y una lengüeta acolchada para que puedas navegar cómodamente. Materiales de primera calidad y una combinación de colores de muselina añaden un elemento moderno a esta silueta baja.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-violeta.png",
        },
        {
            id: 10,
            nombre: "JORDAN YELLOW",
            modelo: "Michigan",
            anio: 2021,
            color: "Amarillas",
            descripcion: "Inspiradas en uno de los equipos deportivos con más historia en el mundo universitario, estas zapatillas proporcionan el mejor estilo y comodidad a través de los colores insignia de los Wolverines y elementos clásicos de la serie Dunk, como la parte superior de piel ligera, la lengüeta de malla y la mediasuela de espuma.",
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },
            imagen: "/images/jordan/jordan-yellow.png",
        },
        
    ]
}

module.exports = productos;