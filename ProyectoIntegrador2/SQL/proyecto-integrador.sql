CREATE SCHEMA `ProyectoIntegrador1` DEFAULT CHARACTER SET utf8;
USE `ProyectoIntegrador1`;

CREATE TABLE `Usuarios` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`nombre` VARCHAR (100) NOT NULL,
`Email` VARCHAR (200) NOT NULL,
`Password` VARCHAR (200) NOT NULL,
`Telefono` VARCHAR (20) NOT NULL,
`FechaDeNacimiento` DATE NOT NULL
);

CREATE TABLE `Productos` (
`id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
`imagen` VARCHAR (300) NOT NULL,
`Nombre` VARCHAR (100) NOT NULL,
`descripcion` VARCHAR (500) NOT NULL,
`Fecha` DATE NOT NULL,

`usuario_id` INT UNSIGNED,

FOREIGN KEY (usuario_id) REFERENCES usuarios (id)
);

CREATE TABLE `Comentarios` (
`id` INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
`texto` TEXT,
`creacion` DATE NOT NULL,

`usuario_id` INT UNSIGNED,
`producto_id` INT UNSIGNED, 

FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
FOREIGN KEY (producto_id) REFERENCES productos (id)
);

INSERT INTO `Usuarios` VALUES (default, "Martin Ramirez", "mramirez@udesa.edu.ar","martin", "1169958180", "2001-07-04");
INSERT INTO `Usuarios` VALUES (default, "Francisco Lopez", "flopez@udesa.edu.ar","francisco", "1169958181", "2001-08-24");
INSERT INTO `Usuarios` VALUES (default, "Teo Alvarez", "talvarez@udesa.edu.ar","teo", "1169958182", "2001-09-14");
INSERT INTO `Usuarios` VALUES (default, "Marcos Rangoni", "mrangoni@udesa.edu.ar","marcos" , "1169958154", "2001-11-13");
INSERT INTO `Usuarios` VALUES (default, "Joaquin Cukier", "jcukier@udesa.edu.ar","joaquin", "11699581233", "2000-12-24");

INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-blue.png", "Jordan Blue","La Blue Jordan presenta una parte superior de cuero completamente azul con inserciones de cuero perforado gris en los cordones y el tobillo. Las insignias tradicionales de Jumpman cubren el talón.", "2019-01-01", 1);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-classic.png", "Jordan Classic", "Su diseño, clásico y sobrio, está hecho completamente en la parte superior de piel blanca y toques de 'plata pura' sobre el Swoosh, la plantilla y la suela. También cuenta con perforaciones de ventilación en la puntera, una lengüeta de malla transpirable y un acolchado alrededor del tobillo para mayor comodidad.", "2019-02-01", 2);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-green.png", "Jordan Green","Esta edición canaliza el estilo de la vieja escuela con una silueta de corte alto y un look retro", "2020-03-01", 3);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-high.png", "Jordan High","La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil", "2019-04-01", 4);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-jbalvin.png", "Jordan Jbalvin","Los gráficos personalizables (incluida la cara sonriente característica de Balvin) le dan un giro distintivo a la lengüeta, con imágenes similares que adornan la plantilla y el talón del calzado.", "2019-05-01", 5);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-pink.png", "Jordan Pink", "Está detallado en la lengüeta y el interior con ilustraciones de fresas y limones que hacen alusión a su nombre.", "2020-06-01", 1);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-retro.png", "Jordan Retro","Las Retro Jordan estan compuestas por una parte superior de cuero blanco con superposiciones de gamuza gris", "2019-07-01", 2);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-snake.png", "Jordan Snake","Este Jordan consta de una parte superior de cuero blanco y rojo con lengüeta y forro de satin rojo.", "2021-08-01", 3);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-violeta.png", "Jordan Violeta","Las famosas líneas del calzado se han mantenido sin cambios desde su inicio en el 85", "2020-09-01", 4);
INSERT INTO `Productos` VALUES (default, "/images/jordan/jordan-yellow.png", "Jordan Yellow","Inspiradas en uno de los equipos deportivos con más historia en el mundo universitario", "2021-10-01", 5);

INSERT INTO `Comentarios` VALUES (default, "Compré medio punto más de lo que calzo porque tengo otras air max que cuando camino me toca el dedo en la punta y es doloroso. Con medio punto más quedan perfectas! son menos rosadas que en la foto pero hermosasss!!!.", "2021-10-02", 1, 1);
INSERT INTO `Comentarios` VALUES (default,"De aspecto muy lindas, el talle me fue bien según la tabla de talles, pero a pesar de tener camara de aire son bastante duras, esperaba que sean mas cómodas. La caja vino toda aplastada , y me pareció re desagradable que adentro de la caja le pusieron basura, tenia 1 cajita de chicles vacia y los rellenos y etiqueta de una zapatilla puma para niños.", "2021-10-02", 2, 1);
INSERT INTO `Comentarios` VALUES (default, "Hola. Las zapatillas me quedaron grandes las compare con otras nike q tengo x eso pedí ese número pero son te grandes nada que ver. Y otra cosa que me pasa es que cuando llueve y salgo con esas zapatillas me resbaló no se xq se resbalan como si fuera sintético. Pero bueno ya está.", "2021-10-02", 3, 1);
INSERT INTO `Comentarios` VALUES (default, "Muy lindas las zapatillas, lastima el correo andreani de san justo (calle mendoza) q miente que no encontraron el domicilio, miles de paquetes vuelven, porque les da lo mismo. Tuve que salir a buscarla,gastar en remis, arriesgarme con la situación en la que estamos. El producto 10 puntos.", "2021-10-02", 4, 1);
INSERT INTO `Comentarios` VALUES (default,"En la publicación las zapatillas aparecen con la capellána color beige y la goma de la planta amarilla y me gustó esa combinación pero resulta que cuando recibí y vi el calzado vinieron con zuela. Color beige también no me gustó para nada.", "2021-10-02", 5, 1);

INSERT INTO `Comentarios` VALUES (default, "Hola, buenas noches. Tradeas? Si te interesa tengo unas Yeezy 380 Onyx, 10us, que sería aprox el mismo calce en cm. También soy de Ros, saludos", "2021-10-02", 1, 2);
INSERT INTO `Comentarios` VALUES (default, "La puntera y la lengüeta tienen un color negro oscuro, que se acentúa aparte de los tonos blancos del perfil, la entresuela y el parche con la marca", "2021-11-02", 2, 2);
INSERT INTO `Comentarios` VALUES (default, "Hola como va consulta, como viene el productos?. Con la caja original, y los sellos en la misma caja, que dicta la serie del producto y eso?. Desde ya gracias.", "2021-12-02", 3, 2);
INSERT INTO `Comentarios` VALUES (default, "Hola cuantos cm son? donde nos podemos encontrar?", "2021-12-02", 4, 2);
INSERT INTO `Comentarios` VALUES (default, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM", "2021-10-02", 5, 2);

INSERT INTO `Comentarios` VALUES (default, "Hola son de oro los cordones?", "2021-12-02", 1, 3);
INSERT INTO `Comentarios` VALUES (default, "Hola podes subir una foto de las suelas?", "2021-01-02", 2, 3);
INSERT INTO `Comentarios` VALUES (default, "Estas zapatillas son icónicas. Mi hijo es deportista y está encantado con su regalo de cumpleaños 46.", "2021-12-02", 3, 3);
INSERT INTO `Comentarios` VALUES (default, "Muy buen producto, unico que la caja estaba en mal estado.", "2021-10-02", 4, 3);
INSERT INTO `Comentarios` VALUES (default, "Muy pikadas pa. No se que decir porque no me alcanzan los caracteres si no pero muy pikadas.", "2021-09-02", 5, 3);

INSERT INTO `Comentarios` VALUES (default, "Hola! Vi que en los comentarios tenías unas de 25 cm. Las seguís teniendo? Gracias!", "2021-10-02", 1, 4);
INSERT INTO `Comentarios` VALUES (default, "Es verdad que según el color varía el precio, lo que no me parece correcto es que las cobres a ese precio sin mínimamente entregarlas con su caja original . Si vas a pedir eso dámelas igual que como me las darían en una tienda en Estados Unidos.", "2021-08-02", 2, 4);
INSERT INTO `Comentarios` VALUES (default, "Hola ayer te hable por las zapatillas las voy a comprar tenes un numero como para comunicarme asi arreglamos lo del talle", "2021-03-02", 3, 4);
INSERT INTO `Comentarios` VALUES (default, "Hola tenes las 8,5? Tengo 14000 de contado", "2021-09-02", 4, 4);
INSERT INTO `Comentarios` VALUES (default, "La iba a comprar y me la subiste mas rapido que el dolar'", "2021-12-02", 5, 4);

INSERT INTO `Comentarios` VALUES (default, "Si el pie mide 22cm a que nro corresponde?", "2021-12-02", 1, 5);
INSERT INTO `Comentarios` VALUES (default, "Hola son de oro los cordones?", "2021-12-02", 2, 5);
INSERT INTO `Comentarios` VALUES (default, "Hola cuantos cm son? donde nos podemos encontrar?", "2021-11-02", 3, 5);
INSERT INTO `Comentarios` VALUES (default, "La iba a comprar y me la subiste mas rapido que el dolar", "2021-11-02", 4, 5);
INSERT INTO `Comentarios` VALUES (default, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM", "2021-11-02", 5, 5);

INSERT INTO `Comentarios` VALUES (default, "Hola muy buenas!!", "2021-09-02", 1, 6);
INSERT INTO `Comentarios` VALUES (default, "Hola tenes las 8,5? Tengo 14000 de contado", "2021-08-02", 2, 6);
INSERT INTO `Comentarios` VALUES (default, "Hola podes subir una foto de las suelas?", "2021-07-02", 3, 6);
INSERT INTO `Comentarios` VALUES (default, "Hola! Vi que en los comentarios tenías unas de 25 cm. Las seguís teniendo? Gracias!", "2021-07-02", 4, 6);
INSERT INTO `Comentarios` VALUES (default, "La iba a comprar y me la subiste mas rapido que el dolar", "2021-03-02", 5, 6);

INSERT INTO `Comentarios` VALUES (default, "Compré medio punto más de lo que calzo porque tengo otras air max que cuando camino me toca el dedo en la punta y es doloroso. Con medio punto más quedan perfectas! son menos rosadas que en la foto pero hermosasss!!!.", "2021-11-02", 1, 2);
INSERT INTO `Comentarios` VALUES (default, "Si el pie mide 22cm a que nro corresponde?", "2021-11-02", 2, 7);
INSERT INTO `Comentarios` VALUES (default, "Hola muy buenas!!", "2021-12-02", 3, 7);
INSERT INTO `Comentarios` VALUES (default, "Muy pikadas pa. No se que decir porque no me alcanzan los caracteres si no pero muy pikadas.", "2021-12-02", 4, 7);
INSERT INTO `Comentarios` VALUES (default, "Hola son de oro los cordones?", "2021-12-02", 5, 7);

INSERT INTO `Comentarios` VALUES (default, "Hola cuantos cm son? donde nos podemos encontrar?", "2021-12-02", 1, 8);
INSERT INTO `Comentarios` VALUES (default, "Estas zapatillas son icónicas. Mi hijo es deportista y está encantado con su regalo de cumpleaños 46.", "2021-11-02", 2, 8);
INSERT INTO `Comentarios` VALUES (default, "Hola tenes las 8,5? Tengo 14000 de contado", "2021-10-02", 3, 8);
INSERT INTO `Comentarios` VALUES (default, "Hola son de oro los cordones?", "2021-11-02", 4, 8);
INSERT INTO `Comentarios` VALUES (default, "Hola. Las zapatillas me quedaron grandes las compare con otras nike q tengo x eso pedí ese número pero son te grandes nada que ver. Y otra cosa que me pasa es que cuando llueve y salgo con esas zapatillas me resbaló no se xq se resbalan como si fuera sintético. Pero bueno ya está.", "2021-11-02", 5, 8);

INSERT INTO `Comentarios` VALUES (default, "La iba a comprar y me la subiste mas rapido que el dolar", "2021-11-02", 1, 9);
INSERT INTO `Comentarios` VALUES (default, "Estas zapatillas son icónicas.", "2021-12-02", 2, 9);
INSERT INTO `Comentarios` VALUES (default, "Hola cuantos cm son? donde nos podemos encontrar?", "2021-11-02", 3, 9);
INSERT INTO `Comentarios` VALUES (default, "La puntera y la lengüeta tienen un color negro oscuro", "2021-12-02", 4, 9);
INSERT INTO `Comentarios` VALUES (default, "Hola son de oro los cordones?", "2021-11-02", 5, 9);

INSERT INTO `Comentarios` VALUES (default, "Hola tenes las 8,5? Tengo 14000 de contado", "2021-11-02", 1, 10);
INSERT INTO `Comentarios` VALUES (default, "Muy buen producto, unico que la caja estaba en mal estado.", "2021-11-02", 2, 10);
INSERT INTO `Comentarios` VALUES (default, "Hola como va consulta, como viene el productos?", "2021-11-02", 3, 10);
INSERT INTO `Comentarios` VALUES (default, "Hola permutas por un Ferrari? Si me quedo corto le puedo sumar un una RAM", "2021-12-02", 4, 10);
INSERT INTO `Comentarios` VALUES (default, "Hola, buenas noches. Tradeas? Si te interesa tengo unas Yeezy 380 Onyx, 10us, que sería aprox el mismo calce en cm.", "2021-12-02", 5, 10);