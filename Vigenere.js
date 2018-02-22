var num = [];

for(var i = 0; i < 26; i++){
  num[String.fromCharCode(i+65)] = i;
  num[i] = String.fromCharCode(i+65)
}
 console.log(num);
function Vigenere(){
  var str = "" + original.value.toUpperCase();
  var key = "" + Clave.value.toUpperCase();
  var sol = "";
  var m = 0
  for(var i = 0; i < str.length; i++){
    // var k = i%key.length;
    var k = (i-m)%key.length;
    if(k < 0) k = k + key.length;
    if(str[i] == " "){
      sol = "" + sol + " ";
           m++;
    }
    else {
      sol = "" + sol + crypt(str[i], key[k]);
    }

  }
  intro.innerHTML = str;
  clave.innerHTML = key;
  salida.innerHTML = sol;
}

function crypt(str, key){
  console.log("str + key: "+str+" + "+key)
  console.log("str + key: "+num[str]+" + "+num[key]);
  var sol = (num[str] + num[key])%26;
  console.log(sol);
  console.log("sol: "+num[sol]);
  return num[sol];
}

function fromVigenere(){
  var str = "" + original.value.toUpperCase();
  var key = "" + Clave.value.toUpperCase();
  var sol = "";
  var m = 0;
  for(var i = 0; i < str.length; i++){
    var k = (i-m)%key.length;
    if(k < 0) k = k + key.length;
    if(str[i] == " "){
      sol = "" + sol + " ";
           m++;
    }
    else{
      sol = "" + sol + decrypt(str[i], key[k]);
    }

  }
  intro.innerHTML = str;
  clave.innerHTML = key;
  salida.innerHTML = sol;
}

function decrypt(str, key){
  var sol = (num[str]-num[key])%26;
  console.log("str - key: "+str+" - "+key)
  console.log("str - key: "+num[str]+" - "+num[key]);
  if(sol < 0) sol = sol + 26;
  console.log(sol);
  console.log(num[sol]);
  return num[sol];
}
