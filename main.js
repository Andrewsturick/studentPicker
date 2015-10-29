var students = [];

var studentNameInput = document.getElementById('studentName');
document.getElementById('pickOneRandom').addEventListener('click', pickRandom)
document.getElementById('addButton').addEventListener('click', addStudent );
document.getElementById('pairsMakerButton').addEventListener('click', getPairs)
document.getElementById('sizePicker').addEventListener('click', generateCustomGroup);



var randomMaker = function(){
    var RandomNumberMaker = Math.floor(Math.random()*students.length);
    return RandomNumberMaker;

}
var teamContainerDiv = document.createElement('div')
function generateCustomGroup(){
  var newStudents= students;
  var groupSize = customNumberInput.value;
  var tempArray = students;
  for (var counter = students.length/groupSize; counter>0; counter--){
      var util  = [];
      for(i=groupSize-1; i>=0; i--){
        var randomMaker1 =  (Math.floor((Math.random()*(tempArray.length))));
        var splicer1 = tempArray.splice(randomMaker1,1);
        util.push(splicer1);

      }
      var thisTeam = [];
      thisTeam.push(util);
      console.log(util);
      var newDiv = document.createElement('div');
      var newNode = document.createTextNode(thisTeam);
      newDiv.appendChild(newNode);
      teamContainerDiv.appendChild(newDiv);
      document.getElementById('customGroupHolder').appendChild(teamContainerDiv);

}
}



studentNameInput.addEventListener('keypress',keyPressed);

studentNameInput.focus();

function keyPressed(){
  if(event.charCode===13){
    addStudent();
  }
}
var pairsContainerDiv = document.createElement('div');


function getPairs(){

  var tempArray = students;
  const LENGTH = students.length;
  for(var i=0; i< LENGTH; i +=2){

    var randomMaker1 =  (Math.floor((Math.random()*(tempArray.length))));
    var splicer1 = tempArray.splice(randomMaker1,1);
    var randomMaker =  (Math.floor((Math.random()*(tempArray.length))));
    var splicer2 = tempArray.splice(randomMaker,1);
    team = splicer1.concat(splicer2)
    var newDiv = document.createElement('div');
    var newNode = document.createTextNode(team);
    newDiv.appendChild(newNode);
    pairsContainerDiv.appendChild(newDiv);
    document.getElementById('pairHolder').appendChild(pairsContainerDiv);
  };
}



var getDivForRandomStudent = document.getElementById('randomGoesHere');


function pickRandom(){

  if (getDivForRandomStudent){
    getDivForRandomStudent.innerHTML=''
  };

  var studentsLength = students.length;
  var randomIndex = (Math.floor((Math.random()*studentsLength)))


  var newDivForRandom = document.createElement('div');
  var newNodeForRandom = document.createTextNode(students[randomIndex]);

  getDivForRandomStudent.appendChild(newNodeForRandom);
};






function addStudent(){

  var inputStr = studentNameInput.value;
  if(inputStr){


    var names =  inputStr.split(',');


    names = names.map(function(name){
      return name.trim();
    })

    names = names.filter (function(name){
      return name;
    })
    students=students.concat(names);
    var containerDiv = document.createElement('div')


    names.forEach(function(name){
      var newDiv = document.createElement('div');
      var newNode = document.createTextNode(name);
      newDiv.appendChild(newNode);
      containerDiv.appendChild(newDiv);
    })
    document.getElementById('divForNames').appendChild(containerDiv);



    studentNameInput.value="";

    studentNameInput.focus();

  }
}
