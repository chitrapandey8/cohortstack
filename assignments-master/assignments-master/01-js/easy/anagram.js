/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length){
    return false;
  }
let  freq = new Array(256).fill(0);
for(let i = 0; i<str1.length; i++){
  if((str1.charCodeAt(i) >= 65 && str1.charCodeAt(i) <= 90)){
    let ch = str1[i].toLowerCase().charCodeAt(0)
    freq[ch]++;
  }else{
freq[str1.charCodeAt(i)]++;
  }
  
  
}
for(let i = 0; i<str2.length; i++){
  if((str2.charCodeAt(i) >= 65 && str2.charCodeAt(i) <= 90)){
    let ch = str2[i].toLowerCase().charCodeAt(0)
    freq[ch]--;
  }else{
freq[str2.charCodeAt(i)]--;
  }
  
}

for(let i = 0; i<freq.length; i++){
  if(freq[i] != 0){
    return false;
  }
}

return true;
}

module.exports = isAnagram;
