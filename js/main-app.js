// Create Element by DOM for Esay Difficulty
function difficultyEasy(e){
    var mainBox = document.getElementById("mainBox");
    mainBox.innerHTML = '';    
    mainBox.classList.remove("col-10", "col-lg-3", "col-md-3", "col-sm-3", "col-12", "col-lg-4", "col-md-4", "col-sm-4");
    mainBox.classList.add("col-8", "col-lg-2", "col-md-2", "col-sm-2");
    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered m-0");
    var tBodyTag = document.createElement("tbody");
    for(var i = 0; i < 3; i++){
        var trTag = document.createElement("tr");
        for(var j = 0; j < 3; j++){
            var tdTag = document.createElement("td");
            tdTag.setAttribute("scope", "col");
            tdTag.setAttribute("onclick", "generateNum(this)");
            tdTag.appendChild(document.createTextNode("?"));
            trTag.appendChild(tdTag);
        }
        tBodyTag.appendChild(trTag);
    }
    tableTag.appendChild(tBodyTag);
    var resetBtn = document.createElement("button");    
    resetBtn.setAttribute("type", "button");
    resetBtn.setAttribute("onclick", "resetBtn()");
    resetBtn.setAttribute("class", "btn btn-success text-white text-uppercase px-5 my-4");
    resetBtn.appendChild(document.createTextNode("Reset"))
    mainBox.appendChild(tableTag);
    mainBox.appendChild(resetBtn);
}

function resetBtn(){
    var mainBox = document.getElementById("mainBox");
    mainBox.innerHTML = '';
    document.getElementById("yourScore").innerHTML = "00";
}

// Generate Number onClick
function generateNum(e){
    if(e.innerHTML === "?"){
        e.setAttribute("class", "bg-primary")
        e.innerHTML = Math.floor((Math.random() * 5) + 1);
        var tdLength = document.getElementsByTagName("td").length;
        if(tdLength === 9){
            return easyCheckNumbers();
        }else if(tdLength === 16){
            return mediumCheckNumbers();
        }else if(tdLength === 25){
            return hardCheckNumbers();
        }
    }
    console.log(tdLength);
}

// Check similar number in Easy Difficulty
function easyCheckNumbers(){
    var getTd = document.getElementsByTagName("td");
    var yourScore = parseInt(document.getElementById("yourScore").innerHTML);
    if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" &&
        getTd[0].innerHTML === getTd[1].innerHTML && getTd[1].innerHTML === getTd[2].innerHTML &&
        getTd[2].innerHTML === getTd[0].innerHTML){   
        // This condition is for row 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[2].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Row 1 = You win");
    }else if(getTd[3].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[5].innerHTML !== "?" &&
            getTd[3].innerHTML === getTd[4].innerHTML && getTd[4].innerHTML === getTd[5].innerHTML &&
            getTd[5].innerHTML === getTd[3].innerHTML){
        // This condition is for row 2
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Row 2 = You win")
    }else if(getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[8].innerHTML !== "?" &&
            getTd[6].innerHTML === getTd[7].innerHTML && getTd[7].innerHTML === getTd[8].innerHTML &&
            getTd[8].innerHTML === getTd[6].innerHTML){
        // This condition is for row 3
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Row 3 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[3].innerHTML !== "?" && getTd[6].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[3].innerHTML && getTd[3].innerHTML === getTd[6].innerHTML &&
            getTd[6].innerHTML === getTd[0].innerHTML){
        // This condition is for column 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Column 1 = You win")
    }else if(getTd[1].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[7].innerHTML !== "?" &&
            getTd[1].innerHTML === getTd[4].innerHTML && getTd[4].innerHTML === getTd[7].innerHTML &&
            getTd[7].innerHTML === getTd[1].innerHTML){
        // This condition is for column 2
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Column 2 = You win")
    }else if(getTd[2].innerHTML !== "?" && getTd[5].innerHTML !== "?" && getTd[8].innerHTML !== "?" &&
            getTd[2].innerHTML === getTd[5].innerHTML && getTd[5].innerHTML === getTd[8].innerHTML &&
            getTd[8].innerHTML === getTd[2].innerHTML){
        // This condition is for column 3
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("Column 3 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[8].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[4].innerHTML && getTd[4].innerHTML === getTd[8].innerHTML &&
            getTd[8].innerHTML === getTd[0].innerHTML){
        // This condition is for top letf to bottom right
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("TL to BR = You win")
    }else if(getTd[2].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[6].innerHTML !== "?" &&
            getTd[2].innerHTML === getTd[4].innerHTML && getTd[4].innerHTML === getTd[6].innerHTML &&
            getTd[6].innerHTML === getTd[2].innerHTML){
        // This condition is for top right to bottom left
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 5;
        swal({
            title: 'You Win!',
            text: 'You have earn +5 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyEasy();
        });
        console.log("TR to BL = You win")
    }else{
        if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" &&
            getTd[3].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[5].innerHTML !== "?" && 
            getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[8].innerHTML !== "?"){
            swal({
                title: 'You Lose!',
                text: 'Better luck next time...',
                imageUrl: './images/sad-emoji.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Smiling Emoji',
                // animation: false,
            }).then((value)=>{
                return difficultyEasy();
            });
        }
    }
}

// Create Element by DOM for Medium Difficulty
function difficultyMedium(e){
    var mainBox = document.getElementById("mainBox");
    mainBox.innerHTML = '';
    mainBox.classList.remove("col-8", "col-lg-2", "col-md-2", "col-sm-2", "col-12", "col-lg-4", "col-md-4", "col-sm-4");
    mainBox.classList.add("col-10", "col-lg-3", "col-md-3", "col-sm-3", "h5");

    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered m-0");
    var tBodyTag = document.createElement("tbody");
    for(var i = 0; i < 4; i++){
        var trTag = document.createElement("tr");
        for(var j = 0; j < 4; j++){
            var tdTag = document.createElement("td");
            tdTag.setAttribute("scope", "col");
            tdTag.setAttribute("onclick", "generateNum(this)");
            tdTag.appendChild(document.createTextNode("?"));
            trTag.appendChild(tdTag);
        }
        tBodyTag.appendChild(trTag);
    }
    tableTag.appendChild(tBodyTag);
    var resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.setAttribute("onclick", "resetBtn()");
    resetBtn.setAttribute("class", "btn btn-success text-white text-uppercase px-5 my-4");
    resetBtn.appendChild(document.createTextNode("Reset"))
    
    mainBox.appendChild(tableTag);
    mainBox.appendChild(resetBtn);
}

// Check similar numbers in Medium Difficulty
function mediumCheckNumbers(){
    var getTd = document.getElementsByTagName("td");
    var yourScore = parseInt(document.getElementById("yourScore").innerHTML);
    if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" && getTd[3].innerHTML !== "?" &&
        getTd[0].innerHTML === getTd[1].innerHTML && getTd[1].innerHTML === getTd[2].innerHTML &&
        getTd[2].innerHTML === getTd[3].innerHTML && getTd[3].innerHTML === getTd[0].innerHTML){   
        // This condition is for row 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[3].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Row 1 = You win");
    }else if(getTd[4].innerHTML !== "?" && getTd[5].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" &&
            getTd[4].innerHTML === getTd[5].innerHTML && getTd[5].innerHTML === getTd[6].innerHTML &&
            getTd[6].innerHTML === getTd[7].innerHTML && getTd[7].innerHTML === getTd[4].innerHTML){
        // This condition is for row 2
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Row 2 = You win")
    }else if(getTd[8].innerHTML !== "?" && getTd[9].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[11].innerHTML !== "?" &&
            getTd[8].innerHTML === getTd[9].innerHTML && getTd[9].innerHTML === getTd[10].innerHTML &&
            getTd[10].innerHTML === getTd[11].innerHTML && getTd[11].innerHTML === getTd[8].innerHTML){
        // This condition is for row 3
        getTd[8].classList.replace("bg-primary", "bg-success");
        getTd[9].classList.replace("bg-primary", "bg-success");
        getTd[10].classList.replace("bg-primary", "bg-success");
        getTd[11].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Row 3 = You win")
    }else if(getTd[12].innerHTML !== "?" && getTd[13].innerHTML !== "?" && getTd[14].innerHTML !== "?" && getTd[15].innerHTML !== "?" &&
            getTd[12].innerHTML === getTd[13].innerHTML && getTd[13].innerHTML === getTd[14].innerHTML &&
            getTd[14].innerHTML === getTd[15].innerHTML && getTd[15].innerHTML === getTd[12].innerHTML){
        // This condition is for row 4
        getTd[12].classList.replace("bg-primary", "bg-success");
        getTd[13].classList.replace("bg-primary", "bg-success");
        getTd[14].classList.replace("bg-primary", "bg-success");
        getTd[15].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Row 4 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[8].innerHTML !== "?" && getTd[12].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[4].innerHTML && getTd[4].innerHTML === getTd[8].innerHTML &&
            getTd[8].innerHTML === getTd[12].innerHTML && getTd[12].innerHTML === getTd[0].innerHTML){
        // This condition is for column 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Column 1 = You win")
    }else if(getTd[1].innerHTML !== "?" && getTd[5].innerHTML !== "?" && getTd[9].innerHTML !== "?" && getTd[13].innerHTML !== "?" &&
            getTd[1].innerHTML === getTd[5].innerHTML && getTd[5].innerHTML === getTd[9].innerHTML &&
            getTd[9].innerHTML === getTd[13].innerHTML && getTd[13].innerHTML === getTd[1].innerHTML){
        // This condition is for column 2
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[9].classList.replace("bg-primary", "bg-success");
        getTd[13].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Column 2 = You win")
    }else if(getTd[2].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[14].innerHTML !== "?" &&
            getTd[2].innerHTML === getTd[6].innerHTML && getTd[6].innerHTML === getTd[10].innerHTML &&
            getTd[10].innerHTML === getTd[14].innerHTML && getTd[14].innerHTML === getTd[2].innerHTML){
        // This condition is for column 3
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[10].classList.replace("bg-primary", "bg-success");
        getTd[14].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Column 3 = You win")
    }else if(getTd[3].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[11].innerHTML !== "?" && getTd[15].innerHTML !== "?" &&
            getTd[3].innerHTML === getTd[7].innerHTML && getTd[7].innerHTML === getTd[11].innerHTML &&
            getTd[11].innerHTML === getTd[15].innerHTML && getTd[15].innerHTML === getTd[3].innerHTML){
        // This condition is for column 4
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        getTd[11].classList.replace("bg-primary", "bg-success");
        getTd[15].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("Column 4 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[5].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[15].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[5].innerHTML && getTd[5].innerHTML === getTd[10].innerHTML &&
            getTd[10].innerHTML === getTd[15].innerHTML && getTd[15].innerHTML === getTd[0].innerHTML){
        // This condition is for top letf to bottom right
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[10].classList.replace("bg-primary", "bg-success");
        getTd[15].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("TL to BR = You win")
    }else if(getTd[3].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[9].innerHTML !== "?" && getTd[12].innerHTML !== "?" &&
            getTd[3].innerHTML === getTd[6].innerHTML && getTd[6].innerHTML === getTd[9].innerHTML &&
            getTd[9].innerHTML === getTd[12].innerHTML && getTd[12].innerHTML === getTd[3].innerHTML){
        // This condition is for top right to bottom left
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[9].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 10;
        swal({
            title: 'You Win!',
            text: 'You have earn +10 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyMedium();
        });
        console.log("TR to BL = You win")
    }else{
        if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" &&
            getTd[3].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[5].innerHTML !== "?" && 
            getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[8].innerHTML !== "?" &&
            getTd[9].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[11].innerHTML !== "?" &&
            getTd[12].innerHTML !== "?" && getTd[13].innerHTML !== "?" && getTd[14].innerHTML !== "?" &&
            getTd[15].innerHTML !== "?"){
            swal({
                title: 'You Lose!',
                text: 'Better luck next time...',
                imageUrl: './images/sad-emoji.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Smiling Emoji',
                // animation: false,
            }).then((value)=>{
                return difficultyMedium();
            });
        }
    }
}

// Create Element by DOM for Hard Difficulty
function difficultyHard(e){
    var mainBox = document.getElementById("mainBox");
    mainBox.innerHTML = '';
    mainBox.classList.remove("col-8", "col-lg-2", "col-md-2", "col-sm-2", "col-10", "col-lg-3", "col-md-3", "col-sm-3");
    mainBox.classList.add("col-12", "col-lg-4", "col-md-4", "col-sm-4");

    var tableTag = document.createElement("table");
    tableTag.setAttribute("class", "table table-bordered m-0");
    var tBodyTag = document.createElement("tbody");
    for(var i = 0; i < 5; i++){
        var trTag = document.createElement("tr");
        for(var j = 0; j < 5; j++){
            var tdTag = document.createElement("td");
            tdTag.setAttribute("scope", "col");
            tdTag.setAttribute("onclick", "generateNum(this)");
            tdTag.appendChild(document.createTextNode("?"));
            trTag.appendChild(tdTag);
        }
        tBodyTag.appendChild(trTag);
    }
    tableTag.appendChild(tBodyTag);
    var resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "button");
    resetBtn.setAttribute("onclick", "resetBtn()");
    resetBtn.setAttribute("class", "btn btn-success text-white text-uppercase px-5 my-4");
    resetBtn.appendChild(document.createTextNode("Reset"))
    
    mainBox.appendChild(tableTag);
    mainBox.appendChild(resetBtn);
}

// Check similar numbers in Hard Difficulty
function hardCheckNumbers(){
    var getTd = document.getElementsByTagName("td");
    var yourScore = parseInt(document.getElementById("yourScore").innerHTML);
    if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" && getTd[3].innerHTML !== "?" && 
        getTd[4].innerHTML !== "?" && 
        getTd[0].innerHTML === getTd[1].innerHTML && getTd[1].innerHTML === getTd[2].innerHTML &&
        getTd[2].innerHTML === getTd[3].innerHTML && getTd[3].innerHTML === getTd[4].innerHTML &&
        getTd[4].innerHTML === getTd[0].innerHTML){   
        // This condition is for row 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[4].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Row 1 = You win");
    }else if(getTd[5].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[8].innerHTML !== "?" && 
            getTd[9].innerHTML !== "?" &&
            getTd[5].innerHTML === getTd[6].innerHTML && getTd[6].innerHTML === getTd[7].innerHTML &&
            getTd[7].innerHTML === getTd[8].innerHTML && getTd[8].innerHTML === getTd[9].innerHTML &&
            getTd[9].innerHTML === getTd[5].innerHTML){
        // This condition is for row 2
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        getTd[9].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Row 2 = You win")
    }else if(getTd[10].innerHTML !== "?" && getTd[11].innerHTML !== "?" && getTd[12].innerHTML !== "?" && getTd[13].innerHTML !== "?" &&
            getTd[14].innerHTML !== "?" &&
            getTd[10].innerHTML === getTd[11].innerHTML && getTd[11].innerHTML === getTd[12].innerHTML &&
            getTd[12].innerHTML === getTd[13].innerHTML && getTd[13].innerHTML === getTd[14].innerHTML &&
            getTd[14].innerHTML === getTd[10].innerHTML){
        // This condition is for row 3
        getTd[10].classList.replace("bg-primary", "bg-success");
        getTd[11].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        getTd[13].classList.replace("bg-primary", "bg-success");
        getTd[14].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Row 3 = You win")
    }else if(getTd[15].innerHTML !== "?" && getTd[16].innerHTML !== "?" && getTd[17].innerHTML !== "?" && getTd[18].innerHTML !== "?" &&
            getTd[19].innerHTML !== "?" &&
            getTd[15].innerHTML === getTd[16].innerHTML && getTd[16].innerHTML === getTd[17].innerHTML &&
            getTd[17].innerHTML === getTd[18].innerHTML && getTd[18].innerHTML === getTd[19].innerHTML &&
            getTd[19].innerHTML === getTd[15].innerHTML){
        // This condition is for row 4
        getTd[15].classList.replace("bg-primary", "bg-success");
        getTd[16].classList.replace("bg-primary", "bg-success");
        getTd[17].classList.replace("bg-primary", "bg-success");
        getTd[18].classList.replace("bg-primary", "bg-success");
        getTd[19].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Row 4 = You win")
    }else if(getTd[20].innerHTML !== "?" && getTd[21].innerHTML !== "?" && getTd[22].innerHTML !== "?" && getTd[23].innerHTML !== "?" &&
            getTd[24].innerHTML !== "?" &&
            getTd[20].innerHTML === getTd[21].innerHTML && getTd[21].innerHTML === getTd[22].innerHTML &&
            getTd[22].innerHTML === getTd[23].innerHTML && getTd[23].innerHTML === getTd[24].innerHTML &&
            getTd[24].innerHTML === getTd[20].innerHTML){
        // This condition is for row 5
        getTd[20].classList.replace("bg-primary", "bg-success");
        getTd[21].classList.replace("bg-primary", "bg-success");
        getTd[22].classList.replace("bg-primary", "bg-success");
        getTd[23].classList.replace("bg-primary", "bg-success");
        getTd[24].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Row 5 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[5].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[15].innerHTML !== "?" &&
            getTd[20].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[5].innerHTML && getTd[5].innerHTML === getTd[10].innerHTML &&
            getTd[10].innerHTML === getTd[15].innerHTML && getTd[15].innerHTML === getTd[20].innerHTML &&
            getTd[20].innerHTML === getTd[0].innerHTML){
        // This condition is for column 1
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[5].classList.replace("bg-primary", "bg-success");
        getTd[10].classList.replace("bg-primary", "bg-success");
        getTd[15].classList.replace("bg-primary", "bg-success");
        getTd[20].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Column 1 = You win")
    }else if(getTd[1].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[11].innerHTML !== "?" && getTd[16].innerHTML !== "?" &&
            getTd[21].innerHTML !== "?" &&
            getTd[1].innerHTML === getTd[6].innerHTML && getTd[6].innerHTML === getTd[11].innerHTML &&
            getTd[11].innerHTML === getTd[16].innerHTML && getTd[16].innerHTML === getTd[21].innerHTML &&
            getTd[21].innerHTML === getTd[1].innerHTML){
        // This condition is for column 2
        getTd[1].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[11].classList.replace("bg-primary", "bg-success");
        getTd[16].classList.replace("bg-primary", "bg-success");
        getTd[21].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Column 2 = You win")
    }else if(getTd[2].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[12].innerHTML !== "?" && getTd[17].innerHTML !== "?" &&
            getTd[22].innerHTML !== "?" &&
            getTd[2].innerHTML === getTd[7].innerHTML && getTd[7].innerHTML === getTd[12].innerHTML &&
            getTd[12].innerHTML === getTd[17].innerHTML && getTd[17].innerHTML === getTd[22].innerHTML &&
            getTd[22].innerHTML === getTd[2].innerHTML){
        // This condition is for column 3
        getTd[2].classList.replace("bg-primary", "bg-success");
        getTd[7].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        getTd[17].classList.replace("bg-primary", "bg-success");
        getTd[22].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Column 3 = You win")
    }else if(getTd[3].innerHTML !== "?" && getTd[8].innerHTML !== "?" && getTd[13].innerHTML !== "?" && getTd[18].innerHTML !== "?" &&
            getTd[23].innerHTML !== "?" &&
            getTd[3].innerHTML === getTd[8].innerHTML && getTd[8].innerHTML === getTd[13].innerHTML &&
            getTd[13].innerHTML === getTd[18].innerHTML && getTd[18].innerHTML === getTd[23].innerHTML &&
            getTd[23].innerHTML === getTd[3].innerHTML){
        // This condition is for column 4
        getTd[3].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        getTd[13].classList.replace("bg-primary", "bg-success");
        getTd[18].classList.replace("bg-primary", "bg-success");
        getTd[23].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Column 4 = You win")
    }else if(getTd[4].innerHTML !== "?" && getTd[9].innerHTML !== "?" && getTd[14].innerHTML !== "?" && getTd[19].innerHTML !== "?" &&
            getTd[24].innerHTML !== "?" &&
            getTd[4].innerHTML === getTd[9].innerHTML && getTd[9].innerHTML === getTd[14].innerHTML &&
            getTd[14].innerHTML === getTd[19].innerHTML && getTd[19].innerHTML === getTd[24].innerHTML &&
            getTd[24].innerHTML === getTd[4].innerHTML){
        // This condition is for column 5
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[9].classList.replace("bg-primary", "bg-success");
        getTd[14].classList.replace("bg-primary", "bg-success");
        getTd[19].classList.replace("bg-primary", "bg-success");
        getTd[24].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("Column 5 = You win")
    }else if(getTd[0].innerHTML !== "?" && getTd[6].innerHTML !== "?" && getTd[12].innerHTML !== "?" && getTd[18].innerHTML !== "?" &&
            getTd[24].innerHTML !== "?" &&
            getTd[0].innerHTML === getTd[6].innerHTML && getTd[6].innerHTML === getTd[12].innerHTML &&
            getTd[12].innerHTML === getTd[18].innerHTML && getTd[18].innerHTML === getTd[24].innerHTML &&
            getTd[24].innerHTML === getTd[0].innerHTML){
        // This condition is for top letf to bottom right
        getTd[0].classList.replace("bg-primary", "bg-success");
        getTd[6].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        getTd[18].classList.replace("bg-primary", "bg-success");
        getTd[24].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("TL to BR = You win")
    }else if(getTd[4].innerHTML !== "?" && getTd[8].innerHTML !== "?" && getTd[12].innerHTML !== "?" && getTd[16].innerHTML !== "?" &&
            getTd[20].innerHTML !== "?" &&
            getTd[4].innerHTML === getTd[8].innerHTML && getTd[8].innerHTML === getTd[12].innerHTML &&
            getTd[12].innerHTML === getTd[16].innerHTML && getTd[16].innerHTML === getTd[20].innerHTML &&
            getTd[20].innerHTML === getTd[4].innerHTML){
        // This condition is for top right to bottom left
        getTd[4].classList.replace("bg-primary", "bg-success");
        getTd[8].classList.replace("bg-primary", "bg-success");
        getTd[12].classList.replace("bg-primary", "bg-success");
        getTd[16].classList.replace("bg-primary", "bg-success");
        getTd[20].classList.replace("bg-primary", "bg-success");
        document.getElementById("yourScore").innerHTML = yourScore + 15;
        swal({
            title: 'You Win!',
            text: 'You have earn +15 points',
            imageUrl: './images/smiling-emoji.png',
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: 'Smiling Emoji',
            // animation: false,
        }).then((value)=>{
            return difficultyHard();
        });
        console.log("TR to BL = You win")
    }else{
        if(getTd[0].innerHTML !== "?" && getTd[1].innerHTML !== "?" && getTd[2].innerHTML !== "?" &&
            getTd[3].innerHTML !== "?" && getTd[4].innerHTML !== "?" && getTd[5].innerHTML !== "?" && 
            getTd[6].innerHTML !== "?" && getTd[7].innerHTML !== "?" && getTd[8].innerHTML !== "?" &&
            getTd[9].innerHTML !== "?" && getTd[10].innerHTML !== "?" && getTd[11].innerHTML !== "?" &&
            getTd[12].innerHTML !== "?" && getTd[13].innerHTML !== "?" && getTd[14].innerHTML !== "?" &&
            getTd[15].innerHTML !== "?" && getTd[16].innerHTML !== "?" && getTd[17].innerHTML !== "?" && 
            getTd[18].innerHTML !== "?" && getTd[19].innerHTML !== "?" && getTd[20].innerHTML !== "?" &&
            getTd[21].innerHTML !== "?" && getTd[22].innerHTML !== "?" && getTd[23].innerHTML !== "?" && 
            getTd[24].innerHTML !== "?"){
            swal({
                title: 'You Lose!',
                text: 'Better luck next time...',
                imageUrl: './images/sad-emoji.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Smiling Emoji',
                // animation: false,
            }).then((value)=>{
                return difficultyHard();
            });
        }
    }
}