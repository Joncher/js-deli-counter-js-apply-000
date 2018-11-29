
function takeANumber(katzDeli , name){
  katzDeli.push(name)
  var correctNumber = katzDeli.indexOf(name)+1;
  
  return "Welcome, " + name + ". You are number " + correctNumber + " in line."
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length > 0){
    var serve = katzDeliLine.shift();
    return "Currently serving " + serve +".";
    }else{
      return "There is nobody waiting to be served!";
    }
}

function currentLine(line){
 
 if(line.length > 0){ 
    for (var i= 0; i < line.length ;i++){
    var first = i+1+ ". " + line.shift[i];
    line.push(first);
    } 
  return "The line is currently "
  }else{
    "The line is currently empty."}
   
 
} 