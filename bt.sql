-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 18, 2018 at 03:45 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bt`
--

-- --------------------------------------------------------

--
-- Table structure for table `anh`
--

CREATE TABLE IF NOT EXISTS `anh` (
`MAANH` int(11) NOT NULL,
  `MAP` int(11) NOT NULL,
  `HINHANH` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `ctdp`
--

CREATE TABLE IF NOT EXISTS `ctdp` (
  `MAHD` int(11) NOT NULL,
  `MAP` int(11) NOT NULL,
  `CHUTHICH` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `ctdv`
--

CREATE TABLE IF NOT EXISTS `ctdv` (
  `MAHD` int(11) NOT NULL,
  `MADV` int(11) NOT NULL,
  `CHUTHICH` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cttn`
--

CREATE TABLE IF NOT EXISTS `cttn` (
  `MAP` int(11) NOT NULL,
  `MATN` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dichvu`
--

CREATE TABLE IF NOT EXISTS `dichvu` (
`MADV` int(11) NOT NULL,
  `TENDV` varchar(100) NOT NULL,
  `GIADV` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE IF NOT EXISTS `hoadon` (
`MAHD` int(11) NOT NULL,
  `MAK` int(11) NOT NULL,
  `DATPHONGTU` date NOT NULL,
  `DENNGAY` date NOT NULL,
  `TONGTIEN` int(11) NOT NULL,
  `CHUTHICH` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `khach`
--

CREATE TABLE IF NOT EXISTS `khach` (
`MAK` int(11) NOT NULL,
  `HOTENK` varchar(35) NOT NULL,
  `SDT` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `loaiphong`
--

CREATE TABLE IF NOT EXISTS `loaiphong` (
`MALP` int(11) NOT NULL,
  `TENLP` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `phong`
--

CREATE TABLE IF NOT EXISTS `phong` (
`MAP` int(11) NOT NULL,
  `MALP` int(11) NOT NULL,
  `GIAP` int(11) NOT NULL,
  `TRANGTHAI` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `taikhoan`
--

CREATE TABLE IF NOT EXISTS `taikhoan` (
`MATK` int(11) NOT NULL,
  `TENDANGNHAP` varchar(50) NOT NULL,
  `MATKHAU` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tiennghi`
--

CREATE TABLE IF NOT EXISTS `tiennghi` (
`MATN` int(11) NOT NULL,
  `TENTN` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 AUTO_INCREMENT=1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anh`
--
ALTER TABLE `anh`
 ADD PRIMARY KEY (`MAANH`), ADD KEY `MAP` (`MAP`);

--
-- Indexes for table `ctdp`
--
ALTER TABLE `ctdp`
 ADD PRIMARY KEY (`MAHD`,`MAP`), ADD KEY `MAP` (`MAP`);

--
-- Indexes for table `ctdv`
--
ALTER TABLE `ctdv`
 ADD PRIMARY KEY (`MAHD`,`MADV`), ADD KEY `MADV` (`MADV`);

--
-- Indexes for table `cttn`
--
ALTER TABLE `cttn`
 ADD PRIMARY KEY (`MAP`,`MATN`), ADD KEY `MATN` (`MATN`);

--
-- Indexes for table `dichvu`
--
ALTER TABLE `dichvu`
 ADD PRIMARY KEY (`MADV`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
 ADD PRIMARY KEY (`MAHD`), ADD KEY `MAK` (`MAK`);

--
-- Indexes for table `khach`
--
ALTER TABLE `khach`
 ADD PRIMARY KEY (`MAK`);

--
-- Indexes for table `loaiphong`
--
ALTER TABLE `loaiphong`
 ADD PRIMARY KEY (`MALP`);

--
-- Indexes for table `phong`
--
ALTER TABLE `phong`
 ADD PRIMARY KEY (`MAP`), ADD KEY `MALP` (`MALP`);

--
-- Indexes for table `taikhoan`
--
ALTER TABLE `taikhoan`
 ADD PRIMARY KEY (`MATK`);

--
-- Indexes for table `tiennghi`
--
ALTER TABLE `tiennghi`
 ADD PRIMARY KEY (`MATN`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anh`
--
ALTER TABLE `anh`
MODIFY `MAANH` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `dichvu`
--
ALTER TABLE `dichvu`
MODIFY `MADV` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
MODIFY `MAHD` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `khach`
--
ALTER TABLE `khach`
MODIFY `MAK` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `loaiphong`
--
ALTER TABLE `loaiphong`
MODIFY `MALP` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `phong`
--
ALTER TABLE `phong`
MODIFY `MAP` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `taikhoan`
--
ALTER TABLE `taikhoan`
MODIFY `MATK` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `tiennghi`
--
ALTER TABLE `tiennghi`
MODIFY `MATN` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
