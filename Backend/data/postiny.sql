-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 28, 2022 at 04:39 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `postiny`
--

-- --------------------------------------------------------

--
-- Table structure for table `advertisement`
--

CREATE TABLE `advertisement` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `article_id` int(11) NOT NULL,
  `publish_date` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL AUTO_INCREMENT,
  `author_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `content` varchar(4096) NOT NULL,
  `article_pic` varchar(128) NOT NULL,
  `sub_required` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `articleviewing`
--

CREATE TABLE `articleviewing` (
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL AUTO_INCREMENT,
  `category_name` varchar(16) NOT NULL,
  `category_icon` varchar(128) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `content` varchar(256) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `likearticle`
--

CREATE TABLE `likearticle` (
  `user_id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `approver_id` int(11) DEFAULT NULL,
  `status_id` int(11) NOT NULL,
  `is_withdrawal` tinyint(1) NOT NULL,
  `amount` int(11) NOT NULL,
  `payment_slip` varchar(128) NOT NULL,
  `description` varchar(256) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`payment_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_type_id` int(11) NOT NULL,
  `reporter_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  `payment_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  `admin_id` int(11) DEFAULT NULL,
  `description` varchar(256) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`report_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `reporttype`
--

CREATE TABLE `reporttype` (
  `report_type_id` int(11) NOT NULL AUTO_INCREMENT,
  `report_type_name` varchar(16) NOT NULL,
  PRIMARY KEY (`report_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `role_name` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `status_name` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `subscription`
--

CREATE TABLE `subscription` (
  `subscriber_id` int(11) NOT NULL,
  `subscribed_user_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `username` varchar(16) NOT NULL,
  `password` varchar(16) NOT NULL,
  `email` varchar(64) NOT NULL,
  `firstname` varchar(32) NOT NULL,
  `lastname` varchar(32) NOT NULL,
  `DOB` date NOT NULL,
  `gender` char(1) NOT NULL,
  `phone_number` char(10) NOT NULL,
  `profile_pic` varchar(128) DEFAULT NULL,
  `bio` varchar(128) DEFAULT NULL,
  `coin_balance` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

--
-- Table structure for table `userinterest`
--

CREATE TABLE `userinterest` (
  `user_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


--
-- Indexes for dumped tables
--

--
-- Indexes for table `advertisement`
--
ALTER TABLE `advertisement`
--   ADD PRIMARY KEY (`ad_id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `article`
--
ALTER TABLE `article`
--   ADD PRIMARY KEY (`article_id`),
  ADD KEY `category_id` (`category_id`),
  ADD KEY `author_id` (`author_id`);

--
-- Indexes for table `articleviewing`
--
ALTER TABLE `articleviewing`
  ADD PRIMARY KEY (`user_id`,`article_id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `category`
--
-- ALTER TABLE `category`
--   ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
--   ADD PRIMARY KEY (`comment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `likearticle`
--
ALTER TABLE `likearticle`
  ADD PRIMARY KEY (`user_id`,`article_id`),
  ADD KEY `article_id` (`article_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
--   ADD PRIMARY KEY (`payment_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `approver_id` (`approver_id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
--   ADD PRIMARY KEY (`report_id`),
  ADD KEY `report_type_id` (`report_type_id`),
  ADD KEY `status_id` (`status_id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `payment_id` (`payment_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `reporter_id` (`reporter_id`),
  ADD KEY `admin_id` (`admin_id`);

--
-- Indexes for table `reporttype`
--
-- ALTER TABLE `reporttype`
--   ADD PRIMARY KEY (`report_type_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `subscription`
--
ALTER TABLE `subscription`
  ADD PRIMARY KEY (`subscriber_id`,`subscribed_user_id`),
  ADD KEY `subscribed_user_id` (`subscribed_user_id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
--   ADD PRIMARY KEY (`user_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `userinterest`
--
ALTER TABLE `userinterest`
  ADD PRIMARY KEY (`user_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `advertisement`
--
ALTER TABLE `advertisement`
  ADD CONSTRAINT `advertisement_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `article_author` FOREIGN KEY (`author_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `articleviewing`
--
ALTER TABLE `articleviewing`
  ADD CONSTRAINT `articleviewing_user` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `articleviewing_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_user` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `comment_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `likearticle`
--
ALTER TABLE `likearticle`
  ADD CONSTRAINT `likearticle_user` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `likearticle_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_user` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `payment_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `payment_approver` FOREIGN KEY (`approver_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_report_type` FOREIGN KEY (`report_type_id`) REFERENCES `reporttype` (`report_type_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_status` FOREIGN KEY (`status_id`) REFERENCES `status` (`status_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_article` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_payment` FOREIGN KEY (`payment_id`) REFERENCES `payment` (`payment_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_comment` FOREIGN KEY (`comment_id`) REFERENCES `comment` (`comment_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_reporter` FOREIGN KEY (`reporter_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `report_admin` FOREIGN KEY (`admin_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `subscription`
--
ALTER TABLE `subscription`
  ADD CONSTRAINT `subscription_subscriber` FOREIGN KEY (`subscriber_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `subscription_subscribed_user` FOREIGN KEY (`subscribed_user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD CONSTRAINT `userinfo_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;

--
-- Constraints for table `userinterest`
--
ALTER TABLE `userinterest`
  ADD CONSTRAINT `userinterest_user` FOREIGN KEY (`user_id`) REFERENCES `userinfo` (`user_id`)
    ON UPDATE CASCADE ON DELETE CASCADE,
  ADD CONSTRAINT `userinterest_category` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
    ON UPDATE CASCADE ON DELETE CASCADE;
COMMIT;


--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `category_icon`) VALUES
(1, 'Music', 'https://picsum.photos/100'),
(2, 'Gaming', 'https://picsum.photos/100'),
(3, 'Art&Design', 'https://picsum.photos/100'),
(4, 'Technology', 'https://picsum.photos/100'),
(5, 'Beauty', 'https://picsum.photos/100'),
(6, 'Sports', 'https://picsum.photos/100');


--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `role_name`) VALUES
(1, 'Admin'),
(2, 'Approver'),
(3, 'User');

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`status_id`, `status_name`) VALUES
(1, 'Pending'),
(2, 'Approved'),
(3, 'Rejected');

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`user_id`, `role_id`, `username`, `password`, `email`, `firstname`, `lastname`, `DOB`, `gender`, `phone_number`, `profile_pic`, `bio`, `coin_balance`, `created_at`, `updated_at`) VALUES
(1, 1, 'testAdmin', 'testAdmin', 'ceo@gmail.com', 'poori', 'handsome', '2013-04-07', 'M', '0812345678', 'boy', 'single', 200, '2022-04-27 13:39:28', '2022-04-29 13:39:28'),
(2, 2, 'testApprover', 'testAdmin', 'easysql@gmail.com', 'thamon', 'boonpa', '2012-05-20', 'F', '0957841234', 'girl', 'single', 100, '2022-04-26 13:44:35', '2022-04-27 13:44:35'),
(3, 3, 'ryan', '456178', 'ryanisadog@gmail.com', 'ryan', 'seeha', '2022-01-14', 'M', '0889641234', 'dog', 'Hello I am a dog', 10, '2022-04-27 13:56:53', '2022-04-27 16:56:53'),
(4, 3, 'kunpra', 'qwerty', 'kunpra@gmail.com', 'kunpra', 'waipra', '2022-01-14', 'M', '0889641234', 'dog', 'Hello I am a dog', 0, '2022-04-27 13:56:53', '2022-04-27 16:56:53'),
(5, 3, 'kunjao', 'qwerty', 'kunjao@gmail.com', 'kunjao', 'waijao', '2022-01-14', 'F', '0889641234', 'dog', 'Hello I am a dog', 0, '2022-04-27 13:56:53', '2022-04-27 16:56:53');


--
-- Dumping data for table `userinterest`
--

INSERT INTO `userinterest` (`user_id`, `category_id`) VALUES
(3, 3),
(3, 5),
(4, 2),
(5, 3);

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`article_id`, `author_id`, `category_id`, `title`, `content`, `article_pic`, `sub_required`, `created_at`, `updated_at`) VALUES
(1, 4, 1, 'sweet love', '2boys love the ugly girl', 'sky', 1, '2022-04-13 14:00:33', '2022-04-20 14:00:33'),
(2, 5, 2, 'lipstick', "I buy DIOR lipstick and it's expensive.", 'lipstick', 0, '2022-04-19 14:02:24', '2022-04-26 14:02:24'),
(3, 3, 3, 'Become a rich man', 'This year, people that born in Saturday will rich. ', 'money', 1, '2022-04-17 14:04:02', '2022-04-19 14:04:02');


--
-- Dumping data for table `subscription`
--

INSERT INTO `subscription` (`subscriber_id`, `subscribed_user_id`, `created_at`) VALUES
(5, 3, '2022-04-05 14:19:18'),
(4, 5, '2022-04-17 14:19:18'),
(3, 4, '2022-04-20 14:19:57');

--
-- Dumping data for table `advertisement`
--

INSERT INTO `advertisement` (`ad_id`, `article_id`, `publish_date`, `created_at`) VALUES
(1, 1, '2022-04-25', '2022-04-24 14:05:59'),
(2, 2, '2022-04-19', '2022-04-20 14:07:05'),
(3, 3, '2022-04-22', '2022-04-23 14:07:30');


--
-- Dumping data for table `likearticle`
--

INSERT INTO `likearticle` (`user_id`, `article_id`, `created_at`) VALUES
(4, 2, '2022-04-07 14:11:15'),
(5, 2, '2022-04-19 14:11:15'),
(3, 3, '2022-04-21 14:11:47');

--
-- Dumping data for table `articleviewing`
--

INSERT INTO `articleviewing` (`user_id`, `article_id`) VALUES
(4, 2),
(5, 2),
(3, 3);


--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`comment_id`, `user_id`, `article_id`, `content`, `created_at`, `updated_at`) VALUES
(1, 3, 1, "It's funny and romantic.", '2022-04-27 14:08:58', '2022-04-27 15:08:58'),
(2, 4, 2, 'I agree', '2022-04-26 14:08:58', '2022-04-27 14:08:58'),
(3, 5, 3, 'I hope it is true', '2022-04-22 14:10:14', '2022-04-23 14:10:14');

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `user_id`, `approver_id`, `status_id`, `is_withdrawal`, `amount`, `payment_slip`, `description`, `created_at`, `updated_at`) VALUES
(1, 3, 2, 1, 0, 100, 'pic1.jpeg', 'slip', '2022-04-27 14:12:12', '2022-04-28 14:12:12'),
(2, 4, 2, 1, 0, 500, 'pic2.jpeg', 'slip', '2022-04-05 14:12:12', '2022-04-06 14:12:12'),
(3, 5, 2, 1, 0, 600, 'pic3.jpeg', 'slip', '2022-04-08 14:15:18', '2022-04-09 14:15:18');

--
-- Dumping data for table `reporttype`
--

INSERT INTO `reporttype` (`report_type_id`, `report_type_name`) VALUES
(1, 'Article'),
(2, 'Payment'),
(3, 'Comment');

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`report_id`, `report_type_id`, `reporter_id`, `status_id`, `article_id`, `payment_id`, `comment_id`, `admin_id`, `description`, `created_at`, `updated_at`) VALUES
(1, 1, 3, 1, 1, NULL, NULL, 1, "It's copy others.", '2022-04-04 14:16:17', '2022-04-05 14:16:17'),
(2, 2, 4, 1, NULL, 2, NULL, 1, "Something wrong.", '2022-04-18 14:16:17', '2022-04-20 14:16:17'),
(3, 3, 5, 1, NULL, NULL, 3, 1, "It isn't okay.", '2022-04-01 14:18:12', '2022-04-08 14:18:12');




/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
