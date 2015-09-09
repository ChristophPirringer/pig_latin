var pig_latin = function(input) {
  var raw_input = input.toLowerCase();
  var output = "";
  var consonants = ["a","e","i","o","u"];

  var consonant_counter = -1;

  do{
      consonant_counter +=1;
      if ( raw_input.charAt(consonant_counter) === "q" && raw_input.charAt(consonant_counter+1) === "u") {
        consonant_counter +=2;
      }
    } while(consonants.indexOf(raw_input.charAt(consonant_counter))==-1 );

  var consonant_beginning = raw_input.slice(0,consonant_counter);
  var input = raw_input.replace(consonant_beginning,"");
  input = input.concat(consonant_beginning);
// debugger;

  if(consonants.indexOf(input.charAt(0))==-1){
    output = input;
  }else{
    output = input;
    output = output.concat("ay");
  };
  return output;
};
