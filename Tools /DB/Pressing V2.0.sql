-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  sam. 23 déc. 2017 à 13:52
-- Version du serveur :  10.1.25-MariaDB
-- Version de PHP :  5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `Pressing`
--

-- --------------------------------------------------------

--
-- Structure de la table `CATEGORIE`
--

CREATE TABLE `CATEGORIE` (
  `ID_CATEGORIE` int(11) NOT NULL,
  `DESGINATION_CAT` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `CATEGORIE`
--

INSERT INTO `CATEGORIE` (`ID_CATEGORIE`, `DESGINATION_CAT`) VALUES
(2223, 'CATEGORIE1'),
(2224, 'CATEGORIE2');

-- --------------------------------------------------------

--
-- Structure de la table `CLIENT`
--

CREATE TABLE `CLIENT` (
  `ID_CLIENT` int(11) NOT NULL,
  `NOM_CLIENT` varchar(255) CHARACTER SET utf8 NOT NULL,
  `PRENOM_CLIENT` varchar(255) CHARACTER SET utf8 NOT NULL,
  `TELEPHONE_CLIENT` int(11) NOT NULL,
  `AGE_CLIENT` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `NVISA` int(11) NOT NULL,
  `ID_LOCALISATION` int(11) NOT NULL,
  `REMARQUES` varchar(255) CHARACTER SET utf8 NOT NULL,
  `SEXE_CLIENT` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `Password` varchar(255) NOT NULL,
  `Reduction` int(11) NOT NULL,
  `TYPE_CLIENT` varchar(45) NOT NULL,
  `Role` varchar(255) NOT NULL DEFAULT 'Client'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `CLIENT`
--

INSERT INTO `CLIENT` (`ID_CLIENT`, `NOM_CLIENT`, `PRENOM_CLIENT`, `TELEPHONE_CLIENT`, `AGE_CLIENT`, `Email`, `NVISA`, `ID_LOCALISATION`, `REMARQUES`, `SEXE_CLIENT`, `Password`, `Reduction`, `TYPE_CLIENT`, `Role`) VALUES
(1, 'CLIENT1', 'PRENOM CLIENT1', 622529293, 23, 'admin@gmail.com', 2030, 12, 'TATATA', 'HOMME', 'client1', 0, 'Particulier', 'Client'),
(2, 'CLIENT2', 'PRENOM CLIENT2', 622529294, 35, 'client@gmail.com', 2031, 12, 'TABATABA', 'FEMME', 'client2', 10, 'Professionel', 'Client');

-- --------------------------------------------------------

--
-- Structure de la table `COMMANDE`
--

CREATE TABLE `COMMANDE` (
  `ID_COMMANDE` varchar(11) NOT NULL,
  `DD_COMMANDE` datetime NOT NULL,
  `DF_COMMANDE` datetime DEFAULT NULL,
  `STATUS` varchar(255) CHARACTER SET utf8 NOT NULL,
  `NBR_ARTICLES` int(11) NOT NULL,
  `ID_LOCALISATION` int(11) NOT NULL,
  `COMMENTAIRE` text,
  `LIVREUR_COLLECTE` varchar(255) DEFAULT NULL,
  `LIVREUR_LIVRAISON` varchar(255) DEFAULT NULL,
  `ID_DATE` int(11) NOT NULL,
  `ID_CLIENT` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `COMMANDE`
--

INSERT INTO `COMMANDE` (`ID_COMMANDE`, `DD_COMMANDE`, `DF_COMMANDE`, `STATUS`, `NBR_ARTICLES`, `ID_LOCALISATION`, `COMMENTAIRE`, `LIVREUR_COLLECTE`, `LIVREUR_LIVRAISON`, `ID_DATE`, `ID_CLIENT`) VALUES
('14PC', '2017-12-23 13:45:43', '2017-12-30 00:00:00', 'LIVRE', 4, 12, NULL, NULL, NULL, 31, 1),
('3PC', '2018-01-04 14:31:21', NULL, 'EN ATTENTE', 3, 12, NULL, NULL, NULL, 30, 1);

-- --------------------------------------------------------

--
-- Structure de la table `DATE`
--

CREATE TABLE `DATE` (
  `ID_DATE` int(11) NOT NULL,
  `DATE_C_RES` datetime DEFAULT NULL,
  `DATE_C_RC` datetime DEFAULT NULL,
  `DATE_C_RL` datetime DEFAULT NULL,
  `DATE_C_PL` datetime DEFAULT NULL,
  `DATE_C_RP` datetime DEFAULT NULL,
  `DATE_C_LP` datetime DEFAULT NULL,
  `DATE_C_VL` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `DATE`
--

INSERT INTO `DATE` (`ID_DATE`, `DATE_C_RES`, `DATE_C_RC`, `DATE_C_RL`, `DATE_C_PL`, `DATE_C_RP`, `DATE_C_LP`, `DATE_C_VL`) VALUES
(3, '2017-11-25 05:33:24', '2017-11-25 16:12:17', '2017-11-26 08:34:12', '2017-11-26 14:14:14', '2017-11-28 05:13:12', '2017-11-27 08:18:15', '2017-11-28 05:22:08'),
(30, '2017-12-23 10:31:37', NULL, NULL, NULL, NULL, NULL, NULL),
(31, '2017-12-23 10:45:54', NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `LOCALISATION`
--

CREATE TABLE `LOCALISATION` (
  `ID_LOCALISATION` int(11) NOT NULL,
  `LONGTITUDE` float NOT NULL,
  `LATITUDE` float NOT NULL,
  `Adresse_Complete` varchar(255) NOT NULL,
  `TYPE_DOMICILE` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `LOCALISATION`
--

INSERT INTO `LOCALISATION` (`ID_LOCALISATION`, `LONGTITUDE`, `LATITUDE`, `Adresse_Complete`, `TYPE_DOMICILE`) VALUES
(12, 33.5618, -7.60402, 'AL FIDA', 'HOME');

-- --------------------------------------------------------

--
-- Structure de la table `PANIER`
--

CREATE TABLE `PANIER` (
  `ID_COMMANDE` varchar(230) NOT NULL,
  `ID_PRODUIT` int(11) NOT NULL,
  `QUANITE` int(11) NOT NULL,
  `MONTANT` decimal(10,0) NOT NULL,
  `COMMENTAIRE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `PANIER`
--

INSERT INTO `PANIER` (`ID_COMMANDE`, `ID_PRODUIT`, `QUANITE`, `MONTANT`, `COMMENTAIRE`) VALUES
('14PC', 1, 2, '70', 'TAA'),
('14PC', 2, 1, '40', 'TABA');

-- --------------------------------------------------------

--
-- Structure de la table `PERSONNEL`
--

CREATE TABLE `PERSONNEL` (
  `ID_PERSONNEL` int(11) NOT NULL,
  `NOM_PERSONNEL` varchar(255) CHARACTER SET utf8 NOT NULL,
  `PRENOM_PERSONNEL` varchar(255) CHARACTER SET utf8 NOT NULL,
  `TELEPHONE_PERSONNEL` int(11) NOT NULL,
  `SEXE_PERSONNEL` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `ADRESSE_PERSONNEL` varchar(255) CHARACTER SET utf8 NOT NULL,
  `AGE_PERSONNEL` int(11) NOT NULL,
  `SALAIRE_PERSONNEL` decimal(10,0) NOT NULL,
  `CNSS_PERSONNEL` int(11) NOT NULL,
  `DD_EMBAUCHE_PERSONNEL` datetime NOT NULL,
  `TYPE_CONTRAT_PERSONNEL` varchar(255) CHARACTER SET utf8 NOT NULL,
  `ROLE_PERSONNEL` varchar(255) CHARACTER SET utf8 NOT NULL,
  `PASS_PERSO` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `PERSONNEL`
--

INSERT INTO `PERSONNEL` (`ID_PERSONNEL`, `NOM_PERSONNEL`, `PRENOM_PERSONNEL`, `TELEPHONE_PERSONNEL`, `SEXE_PERSONNEL`, `ADRESSE_PERSONNEL`, `AGE_PERSONNEL`, `SALAIRE_PERSONNEL`, `CNSS_PERSONNEL`, `DD_EMBAUCHE_PERSONNEL`, `TYPE_CONTRAT_PERSONNEL`, `ROLE_PERSONNEL`, `PASS_PERSO`) VALUES
(1, 'SOUAD', 'BARAKA', 6234356, 'FEMME', 'AIN KHAROUBA DAR STATIA', 25, '3000', 20395819, '2017-11-20 00:00:00', 'CDI', 'SERVICE CLIENT', 'souad123'),
(2, 'Hassan', 'baqlali', 6243632, 'HOMME', 'AIN CHOKERA', 24, '2400', 210349, '2017-11-28 00:00:00', 'CDD', 'livreur', 'hassan1');

-- --------------------------------------------------------

--
-- Structure de la table `PRODUIT`
--

CREATE TABLE `PRODUIT` (
  `ID_PRODUIT` int(11) NOT NULL,
  `DESIGNATION` varchar(255) CHARACTER SET utf8 NOT NULL,
  `ID_CATEGORIE` int(11) NOT NULL,
  `PRIX` decimal(10,0) NOT NULL,
  `Image` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `PRODUIT`
--

INSERT INTO `PRODUIT` (`ID_PRODUIT`, `DESIGNATION`, `ID_CATEGORIE`, `PRIX`, `Image`) VALUES
(1, 'PRODUIT1', 2223, '120', ''),
(2, 'PRODUIT2', 2224, '130', '');

-- --------------------------------------------------------

--
-- Structure de la table `QUARTIER`
--

CREATE TABLE `QUARTIER` (
  `ID_QUARTIER` int(11) NOT NULL,
  `DESGINATION_QUARTIER` varchar(255) NOT NULL,
  `TARIFS` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `QUARTIER`
--

INSERT INTO `QUARTIER` (`ID_QUARTIER`, `DESGINATION_QUARTIER`, `TARIFS`) VALUES
(1, 'HAY BARAKA', '20'),
(2, 'HAY MOULAY B3ID', '40');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL,
  `status` enum('1','0') COLLATE utf8_unicode_ci NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `created`, `modified`, `status`) VALUES
(1, 'aaaa', 'hamza.aezria@hotmail.com', '0593459', '2017-11-29 00:00:00', '2017-11-17 00:00:00', '1');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `CATEGORIE`
--
ALTER TABLE `CATEGORIE`
  ADD PRIMARY KEY (`ID_CATEGORIE`);

--
-- Index pour la table `CLIENT`
--
ALTER TABLE `CLIENT`
  ADD PRIMARY KEY (`ID_CLIENT`),
  ADD KEY `ID_LOCALISATION` (`ID_LOCALISATION`);

--
-- Index pour la table `COMMANDE`
--
ALTER TABLE `COMMANDE`
  ADD PRIMARY KEY (`ID_COMMANDE`),
  ADD KEY `ID_LOCALISATION` (`ID_LOCALISATION`),
  ADD KEY `ID_DATE` (`ID_DATE`),
  ADD KEY `ID_CLIENT` (`ID_CLIENT`);

--
-- Index pour la table `DATE`
--
ALTER TABLE `DATE`
  ADD PRIMARY KEY (`ID_DATE`);

--
-- Index pour la table `LOCALISATION`
--
ALTER TABLE `LOCALISATION`
  ADD PRIMARY KEY (`ID_LOCALISATION`);

--
-- Index pour la table `PANIER`
--
ALTER TABLE `PANIER`
  ADD PRIMARY KEY (`ID_COMMANDE`,`ID_PRODUIT`),
  ADD KEY `ID_PRODUIT` (`ID_PRODUIT`);

--
-- Index pour la table `PERSONNEL`
--
ALTER TABLE `PERSONNEL`
  ADD PRIMARY KEY (`ID_PERSONNEL`);

--
-- Index pour la table `PRODUIT`
--
ALTER TABLE `PRODUIT`
  ADD PRIMARY KEY (`ID_PRODUIT`),
  ADD KEY `ID_CATEGORIE` (`ID_CATEGORIE`);

--
-- Index pour la table `QUARTIER`
--
ALTER TABLE `QUARTIER`
  ADD PRIMARY KEY (`ID_QUARTIER`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `CATEGORIE`
--
ALTER TABLE `CATEGORIE`
  MODIFY `ID_CATEGORIE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2225;
--
-- AUTO_INCREMENT pour la table `CLIENT`
--
ALTER TABLE `CLIENT`
  MODIFY `ID_CLIENT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `DATE`
--
ALTER TABLE `DATE`
  MODIFY `ID_DATE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
--
-- AUTO_INCREMENT pour la table `LOCALISATION`
--
ALTER TABLE `LOCALISATION`
  MODIFY `ID_LOCALISATION` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT pour la table `PERSONNEL`
--
ALTER TABLE `PERSONNEL`
  MODIFY `ID_PERSONNEL` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `PRODUIT`
--
ALTER TABLE `PRODUIT`
  MODIFY `ID_PRODUIT` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `QUARTIER`
--
ALTER TABLE `QUARTIER`
  MODIFY `ID_QUARTIER` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `CLIENT`
--
ALTER TABLE `CLIENT`
  ADD CONSTRAINT `client_Fk_localisation` FOREIGN KEY (`ID_LOCALISATION`) REFERENCES `LOCALISATION` (`ID_LOCALISATION`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `COMMANDE`
--
ALTER TABLE `COMMANDE`
  ADD CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`ID_LOCALISATION`) REFERENCES `LOCALISATION` (`ID_LOCALISATION`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`ID_DATE`) REFERENCES `DATE` (`ID_DATE`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `commande_ibfk_3` FOREIGN KEY (`ID_CLIENT`) REFERENCES `CLIENT` (`ID_CLIENT`);

--
-- Contraintes pour la table `PANIER`
--
ALTER TABLE `PANIER`
  ADD CONSTRAINT `panier_ibfk_2` FOREIGN KEY (`ID_COMMANDE`) REFERENCES `COMMANDE` (`ID_COMMANDE`),
  ADD CONSTRAINT `panier_ibfk_3` FOREIGN KEY (`ID_PRODUIT`) REFERENCES `PRODUIT` (`ID_PRODUIT`);

--
-- Contraintes pour la table `PRODUIT`
--
ALTER TABLE `PRODUIT`
  ADD CONSTRAINT `produit_ibfk_1` FOREIGN KEY (`ID_CATEGORIE`) REFERENCES `CATEGORIE` (`ID_CATEGORIE`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
