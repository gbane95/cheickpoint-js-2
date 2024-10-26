//Fonctions de manipulation de chaînes

//Inverser une chaîne :
function inverserChaine(chaine) {
    return chaine.split('').reverse().join('');
}

//Compter les caractères :
function compterCaracteres(chaine) {
    return chaine.length;
}

//Mettre les mots en majuscule :
function mettreMotsEnMajuscule(phrase) {
    return phrase.split(' ')
                 .map(mot => mot.charAt(0).toUpperCase() + mot.slice(1))
                 .join(' ');
}


//Fonctions de tableau

//Rechercher le maximum :
function trouverMaximum(tableau) {
    return Math.max(...tableau);
}

//Rechercher le minimum :
function trouverMinimum(tableau) {
    return Math.min(...tableau);
}

//Somme d'un tableau :
function sommeTableau(tableau) {
    return tableau.reduce((accumulateur, valeur) => accumulateur + valeur, 0);
}

//Filtrer le tableau :
function filtrerTableau(tableau, condition) {
    return tableau.filter(condition);
}


//Fonctions mathématiques

//Factorielle :
function factorielle(n) {
    if (n < 0) return undefined; // Factorielle n'est pas définie pour les nombres négatifs
    if (n === 0) return 1; // 0! = 1
    return n * factorielle(n - 1);
}

//Vérification des nombres premiers :
function estPremier(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

//Suite de Fibonacci :
function fibonacci(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        if (i === 0) result.push(0);
        else if (i === 1) result.push(1);
        else result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
