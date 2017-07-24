-- MySQL dump 10.16  Distrib 10.1.24-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: horrorDB
-- ------------------------------------------------------
-- Server version	10.1.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `movie` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `releaseDate` datetime NOT NULL,
  `originalReleaseYear` varchar(255) DEFAULT NULL,
  `coverArtUrl` varchar(255) NOT NULL,
  `region` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=180741 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (66916,'After Midnight Blu-ray','2017-09-26 00:00:00','1989','http://images2.static-bluray.com/movies/covers/66916_front.jpg','\nRegion A (B, C untested)'),(134656,'The Walking Dead: The Complete Seventh Season Blu-ray','2017-08-22 00:00:00','2016','http://images.static-bluray.com/movies/covers/134656_front.jpg','\nRegion A (B, C untested)'),(166357,'Supernatural: The Complete Twelfth Season Blu-ray','2017-09-05 00:00:00','2016','http://images4.static-bluray.com/movies/covers/166357_front.jpg','\nRegion A (B, C untested)'),(170834,'The Walking Dead: The Complete Seventh Season Blu-ray','2017-08-22 00:00:00','2016','http://images3.static-bluray.com/movies/covers/170834_front.jpg','\nRegion A (B, C untested)'),(171527,'Bram Stoker\'s Dracula 4K Blu-ray','2017-09-26 00:00:00','1992','http://images.static-bluray.com/movies/covers/171527_front.jpg','\nRegion A (B, C untested)'),(173317,'Vicious Lips Blu-ray','2017-08-29 00:00:00','1986','http://images4.static-bluray.com/movies/covers/173317_front.jpg','\nRegion A (B, C untested)'),(177662,'José Ramón Larraz Double Feature Blu-ray: Estigma, Emma Puertas Oscuras','2017-07-25 00:00:00','1974','http://images.static-bluray.com/movies/covers/177662_front.jpg','\nRegion A (B, C untested)'),(178066,'Effects Blu-ray','2017-08-22 00:00:00','1980','http://images2.static-bluray.com/movies/covers/178066_front.jpg','\nRegion A (B, C untested)'),(178396,'Rawhead Rex Blu-ray','2017-10-17 00:00:00','1986','http://images2.static-bluray.com/movies/covers/178396_front.jpg','\nRegion A (B, C untested)'),(178938,'The Manster Blu-ray','2017-08-29 00:00:00','1959','http://images4.static-bluray.com/movies/covers/178938_front.jpg','\nRegion A (B, C untested)'),(179469,'The Slayer Blu-ray','2017-08-22 00:00:00','1982','http://images4.static-bluray.com/movies/covers/179469_front.jpg','\nRegion A (B, C untested)'),(179807,'The Dead Next Door Blu-ray: Collectors Edition','2017-09-26 00:00:00','1989','http://images4.static-bluray.com/movies/covers/179807_front.jpg','\nRegion A (B, C untested)'),(180246,'Lucifer: The Complete Second Season Blu-ray','2017-08-22 00:00:00','2016','http://images3.static-bluray.com/movies/covers/180246_front.jpg','\nRegion A (B, C untested)'),(180257,'The Originals: The Complete Fourth Season Blu-ray','2017-08-29 00:00:00','2017','http://images3.static-bluray.com/movies/covers/180257_front.jpg','\nRegion A (B, C untested)'),(180518,'A Quiet Place in the Country Blu-ray','2017-09-19 00:00:00','1968','http://images3.static-bluray.com/movies/covers/180518_front.jpg','\nRegion A (B, C untested)'),(180519,'The Spell Blu-ray','2017-09-05 00:00:00','1977','http://images4.static-bluray.com/movies/covers/180519_front.jpg','\nRegion A (B, C untested)'),(180520,'The Resurrected Blu-ray','2017-09-12 00:00:00','1991','http://images2.static-bluray.com/movies/covers/180520_front.jpg','\nRegion A (B, C untested)'),(180739,'The Lost World Blu-ray','2017-09-19 00:00:00','1925','http://images4.static-bluray.com/movies/covers/180739_front.jpg','\nRegion A (B, C untested)'),(180740,'Kong: Skull Island','0000-00-00 00:00:00','2017','http://images3.static-bluray.com/movies/covers/169939_large.jpg','A');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-24 19:53:03
