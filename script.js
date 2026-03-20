function checkStrength() {
    let password = document.getElementById("password").value;
    let strengthText = document.getElementById("strengthText");
    let strengthBar = document.getElementById("strengthBar");

    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength === 0) {
        strengthText.innerText = "";
        strengthBar.style.width = "0%";
    }
    else if (strength === 1) {
        strengthText.innerText = "Weak ❌";
        strengthBar.style.width = "25%";
        strengthBar.style.background = "red";
    }
    else if (strength === 2) {
        strengthText.innerText = "Medium ⚠️";
        strengthBar.style.width = "50%";
        strengthBar.style.background = "orange";
    }
    else if (strength === 3) {
        strengthText.innerText = "Strong ✅";
        strengthBar.style.width = "75%";
        strengthBar.style.background = "yellow";
    }
    else {
        strengthText.innerText = "Very Strong 🔥";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "green";
    }
}