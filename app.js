$(function() {


// API call requests -- meat and potatoes
function fetchAdjective() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=adjective&excludePartOfSpeech=noun&minCorpusCount=4000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", false);
  xhr.send();

  var response = xhr.response;
  return JSON.parse(response).word;
}

// noun one kinda sucks because there are too many stupid nouns in the dictionary
function fetchNoun() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=100000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5", false);
  xhr.send();

  var response = xhr.response;
  return JSON.parse(response).word;
}
// ------------------ //











// jQuery jazz
$("button").on("click", function(event){
   event.preventDefault();
   $(".new").prepend("<div class=\"name\"><h4>" + capitalize(fetchAdjective()) + "      " + capitalize(fetchNoun()) + "</div></h4>");
});


});

// cap func
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/// you could also nab some of the source code at http://www.wordlab.com/gen/team-name-generator.php
