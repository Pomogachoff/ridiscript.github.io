let input = document.querySelector(`#input`);
let imgDiv = document.querySelector(`.images`);
const fileInput = document.getElementById('fileInput');

fileInput.addEventListener('change', function(event) {
const file = event.target.files[0];
const reader = new FileReader();
reader.onload = function(e) {
const text = e.target.result;
let value = text.replaceAll("\\", "");
let valueFirstSplit = value.split('"text": "{"success":true,"data":{"type":"comic","pages":[');
let valueSecondSplit = valueFirstSplit[1].split('{"src":');
for(let i = 0; i < valueSecondSplit.length; i++){
if(valueSecondSplit[i] != ""){
valueReplace = valueSecondSplit[i].replaceAll('"', '');
Splitting = valueReplace.split(',');
imgDiv.innerHTML += `<img src="${Splitting[0]}">`
}
}

console.log(text);
};
reader.onerror = function(e) {
console.error('File reading error', e);
};
reader.readAsText(file);
});