-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Nov 17, 2020 at 01:19 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiktokmagic`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` int(5) DEFAULT NULL,
  `tiktok_username` varchar(255) DEFAULT NULL,
  `tiktok_password` varchar(255) DEFAULT NULL,
  `capabilities` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `tiktok_username`, `tiktok_password`, `capabilities`) VALUES
(1, 1, 'asd', 'asd', 'Discover,Messages');

-- --------------------------------------------------------

--
-- Table structure for table `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
CREATE TABLE IF NOT EXISTS `campaigns` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` int(5) DEFAULT NULL,
  `data` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `campaigns`
--

INSERT INTO `campaigns` (`id`, `username`, `data`) VALUES
(1, 1, NULL),
(2, 1, '{\"likesdaily\":\"500\"}'),
(3, 1, '{\"likesdaily\":\"1000\",\"followsdaily\":\"938\",\"followersalready\":\"52\",\"unfollowsdaily\":\"976\",\"nointeraction\":\"53\"}');

-- --------------------------------------------------------

--
-- Table structure for table `captchas`
--

DROP TABLE IF EXISTS `captchas`;
CREATE TABLE IF NOT EXISTS `captchas` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `code` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `captchas`
--

INSERT INTO `captchas` (`id`, `code`) VALUES
(1, 'window_screen_noclass.png'),
(2, 'window_screen_noclass.png'),
(3, 'window_screen_noclass.png'),
(4, 'window_screen_noclass.png'),
(5, 'window_screen_noclass.png'),
(6, 'window_screen_noclass.png'),
(7, 'window_screen_noclass.png'),
(8, 'window_screen_noclass.png'),
(9, 'window_screen_noclass.png'),
(10, 'window_screen_noclass.png'),
(11, 'window_screen_noclass.png'),
(12, 'window_screen_noclass.png'),
(13, 'window_screen_noclass.png'),
(14, 'window_screen_noclass.png'),
(15, 'window_screen_noclass.png'),
(16, 'window_screen_noclass.png'),
(17, 'window_screen_noclass.png'),
(18, 'window_screen_noclass.png'),
(19, 'window_screen_noclass.png'),
(20, 'window_screen_noclass.png'),
(21, 'window_screen_noclass.png'),
(22, 'window_screen_noclass.png'),
(23, 'window_screen_noclass.png'),
(24, 'window_screen_noclass.png'),
(25, 'window_screen_noclass.png'),
(26, 'window_screen_noclass.png'),
(27, 'window_screen_noclass.png'),
(28, 'window_screen_noclass.png'),
(29, 'window_screen_noclass.png');

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` int(5) DEFAULT NULL,
  `thecomment` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `username`, `thecomment`) VALUES
(1, 1, 'adfasd asdfasdf'),
(2, 1, 'hfgh 24234234'),
(6, 1, 'Ali new comment'),
(4, 1, 'asfasdf'),
(5, 1, 'New Comment');

-- --------------------------------------------------------

--
-- Table structure for table `saved_hashtags`
--

DROP TABLE IF EXISTS `saved_hashtags`;
CREATE TABLE IF NOT EXISTS `saved_hashtags` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` int(5) DEFAULT NULL,
  `hashtag_name` varchar(255) DEFAULT NULL,
  `thedata` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `saved_users`
--

DROP TABLE IF EXISTS `saved_users`;
CREATE TABLE IF NOT EXISTS `saved_users` (
  `id` int(5) NOT NULL,
  `username` int(5) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `user_ids` text,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
