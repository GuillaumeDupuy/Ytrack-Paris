## Paris Ynov Campus

### TP N°1 - SQL
### Année : 2022/2023
### Mentor Ynov

Dans ce TP, nous allons voir les requêtes basiques pour créer et manipuler une base de données sous SQLite. A la fin de la séance, vous devez :

- Rendre un script SQL (un fichier .sql) avec toutes les commandes et les requêtes SQL qu'il vous est demander de faire.

- Ce fichier doit être nommé avec votre nom et le numéro du TP : prénom-nom-tp.sql.

- Envoyer ce fichier sur l'espace moodle

### 1 Les requêtes

Dans cet exercice, nous allons créer une base de données " Cinéma " avec le schéma suivant:

Film (***idFilm*** integer, titre varchar(80) )
Acteur (***idActeur*** integer, nom varchar(80), prenom varchar(80) )
Filmographie (***idActeur*** integer, idFilm integer)

Les attributs en italique et gras sont des clés primaires.
Avant de créer une table film, vérifier qu'elle n'existe pas.

1. Ecrire une requête pour créer la table Films avec la colonne idFilm de type integer (en tant que clé primaire) et la colonne titre de type varchar (non null).

2. Ajouter à la table Films les titres de films suivants, avec leurs clés respectives : 
{(1,''Les évadés''), (2,''Le parrain''), (3,''La vie de Pi'')}

3. Ecrire une requête pour afficher tous les éléments de la table Films.
Voilà le résultat que vous devez voir apparaître :

1|Les évadés
2|Le parrain
3|La vie de Pi

4. Ecrire une requête pour ajouter les titres de films suivants { ''Chocolat'',  ''Scarface'', ''Rango''}.

5. Ecrire une requête pour afficher tous les éléments de la table Films.
Voila le résultat que vous devez voir apparaître :

1|Les évadés
2|Le parrain
3|La vie de Pi
4|Chocolat
5|Scarface
6|Rango

6. Ecrire une requête pour afficher tous les titres de films. ´
Voila le résultat que vous devez voir apparaître :

Les évadés
Le parrain
La vie de Pi
Chocolat
Scarface
Rango

7. Ecrire une requête pour créer la table ´ Acteurs avec la colonne idActeur de type integer (en tant que clé primaire) et les colonnes nom et prenom de types varchar (non null).

8. Ecrire une requête pour ajouter les acteurs suivants : {Johnny Deep, Al Pacino, Suraj
Sharma}.

9. Ecrire une requête qui permet de lister le nom des acteurs.
Voila le résultat que vous devez voir apparaître :

Deep
Pacino
Sharma

10. Ecrire une requête pour créer la table Filmographie. Ajouter les contraintes d'intégrité :
idActeur et idFilm sont des clés étrangères correspondant aux attributs Acteur(idActeur)
et Film(idFilm).

11. Ecrire les requêtes pour remplir la table Filmographie :
- Deep a joué dans Chocolat et Rango
- Al Pacino dans Le parrain et Scarface 	
- Sharma dans La vie de Pi.

12. Ecrire une requête pour afficher tous les éléments de la table Filmographie.
Voila le résultat que vous devez voir apparaître :

1|4
1|6
2|2
2|5
3|3

13. Ecrire une requête qui permet de lister les idfilm de l'acteur Johny Deep
Voila le résultat que vous devez voir apparaître :

4|6

14. Ecrire une requête qui permet d'afficher les noms des films avec le nom de l'acteur
Voila le résultat que vous devez voir apparaître :

chocolat|Deep
rango|Deep
Le parrain|Pacino
scarface|Pacino
La vie de Pi|Sharma

15. Ecrire une requête qui permet d'afficher une phrase : acteur.nom à joué dans film.titre
Voila le résultat que vous devez voir apparaître :

Deep a joué dans chocolat,
Deep a joué dans rango,
Pacino a joué dans Le parrain,
Pacino a joué dans scarface,
Sharma a joué dans La vie de Pi

### 2 Création du script SQL

1. Créer un fichier .sql et nommez le prénom-nom-tp.sql.
2. Ajouter toutes les requêtes crées dans l'exercice précédent.

OU

1. Exécuter la commande dump vu dans le cours pour générer le script directement
