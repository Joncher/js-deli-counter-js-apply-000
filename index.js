var i= 0
function takeANumber(katzDeli){
  i += 1
  katzDeli.push(i);

  return "Welcome, " + i + ". You are number " + katzDeli.indexOf(i) + " in line.";
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
 var lineString = [];
 if(line.length > 0){ 
  for (var i = 1; i <= line.length ;i++){
   lineString.push(" "+ i + ". " + line.shift());
    line.push("a");
  } 
  return "The line is currently:" + lineString;
 }
 else{ return "The line is currently empty."}
} 