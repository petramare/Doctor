-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: db_doctor
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

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
-- Table structure for table `appointment_statuses`
--

DROP TABLE IF EXISTS `appointment_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointment_statuses` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment_statuses`
--

LOCK TABLES `appointment_statuses` WRITE;
/*!40000 ALTER TABLE `appointment_statuses` DISABLE KEYS */;
INSERT INTO `appointment_statuses` VALUES (1,'suggested',NULL,NULL),(2,'rejected',NULL,NULL),(3,'approved',NULL,NULL),(4,'completed',NULL,NULL);
/*!40000 ALTER TABLE `appointment_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointments` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` bigint(20) unsigned NOT NULL,
  `patient_id` bigint(20) unsigned NOT NULL,
  `start` datetime NOT NULL,
  `end` datetime NOT NULL,
  `description` varchar(255) NOT NULL,
  `appointment_status_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1,1,1,'2023-03-20 10:00:53','2023-03-20 11:00:53','Just quick check',1,NULL,NULL),(2,1,2,'2023-03-20 15:00:53','2023-03-20 17:00:53','Just quick check',1,NULL,NULL),(3,1,1,'2023-03-15 16:00:53','2023-03-15 18:00:53','Just quick check',1,NULL,NULL),(4,5,4,'2023-03-28 13:00:00','2023-03-28 13:30:00','flu',3,'2023-03-27 12:31:44','2023-03-27 12:33:12'),(5,5,4,'2023-03-28 15:30:00','2023-03-28 16:00:00','flu2',2,'2023-03-27 12:33:23','2023-03-27 12:33:44'),(6,6,4,'2023-03-28 11:00:00','2023-03-28 11:30:00','flu3',1,'2023-03-27 13:18:27','2023-03-27 13:18:27');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinics`
--

DROP TABLE IF EXISTS `clinics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clinics` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `registration_code` bigint(20) NOT NULL,
  `tax_registration_code` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinics`
--

LOCK TABLES `clinics` WRITE;
/*!40000 ALTER TABLE `clinics` DISABLE KEYS */;
INSERT INTO `clinics` VALUES (1,'Alfa Clinic','Na Perštýně 359/6, 110 00 Staré Město',23452243,41197518,NULL,NULL),(2,'Beta Clinic','Bělehradská 130, 120 00 Praha 2-Vinohrady',6524531,47114975,NULL,NULL),(3,'Gamma Clinic','Jeremenkova 161/11, Ostrava-Vítkovice PSČ: 703 00',1454636,47672234,NULL,NULL),(4,'Omega Clinic','1, Roškotova 1225, 140 00 Praha',1234145,47114321,NULL,NULL),(5,'Dr. Max','Hornopolní 2955/35',12341454144,789654122,'2023-03-27 12:41:12','2023-03-27 12:41:19');
/*!40000 ALTER TABLE `clinics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `conditions`
--

DROP TABLE IF EXISTS `conditions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `conditions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `patient_id` bigint(20) unsigned NOT NULL,
  `weight` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `history` text NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `conditions`
--

LOCK TABLES `conditions` WRITE;
/*!40000 ALTER TABLE `conditions` DISABLE KEYS */;
INSERT INTO `conditions` VALUES (1,1,105,194,'strong as bear','2023-03-27',NULL,NULL),(2,4,77,176,'almost dead','2023-03-27',NULL,NULL),(3,8,70,154,'surviving','2023-03-27',NULL,NULL),(4,1,88,194,'light af','2007-05-23',NULL,NULL),(5,4,72,192,'Nemam','2023-03-27','2023-03-27 12:17:18','2023-03-27 12:17:18'),(6,7,12,12,'dsadsa','2023-03-28','2023-03-28 12:36:34','2023-03-28 12:36:34'),(7,7,12,12,'dsadsa','2023-03-28','2023-03-28 12:39:12','2023-03-28 12:39:12'),(8,7,12,12,'dsadsa','2023-03-28','2023-03-28 12:39:43','2023-03-28 12:39:43'),(9,7,12,12,'dsadsa','2023-03-28','2023-03-28 12:40:00','2023-03-28 12:40:00'),(10,7,2121,21,'421421412','2023-03-28','2023-03-28 12:46:11','2023-03-28 12:46:11'),(11,7,231231,21,'32131231312312','2023-03-28','2023-03-28 12:49:22','2023-03-28 12:49:22');
/*!40000 ALTER TABLE `conditions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor_patient`
--

DROP TABLE IF EXISTS `doctor_patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctor_patient` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `doctor_id` bigint(20) unsigned NOT NULL,
  `patient_id` bigint(20) unsigned NOT NULL,
  `status` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor_patient`
--

LOCK TABLES `doctor_patient` WRITE;
/*!40000 ALTER TABLE `doctor_patient` DISABLE KEYS */;
INSERT INTO `doctor_patient` VALUES (1,1,1,'applied',NULL,NULL),(2,1,2,'accepted',NULL,NULL),(3,2,3,'rejected',NULL,NULL),(4,1,4,'applied',NULL,NULL),(5,2,4,'applied',NULL,NULL),(6,4,4,'applied',NULL,NULL),(7,5,4,'accepted',NULL,NULL),(8,6,4,'accepted',NULL,NULL),(9,5,5,'applied',NULL,NULL);
/*!40000 ALTER TABLE `doctor_patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctors`
--

DROP TABLE IF EXISTS `doctors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `doctors` (
  `doctor_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `manager_id` bigint(20) unsigned DEFAULT NULL,
  `specialization` varchar(255) NOT NULL,
  `doctor_license_number` varchar(255) NOT NULL,
  `visiting_hours` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`visiting_hours`)),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`doctor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctors`
--

LOCK TABLES `doctors` WRITE;
/*!40000 ALTER TABLE `doctors` DISABLE KEYS */;
INSERT INTO `doctors` VALUES (1,3,1,'ORL','12341','{\"Monday\": true, \"Tuesday\": false, \"Wednesday\": true, \"Thursday\": false, \"Friday\": true, \"Saturday\": false, \"Sunday\": false}',NULL,NULL),(2,5,2,'ortoped','6245','{\"Monday\": true, \"Tuesday\": true, \"Wednesday\": true, \"Thursday\": true, \"Friday\": true, \"Saturday\": false, \"Sunday\": false}',NULL,NULL),(3,9,3,'ocni','84674','{\"Monday\": true, \"Tuesday\": true, \"Wednesday\": true, \"Thursday\": true, \"Friday\": false, \"Saturday\": false, \"Sunday\": false}',NULL,NULL),(4,10,0,'zubar','345135','{\"Monday\": true, \"Tuesday\": true, \"Wednesday\": false, \"Thursday\": false, \"Friday\": false, \"Saturday\": false, \"Sunday\": false}',NULL,NULL),(5,12,NULL,'zubar','123456789','{\"monday\":true,\"tuesday\":false,\"wednesday\":true,\"thursday\":false,\"friday\":true}','2023-03-27 12:18:45','2023-03-27 12:18:45'),(6,14,NULL,'zubar','15','{\"monday\":true,\"tuesday\":true,\"wednesday\":true,\"thursday\":true,\"friday\":true}','2023-03-27 13:14:59','2023-03-27 13:14:59');
/*!40000 ALTER TABLE `doctors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insurance_companies`
--

DROP TABLE IF EXISTS `insurance_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `insurance_companies` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insurance_companies`
--

LOCK TABLES `insurance_companies` WRITE;
/*!40000 ALTER TABLE `insurance_companies` DISABLE KEYS */;
INSERT INTO `insurance_companies` VALUES (1,'111 - Vseobecna zdravotni pojistovna','Na Perštýně 359/6, 110 00 Staré Město',NULL,NULL),(2,'201 - Vojenska zdravotni pojistovna','Bělehradská 130, 120 00 Praha 2-Vinohrady',NULL,NULL),(3,'205 - Ceska zdravotni pojistovna','Jeremenkova 161/11, Ostrava-Vítkovice PSČ: 703 00',NULL,NULL),(4,'207 - Oborova zdravotni pojistovna zamestnancu bank a pojistoven','1, Roškotova 1225, 140 00 Praha',NULL,NULL);
/*!40000 ALTER TABLE `insurance_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `managers`
--

DROP TABLE IF EXISTS `managers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `managers` (
  `manager_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `clinic_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`manager_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `managers`
--

LOCK TABLES `managers` WRITE;
/*!40000 ALTER TABLE `managers` DISABLE KEYS */;
INSERT INTO `managers` VALUES (1,2,1,NULL,NULL),(2,6,2,NULL,NULL),(3,7,3,NULL,NULL),(4,13,5,'2023-03-27 12:41:12','2023-03-27 12:41:12');
/*!40000 ALTER TABLE `managers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message_types`
--

DROP TABLE IF EXISTS `message_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `message_types` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message_types`
--

LOCK TABLES `message_types` WRITE;
/*!40000 ALTER TABLE `message_types` DISABLE KEYS */;
INSERT INTO `message_types` VALUES (1,'results',NULL,NULL),(2,'invitation',NULL,NULL),(3,'personal',NULL,NULL),(4,'prescription',NULL,NULL);
/*!40000 ALTER TABLE `message_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `sender_user_id` bigint(20) unsigned NOT NULL,
  `doctor_id` bigint(20) unsigned NOT NULL,
  `patient_id` bigint(20) unsigned NOT NULL,
  `message` varchar(255) NOT NULL,
  `file_path` varchar(255) NOT NULL,
  `message_type_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,3,1,1,'wassup dawg?','c:/yo-mamma',3,NULL,NULL),(2,1,1,1,'yo doc - just chillin mah man','c:/bling-bling/sheesh',3,NULL,NULL),(3,3,1,2,'youll gonna die','c:/almost-dead-patients',1,NULL,NULL),(4,12,5,4,'Hello Jendo, 12? tak to je pohoda.','not available',3,'2023-03-27 12:25:00','2023-03-27 12:25:00'),(5,11,5,4,'je mi 12 no... a tricko si nesundam','not available',3,'2023-03-27 12:25:43','2023-03-27 12:25:43'),(6,12,5,4,'tak to bez do pici','not available',3,'2023-03-27 12:25:54','2023-03-27 12:25:54');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (52,'2014_10_12_000000_create_users_table',1),(53,'2014_10_12_100000_create_password_reset_tokens_table',1),(54,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(55,'2019_08_19_000000_create_failed_jobs_table',1),(56,'2019_12_14_000001_create_personal_access_tokens_table',1),(57,'2023_03_20_104624_add_columns_to_table_users',1),(58,'2023_03_20_105830_create_table_doctors',1),(59,'2023_03_20_110318_create_table_patients',1),(60,'2023_03_20_110337_create_appointments_table',1),(61,'2023_03_20_114839_create_doctor_patient_table',1),(62,'2023_03_20_115018_create_managers_table',1),(63,'2023_03_20_115209_create_messages_table',1),(64,'2023_03_20_115423_create_message_types_table',1),(65,'2023_03_20_115534_create_conditions_table',1),(66,'2023_03_20_115954_create_clinics_table',1),(67,'2023_03_20_120315_create_insurance_companies_table',1),(68,'2023_03_20_121120_create_appointment_statuses_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patients` (
  `patient_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned NOT NULL,
  `insurance_company_id` bigint(20) unsigned NOT NULL,
  `insurance_number` bigint(20) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`patient_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1,1,1,524521,NULL,NULL),(2,4,2,8456756,NULL,NULL),(3,8,3,973652,NULL,NULL),(4,11,3,456789123,'2023-03-27 12:13:50','2023-03-27 12:13:50'),(5,15,1,123456789,'2023-03-28 11:13:44','2023-03-28 11:13:44'),(6,15,1,1,'2023-03-28 11:14:26','2023-03-28 11:14:26'),(7,16,1,1233,'2023-03-28 12:03:24','2023-03-28 12:03:24');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `first_name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `id_number` bigint(20) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'arny@neznam.cz',NULL,'krtecek',NULL,NULL,NULL,NULL,NULL,'Arnošt','Křiklan','30-02-1987',124236523,'patient'),(2,'e.svarna@bigboss.eu',NULL,'gucci',NULL,NULL,NULL,NULL,NULL,'Evelína','Švarná','14-03-1992',767354656,'manager'),(3,'pavel@rakl.cz',NULL,'granat',NULL,NULL,NULL,NULL,NULL,'Pavel','Rakl','14-03-1992',145346584,'doctor'),(4,'maso@slavia.cz',NULL,'ligamistru',NULL,NULL,NULL,NULL,NULL,'Lukáš','Masopust','14-03-1992',42523452,'patient'),(5,'radio@gaga.com',NULL,'popopopoker',NULL,NULL,NULL,NULL,NULL,'Lady','Gaga','14-03-1992',435346457,'doctor'),(6,'dan@pudil.cz',NULL,'boleslav',NULL,NULL,NULL,NULL,NULL,'Daniel','Pudil','14-03-1992',4537456735,'manager'),(7,'weirdo@weirdo.cz',NULL,'moneybag',NULL,NULL,NULL,NULL,NULL,'Karel','Janeček','14-03-1992',1354575683,'manager'),(8,'pzel@poodle.com',NULL,'kamion',NULL,NULL,NULL,NULL,NULL,'Pavlína','Zelená','14-03-1992',23492039,'patient'),(9,'rud@neznam.cz',NULL,'fagaerhrt',NULL,NULL,NULL,NULL,NULL,'Rudolf','Blatný','14-03-1992',2546345768,'doctor'),(10,'angie@yahoo.com',NULL,'fgsrth',NULL,NULL,NULL,NULL,NULL,'Angelika','Rajská','14-03-1992',24643574568,'doctor'),(11,'jenda.zvonicka@gmail.com',NULL,'$2y$10$dslSPMpp3ZXGLEmhbFp0lOOlMix9brY9wc02gA2c9p8XxImg.3RO2',NULL,NULL,NULL,'2023-03-27 12:12:59','2023-03-27 12:14:28','Jenda','Zvonicka','15.9.1966',76539514,'patient'),(12,'petr.kvetak@gmail.com',NULL,'$2y$10$BsvBMJ5XoG5WoXxKVecK2up24I.zvNOn.t3uHjkTPdJDTfVI6pQvy',NULL,NULL,NULL,'2023-03-27 12:18:38','2023-03-27 12:18:38','Petr','Kvetak','10.6.2000',123456789,'doctor'),(13,'klobas.petr@gmail.com',NULL,'$2y$10$ICoydqmhmVHgOPXO8nZRzuBD0qPv0yAbyc9MVTG.eKYSecyELhq.C',NULL,NULL,NULL,'2023-03-27 12:40:36','2023-03-27 12:40:36','Klobas','Petr','10.5.2000',123456789,'manager'),(14,'doctor@doctor',NULL,'$2y$10$hneUzkunxzrPhq17K/YEJ.7RRZJqUL6Snk6Wtx8ltdqQiTfICoo9C',NULL,NULL,NULL,'2023-03-27 13:14:52','2023-03-27 13:14:52','doctor','doctor','12',21,'doctor'),(15,'2121@2121',NULL,'$2y$10$lfzIYxWvxClMZZlOuyT1G.z56GlqjXFijyevNNy/Sa0Ep3bIm8Yvq',NULL,NULL,NULL,'2023-03-28 10:55:49','2023-03-28 10:55:49','2121','2121','21',21,'patient'),(16,'test@test',NULL,'$2y$10$2rgXnM55X6wspAiKyeU6Huwx52xcOavrzyLzj4Y5J.gg89GHF/q2m',NULL,NULL,NULL,'2023-03-28 11:15:14','2023-03-28 11:15:14','test','test','11',1111121321321,'patient');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-29 11:41:02
