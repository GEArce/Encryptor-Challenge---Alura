//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



var userText = document.getElementById("text-user") 
const encryptButton = document.getElementById("encrypt-btn");
const decryptButton = document.getElementById("decrypt-btn")
const copyButton = document.getElementById("copy-btn")
var result = document.getElementById("text-result")
encryptButton.addEventListener("click", encrypt)
decryptButton.addEventListener("click", decrypt)



//Copy function

copyButton.onclick = function()
{
    result.select();
    
    document.execCommand("copy");
}

//Encrypt function
function encrypt ()
{
    
   if (userText.value == "")
   {
        alert("Debe introducir un téxto.")
   }
   else
   {
        var encryptText = userText.value .replace(/e/gi, "enter") .replace(/i/gi, "imes") .replace(/a/gi, "ai") .replace(/u/gi, "ufat")  .replace(/o/gi, "ober");
        encryptText = encryptText.toLowerCase();
        result.value = encryptText;
        return encryptText;
   }


}

//Decrypt function

function decrypt()
{
    if (userText.value == "")
    {
        alert("No hay nada para desencriptar.")
    }
  
    else
    {
        var encryptText = userText.value.replace(/enter/gi, "e") .replace(/imes/gi, "i") .replace(/ai/gi, "a") .replace(/ufat/gi, "u")  .replace(/ober/gi, "o");
        encryptText = encryptText.toLowerCase();
        result.value = encryptText;
        return encryptText;
    }
}

    

  
   
  // fraseUser = fraseUser
   
  