function generatePassword(passLength,upperCase,lowerCase,numerics,specialChars){
    let characters=""
    if(upperCase){
        characters+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(lowerCase){
        characters+="abcdefghijklmnopqrstuvwxyz"
    }
    if(numerics){
        characters+="123456789"
    }
    if(specialChars){
        characters+="!@#$%^&"
    }
    
    var charactersLength=characters.length
    if(charactersLength==0){
        return null;
    }
    var password=""
    for(var i=0;i<passLength;i++){
        password+=characters[Math.floor(Math.random()*charactersLength)]
    }
    return password;
}

function copyPassword(){
    var copyText=document.querySelector('#passwordHolder')
   
    navigator.clipboard.writeText(copyText.value);
    alert("Password Copied")

}
var generateBtn=document.querySelector('#generate')
var passwordHolder=document.querySelector('#passwordHolder')
var copyBtn=document.querySelector('#copy')

generateBtn.addEventListener('click',function(){
    var upperCase=document.getElementById('upperCase').checked
    var lowerCase=document.getElementById('lowerCase').checked
    var numbers=document.getElementById('numbers').checked
    var specialChars=document.getElementById('specialChars').checked
    var passLength=document.getElementById('passwordLength').value;
    var password=generatePassword(passLength,upperCase,lowerCase,numbers,specialChars)
    if(password==null){
        copyBtn.style.display="none"
        passwordHolder.value=""
        passwordHolder.placeholder="Please Select atleast One Option to generate password"
    }
    else{
        passwordHolder.style.paddingRight="50px"
        passwordHolder.value=password;
        copyBtn.style.display='inline-block';

    }
})

