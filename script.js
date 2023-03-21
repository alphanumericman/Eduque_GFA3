let x = Math.floor(Math.random()*20) + 1;   
let y = Math.floor(Math.random()*20) + 1;
let z = Math.floor(Math.random()*20) + 1;
const letterCodes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L','M','N','O','P','Q','R','S','T']; //T is the 20th letter of the alphabet (max)
let most, favletterAT, numminus, numletter, mins, hrminstxt, innitialmins;
let hr = 0;

document.getElementById("rand1").innerHTML = x;
document.getElementById("rand2").innerHTML = y;
document.getElementById("rand3").innerHTML = z;

let highestnumber;
if (x >= y && x >= z) {
    highestnumber = x;
    if (x > y && x > z) {
       most = "Most of the people said that their knowledge on Javascript is: Bad (" + highestnumber + ")" //x
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Bad' is: " + numletter;
    }
    if (x == y && x == z) {
        most = "Most of the people said that their knowledge on Javascript is: Bad, Neutral, Good (" + highestnumber + ")" //xyz
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Bad or Neutral or Good' is: " + numletter;
    }
    if (x == y && x > z) {
        most = "Most of the people said that their knowledge on Javascript is: Bad, Neutral (" + highestnumber + ")" //xy
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Bad or Neutral' is: " + numletter;
    }
    if (x > y && x == z) {
        most = "Most of the people said that their knowledge on Javascript is: Bad, Good (" + highestnumber + ")" //xz
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Bad or Good' is: " + numletter;
    }
}
if (y >= z && y > x) {
    highestnumber = y;
    if (y > z) {
        most = "Most of the people said that their knowledge on Javascript is: Neutral (" + highestnumber + ")" //y
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Neutral' is: " + numletter;
    }
    if (y == z) {
        most = "Most of the people said that their knowledge on Javascript is: Neutral, Good (" + highestnumber + ")" //yz
        numminus1 = highestnumber-1;
        numletter = letterCodes[numminus1];
        favletterAT = "The favorite letter from A - T of Subject 1 from group 'Neutral or Good' is: " + numletter;
    }
}
if (z > x && z > y) {
    highestnumber = z;
    most = "Most of the people said that their knowledge on Javascript is: Good (" + highestnumber + ")" //z
    numminus1 = highestnumber-1;
    numletter = letterCodes[numminus1];
    favletterAT = "The favorite letter from A - T of Subject 1 from group 'Good' is: " + numletter;
}

innitialmins = y*z;
mins = innitialmins;
do {
    mins = mins - 60;
    hr++;
} while (mins > 60)

if (mins < 0) {
    mins = mins + 60;
    hr--;
}

hrminstxt = "Subject 1 has been waiting for his turn in the surver for: (" + innitialmins + " minutes) " + hr + " hours and " + mins + " minutes";

document.getElementById("highestsurvey").innerHTML = most; 
document.getElementById("favletter").innerHTML = favletterAT;
document.getElementById("hrmins").innerHTML = hrminstxt;

function refreshpage() {
    location.reload();
}