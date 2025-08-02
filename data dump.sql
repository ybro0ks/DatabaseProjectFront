-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 02, 2024 at 10:38 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `users`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `line1` varchar(99) NOT NULL,
  `line2` varchar(99) NOT NULL,
  `town` varchar(99) NOT NULL,
  `countycity` varchar(99) NOT NULL,
  `eircode` varchar(99) NOT NULL,
  `identify` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`line1`, `line2`, `town`, `countycity`, `eircode`, `identify`) VALUES
('james', 'james', 'jma', 'jame', 'sjf', NULL),
('43rfj', '3rfr', '44f', '4f4f', 'fr', 13),
('2333', '3232', '3232', '32', '3232', 14),
('ttt', 't', 'tt', 't', 't', 15),
('rr', 'rr', 'rr', 'rr', 'rr', 16);

-- --------------------------------------------------------

--
-- Table structure for table `personalinformation`
--

CREATE TABLE `personalinformation` (
  `TITLE` varchar(99) NOT NULL,
  `first name` varchar(255) DEFAULT NULL,
  `SURNAME` varchar(99) NOT NULL,
  `MOBILE` int(99) NOT NULL,
  `EMAIL ADDRESS` text NOT NULL,
  `identify` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personalinformation`
--

INSERT INTO `personalinformation` (`TITLE`, `first name`, `SURNAME`, `MOBILE`, `EMAIL ADDRESS`, `identify`) VALUES
('miss', 'aliyat', 'mustapha', 89999888, 'aliyatmustapha@mumail.ie', 2),
('mr', 'james', 'donogoe', 38449330, 'fuurr@gmail.com', 3),
('mr', 'james', 'donohoe', 435234544, 'gjguoigr@gmail.com', 4),
('mr', 'james', 'donooh', 494583, 'hfyuef@gmail.com', 5),
('mr', 'james', 'donohoe', 452354, 'jame@gmail.com', 6),
('mr', 'james', 'dono', 34345543, 'dffjgf@gmail.com', 7),
('mr', 'james', 'donohoe', 3490303, 'jamesdo@gmail.com', 9),
('mr', 'james', 'donohoe', 243233, 'rim@gmail.com', 10),
('mr', 'james', 'do', 34532, 'grimgnr@gmail.com', 11),
('mr', 'james', 'donohoe', 3245432, 'fif@gmif.com', 12),
('mr', 'ja', 'efrf', 43254, 'djff@grmi.com', 13),


--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD KEY `fk_identify` (`identify`);

--
-- Indexes for table `personalinformation`
--
ALTER TABLE `personalinformation`
  ADD PRIMARY KEY (`identify`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `personalinformation`
--
ALTER TABLE `personalinformation`
  MODIFY `identify` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `address`
--
ALTER TABLE `address`
  ADD CONSTRAINT `fk_identify` FOREIGN KEY (`identify`) REFERENCES `personalinformation` (`identify`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
