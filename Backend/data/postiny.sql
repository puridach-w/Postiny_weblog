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
  `payment_slip` varchar(128) DEFAULT NULL,
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
  `report_type_icon` varchar(128) NOT NULL,
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
  `password` varchar(64) NOT NULL,
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
(1, 'Music', 'music.png'),
(2, 'Gaming', 'gaming.png'),
(3, 'Art&Design', 'art.png'),
(4, 'Technology', 'tech.png'),
(5, 'Beauty', 'beauty.png'),
(6, 'Sports', 'sports.png');


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

INSERT INTO `userinfo` (`user_id`, `role_id`, `username`, `password`, `email`, `firstname`, `lastname`, `DOB`, `gender`, `phone_number`, `bio`, `coin_balance`, `created_at`, `updated_at`) VALUES
(1, 1, 'testAdmin', '$2b$10$f0lzJLAK45pN4bYs8tbpeOck0iRpBSH8qj/Vn8tfk7A/OJqPTVbe6', 'ceo@gmail.com', 'poori', 'handsome', '2013-04-07', 'M', '0812345678', 'single', 200, '2022-04-27 13:39:28', '2022-04-29 13:39:28'),
(2, 2, 'testApprover', '$2b$10$Kj595gxi3hT/XnMFKIuDlekNuv87YnOSjgPqgM4jlxtxYU2nwB00q', 'easysql@gmail.com', 'thamon', 'boonpa', '2012-05-20', 'F', '0957841234', 'single', 100, '2022-04-26 13:44:35', '2022-04-27 13:44:35'),
(3, 3, 'ryan', '$2b$10$n7CKPQOlpGWQwpe3OAnbAul8PETo33hWVf98sOz7zVtO.RaNzrcYy', 'ryanisadog@gmail.com', 'ryan', 'seeha', '2022-01-14', 'M', '0889641234', 'Hello I am a dog', 10, '2022-04-27 13:56:53', '2022-04-27 16:56:53'),
(4, 3, 'kunpra', '$2b$10$n7CKPQOlpGWQwpe3OAnbAul8PETo33hWVf98sOz7zVtO.RaNzrcYy', 'kunpra@gmail.com', 'kunpra', 'waipra', '2022-01-14', 'M', '0889641234', 'Hello I am a dog', 0, '2022-04-27 13:56:53', '2022-04-27 16:56:53'),
(5, 3, 'kunjao', '$2b$10$n7CKPQOlpGWQwpe3OAnbAul8PETo33hWVf98sOz7zVtO.RaNzrcYy', 'kunjao@gmail.com', 'kunjao', 'waijao', '2022-01-14', 'F', '0889641234', 'Hello I am a dog', 0, '2022-04-27 13:56:53', '2022-04-27 16:56:53'),
(6, 3, 'testUser', '$2b$10$k8F.oW6tHzzN.JxY2yAXU.X.GVw12TFMkrYgGNqKxqKim7Mu7Yvd6', 'user@yahoo.net', 'Alex', 'Barber', '1989-05-05', 'M', '0875215564', NULL, 0, '2022-05-09 19:24:51', '2022-05-09 19:24:51'),
(7, 3, 'ilovecpe231', '$2b$10$MgGmADXe4PFDMzX3Qq5QY.dVrkS8EZ30z63Iii4i13H3bpYeP2y9O', 'ilove231@mail.kmutt.ac.th', 'Taylor', 'Joy', '2010-10-20', 'F', '0880570258', NULL, 0, '2022-05-09 19:30:05', '2022-05-09 19:30:05'),
(8, 3, 'iamkonsuay', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'konsuay@gmail.com', 'Konsuay', 'Ruaymak', '2002-02-02', 'F', '0987456321', NULL, 0, '2022-05-09 19:40:37', '2022-05-09 19:40:37'),
(9, 3, 'happygirl', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'happy_me@gmail.com', 'Susan', 'Walker', '1998-05-18', 'F', '0841452155', 'Dont worry be happy :)', 0, '2022-04-01 01:53:53', '2022-04-01 01:53:53'),
(10, 3, 'userone', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userone@gmail.com', 'Taeyong', 'Lee', '1995-07-11', 'O', '0989877878', 'Hotter than your ex and better than your next', 0, '2022-04-01 04:56:53', '2022-04-01 04:56:53'),
(11, 3, 'usertwo', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'usertwo@gmail.com', 'Johnny', 'Jeep', '2022-01-14', 'M', '0874578754', 'Hi there', 0, '2022-04-01 05:45:20', '2022-04-01 05:45:20'),
(12, 3, 'userthree', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userthree@gmail.com', 'Katty', 'Perry', '1995-05-21', 'F', '0989877777', 'This is the part of me', 0, '2022-04-02 04:56:53', '2022-04-02 04:56:53'),
(13, 3, 'userfour', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userfour@gmail.com', 'Justin', 'Bieber', '1996-06-04', 'M', '0987877678', 'picture perfect', 0, '2022-04-02 04:56:53', '2022-04-02 04:56:53'),
(14, 3, 'userfive', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userfive@gmail.com', 'Selena', 'Gomez', '1997-07-11', 'F', '0984877878', 'kill em with kindness', 0, '2022-04-03 04:56:53', '2022-04-03 04:56:53'),
(15, 3, 'usersix', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'usersix@gmail.com', 'Roseanne', 'Park', '1998-08-15', 'F', '0989871278', 'Everybody sees what they wanna see', 0, '2022-04-03 04:56:53', '2022-04-03 04:56:53'),
(16, 3, 'userseven', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userseven@gmail.com', 'Kesha', 'Clock', '1999-09-30', 'O', '0912347878', 'Dont stop, make it pop!', 0, '2022-04-04 04:56:53', '2022-04-04 04:56:53'),
(17, 3, 'usereight', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'usereight@gmail.com', 'Sasha', 'Slone', '2000-01-10', 'F', '0874578754', 'When was it over?', 0, '2022-04-04 05:45:20', '2022-04-04 05:45:20'),
(18, 3, 'usernine', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'usernine@gmail.com', 'Shawn', 'Mendes', '1997-07-23', 'M', '0989447878', 'I love it when you call me', 0, '2022-04-05 05:56:53', '2022-04-05 05:56:53'),
(19, 3, 'userten', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'userten@gmail.com', 'Charlie', 'Puth', '1996-06-04', 'M', '0998880010', 'We dont talk anymore', 0, '2022-04-05 08:56:53', '2022-04-05 08:56:53'),
(20, 3, 'user11', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user11@gmail.com', 'Olivia', 'Rodrigo', '1997-07-11', 'F', '0998880011', 'Its brutal out here!!', 0, '2022-04-06 09:56:54', '2022-04-06 09:56:54'),
(21, 3, 'user12', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user12@gmail.com', 'Kendall', 'Jenner', '1998-08-15', 'F', '0998880012', 'My favorite part of my body is my height', 0, '2022-04-06 04:56:53', '2022-04-06 04:56:53'),
(22, 3, 'user13', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user13@gmail.com', 'Devin', 'Booker', '1999-09-30', 'O', '0998880013', 'I love basketball', 0, '2022-04-07 00:56:53', '2022-04-07 00:56:53'),
(23, 3, 'user14', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user14@hotmail.com', 'Harry', 'Styles', '2000-01-10', 'O', '0998880014', 'Watermelon sugar high', 0, '2022-04-09 07:45:25', '2022-04-09 07:45:25'),
(24, 3, 'user15', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user15@gmail.com', 'Gigi', 'Hadid', '1999-09-30', 'F', '0998880015', NULL, 0, '2022-04-11 00:56:53', '2022-04-11 00:56:53'),
(25, 3, 'user16', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user16@hotmail.com', 'Zayn', 'Malik', '2000-01-10', 'M', '0998880016', NULL, 0, '2022-04-11 07:45:25', '2022-04-11 07:45:25'),
(26, 3, 'user17', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user17@gmail.com', 'Bella', 'Hadid', '1999-09-30', 'F', '0998880017', NULL, 0, '2022-04-11 14:56:53', '2022-04-11 14:56:53'),
(27, 3, 'user18', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user18@mail.kmutt.ac.th', 'Billie', 'Eilish', '2002-09-20', 'F', '0998880018', NULL, 0, '2022-04-12 00:56:53', '2022-04-12 00:56:53'),
(28, 3, 'user19', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user19@gmail.com', 'Rihanna', 'Fenty', '1979-09-30', 'F', '0998880019', NULL, 0, '2022-04-12 02:56:53', '2022-04-12 02:56:53'),
(29, 3, 'user20', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user20@hotmail.com', 'Travis', 'Scott', '1982-08-20', 'M', '0998880020', NULL, 0, '2022-04-12 04:56:53', '2022-04-12 04:56:53'),
(30, 3, 'user21', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user21@gmail.com', 'Nick', 'Jonas', '1995-02-13', 'M', '0998880021', NULL, 0, '2022-04-13 00:56:53', '2022-04-13 00:56:53'),
(31, 3, 'user22', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user22@kmutt.ac.th', 'Ed', 'Sheeran', '1989-04-30', 'M', '0998880022', NULL, 0, '2022-04-13 00:56:59', '2022-04-13 00:56:59'),
(32, 3, 'user23', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user23@gmail.com', 'Amber', 'Heard', '1985-12-10', 'F', '0998880023', NULL, 0, '2022-04-14 00:56:53', '2022-04-14 00:56:53'),
(33, 3, 'user24', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user24@gmail.com', 'Tom', 'Holland', '1989-07-08', 'M', '0998880024', NULL, 0, '2022-04-15 00:56:53', '2022-04-15 00:56:53'),
(34, 3, 'user25', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user25@gmail.com', 'Zendeya', 'Coleman', '1990-09-30', 'F', '0998880025', NULL, 0, '2022-04-16 00:56:53', '2022-04-16 00:56:53'),
(35, 3, 'user26', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user26@yahoo.co.th', 'Bruno', 'Mars', '1989-09-06', 'O', '0998880026', NULL, 0, '2022-04-18 00:56:53', '2022-04-18 00:56:53'),
(36, 3, 'user27', '$2b$10$3wd6wm8ypQ/x4k7wfHh4n.GOL9uhvOsDfQL0fHVqaSC8SoFqAcREi', 'user27@hotmail.com', 'Fredy', 'Mercury', '1970-07-10', 'O', '0998880027', NULL, 0, '2022-04-18 07:45:25', '2022-04-18 07:45:25');



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
(1, 4, 1, 'sweet love', '2boys love the ugly girl', 'https://picsum.photos/1920/1080', 1, '2022-04-13 14:00:33', '2022-04-20 14:00:33'),
(2, 5, 2, 'lipstick', "I buy DIOR lipstick and it's expensive.", 'https://picsum.photos/1920/1080', 0, '2022-04-19 14:02:24', '2022-04-26 14:02:24'),
(3, 3, 3, 'Become a rich man', 'This year, people that born in Saturday will rich. ', 'https://picsum.photos/1920/1080', 1, '2022-04-17 14:04:02', '2022-04-19 14:04:02');


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

INSERT INTO `reporttype` (`report_type_id`, `report_type_name`, `report_type_icon`) VALUES
(1, 'Article', "article.png"),
(2, 'Payment', "payment.png"),
(3, 'Comment', "comment.png");

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
