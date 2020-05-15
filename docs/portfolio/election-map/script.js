// Initialise variables
var winner;

/*****************************************
 * POLITICIAN FACTORY FUNCTION
 * Purpose: to produce politician objects
 * Parameters: 2
 * - Politician's name (String)
 * - Party colour (String)
 *****************************************/
var makePolitician = function(polName, polPartyColor) {
  var politician = {}; // Object literal
  politician.name = polName;
  politician.partyColor = polPartyColor;
  politician.electionResults = [];
  politician.totalVotes = 0;

  // Method to console out properties
  politician.announce = function() {
    console.log(
      "Name: " +
        this.name +
        ", Results: [" +
        this.electionResults +
        "], Votes: " +
        this.totalVotes +
        ", Colour: " +
        this.partyColor
    );
  };

  // politician.announce();

  // Method to sum electionResults array to totalVotes property
  politician.sumVotes = function() {
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };

  // Return the politician object
  return politician;
}; // End factory function

var johnDoe = makePolitician("John Doe", [132, 17, 11]);
var janeDoe = makePolitician("Jane Doe", [245, 141, 136]);

// Initial results
johnDoe.electionResults = [
  5,
  1,
  7,
  2,
  33,
  6,
  4,
  2,
  1,
  14,
  8,
  3,
  1,
  11,
  11,
  0,
  5,
  3,
  3,
  3,
  7,
  4,
  8,
  9,
  3,
  7,
  2,
  2,
  4,
  2,
  8,
  3,
  15,
  15,
  2,
  12,
  0,
  4,
  13,
  1,
  3,
  2,
  8,
  21,
  3,
  2,
  11,
  1,
  3,
  7,
  2
];

janeDoe.electionResults = [
  4,
  2,
  4,
  4,
  22,
  3,
  3,
  1,
  2,
  15,
  8,
  1,
  3,
  9,
  0,
  6,
  1,
  5,
  5,
  1,
  3,
  7,
  8,
  1,
  3,
  3,
  1,
  3,
  2,
  2,
  6,
  2,
  14,
  0,
  1,
  6,
  7,
  3,
  7,
  3,
  6,
  1,
  3,
  17,
  3,
  1,
  2,
  11,
  2,
  3,
  1
];

// Result corrections
johnDoe.electionResults[9] = 1;
janeDoe.electionResults[9] = 28;

johnDoe.electionResults[4] = 17;
janeDoe.electionResults[4] = 38;

johnDoe.electionResults[43] = 11;
janeDoe.electionResults[43] = 27;

//console.log(johnDoe.electionResults);
//console.log(janeDoe.electionResults);

// Set the state results
var setStateResults = function(state) {
  theStates[state].winner = null;

  if (johnDoe.electionResults[state] > janeDoe.electionResults[state]) {
    theStates[state].winner = johnDoe;
  } else if (johnDoe.electionResults[state] < janeDoe.electionResults[state]) {
    theStates[state].winner = janeDoe;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null) {
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }

  //Populate state info table
  var stateTbl = document.getElementById("stateResults");
  var thRow = stateTbl.children[0].children[0];
  var tblBody = stateTbl.children[1];
  var tblCand1 = tblBody.children[0];
  var tblCand2 = tblBody.children[1];
  var tblWinner = tblBody.children[2];

  var stateName = thRow.children[0];
  stateName.innerText = theStates[state].nameFull;

  var stateAbbrev = thRow.children[1];
  stateAbbrev.innerText = theStates[state].nameAbbrev;

  var cand1Name = tblCand1.children[0];
  cand1Name.innerText = johnDoe.name;

  var cand1Result = tblCand1.children[1];
  cand1Result.innerText = johnDoe.electionResults[state];

  var cand2Name = tblCand2.children[0];
  cand2Name.innerText = janeDoe.name;

  var cand2Result = tblCand2.children[1];
  cand2Result.innerText = janeDoe.electionResults[state];

  var tblWinnerName = tblWinner.children[1];

  if (theStates[state].winner === null) {
    tblWinnerName.innerText = "DRAW";
  } else {
    tblWinnerName.innerText = theStates[state].winner.name;
  }
};

// Sum up candidates votes
johnDoe.sumVotes();
janeDoe.sumVotes();

//console.log(johnDoe.totalVotes);
//console.log(janeDoe.totalVotes);

// Declare the winner
if (johnDoe.totalVotes == janeDoe.totalVotes) {
  winner = "It's a tie!";
} else if (johnDoe.totalVotes > janeDoe.totalVotes) {
  winner = "John Doe wins!";
} else {
  winner = "Jane Doe wins!";
}

//johnDoe.announce();
//janeDoe.announce();

//console.log("Election result: " + winner);

// Populate main top table
var mainTbl = document.getElementById("countryResults");
var row = mainTbl.children[0].children[0];
row.children[0].innerText = johnDoe.name;
row.children[1].innerText = johnDoe.totalVotes;
row.children[2].innerText = janeDoe.name;
row.children[3].innerText = janeDoe.totalVotes;
row.children[5].innerText = winner;
