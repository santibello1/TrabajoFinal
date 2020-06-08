-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-06-2020 a las 15:27:21
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto_integrador`
--
CREATE DATABASE IF NOT EXISTS `proyecto_integrador` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `proyecto_integrador`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenias`
--

CREATE TABLE `resenias` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_pelicula` int(10) UNSIGNED NOT NULL,
  `id_usuario` int(10) UNSIGNED NOT NULL,
  `texto_resenia` varchar(255) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `fecha_actualizacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `puntaje_pelicula` decimal(8,2) DEFAULT 0.00
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `resenias`
--

INSERT INTO `resenias` (`id`, `id_pelicula`, `id_usuario`, `texto_resenia`, `fecha_creacion`, `fecha_actualizacion`, `puntaje_pelicula`) VALUES
(1, 419704, 9, 'Malisima!', '2020-06-01 18:12:43', '2020-06-01 18:12:43', '1.00'),
(2, 419704, 10, 'Me encanto este pelicula! Amo el espacio, las estrellas son re copadas. Los efectos especiales son tremendos. Me senti en el espacio. Aguante la NASA', '2020-06-01 19:41:04', '2020-06-01 19:41:04', '4.00'),
(3, 419704, 11, 'TREMENDA ES MI PREFERIDA', '2020-06-06 20:46:30', '2020-06-06 21:12:43', '5.00'),
(4, 514847, 11, 'Esta reseña es para borrar', '2020-06-06 21:18:55', '2020-06-06 21:18:55', '3.00'),
(5, 419704, 11, 'Muy buena!', '2020-06-08 13:10:55', '2020-06-08 13:10:55', '5.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre_de_usuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fecha_de_nacimiento` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre_de_usuario`, `email`, `password`, `fecha_de_nacimiento`) VALUES
(1, 'Delfina', 'villandelfi@gmail.com', 'delfina', '2000-08-17 00:00:00'),
(2, 'Delfina', 'villandelfi@gmail.com', 'delfina', '2000-08-17 00:00:00'),
(3, 'Federico', 'villanfede@gmail.com', 'fede', '2002-08-04 00:00:00'),
(4, 'Feli', 'felirey@gmail.com', 'feli', '2001-08-03 00:00:00'),
(5, 'de', '', '', '0000-00-00 00:00:00'),
(6, 'Delfina', 'vickyllana@outlook.com', '', '2000-08-17 00:00:00'),
(7, 'Aequeo', 'aequobymaru@gmail.com', 'aequo', '0001-01-01 00:00:00'),
(8, 'Mariana', 'maruviglione@gmail.com', '$2a$10$j4bUbhHhM.hcOORooSxJJuKe1GAX0ptIzIPoxMomX/5hRLoIJwf/e', '1974-02-17 00:00:00'),
(9, 'Llana', 'llana@gmail.com', '$2a$10$s84makaML3egFlu3074o4urz/1U8qOt0rOXdAZHkS0fMe9SbbXzSy', '2000-03-02 00:00:00'),
(10, 'Cami', 'cami@gmail.com', '$2a$10$DBNEiiQt56i..PzCX7D5B.zCQ9P27dCLywUEouzT5p6K2bWoTuzLu', '2001-03-31 00:00:00'),
(11, 'juana', 'juana@gmail.com', '$2a$10$xBgAkMDZfczt.V9GFgCF/ejGBPDBEDYlCdemhrChhfUHbH4c8q3EW', '1999-11-12 00:00:00'),
(12, 'javi', 'javi@gmail.com', '$2a$10$KabosIuM4l8cSzttLSrPe.N/MZBZhvpEhigHlpt0Mg9GiuT3lbc7.', '2222-02-02 00:00:00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD CONSTRAINT `resenias_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
