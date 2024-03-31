
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
function generateUserName() {
  const prefix = 'User';
  const twoDigits = Math.floor(Math.random() * 100).toString().padStart(2, '0');
  const randomSymbols = generateRandomSymbols(4);
  return `${prefix}${twoDigits}${randomSymbols}`;
}

// Získání elementu s ID "user-id" a nastavení textu na vygenerované jméno
const userIdElement = document.getElementById('user-id');
userIdElement.textContent = generateUserName();


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

  document.getElementById('upload-input').addEventListener('change', profileImage);

  // Načtení URL obrázku z lokálního úložiště při načtení stránky
  window.addEventListener('load', function() {
    var savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
      document.getElementById('image-preview').src = savedImage;
    }
  });

  document.getElementById('save-button').addEventListener('click', function() {
    var imageUrl = document.getElementById('image-preview').src;
    var jsonData = JSON.stringify({ image: imageUrl });
    console.log(jsonData);

  });

  function showText() {
    console.log(document.getElementById("saveButtonInput").value);
    var text = document.getElementById("hiddenText");
    text.style.display = "block";
    setTimeout(function() {
      text.style.display = "none";
    }, 2000);

    document.getElementById('user-id').innerText = saveButtonInput.value;

  }
  
  document.getElementById("saveButton").addEventListener("click", function(){
    console.log(document.getElementById("saveButtonInput").value)
  })


  function resetPhoto(){
    document.getElementById("image-preview").src = "img/truck_image.jpg";
  }  