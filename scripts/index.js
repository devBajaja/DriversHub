const userIdElement = document.getElementById('user-id');

// Funkce pro generování náhodných symbolů
function generateRandomSymbols(length) {
  const symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
  result += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return result;
}

// Generování jména
function generateUsername() {
  const prefix = 'User';
  const twoDigits = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  const randomSymbols = generateRandomSymbols(4);

  return `${prefix}${twoDigits}${randomSymbols}`;
}

var profileImage = function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  
  reader.onload = function(e) {
    var img = document.getElementById('image-preview');
    img.src = e.target.result;
    // Uložení URL obrázku do lokálního úložiště
    localStorage.setItem('uploadedImage', e.target.result);
  };
  
  reader.readAsDataURL(file);
};

function showText() {
  const value = document.getElementById("saveButtonInput").value;
  const text = document.getElementById("hiddenText");

  text.style.display = "block";

  setTimeout(function() {
    text.style.display = "none";
  }, 2000);

  localStorage.setItem('user-id', value)
  document.getElementById('user-id').innerText = value;
}

function resetPhoto() {
  document.getElementById("image-preview").src = "img/truck_image.jpg";
}

document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('user-id') ?? generateUsername();

  document.getElementById('user-id').innerText = username;
  document.getElementById('saveButtonInput').value = username;

  // Načtení URL obrázku z lokálního úložiště při načtení stránky
  if (localStorage.getItem('uploadedImage')) {
    document.getElementById('image-preview').src = savedImage;
  }
})

document.getElementById('upload-input').addEventListener('change', profileImage);