var pig_latin = function(input) {
  var raw_input = input.toLowerCase();
  var output = "";
  var vowels = ["a","e","i","o","u"];

  var raw_input = raw_input.split(" ");
  var return_latin = [];

  raw_input.forEach(function(word) {
    var consonant_counter = -1;

    do{
      consonant_counter +=1;
      if ( word.charAt(consonant_counter) === "q" && word.charAt(consonant_counter+1) === "u") {
        consonant_counter +=2;
      }
    } while(vowels.indexOf(word.charAt(consonant_counter))===-1 );

    var consonant_beginning = word.slice(0,consonant_counter);
    var input = word.replace(consonant_beginning,"");
    input = input.concat(consonant_beginning);

    if(vowels.indexOf(input.charAt(0))===-1 && input.charAt(0)!=="y" ){
      output = input;
    }else{
      output = input;
      output = output.concat("ay");
    };
    return_latin.push(output);
  });
  return return_latin.join(" ");
};


$(document).ready(function() {
  $("form#pig_latin").submit(function(event) {
    var raw_input = $("input#raw_input").val();

    var result = pig_latin(raw_input);

    $(".output").text(result);

    event.preventDefault();
  });
});
