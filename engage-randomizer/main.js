
//Const Vars



// Modal Code


const modal = document.getElementById("modal");
// comment/uncomment the line below as needed to show/hide the modal on page load
modal.showModal();



function closeModal() {
  modal.close();
}

const closeButton = document.getElementById("x-button");

closeButton.addEventListener("click", closeModal);

function closeModal() {
  modal.close();
}

/* The updateProfile function will be run automatically after the response is received from the server. */
/* WRITE THE CODE THAT YOU NEED TO UPDATE THE PROFILE CARD INSIDE THIS FUNCTION. */


function updateProfile(data) {
  // The data variable will be an object with the submitted user profile information.
  console.log(data);

  // Getting variables from data
  //Form Data

  const gender = data["gender"];

  let unitGenNum = data["numUnit"];

  const dlcHave = data["dlc"];

  if (dlcHave == "true") {
    if (unitGenNum > units.length + dlcUnits.length) {
      unitGenNum = units.length + dlcUnits.length;
    }
  } else {
    if (unitGenNum > units.length) {
      unitGenNum = units.length;
    }
  }





  const boostPersClass = data["uniq"];
  console.log("persclass:" + boostPersClass);

  // -----------------------------------MATH FOR PERSONAL CLASS BIAS--------------------------------------------

  let N;
  if (dlcHave == "true") {
    N = classes.length + dlcClasses.length;
  } else {
    N = classes.length;
  }

  const s = boostPersClass / 100; //Percentage

  let PERSCLASSBIASNUM;
  if (boostPersClass != "100") {
    PERSCLASSBIASNUM = Math.round(N * (s / (1 - s)));
  }

  // Applying data from form to final profile output

  // Predone Alear

  const classPath = document.createElement("tr");

  // First cell — the image
  const unitCell = document.createElement("td");
  const unitImg = document.createElement("img");


  const unitName = document.createElement("h1");

  if (gender == "female") {
    unitImg.src = "images/FEE_Portraits/Portrait_alear_f_fe17.png";
    unitName.textContent = "F!Alear";
  } else if (gender == "male") {
    unitImg.src = "images/FEE_Portraits/Portrait_alear_m_fe17.png";
    unitName.textContent = "M!Alear";
  }



  unitCell.appendChild(unitImg);
  unitCell.appendChild(unitName);
  classPath.appendChild(unitCell);

  const randContainer = document.getElementById("rand-container");

  randContainer.innerHTML = "";   // clears out everything from the previous generation

  const tbody = document.createElement("tbody");
  randContainer.appendChild(tbody);

  /* 
  
  Start of Alear Randomizer!!!!!!!!!!
  
  */

  let validClassSet = [];

  //Gets the valid class list for Alear
  // all classes plus Divine Dragon

  if (boostPersClass == "100") {
    validClassSet.push("Divine Dragon");
  } else if (boostPersClass != "0") {
    for (let j = 0; j < PERSCLASSBIASNUM; j++) {
      validClassSet.push("Divine Dragon");
    }

  }

  if (boostPersClass != "100") {
    for (let i = 0; i < classes.length; i++) {
      validClassSet.push(classes[i].className);

    }
    if (dlcHave == "true") {
      for (let i = 0; i < dlcClasses.length; i++) {
        validClassSet.push(dlcClasses[i].className);
      }
    }

    if (!validClassSet.includes("Divine Dragon")) {

      validClassSet.push("Divine Dragon");
    }
  }




  var randNum2 = Math.floor(Math.random() * validClassSet.length);

  let classDisplayed = validClassSet[randNum2];

  const finalClassCell = document.createElement("td");
  const className = document.createElement("h1");
  className.textContent = classDisplayed;
  finalClassCell.appendChild(className);
  classPath.appendChild(finalClassCell);
  //End of class section

  classPath.dataset.index = 0;
  tbody.appendChild(classPath);

  // End of Alear finish  


  /* 
  
  Start of procedural randomizer!!!!!!!!!!
  
  */

  // Adds Dlc characters to the units array.

  let validUnitsSet = [];

  for (k = 0; k < units.length; k++) {
    validUnitsSet.push(units[k]);
  }

  if (dlcHave == "true") {
    for (k = 0; k < dlcUnits.length; k++) {
      validUnitsSet.push(dlcUnits[k]);
    }

  }

  // Makes sure there are no duplicates
  const used = [];

  for (let i = 0; i < unitGenNum - 1; i++) {

    // Duplicate Prevention Logic
    var invalid = true;
    var randNum = Math.floor(Math.random() * validUnitsSet.length);


    if (used.includes(randNum)) {

      while (invalid) {
        randNum = Math.floor(Math.random() * validUnitsSet.length);
        if (!used.includes(randNum)) {
          invalid = false;
        }
      }
    }
    // Adds to page
    used.push(randNum);

    const unit = validUnitsSet[randNum];



    const classPath = document.createElement("tr");

    // First cell — the image
    const unitCell = document.createElement("td");
    const unitImg = document.createElement("img");
    unitImg.src = unit.unitImg;

    const unitName = document.createElement("h1");
    unitName.textContent = unit.unitName;

    unitCell.appendChild(unitImg);
    unitCell.appendChild(unitName);
    classPath.appendChild(unitCell);



    // Second cell — the class




    let validClassSet = [];

    //Gets the valid class list for each unit which is 
    // all classes plus unique one


    let uniqueClassHaver = false;

    // Checks if boost class is active if so biases selection pool
    for (let i = 0; i < uniqueClasses.length; i++) {
      if (unit.unitName == uniqueClasses[i].uniqueClass) {
        uniqueClassHaver = true;
        if (boostPersClass != 0 && boostPersClass != 100) {
          for (let j = 0; j < PERSCLASSBIASNUM; j++) {
            validClassSet.push(uniqueClasses[i].className);
          }
        } else {
          validClassSet.push(uniqueClasses[i].className);
        }
      }
    }


    if (uniqueClassHaver && boostPersClass != 100) {
      for (let i = 0; i < classes.length; i++) {
        validClassSet.push(classes[i].className);
      }
    } else if (!uniqueClassHaver) {
      for (let i = 0; i < classes.length; i++) {
        validClassSet.push(classes[i].className);
      }
    }





    //Randomization logic and screen updating

    var randNum2 = Math.floor(Math.random() * validClassSet.length);

    let classDisplayed = validClassSet[randNum2];

    const finalClassCell = document.createElement("td");
    const className = document.createElement("h1");
    className.textContent = classDisplayed;
    finalClassCell.appendChild(className);
    classPath.appendChild(finalClassCell);

    //End of class section

    classPath.dataset.index = randNum;
    tbody.appendChild(classPath);

  }

}


/* --- DO NOT EDIT ANYTHING BELOW THIS LINE --- */

/* This section of code handles form submission to the server and waits for the response. */

const profileForm = document.getElementById("profile-form");

profileForm.addEventListener("submit", async () => {
  const data = await handleForm(profileForm);
  updateProfile(data);
  modal.close();
});

