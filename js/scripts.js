var pig_latin = function(input) {
  var raw_input = input.toLowerCase();
  var output = "";
  var vowels = ["a","e","i","o","u"];

  var raw_input = raw_input.split(" ");
  var return_latin = [];

  raw_input.forEach(function(word) {
    var vowel_counter = -1;

    do{
      vowel_counter +=1;
      if ( word.charAt(vowel_counter) === "q" && word.charAt(vowel_counter+1) === "u") {
        vowel_counter +=2;
      }
    } while(vowels.indexOf(word.charAt(vowel_counter))===-1 );

    var vowel_beginning = word.slice(0,vowel_counter);
    var input = word.replace(vowel_beginning,"");
    input = input.concat(vowel_beginning);
  // debugger;

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
