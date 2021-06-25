CREATE SCHEMA `ProyectoIntegrador1` DEFAULT CHARACTER SET utf8;
USE `ProyectoIntegrador1`;

CREATE TABLE `Usuarios` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`nombre` VARCHAR (100) NOT NULL,
`Email` VARCHAR (200) NOT NULL,
`Password` VARCHAR (200) NOT NULL,
`Telefono` VARCHAR (20) NOT NULL,
`FechaDeNacimiento` DATE NOT NULL,
`imagen` VARCHAR (300) NOT NULL
);

CREATE TABLE `Productos` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`imagen` VARCHAR (300) NOT NULL,
`Nombre` VARCHAR (100) NOT NULL,
`descripcion` VARCHAR (500) NOT NULL,

`usuario_id` INT UNSIGNED,

FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE `Comentarios` (
`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
`texto` TEXT,

`usuario_id` INT UNSIGNED,
`producto_id` INT UNSIGNED, 

FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
FOREIGN KEY (producto_id) REFERENCES productos (id)
);

INSERT INTO `Usuarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Martin Ramirez", "mramirez@udesa.edu.ar","martin", "1169958180", "2001-07-04", "/images/users/imagenUsuario0.png");
INSERT INTO `Usuarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Francisco Lopez", "flopez@udesa.edu.ar","francisco", "1169958181", "2001-08-24","/images/users/imagenUsuario01.png");
INSERT INTO `Usuarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Teo Alvarez", "talvarez@udesa.edu.ar","teo", "1169958182", "2001-09-14","/images/users/imagenUsuario02.png");
INSERT INTO `Usuarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Marcos Rangoni", "mrangoni@udesa.edu.ar","marcos" , "1169958154", "2001-11-13", "/images/users/imagenUsuario03.png");
INSERT INTO `Usuarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Joaquin Cukier", "jcukier@udesa.edu.ar","joaquin", "11699581233", "2000-12-24", "/images/users/imagenUsuario04.png");

INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-blue.png", "Jordan Blue","La Blue Jordan presenta una parte superior de cuero completamente azul con inserciones de cuero perforado gris en los cordones y el tobillo. Las insignias tradicionales de Jumpman cubren el talón.", 1);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-classic.png", "Jordan Classic", "Su diseño, clásico y sobrio, está hecho completamente en la parte superior de piel blanca y toques de 'plata pura' sobre el Swoosh, la plantilla y la suela. También cuenta con perforaciones de ventilación en la puntera, una lengüeta de malla transpirable y un acolchado alrededor del tobillo para mayor comodidad.", 2);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-green.png", "Jordan Green","Esta edición canaliza el estilo de la vieja escuela con una silueta de corte alto y un look retro", 3);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-high.png", "Jordan High","La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil", 4);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-jbalvin.png", "Jordan Jbalvin","Los gráficos personalizables (incluida la cara sonriente característica de Balvin) le dan un giro distintivo a la lengüeta, con imágenes similares que adornan la plantilla y el talón del calzado.", 5);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-pink.png", "Jordan Pink", "Está detallado en la lengüeta y el interior con ilustraciones de fresas y limones que hacen alusión a su nombre.", 1);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-retro.png", "Jordan Retro","Las Retro Jordan estan compuestas por una parte superior de cuero blanco con superposiciones de gamuza gris", 2);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-snake.png", "Jordan Snake","Este Jordan consta de una parte superior de cuero blanco y rojo con lengüeta y forro de satin rojo.", 3);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-violeta.png", "Jordan Violeta","Las famosas líneas del calzado se han mantenido sin cambios desde su inicio en el 85", 4);
INSERT INTO `Productos` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "/images/jordan/jordan-yellow.png", "Jordan Yellow","Inspiradas en uno de los equipos deportivos con más historia en el mundo universitario", 5);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Compré medio punto más de lo que calzo porque tengo otras air max que cuando camino me toca el dedo en la punta y es doloroso. Con medio punto más quedan perfectas! son menos rosadas que en la foto pero hermosasss!!!.", 1, 1);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,"De aspecto muy lindas, el talle me fue bien según la tabla de talles, pero a pesar de tener camara de aire son bastante duras, esperaba que sean mas cómodas. La caja vino toda aplastada , y me pareció re desagradable que adentro de la caja le pusieron basura, tenia 1 cajita de chicles vacia y los rellenos y etiqueta de una zapatilla puma para niños.", 2, 1);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola. Las zapatillas me quedaron grandes las compare con otras nike q tengo x eso pedí ese número pero son te grandes nada que ver. Y otra cosa que me pasa es que cuando llueve y salgo con esas zapatillas me resbaló no se xq se resbalan como si fuera sintético. Pero bueno ya está.", 3, 1);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Muy lindas las zapatillas, lastima el correo andreani de san justo (calle mendoza) q miente que no encontraron el domicilio, miles de paquetes vuelven, porque les da lo mismo. Tuve que salir a buscarla,gastar en remis, arriesgarme con la situación en la que estamos. El producto 10 puntos.", 4, 1);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,"En la publicación las zapatillas aparecen con la capellána color beige y la goma de la planta amarilla y me gustó esa combinación pero resulta que cuando recibí y vi el calzado vinieron con zuela. Color beige también no me gustó para nada.", 5, 1);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola, buenas noches. Tradeas? Si te interesa tengo unas Yeezy 380 Onyx, 10us, que sería aprox el mismo calce en cm. También soy de Ros, saludos", 1, 2);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil, la entresuela y el parche con la marca", 2, 2);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola como va consulta, como viene el productos?. Con la caja original, y los sellos en la misma caja, que dicta la serie del producto y eso?. Desde ya gracias.", 3, 2);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola cuantos cm son? donde nos podemos encontrar?", 4, 2);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM", 5, 2);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola son de oro los cordones?",1, 3);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola podes subir una foto de las suelas?", 2, 3);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Estas zapatillas son icónicas. Mi hijo es deportista y está encantado con su regalo de cumpleaños 46.", 3, 3);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Muy buen producto, unico que la caja estaba en mal estado.", 4, 3);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Muy pikadas pa. No se que decir porque no me alcanzan los caracteres si no pero muy pikadas.", 5, 3);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola! Vi que en los comentarios tenías unas de 25 cm. Las seguís teniendo? Gracias!", 1, 4);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Es verdad que según el color varía el precio, lo que no me parece correcto es que las cobres a ese precio sin mínimamente entregarlas con su caja original . Si vas a pedir eso dámelas igual que como me las darían en una tienda en Estados Unidos.", 2, 4);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola ayer te hable por las zapatillas las voy a comprar tenes un numero como para comunicarme asi arreglamos lo del talle", 3, 4);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola tenes las 8,5? Tengo 14000 de contado", 4, 4);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La iba a comprar y me la subiste mas rapido que el dolar'", 5, 4);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Si el pie mide 22cm a que nro corresponde?", 1, 5);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola son de oro los cordones?", 2, 5);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola cuantos cm son? donde nos podemos encontrar?", 3, 5);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La iba a comprar y me la subiste mas rapido que el dolar", 4, 5);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM",  5, 5);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola muy buenas!!", 1, 6);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola tenes las 8,5? Tengo 14000 de contado", 2, 6);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola podes subir una foto de las suelas?", 3, 6);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola! Vi que en los comentarios tenías unas de 25 cm. Las seguís teniendo? Gracias!", 4, 6);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La iba a comprar y me la subiste mas rapido que el dolar", 5, 6);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Compré medio punto más de lo que calzo porque tengo otras air max que cuando camino me toca el dedo en la punta y es doloroso. Con medio punto más quedan perfectas! son menos rosadas que en la foto pero hermosasss!!!.", 1, 2);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Si el pie mide 22cm a que nro corresponde?", 2, 7);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola muy buenas!!", 3, 7);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Muy pikadas pa. No se que decir porque no me alcanzan los caracteres si no pero muy pikadas.", 4, 7);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP,"Hola son de oro los cordones?",  5, 7);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola cuantos cm son? donde nos podemos encontrar?", 1, 8);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Estas zapatillas son icónicas. Mi hijo es deportista y está encantado con su regalo de cumpleaños 46.", 2, 8);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola tenes las 8,5? Tengo 14000 de contado", 3, 8);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola son de oro los cordones?", 4, 8);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola. Las zapatillas me quedaron grandes las compare con otras nike q tengo x eso pedí ese número pero son te grandes nada que ver. Y otra cosa que me pasa es que cuando llueve y salgo con esas zapatillas me resbaló no se xq se resbalan como si fuera sintético. Pero bueno ya está.", 5, 8);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La iba a comprar y me la subiste mas rapido que el dolar", 1, 9);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Estas zapatillas son icónicas.", 2, 9);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola cuantos cm son? donde nos podemos encontrar?", 3, 9);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "La puntera y la lengüeta tienen un color negro oscuro", 4, 9);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola son de oro los cordones?", 5, 9);

INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola tenes las 8,5? Tengo 14000 de contado", 1, 10);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Muy buen producto, unico que la caja estaba en mal estado.", 2, 10);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola como va consulta, como viene el productos?", 3, 10);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM", 4, 10);
INSERT INTO `Comentarios` VALUES (default, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, "Hola, buenas noches. Tradeas? Si te interesa tengo unas Yeezy 380 Onyx, 10us, que sería aprox el mismo calce en cm.", 5, 10);