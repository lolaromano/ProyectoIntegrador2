let productos = {
    lista: [
        {
            id: 0,
            nombre: "JORDAN BLUE",
            modelo: "Air Jordan 3 Retro",
            anio: 2019,
            color: "Azul",
            descripcion: "La Blue Jordan presenta una parte superior de cuero completamente azul con inserciones de cuero perforado gris en los cordones y el tobillo. Las insignias tradicionales de Jumpman cubren el talón.",
           
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-blue.png",
            comentarios: [
                {
                    usuario: 'M. Ramirez',
                    comentario: 'Compré medio punto más de lo que calzo porque tengo otras air max que cuando camino me toca el dedo en la punta y es doloroso. Con medio punto más quedan perfectas! son menos rosadas que en la foto pero hermosasss!!!.',
                    imagenUsuario: "/images/users/imagenUsuario0.png",
                },

                {
                    usuario: 'F. Lopez',
                    comentario: 'De aspecto muy lindas, el talle me fue bien según la tabla de talles, pero a pesar de tener camara de aire son bastante duras, esperaba que sean mas cómodas. La caja vino toda aplastada , y me pareció re desagradable que adentro de la caja le pusieron basura, tenia 1 cajita de chicles vacia y los rellenos y etiqueta de una zapatilla puma para niños.',
                    imagenUsuario: "/images/users/imagenUsuario1.png",
                },
            ]
        },
        {
            id: 1,
            nombre: "JORDAN CLASSIC",
            modelo: "Pure Platinium",
            anio: 2019,
            color: "Blanco",
            descripcion: "Su diseño, clásico y sobrio, está hecho completamente en la parte superior de piel blanca y toques de 'plata pura' sobre el Swoosh, la plantilla y la suela. También cuenta con perforaciones de ventilación en la puntera, una lengüeta de malla transpirable y un acolchado alrededor del tobillo para mayor comodidad.",
           
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-classic.png",
            comentarios: [
                {
                    usuario: 'T. Alvarez',
                    comentario: 'Hola. Las zapatillas me quedaron grandes las compare con otras nike q tengo x eso pedí ese número pero son te grandes nada que ver. Y otra cosa que me pasa es que cuando llueve y salgo con esas zapatillas me resbaló no se xq se resbalan como si fuera sintético. Pero bueno ya está.',
                    imagenUsuario: "/images/users/imagenUsuario2.png",
                },

                {
                    usuario: 'M. Rangogni',
                    comentario: 'Muy lindas las zapatillas, lastima el correo andreani de san justo (calle mendoza) q miente que no encontraron el domicilio, miles de paquetes vuelven, porque les da lo mismo. Tuve que salir a buscarla,gastar en remis, arriesgarme con la situación en la que estamos. El producto 10 puntos.',
                    imagenUsuario: "/images/users/imagenUsuario3.png",
                },
            ]
        },
        {
            id: 2,
            nombre: "JORDAN GREEN",
            modelo: "Pro Green",
            anio: 2020,
            color: "Verde",
            descripcion: 'Esta edición canaliza el estilo de la vieja escuela con una silueta de corte alto y un look retro compuesto por un upper de piel de flor, una lengüeta de malla y una mediasuela de espuma que ofrece una amortiguación ligera y eficaz.',
           
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-green.png",
            comentarios: [
                {
                    usuario: 'J. Cukier Holmberg',
                    comentario: 'En la publicación las zapatillas aparecen con la capellána color beige y la goma de la planta amarilla y me gustó esa combinación pero resulta que cuando recibí y vi el calzado vinieron con zuela. Color beige también no me gustó para nada.',
                    imagenUsuario: "/images/users/imagenUsuario4.png",
                },
                {
                    usuario: 'M. Campitelli',
                    comentario: 'Hola, buenas noches. Tradeas? Si te interesa tengo unas Yeezy 380 Onyx, 10us, que sería aprox el mismo calce en cm. También soy de Ros, saludos',
                    imagenUsuario: "/images/users/imagenUsuario5.png",
                },
            ]
        },
        {
            id: 3,
            nombre: "JORDAN HIGH",
            modelo: "High OG",
            anio: 2019,
            color: "Verde Guerra",
            descripcion: "La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil, la entresuela y el parche con la marca.",
           
            describirse: function(){
                return `Hola soy ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-high.png",
            comentarios: [
                {
                    usuario: 'D. Cardona',
                    comentario: 'Hola como va consulta, como viene el productos?. Con la caja original, y los sellos en la misma caja, que dicta la serie del producto y eso?. Desde ya gracias.',
                    imagenUsuario: "/images/users/imagenUsuario6.png",
                },
                {
                    usuario: 'T. Del Pino',
                    comentario: 'Hola cuantos cm son? donde nos podemos encontrar?',
                    imagenUsuario: "/images/users/imagenUsuario7.png",
                },
            ]
        },
        {
            id: 4,
            nombre: "JORDAN JBALVIN",
            modelo: "Balvin",
            anio: 2019,
            color: "Multicolor",
            descripcion: "Los gráficos personalizables (incluida la cara sonriente característica de Balvin) le dan un giro distintivo a la lengüeta, con imágenes similares que adornan la plantilla y el talón del calzado.",
            
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-jbalvin.png",
            comentarios: [
                {
                    usuario: 'G. Corti',
                    comentario: 'Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM',
                    imagenUsuario: "/images/users/imagenUsuario8.png",
                },
                {
                    usuario: 'C. Ortiz Quirno',
                    comentario: 'Hola son de oro los cordones?',
                    imagenUsuario: "/images/users/imagenUsuario9.png",
                },
            ]
        },
        {
            id: 5,
            nombre: "JORDAN PINK",
            modelo: "Strawberry",
            anio: 2020,
            color: "Rosa",
            descripcion: "Está detallado en la lengüeta y el interior con ilustraciones de fresas y limones que hacen alusión a su nombre. Además, proporciona la misma amortiguación ligera de las Pink Jordan gracias a la tecnología Air.",
           
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-pink.png",
            comentarios: [
                {
                    usuario: 'B. Gimenez',
                    comentario: 'Hola podes subir una foto de las suelas?',
                    imagenUsuario: "/images/users/imagenUsuario10.png",
                },
                {
                    usuario: 'J. Lipson',
                    comentario: 'Estas zapatillas son icónicas. Mi hijo es deportista y está encantado con su regalo de cumpleaños 46.',
                    imagenUsuario: "/images/users/imagenUsuario11.png",
                },
            ]
        },
        {
            id: 6,
            nombre: "JORDAN RETRO",
            modelo: "Light Smoke",
            anio: 2019,
            color: "Gris y Rojo",
            descripcion: "Las Retro Jordan estan compuestas por una parte superior de cuero blanco con superposiciones de gamuza gris y un panel de tobillo de cuero rojo.",
            
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-retro.png",
            comentarios: [
                {
                    usuario: 'L. Romano',
                    comentario: 'Muy buen producto, unico que la caja estaba en mal estado.',
                    imagenUsuario: "/images/users/imagenUsuario12.png",
                },
                {
                    usuario: 'L. Nazar Anchorena',
                    comentario: 'Muy pikadas pa. No se que decir porque no me alcanzan los caracteres si no pero muy pikadas.',
                    imagenUsuario: "/images/users/imagenUsuario13.png",
                },
            ]
        },

        {
            id: 7,
            nombre: "JORDAN SNAKE",
            modelo: "Satin",
            anio: 2021,
            color: "Rojo, Negro y Blanco",
            descripcion: "Este Jordan consta de una parte superior de cuero blanco y rojo con lengüeta y forro de satin rojo. Los detalles de piel de serpiente sintética negra también aparecen en la parte superior. Una entresuela blanca, suela roja y un gráfico tradicional de Jordan Wings en el tobillo completan el diseño.",
           
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-snake.png",
            comentarios: [
                {
                    usuario: 'R. Castelo',
                    comentario: 'Hola! Vi que en los comentarios tenías unas de 25 cm. Las seguís teniendo? Gracias!',
                    imagenUsuario: "/images/users/imagenUsuario14.png",
                },
                {
                    usuario: 'J.P. Ascani',
                    comentario: 'Es verdad que según el color varía el precio, lo que no me parece correcto es que las cobres a ese precio sin mínimamente entregarlas con su caja original . Si vas a pedir eso dámelas igual que como me las darían en una tienda en Estados Unidos.',
                    imagenUsuario: "/images/users/imagenUsuario15.png",
                },
            ]
        },
        {
            id: 8,
            nombre: "JORDAN VIOLETA",
            modelo: "ACG Terra",
            anio: 2020,
            color: "Violeta",
            descripcion: "Las famosas líneas del calzado se han mantenido sin cambios desde su inicio en el 85, pero esta versión modificada del clásico tiene una unidad Zoom Air en el talón y una lengüeta acolchada para que puedas navegar cómodamente. Materiales de primera calidad y una combinación de colores de muselina añaden un elemento moderno a esta silueta baja.",
            
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-violeta.png",
            comentarios: [
                {
                    usuario: 'S. De Pellegrin',
                    comentario: 'Hola ayer te hable por las zapatillas las voy a comprar tenes un numero como para comunicarme asi arreglamos lo del talle',
                    imagenUsuario: "/images/users/imagenUsuario16.png",
                },
                {
                    usuario: 'J. Sterinzon',
                    comentario: 'Hola tenes las 8,5? Tengo 14000 de contado',
                    imagenUsuario: "/images/users/imagenUsuario17.png",
                },
            ]
        },
        {
            id: 9,
            nombre: "JORDAN YELLOW",
            modelo: "Michigan",
            anio: 2021,
            color: "Amarillas",
            descripcion: "Inspiradas en uno de los equipos deportivos con más historia en el mundo universitario, estas zapatillas proporcionan el mejor estilo y comodidad a través de los colores insignia de los Wolverines y elementos clásicos de la serie Dunk, como la parte superior de piel ligera, la lengüeta de malla y la mediasuela de espuma.",
            
            describirse: function(){
                return `Hola soy la Jordan ${productos.lista[0].nombre}, modelo ${productos.lista[0].modelo}, fabricado en el año ${productos.lista[0].anio} y de color ${productos.lista[0].color}`
            },

            imagen: "/images/jordan/jordan-yellow.png",
            comentarios: [
                {
                    usuario: 'P. Correa',
                    comentario: 'La iba a comprar y me la subiste mas rapido que el dolar',
                    imagenUsuario: "/images/users/imagenUsuario18.png",
                },
                {
                    usuario: 'T. Mihailovich',
                    comentario: 'Si el pie mide 22cm a que nro corresponde?',
                    imagenUsuario: "/images/users/imagenUsuario19.png",
                },
            ]
        },
        
    ]
}



module.exports = productos;