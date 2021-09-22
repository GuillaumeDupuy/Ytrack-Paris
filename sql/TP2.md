## Paris Ynov Campus

### TP N°2 - SQL
### Année : 2021/2022

## Consignes importantes :

-     Créer le fichier ynov.db
-     Importer le fichier ynov.db dans un projet SQLite dans Table Plus
-     Exécutez vos requêtes dans l'onglet SQL
-     Créer le fichier tp2.sql, mettez chaque requête exécutée correctement dans le fichier suivie d'un point-virgule (;).

### Exercice 1 :  Création et structuration des tables

1)  — Créer la table formation qui a la structure suivante :
-    idFormation qui est la clé primaire et qui est not null.
-    nom qui a comme type varchar(50) et not null.

2)  — Ajouter une colonne niveau a la table formation qui est en varchar(2) et null.

3)  — Insérer l'ensemble de formations dans la table formation, assurez- vous d'avoir un résultat 
comme suit :

![3](https://user-images.githubusercontent.com/56391911/134422649-0407d280-c1c9-47c5-a916-a6dbc9d06ec8.png)

4)  — Créer la table etudiant qui a la structure suivante :
- idEtudiant qui est la clé primaire et qui est not null
- nom qui est un varchar(50) et not null
- prenom qui est un varchar(50) et not null
- dateDeNaissance qui est une date et not null
- idFormation qui est une référence (clé étrangère) d'idFormation  de la table formation

5)  -  Insérer la Iiste d'étudiants qui se trouve dans le fichier Iiste_étudiants.txt dans la table 
etudiant, assurez-vous d'avoir un résultat comme suit :

![5](https://user-images.githubusercontent.com/56391911/134422671-7bfc3c6f-f319-404a-b3e2-af59f89d2aa3.png)

6)  Ecrire une requête qui permet d'ajouter l'étudiante Laurent Caroline qui est née le 2000-07-16 
et qui est en B2 informatique à la table etudiant

7)  Créer la table enseignant qui a la structure suivante :
-    idEnseignant qui est une clé primaire et not null.
-    nom qui est un varchar(50) et not null
-    prenom qui est un varchar(50) et not null
-    dateDeNaissance qui est une date et not null

8)  Insérer la Iiste des enseignants qui se trouve dans le fichier Iiste_enseignants.txt, 
assurez-vous que vous avez un résultat comme suit :

![8](https://user-images.githubusercontent.com/56391911/134422687-8e3f13e1-714f-4e00-aee0-d9fb8231f6f6.png)

9)  Créer la table enseignement  qui a les colonnes suivante :
-    idFormation qui est une référence d’idFormation  de la table formation
-    idEnseignant qui est une référence d’idEnseignant de la table enseignant

10) A partir des informations ci-dessous remplissez la table enseignement  :

-    Mr Taxier-Boulay enseigne tous les niveaux de marketing
-    Mr Rousseau enseigne tous les niveaux d'audiovisuel
-    Mr Morvan enseigne tous les niveaux d'animation
-    Mr Perez-Aubry enseigne tous les niveaux de Création et design
-    Mr Merle enseigne tous les niveaux d'informatique
-    Mr Delahaye enseigne les b1 et les b2 info Mr Peltier enseigne les b3 info
-    Mr Bazin enseigne les b2 et b3 marketing
-    Mr Millet enseigne les b1 et b3 animation
-    Mme Le Blin enseigne les b1 et b2 audiovisuel

### Exercice 2 : Opérations sur les données

## RQ : Avant de commencer faites une copie pour votre fichier ynov.db pour éviter de refaire toutes les requêtes précédente en cas d'erreur.

1)  — Ecrire une requête qui permet d'afficher toutes les informations de tous les enseignants

2)  — Ecrire une requête qui permet de modifier la date de naissance de l'étudiant Blot Matthieu, 
la date de naissance correcte est « 1997-03- 25 »

3)  — L'enseignant Merle n'enseigne plus les b1 info, faites la mise à jour nécessaire dans la 
table enseignements

4)  — L'école décide de supprimer tous les niveaux de là la formation Animation faites des requêtes 
pour mettre à jour les tables concernées.

5)  — Ecrire une requête qui permet d'afficher tous les étudiants qui ont un nom qui contient la 
lettre ‘b’

6)  Ecrire une requête qui permet d'afficher les 3 plus jeunes étudiants.

7)  - Ecrire une requête qui permet d'afficher tous les étudiants qui sont en b1 et en b2.

8) - Ecrire une requête qui permet d'afficher (avec un alias phrase) des phrases sous la forme 
suivante :

Mr (nom enseignant) enseigne la formation (nom de formation) ou se trouve l'étudiant (nom 
étudiant).


9) -Ecrire une requête qui permet d'afficher le nombre de formations au niveau B3, avec un 
alias nbFormationsB3

10) - Ecrire une requête qui permet d'afficher le nom et prénom et l'Age de chaque étudiant.

11) - Ecrire une requête qui permet d'afficher en plus du nom et prenom de l'étudiant une 
nouvelle case ou on indique s'il est concerné par le stage ou pas, la case est nommée stage.

-    Les étudiants concernés par le stage sont les étudiants de B3.
-    On donne la valeur ‘Oui’ pour les concernés et ‘Non’ pour les non concernés.

12) - En utilisant une sous-requête, Supprimez tous les étudiants qui sont en ‘Audiovisuel’.
