const prompt = require('prompt-sync')()
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

  console.log("=================================");
  console.log("         ELECTION MANAGER        ")
  console.log("=================================");
  console.log("1. Ajouter un nouveau candidat ");
  console.log("2. Ajouter plusieurs candidats à la fois.")
  console.log("3. Afficher la liste des candidats")
  console.log("4. Voter pour un candidat ")
  console.log("5. Modifier les informations d'un candidat")
  console.log("6. Supprimer un candidat ")
  console.log("7. Rechercher des candidats :")
  console.log("8. Statistiques de l'élection :");
  console.log("0. Quitter");
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
            console.log("Au revoir !");
            break;
        default:
            console.log("Choix invalide, veuillez réessayer.");
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
    console.log("=================================")
    console.log("")
    let cinMin = prompt("le cin de ce candidat (les lettres en majuscules): ")
    let cin = cinMin.toUpperCase()
    if (cin == ""){
        console.log("Le cin est obligatoire")
        return false;
    }
    if(trouverCandidat(cin)!==null){
        console.log("le cin exite deja")
        return false;
    }
    let nom = prompt("le nom du candidat : ")
    let prenom = prompt("le prenom du candidat : ")
    let partiPolitique = prompt("La partie politique du candidat : ")
    let age = parseInt(prompt("l'age du candidat : "))
    if(age<18){
        console.log("le candidat n'est pas majeur")
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
    console.log("candidat ajouté avec succes.")
    return true
}
function ajouterPlusieurCandidat(){
    let nombre = parseInt(prompt("Combien de canidats voulais vous ajouter? "))
    let ajoutes = 0;
    for (let i=0;i<nombre;i++){
        console.log(`candidat ${i+1} :`)
        let resultat = ajouterCandidat(); 
    
        if (resultat === true){
            ajoutes++;
        } 
        
    }
    console.log("vous avez ajouter " + ajoutes+ " candidats")

}
function afficherListe (){
    console.log("=================================")
    console.log("")
    console.log("1.affichage normale")
    console.log("2.Trier les candidats par nombre de votes en ordre decroisant")
    console.log("3.Filtrer et afficher uniquement les candidats d'un parti politique spécifique")
    console.log("")
    let choice = parseInt(prompt("Faites votre choix  : "));
    if (choice!==2 && choice!==1 && choice!==3){
            console.log("invalide enter 1 ou 2 ou 3")
            return false
    }else if (choice==1){
        for (let i=0;i< candidats.length; i++){
            console.log("cin: "+candidats[i].cin +" / nom: " +candidats[i].nom+ " / prénom: " +candidats[i].prenom+" / Parti politique: "+candidats[i].partiPolitique+" / Âge: " + candidats[i].age+" / Nombre de votes : "+candidats[i].electeurs)
            console.log("")
        }
    }else if(choice==2){
        for (let i=0; i<candidats.length-1 ; i++){
            for(let j=0; j<candidats.length-1-i ; j++){
            if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){
                let temp = candidats[j+1].electeurs.length;
                candidats[j+1].electeurs.length = candidats[j].electeurs.length
                candidats[j].electeurs.length = temp 
            }
        }
    }
    for (let i=0;i< candidats.length; i++){
            console.log("cin: "+candidats[i].cin +" / nom: " +candidats[i].nom+ " / prénom: " +candidats[i].prenom+" / Parti politique: "+candidats[i].partiPolitique+" / Âge: " + candidats[i].age+" / Nombre de votes : "+candidats[i].electeurs.length)
            console.log("") 
        }  
    }else{
        let partiPolitiqueRecherche = prompt(console.log("Ecris moi la partie politique que vous desirez afficher leur candidat  ")) 
        if (partiPolitiqueRecherche=="") {
            console.log("vous avez rien ecrit")
            return false
        }else {
            let position = []
            for (let i=0;i<candidats.length;i++ ){
                if (candidats[i].partiPolitique===partiPolitiqueRecherche){
                    position.push(i)
                }
            }
            if(position.length> 0){
                console.log(`les candidats de la partie politique recherché ${partiPolitiqueRecherche} sont comme suit :`)
                for(let i=0;i<position.length;i++){
                    console.log("cin: "+candidats[position[i]].cin +" / nom: " +candidats[position[i]].nom+ " / prénom: " +candidats[position[i]].prenom+" / Âge: " + candidats[position[i]].age+" / Nombre de votes : "+candidats[position[i]].electeurs.length)
                    
                }
                return true
            }else{
                console.log("la partie politique que vous rechercher n'est pas trouvé")
                return false
            }
        }
    }
}


function voter(){
    console.log("=================================")
    console.log("")
    let cinElecteurMin = prompt(" saisir votre propre CIN : ")
    let cinElecteur = cinElecteurMin.toUpperCase()
    let position2=[]
    for (let i=0;i<candidats.length;i++){
        if (candidats[i].electeurs===cinElecteur){
            position2.push(i)
        }
    }
    if(position2.length>0){
        console.log("Vous avez déjà voté et vous n'avez pas le droit de modifier votre vote ni de voter à nouveau")
        return false
    }else {
        let candidatVotedCinMin = prompt("donnez moi le cin du candidat que vous voulais voter sur lui : ")
        let candidatVotedCin = candidatVotedCinMin.toUpperCase()
        let resultIndex = candidats.findIndex(candidat => candidat.cin === candidatVotedCin);
        if(resultIndex>-1){
            candidats[resultIndex].electeurs.push(cinElecteur)
            console.log("vous avez voter avec succes!")
            return true   
        }
        console.log("votre candidat n'existe pas")
        return false
        }   
    }
function modifInfoCan (){
    console.log("=================================")
    console.log("")
    console.log("1.Modifier le parti politique d'un candidat.")
    console.log("2.Modifier l'âge d'un candidat.")
    console.log("")
    console.log("=================================")
    let choice$ = parseInt(prompt("Faites votre choix  : "));
    
    if (choice$!==2 && choice$!==1 ){
            console.log("invalide enter 1 ou 2 ou 3")
            return false
        }else if (choice$==1){
            let cinCandidatPartyModifyMin = prompt("donnez le cin que vous voulais modifier sa partie politique ") 
            let cinCandidatPartyModify = cinCandidatPartyModifyMin.toUpperCase()
            resultat = trouverCandidat(cinCandidatPartyModify)
            if (resultat==null){
                console.log("ce candidat n'existe pas dans notre liste")
                return false
            }else{
                
                let partiPolitiqueModified = prompt("donnez la nouvelle partie politique ")
                const index = candidats.findIndex(c => c.cin === cinCandidatPartyModify);
                candidats[index].partiPolitique = partiPolitiqueModified;
                console.log("la partie politique est changé avec succes")
                return true
        }
        }else{
            let cinAgeModifyMin = prompt("donnez le cin que vous voulais modifier son age ") 
            let cinAgePartyModify = cinAgeModifyMin.toUpperCase()
            resultat = trouverCandidat(cinAgePartyModify)
            if (resultat==null){
                console.log("ce candidat n'existe pas dans notre liste")
                return false
            }else{
                let ageModified = prompt("donnez le nouveau age ")

                const index = candidats.findIndex(c => c.cin === cinAgePartyModify);
                candidats[index].age = ageModified
                console.log("l'age est changé avec succes")
                return true
        }
    }
}
function supprimerCan(){
    console.log("=================================")
    console.log("")
    console.log("SUPRRESSION D'UN CANDIDAT")
    console.log("")
    console.log("=================================")
    let cinDeletedMin = prompt("donnez moi le cin du candidat que vous souhaitez supprimer : ")
    let cinDeleted = cinDeletedMin.toUpperCase();
    resultat = trouverCandidat(cinDeleted)
    if (resultat==null){
        console.log("le candidat que vous rechercher n'existe pas dans notre liste")
        return false
    }else{
        candidats.splice(index, 1);
        console.log("candidat supprrimé avec succes.")
        return true
    }
}


function rechercheCan(){
    console.log("=================================\nRechercher candidat par nom\n=================================")
    let nomrecherche = prompt("donnez moi le nom du candidat que vous recherché :")
    let trouverName = false
    for (let i of candidats) {
        if (i.nom === nomrecherche) {
         trouverName=true    
            console.log(`les donnes du candidat que vous rechercher :\ncin : ${i.cin}\nnom : ${i.nom}\nprenom : ${i.prenom}\npartie politique : ${i.partiPolitique}\nage : ${i.age}\nelecteurs : ${i.electeurs}\n`)
        } 
    }
    
    if (!trouverName){
        console.log("le nom n'est pas trouvable")}

}


function statistiqueElection (){
    console.log(`le nombre total de candidats est ${candidats.length}`)
    let somme =0
    for(let i=0;i<candidats.length;i++){
        somme+=candidats[i].electeurs.length;
    }
    console.log(`le nombre total de votes exprimés dans toute l'élection est : ${somme}`)
    console.log("")
    for (let i=0; i<candidats.length-1 ; i++){
            for(let j=0; j<candidats.length-1 ; j++){
            if(candidats[j].electeurs.length<candidats[j+1].electeurs.length){
                let temp = candidats[j+1].electeurs.length;
                candidats[j+1].electeurs.length = candidats[j].electeurs.length
                candidats[j].electeurs.length = temp 
            }
        }
    }
    console.log("Le Top 3 des candidats ayant le plus de votes : ")
    for (let i=0;i<3; i++){
            
            console.log("cin: "+candidats[i].cin +" / nom: " +candidats[i].nom+ " / prénom: " +candidats[i].prenom+" / Parti politique: "+candidats[i].partiPolitique+" / Âge: " + candidats[i].age+" / Nombre de votes : "+candidats[i].electeurs.length)
            console.log("") 
    }
    console.log("")
    let partis = [];
    let compteurs = [];
    for (let i = 0; i < candidats.length; i++) {
        let index = partis.indexOf(candidats[i].partiPolitique);
        if (index == -1) {
            partis.push(candidats[i].partiPolitique);
            compteurs.push(1);
            } else {
                compteurs[index] = compteurs[index] + 1;
    }
  }
    for (let i = 0; i < partis.length; i++) {
        console.log(partis[i] + " : " + compteurs[i] + " candidat(s)");
  }
}
    
    
