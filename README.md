# BookUp_MM4_2020
Par Tapia Geovana et Hor Raphaël

##  Objectifs du projet
Projet étudiant de création d'un service de bibliothèque partagée en entreprise/école.
Suite à une recherche utilisateur, nous avons conçu des maquettes mobile que nous avons commencé à intégrer.

**Lien Figma:** https://www.figma.com/file/1ESflD2ORhrSdq8SYZoOXr/Bookclub?node-id=268%3A872

## Parcours développé
Recherche d'un livre sur le Javascript : Home > Recherche > Catégorie JS > Fiche produit > Tunnel de réservation

## Architecture du projet
**HTML** 
- Nous avons créé une page principale (index.html) et d'autres pages secondaires (dans le dossier /pages).
- Concernant la réservation, nous avons intégré toutes les étapes dans une seule et même page (reservation.html)

**CSS** 
- Nous avons créé un reset.css pour modifier les comportements natifs des éléments html / Navigateurs. 
- Nous disposons d'un fichier common.css qui contient certains éléments communs à toutes les pages (titres/fonts/couleurs...)
- Chaque page a ensuite sa propre feuille de style CSS

**JS**
- Le javascript utilisé sert essentiellement à gérer l'affichage du tunnel de réservation (différentes étapes). 

## Technologies utilisées
- HTML 
- CSS
- JS
- https://glyphter.com/ pour transformer les icones en font
- https://fonts.google.com/ pour la police (Poppins)

## Problèmes actuels
Nous avons essayé de tester notre application entre 320px et 560px. La majorité des pages et des éléments sont responsives (bien que certains aient des tailles et dimensions en PX). Seul un bouton nous pose problème.

- Les boutons dans le tunnel de réservation ne sont pas responsives en dessous d'une hauteur égale à environ 650px.

## Améliorations futures
- Factoriser notre code encore plus / Améliorer le common style : 
    - Styles des textes autres que les titres (H1-H4)
    - Gestion des espaces
- Rendre le bouton dans le tunnel de réservation totalement responsive.

- Créer d'autres pages
- Créer des transitions entre les pages
- Faire tester notre parcours à des utilisateurs
- Rendre les informations dynamiques (livres, auteurs...)
...


Merci 👍🌈
