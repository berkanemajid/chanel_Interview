# CHANEL Interview

## COMMENTS
1. Files: 
- J'ai créé un dossier "Front"
	- A l'intérieur de ce dossier, j'ai créé 2 nouveaux dossiers css et img
- J'ai déplacé respectivement le code styles.css de "views" à "front/css" et les images de "views" à "front/images"
- Le dossier view contient uniquement des fichiers de type twig
- J'ai créé un dossier "Controllers"
	- A l'intérieur de ce dossier, j'ai créé 1 nouveau fichier "product.js"  qui contient les fonctions qui gèrent les routes, que je les appelle depuis "routes/products.js"
- J'ai supprimé la fonction get.list... de app.js et je l'ai placée dans "routes/products.js"
- J'ai changé la route express statique, maintenant il pointe vers le dossier "dist".

2. Accessibilité:
- J'ai ajouté un lien dans le template "view.twig", qui permet de revenir à la liste des produits du carito ou du détail d'un produit.

3. Gulp:
- Par le biais de gulp, j'ai créé des taches qui récupérent le contenu des fichiers "front" et "view" et le mettent dans "dist" (css, img et views)
- J'ai ajouté la partie "contrllers/product.js" dans Gulp pour que se concatène avec les autres fichiers JS

4. Views:
- Concernant la view cart, j'ai réutilisé le template view.twig de telle façon à ce qu'il soit utilisé aussi bien par "view" que par "cart"

5. Git:
- J'ai creé un dépôt sur gitHub où j'ai déposé le projet avec les modifications
- J'ai ajouter, commiter et pucher les derniers modifications plusieurs fois ....

6. Les choses que j'avais pu faire, et je n'ai pas fait:
- Installer gulp-sass via npm et refaire css, utilisant sass
	- Ajoutér via gulp une tâche qui transforme SCSS en CSS3
- Installez "gulp-minify-css" via npm et ajouter une tâche qui peut minifier le code CSS généré