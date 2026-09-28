const prompt = require('prompt-sync')()

const couleurs = {
  reset: "\x1b[0m",
  rouge: "\x1b[31m",
  vert: "\x1b[32m",
  jaune: "\x1b[33m",
  bleu: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  gras: "\x1b[1m",
};

function colorer(texte, code) {
  return code + texte + couleurs.reset;
}

const candidats = [
  { cin: "AB123456", nom: "Boushaba", prenom: "Soufiane", partiPolitique: "Independant", age: 40, electeurs: ["BK482019", "MA991102", "CD772211"] },
  { cin: "CD789012", nom: "El Amrani", prenom: "Yassine", partiPolitique: "RNI", age: 35, electeurs: ["AE654321", "BJ908172"] },
  { cin: "EF345678", nom: "Alami", prenom: "Nadia", partiPolitique: "PAM", age: 42, electeurs: ["CK112233", "OD887766", "FA453627", "JT901283"] },
  { cin: "GH901234", nom: "Benjelloun", prenom: "Amine", partiPolitique: "Istiqlal", age: 50, electeurs: ["LE776655"] },
  { cin: "IJ567890", nom: "Tazi", prenom: "Meriem", partiPolitique: "USFP", age: 29, electeurs: ["XA129847", "EE443322", "P556677"] },
  { cin: "KL123456", nom: "Mansouri", prenom: "Omar", partiPolitique: "Independant", age: 47, electeurs: ["G678123", "HH990011"] },
  { cin: "MN789012", nom: "Chraibi", prenom: "Sara", partiPolitique: "PPS", age: 38, electeurs: ["BB665544", "M504030", "K998877"] },
  { cin: "OP345678", nom: "Berrada", prenom: "Mehdi", partiPolitique: "RNI", age: 55, electeurs: ["AA112233", "U887766"] },
  { cin: "QR901234", nom: "El Fassi", prenom: "Sanaa", partiPolitique: "Istiqlal", age: 33, electeurs: ["QA903214", "CC445566", "ZG112233"] },
  { cin: "ST567890", nom: "Ouazzani", prenom: "Hamza", partiPolitique: "PAM", age: 41, electeurs: ["F554433", "II998877"] },
  { cin: "UV123456", nom: "Filali", prenom: "Khadija", partiPolitique: "USFP", age: 46, electeurs: ["PA123456", "V776655", "EE889900"] },
  { cin: "WX789012", nom: "Slaoui", prenom: "Tariq", partiPolitique: "MP", age: 52, electeurs: ["WA987654"] },
  { cin: "YZ345678", nom: "Belkhayat", prenom: "Laila", partiPolitique: "Independant", age: 31, electeurs: ["Y112233", "DD445566", "LL778899"] },
  { cin: "AA901234", nom: "Jaidani", prenom: "Karim", partiPolitique: "UC", age: 44, electeurs: ["JK554433"] },
  { cin: "BB567890", nom: "Tahiri", prenom: "Salma", partiPolitique: "PPS", age: 36, electeurs: ["CB998877", "X554433", "FF112233"] },
  { cin: "CC123456", nom: "Naji", prenom: "Zineb", partiPolitique: "RNI", age: 28, electeurs: ["Z123456"] },
  { cin: "DD789012", nom: "El Khayat", prenom: "Rachid", partiPolitique: "PAM", age: 60, electeurs: ["RA776655", "GG443322"] },
  { cin: "EE345678", nom: "Kabbaj", prenom: "Anas", partiPolitique: "Istiqlal", age: 39, electeurs: ["K112233", "HH556677"] },
  { cin: "FF901234", nom: "Bouaza", prenom: "Fatima", partiPolitique: "Independant", age: 48, electeurs: ["FA998877", "I554433"] },
  { cin: "GG567890", nom: "Sadiki", prenom: "Mourad", partiPolitique: "MP", age: 53, electeurs: ["SA112233", "JJ445566", "KK778899"] }
];

let choix = "";
while (true) {

  console.log(colorer("=================================", couleurs.cyan));
  console.log(colorer("         ELECTION MANAGER        ", couleurs.cyan + couleurs.gras))
  console.log(colorer("=================================", couleurs.cyan));
  console.log(colorer("1. Ajouter un nouveau candidat ", couleurs.jaune));
  console.log(colorer("2. Ajouter plusieurs candidats à la fois.", couleurs.jaune))
  console.log(colorer("3. Afficher la liste des candidats", couleurs.jaune))
  console.log(colorer("4. Voter pour un candidat ", couleurs.jaune))
  console.log(colorer("5. Modifier les informations d'un candidat", couleurs.jaune))
  console.log(colorer("6. Supprimer un candidat ", couleurs.jaune))
  console.log(colorer("7. Rechercher des candidats :", couleurs.jaune))
  console.log(colorer("8. Statistiques de l'élection :", couleurs.jaune));
  console.log(colorer("0. Quitter", couleurs.jaune));
  choix = parseInt(prompt("Faites votre choix  : "));

  switch (choix) {
        case 1:
            ajouterCandidat();
            break;
        case 2:
            ajouterPlusieurCandidat();
            break;
        case 3:
            afficherListe();
            break;
        case 4:
            voter();
            break;  
        case 5:
            modifInfoCan();
            break;
        case 6:
            supprimerCan();
            break;
        case 7:
            rechercheCan();
            break;  
        case 8:
            statistiqueElection();
            break;      
        case 0:
            console.log(colorer("Au revoir !", couleurs.vert));
            break;
        default:
            console.log(colorer("Choix invalide, veuillez réessayer.", couleurs.rouge));
    }
    if (choix===0){
        break;
    }
}

function trouverCandidat(cin) {
  let trouve = null;
  for (let i = 0; i < candidats.length; i++) {
    if (candidats[i].cin == cin) {
      trouve = candidats[i];
      index = i;
    }
  }
  return trouve;
}
function ajouterCandidat (){
    console.log(colorer("=================================", couleurs.cyan))
    console.log("")
    let cinMin = prompt("le cin de ce candidat (les lettres en majuscules): ")
    let cin = cinMin.toUpperCase()
    if (cin == ""){
        console.log(colorer("Le cin est obligatoire", couleurs.rouge))
        return false;
    }
    if(trouverCandidat(cin)!==null){
        console.log(colorer("le cin exite deja", couleurs.rouge))
        return false;
    }
    let nom = prompt("le nom du candidat : ")
    let prenom = prompt("le prenom du candidat : ")
    let partiPolitique = prompt("La partie politique du candidat : ")
    if (partiPolitique == "") {
        partiPolitique = "Independant";
    }
    let age = parseInt(prompt("l'age du candidat : "))
    if(age<18){
        console.log(colorer("le candidat n'est pas majeur", couleurs.rouge))
        return false
    }
    let candidat ={
        cin : cin,
        nom : nom,
        prenom : prenom,
        partiPolitique : partiPolitique,
        age : age,
        electeurs : []
    }
    
    candidats.push(candidat);
    console.log(colorer("candidat ajouté avec succes.", couleurs.vert))
    return true
}
function ajouterPlusieurCandidat(){
    let nombre = parseInt(prompt("Combien de canidats voulais vous ajouter? "))
    let ajoutes = 0;
    for (let i=0;i<nombre;i++){
        console.log(colorer(`candidat ${i+1} :`, couleurs.jaune))
        let resultat = ajouterCandidat(); 
    
        if (resultat === true){
            ajoutes++;
        } 
        
    }
    console.log(colorer("vous avez ajouter " + ajoutes+ " candidats", couleurs.vert))

}
function afficherListe (){
    console.log(colorer("=================================", couleurs.cyan))
    console.log(colorer("1.affichage normale", couleurs.jaune))
    console.log(colorer("2.Trier les candidats par nombre de votes en ordre decroisant", couleurs.jaune))
    console.log(colorer("3.Filtrer et afficher uniquement les candidats d'un parti politique spécifique", couleurs.jaune))
    console.log(colorer("=================================", couleurs.cyan))
    let choice = parseInt(prompt("Faites votre choix  : "));
    if (choice!==2 && choice!==1 && choice!==3){
            console.log(colorer("invalide enter 1 ou 2 ou 3", couleurs.rouge))
            return false
    }else if (choice==1){
        for (let i=0;i< candidats.length; i++){
            console.log(colorer("cin: "+candidats[i].cin +" / nom: " +candidats[i].nom+ " / prénom: " +candidats[i].prenom+" / Parti politique: "+candidats[i].partiPolitique+" / Âge: " + candidats[i].age+" / les cin des electeurs : "+candidats[i].electeurs, couleurs.bleu))
            console.log("")
        }
    }else if(choice==2){
        let copie = []
        for(let i=0;i<candidats.length;i++){
            copie.push(candidats[i])
        }
        for (let i=0; i<copie.length ; i++){
            for(let j=0; j<copie.length-i-1 ; j++){
            if(copie[j].electeurs.length<copie[j+1].electeurs.length){
                let temp = copie[j+1];
                copie[j+1]= copie[j]
                copie[j] = temp 
            }
        }
    }
    for (let i=0;i< copie.length; i++){
            console.log(colorer("cin: "+copie[i].cin +" / nom: " +copie[i].nom+ " / prénom: " +copie[i].prenom+" / Parti politique: "+copie[i].partiPolitique+" / Âge: " + copie[i].age+" / Nombre de votes : "+copie[i].electeurs.length, couleurs.bleu))
            console.log("") 
        }  
    }else{
        let partiPolitiqueRecherche = prompt(console.log(colorer("Ecris moi la partie politique que vous desirez afficher leur candidat  ", couleurs.jaune))) 
        if (partiPolitiqueRecherche=="") {
            console.log(colorer("vous avez rien ecrit", couleurs.rouge))
            return false
        }else {
            let position = []
            for (let i=0;i<candidats.length;i++ ){
                if (candidats[i].partiPolitique===partiPolitiqueRecherche){
                    position.push(i)
                }
            }
            if(position.length> 0){
                console.log(colorer(`les candidats de la partie politique recherché ${partiPolitiqueRecherche} sont comme suit :`, couleurs.magenta))
                for(let i=0;i<position.length;i++){
                    console.log(colorer("cin: "+candidats[position[i]].cin +" / nom: " +candidats[position[i]].nom+ " / prénom: " +candidats[position[i]].prenom+" / Âge: " + candidats[position[i]].age+" / Nombre de votes : "+candidats[position[i]].electeurs.length, couleurs.bleu))
                    
                }
                return true
            }else{
                console.log(colorer("la partie politique que vous rechercher n'est pas trouvé", couleurs.rouge))
                return false
            }
        }
    }
}
function voter(){
    console.log(colorer("=================================", couleurs.cyan))
    console.log("")
    let cinElecteurMin = prompt(" saisir votre propre CIN : ")
    let cinElecteur = cinElecteurMin.toUpperCase()
    let position2=[]
    for (let i=0;i<candidats.length;i++){
        if (candidats[i].electeurs.includes(cinElecteur)){
            position2.push(i)
        }
    }
    if(position2.length>0){
        console.log(colorer("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau", couleurs.rouge))
        return false
    }else {
        let candidatVotedCinMin = prompt("donnez moi le cin du candidat que vous voulais voter sur lui : ")
        let candidatVotedCin = candidatVotedCinMin.toUpperCase()
        let resultIndex = candidats.findIndex(candidat => candidat.cin === candidatVotedCin);
        if(resultIndex>-1){
            candidats[resultIndex].electeurs.push(cinElecteur)
            console.log(colorer("vous avez voter avec succes!", couleurs.vert))
            return true   
        }
        console.log(colorer("votre candidat n'existe pas", couleurs.rouge))
        return false
    }   
}
function modifInfoCan (){
    console.log(colorer("=================================", couleurs.cyan))
    console.log("")
    console.log(colorer("1.Modifier le parti politique d'un candidat.", couleurs.jaune))
    console.log(colorer("2.Modifier l'âge d'un candidat.", couleurs.jaune))
    console.log("")
    console.log(colorer("=================================", couleurs.cyan))
    let choice$ = parseInt(prompt("Faites votre choix  : "));
    
    if (choice$!==2 && choice$!==1 ){
            console.log(colorer("invalide enter 1 ou 2 ou 3", couleurs.rouge))
            return false
        }else if (choice$==1){
            let cinCandidatPartyModifyMin = prompt("donnez le cin que vous voulais modifier sa partie politique ") 
            let cinCandidatPartyModify = cinCandidatPartyModifyMin.toUpperCase()
            resultat = trouverCandidat(cinCandidatPartyModify)
            if (resultat==null){
                console.log(colorer("ce candidat n'existe pas dans notre liste", couleurs.rouge))
                return false
            }else{
                
                let partiPolitiqueModified = prompt("donnez la nouvelle partie politique ")
                const index = candidats.findIndex(c => c.cin === cinCandidatPartyModify);
                candidats[index].partiPolitique = partiPolitiqueModified;
                console.log(colorer("la partie politique est changé avec succes", couleurs.vert))
                return true
        }
        }else{
            let cinAgeModifyMin = prompt("donnez le cin que vous voulais modifier son age ") 
            let cinAgePartyModify = cinAgeModifyMin.toUpperCase()
            resultat = trouverCandidat(cinAgePartyModify)
            if (resultat==null){
                console.log(colorer("ce candidat n'existe pas dans notre liste", couleurs.rouge))
                return false
            }else{
                let ageModified = prompt("donnez le nouveau age ")

                const index = candidats.findIndex(c => c.cin === cinAgePartyModify);
                candidats[index].age = ageModified
                console.log(colorer("l'age est changé avec succes", couleurs.vert))
                return true
        }
    }
}
function supprimerCan(){
    console.log(colorer("=================================", couleurs.cyan))
    console.log("")
    console.log(colorer("SUPRRESSION D'UN CANDIDAT", couleurs.cyan + couleurs.gras))
    console.log("")
    console.log(colorer("=================================", couleurs.cyan))
    let cinDeletedMin = prompt("donnez moi le cin du candidat que vous souhaitez supprimer : ")
    let cinDeleted = cinDeletedMin.toUpperCase();
    resultat = trouverCandidat(cinDeleted)
    if (resultat==null){
        console.log(colorer("le candidat que vous rechercher n'existe pas dans notre liste", couleurs.rouge))
        return false
    }else{
        candidats.splice(index, 1);
        console.log(colorer("candidat supprrimé avec succes.", couleurs.vert))
        return true
    }
}
function rechercheCan(){
    console.log(colorer("=================================\nRechercher candidat par nom\n=================================", couleurs.cyan))
    let nomrecherche = prompt("donnez moi le nom du candidat que vous recherché :")
    let trouverName = false
    for (let i of candidats) {
        if (i.nom === nomrecherche) {
         trouverName=true    
            console.log(colorer(`les donnes du candidat que vous rechercher :\ncin : ${i.cin}\nnom : ${i.nom}\nprenom : ${i.prenom}\npartie politique : ${i.partiPolitique}\nage : ${i.age}\nelecteurs : ${i.electeurs}\n`, couleurs.bleu))
        } 
    }
    
    if (!trouverName){
        console.log(colorer("le nom n'est pas trouvable", couleurs.rouge))}

}
function statistiqueElection (){
    console.log(colorer(`le nombre total de candidats est ${candidats.length}`, couleurs.bleu))
    let somme =0
    for(let i=0;i<candidats.length;i++){
        somme+=candidats[i].electeurs.length;
    }
    console.log("")
    console.log(colorer(`le nombre total de votes exprimés dans toute l'élection est : ${somme}`, couleurs.bleu))
    console.log("")
    let copie = []
        for(let i=0;i<candidats.length;i++){
            copie.push(candidats[i])
        }
        for (let i=0; i<copie.length ; i++){
            for(let j=0; j<copie.length-i-1 ; j++){
            if(copie[j].electeurs.length<copie[j+1].electeurs.length){
                let temp = copie[j+1];
                copie[j+1]= copie[j]
                copie[j] = temp 
            }
        }
    }
    console.log(colorer("Le Top 3 des candidats ayant le plus de votes : ", couleurs.cyan + couleurs.gras))
    for (let i=0;i< 3; i++){
            console.log(colorer("cin: "+copie[i].cin +" / nom: " +copie[i].nom+ " / prénom: " +copie[i].prenom+" / Parti politique: "+copie[i].partiPolitique+" / Âge: " + copie[i].age+" / Nombre de votes : "+copie[i].electeurs.length, couleurs.bleu))
            console.log("") 
        }        
    
    console.log("")
    let partipolitique = {};
    for (let i = 0 ; i < candidats.length ; i++){
        let parti = candidats[i].partiPolitique;
        if (partipolitique[parti] === undefined){
         partipolitique[parti] = 1;
        }
        else {
            partipolitique[parti]++;
        }
    }
    console.log("le nombre de candidats par parti politique : ")
    for (parti in partipolitique){
        console.log(`${parti} : ${partipolitique[parti]}`)
    }
}
    
