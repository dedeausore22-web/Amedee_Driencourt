function sport(année){
    var image;
    var p1 = document.getElementById("p1");

    if(année == 2025){
        image = "sport2025.jpg";
        p1.innerHTML = "Année 2025 :<br>" +
            "Finaliste aux championnat de france 1500m (12ème) <br>" +
            "Finaliste aux championnat de france 1500m indoor (8ème) <br>" +
            "Champion de Bretagne U23 1500m indoor (4ème élite) et 2 ème U23 en Outdoor (3ème élite) <br>" +
            "8ème championnat de france universitaire sur 1500m <br>" +
            "800m : 1'54\"28 // 1500m : 3'51\"34 // 3000m : 8'23\"88 // 10 km : 30'35\"";
    } 
    else if (année == 2024){
        image = "sport2024.jpg";
        p1.innerHTML = "Année 2024 :<br>" +
            "3 ème championnat de france universitaire en relais <br>" +
            "Championnat de france universitaire sur 1500m (14 ème) <br>" +
            "5ème championnat de Bretagne U23 1500m indoor (11ème élite) <br>" +
            "39 ème 10 km internationale de bordeaux + record des côtes d'armor U20 (30'39) <br>" +
            "800m : 1'56\"35 // 1500m : 3'51\"98 // 3000m : 8'33\"88 // 10 km : 30'39\"";
    } 
    else if (année == 2023){ 
        image = "sport2023.jpg";
        p1.innerHTML = "Année 2023 :<br>" +
            "Vice champion de france U20 10 000m piste <br>" +
            "Finaliste aux championnat de france U20 5000m (18ème)<br>" +
            "Champion de Bretagne universitaire 1500m indoor et en cross <br>" +
            "Qualification aux championnat de france de cross U20 FFA à Carhaix <br>" +
            "1500m : 3'57\"63 // 3000m : 8'33\"43 // 5000m : 15'00\"50 // 10 000m : 32'19\"24";
    } 
    else if (année == 2022){ 
        image = "sport2022.jpg";
        p1.innerHTML = "Année 2022 :<br>" +
            "Cross Nationnal de la Chapelle-Sur-Erdre U18 (3ème) <br>" +
            "Championat de Bretagne de cross U18 (3ème) <br>" +
            "Opération du LCA antérieure droit et du ménisque<br>" +
            "1500m : 4'05\"61";
    } 
    else if (année == 2021){ 
        image = "sport2021.jpg";
        p1.innerHTML = "Année 2021 :<br>" +
            "Vice champion de france U18 10 000m piste & record des côtes d'armor (33'20) <br>" +
            "Champion de Bretagne U20 1500m (16ème élite) <br>" +
            "Championat de france U18 3000m (14ème) <br>" +
            "1500m : 4'02\"61 // 3000m : 8'45\"43";
    } 
    else if (année == 2020){ 
        image = "sport2020.jpg";
        p1.innerHTML = "Année 2020 :<br>" +
            "Championnat de France course en montagne 14 ème (6 ème U18)<br>" +
            "Champion de Bretagne de cross U18 (9ème U18) <br>";
    } 
    else if (année == 2019){ 
        image = "sport2019.jpg";
        p1.innerHTML = "Année 2019 :<br>" +
            "Vice champion de france U16 de 3000m UGSEL <br>" +
            "3 ème championnat de france U16 de cross par équipes hommes, mixte et 12 ème individuel <br>" +
            "Champion de Bretagne U16 du 2000m <br>" +
            "32 ème performance européenne de l'année en U16 sur 3000m <br>" +
            "1000m: 2'49\"90 // 2000m : 5'59\"28 // 3000m : 9'17\"32";
    } 

    document.getElementById("monImage").src = image;
}