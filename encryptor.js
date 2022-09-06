//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"



var userText = document.getElementById("text-user")     //Llamar a "textBox"
var encryptButton = document.getElementById("encrypt-btn");
var decryptButton = document.getElementById("decrypt-btn")
var copyButton = document.getElementById("copybtn")
var result = document.getElementById("text-result")
encryptButton.addEventListener("click", encrypt)
decryptButton.addEventListener("click", decrypt)
copyButton.addEventListener("click", copy)


//Copy function


//Encrypt function
function encrypt ()
{

   if (userText.value == "")
   {
        alert("Debe introducir un téxto.")
   }
   else
   {
        var encryptText = userText.value.replace(/a/gi, "ai").replace(/i/gi, "imes").replace(/u/gi, "ufat").replace(/e/gi, "enter").replace(/o/gi, "ober")
        result.innerHTML = encryptText;
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
        var encryptText = userText.value.replace(/ai/gi, "a").replace(/imes/gi, "i").replace(/ufat/gi, "u").replace(/enter/gi, "e").replace(/ober/gi, "o")
        result.innerHTML = encryptText;
        return encryptText;
    }
}

    
  
   
  // fraseUser = fraseUser
   
  