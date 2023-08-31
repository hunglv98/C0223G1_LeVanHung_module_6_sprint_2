create database module_6_sprint_2;

use module_6_sprint_2;

CREATE TABLE `module_6_sprint_2`.`role` (
  `id_role` INT NOT NULL AUTO_INCREMENT,
  `name_role` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id_role`));

CREATE TABLE `module_6_sprint_2`.`account` (
  `id_account` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` LONGTEXT NOT NULL,
  flag_delete bit(1),
  `id_role` INT NULL,
  PRIMARY KEY (`id_account`),
    FOREIGN KEY (`id_role`)
    REFERENCES `module_6_sprint_2`.`role` (`id_role`)
);
CREATE TABLE `module_6_sprint_2`.`customer` (
  `id_customer` INT NOT NULL AUTO_INCREMENT,
  `name_customer` VARCHAR(45) NOT NULL,
  `identity_card_customer` VARCHAR(45) NOT NULL,
  `tel_customer` VARCHAR(45) NOT NULL,
  `email_customer` INT NOT NULL,
  flag_delete bit(1),
  id_account int not null,
  PRIMARY KEY (`id_customer`),
    FOREIGN KEY (`id_account`)
    REFERENCES `module_6_sprint_2`.`account` (`id_account`)
);

CREATE TABLE `module_6_sprint_2`.`employee` (
  `id_employee` INT NOT NULL AUTO_INCREMENT,
  `name_employee` VARCHAR(45) NOT NULL,
  `identity_card_employee` VARCHAR(45) NOT NULL,
  `tel_employee` VARCHAR(45) NOT NULL,
  `email_employee` VARCHAR(45) NOT NULL,
  flag_delete bit(1),
  `id_account` INT NULL,
  PRIMARY KEY (`id_employee`),
    FOREIGN KEY (`id_account`)
    REFERENCES `module_6_sprint_2`.`account` (`id_account`)
);

CREATE TABLE `module_6_sprint_2`.`ship` (
  `id_ship` INT NOT NULL AUTO_INCREMENT,
  `name_ship` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_ship`));

CREATE TABLE `module_6_sprint_2`.`schedule` (
  `id_schedule` INT NOT NULL AUTO_INCREMENT,
  `time_departure` time NOT NULL,
  `date_departure` date NOT NULL,
  `id_ship` INT NULL,
  PRIMARY KEY (`id_schedule`),
    FOREIGN KEY (`id_ship`)
    REFERENCES `module_6_sprint_2`.`ship` (`id_ship`)
);

CREATE TABLE `module_6_sprint_2`.`type_seat` (
  `id_type_seat` INT NOT NULL,
  `name_seat` VARCHAR(45) NOT NULL,
  `price_seat` DOUBLE NOT NULL,
  PRIMARY KEY (`id_type_seat`));

CREATE TABLE `module_6_sprint_2`.`seat` (
  `id_seat` INT NOT NULL AUTO_INCREMENT,
  `name_seat` VARCHAR(45) NOT NULL,
  `id_schedule` INT NULL,
  flag_payment bit(1),
  id_type_seat int,
  PRIMARY KEY (`id_seat`),
    FOREIGN KEY (`id_schedule`)
    REFERENCES `module_6_sprint_2`.`schedule` (`id_schedule`),
    FOREIGN KEY (`id_type_seat`)
    REFERENCES `module_6_sprint_2`.`type_seat` (`id_type_seat`)
);

CREATE TABLE `module_6_sprint_2`.`ticket` (
  `id_ticket` INT NOT NULL AUTO_INCREMENT,
  `date_booking` date,
  `id_customer` INT,
  `id_seat` INT,
  
  PRIMARY KEY (`id_ticket`),
    FOREIGN KEY (`id_seat`)
    REFERENCES `module_6_sprint_2`.`seat` (`id_seat`),
    FOREIGN KEY (`id_customer`)
    REFERENCES `module_6_sprint_2`.`customer` (`id_customer`)
  );




