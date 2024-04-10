// ===================== LOGIN & REGISTER =====================


    // Check if the user is already logged in
    if (localStorage.getItem("loggedIn") === "true") {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("logout-button").style.display = "block";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("login-form").style.display = "block";
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("content").style.display = "none";
    }

    // Function to check login credentials
    function checkLogin() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // For simplicity, let's hardcode the username and password
        if (username === localStorage.getItem("registeredUsername") && password === localStorage.getItem("registeredPassword")) {
            document.getElementById("login-form").style.display = "none";
            document.getElementById("logout-button").style.display = "inline-block";
            document.getElementById("content").style.display = "block";
            document.getElementById("message").innerHTML = "";
        } else {
            document.getElementById("message").innerHTML = "<p class='incorrect-username'>Incorrect username or password!</p>";
        }
    }

    // Function to show registration form
    function showRegisterForm() {
        document.getElementById("login-form").style.display = "none";
        document.getElementById("register-form").style.display = "block";
        document.getElementById("message").innerHTML = "";
    }

    // Function to register a new user
    function register() {
        var newUsername = document.getElementById("newUsername").value;
        var newPassword = document.getElementById("newPassword").value;

        localStorage.setItem("registeredUsername", newUsername);
        localStorage.setItem("registeredPassword", newPassword);

        document.getElementById("register-form").style.display = "none";
        document.getElementById("login-form").style.display = "block";
        document.getElementById("message").innerHTML = "<p>Registration successful! Now please login.</p>";
    }

    // Function to logout
    function logout() {
        localStorage.removeItem("loggedIn");
        document.getElementById("login-form").style.display = "block";
        document.getElementById("logout-button").style.display = "none";
        document.getElementById("content").style.display = "none";
        document.getElementById("message").innerHTML = "";
    }
    
// ===================== LOGIN & REGISTER - END =====================


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

  if (localStorage.getItem('uploadedImage')) {
    document.getElementById('image-preview').src = localStorage.getItem('uploadedImage');
  }
}

function resetPhoto() {
  localStorage.setItem('uploadedImage', 'img/truck_image.jpg');
  document.getElementById("image-preview").src = "img/truck_image.jpg";
}

document.addEventListener('DOMContentLoaded', function () {
  const username = localStorage.getItem('user-id') ?? generateUsername();

  document.getElementById('user-id').innerText = username;
  document.getElementById('saveButtonInput').value = username;

  // Načtení URL obrázku z lokálního úložiště při načtení stránky
  if (localStorage.getItem('uploadedImage')) {
    document.getElementById('image-preview').src = localStorage.getItem('uploadedImage');
  }
})

document.getElementById('upload-input').addEventListener('change', profileImage);