-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 27, 2024 at 08:00 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings_teams`
--
CREATE DATABASE IF NOT EXISTS `meetings_teams` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `meetings_teams`;

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `meetingID` int(11) NOT NULL,
  `teamID` int(11) NOT NULL,
  `startMeetingTime` datetime NOT NULL,
  `endMeetingTime` datetime NOT NULL,
  `description` varchar(200) NOT NULL,
  `room` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`meetingID`, `teamID`, `startMeetingTime`, `endMeetingTime`, `description`, `room`) VALUES
(1, 2, '2024-03-28 17:57:21', '2024-03-28 19:57:21', 'Updating on app releases, user feedback, and mobile platform updates.', 'Large Board Room'),
(2, 3, '2024-03-28 20:57:21', '2024-03-28 21:57:21', 'Reviewing design mockups, usability testing results, and UI enhancements.', 'New York Room'),
(3, 6, '2024-03-28 14:58:56', '2024-03-27 15:58:56', 'Discussing sprint progress, code reviews, and upcoming features.', 'Blue Room'),
(4, 5, '2024-03-29 11:59:46', '2024-03-29 12:59:46', ' Addressing bug reports, test coverage, and automation strategies.', 'Tel Aviv Room'),
(5, 1, '2024-03-30 18:00:28', '2024-03-30 19:00:28', ' Planning component development, optimizing performance, and resolving technical challenges.', 'Paris Room'),
(6, 4, '2024-03-31 14:01:23', '2024-03-31 16:01:23', 'Analyzing security threats, implementing security measures, and reviewing incident response protocols.', 'Canada Room');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `questionID` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `question` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`questionID`, `email`, `question`) VALUES
(1, 'yoyo@gmail.com', 'cool team!');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `teamID` int(11) NOT NULL,
  `teamName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`teamID`, `teamName`) VALUES
(1, 'React Team'),
(2, 'Mobile Team'),
(3, 'UI Team'),
(4, 'Cyber Team'),
(5, 'QA Team'),
(6, 'Develops Team');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`meetingID`),
  ADD KEY `teamID` (`teamID`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`questionID`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`teamID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meetings`
--
ALTER TABLE `meetings`
  MODIFY `meetingID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `questionID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `teamID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
