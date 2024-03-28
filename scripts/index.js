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