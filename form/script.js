// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var country = document.getElementById('country').value;
    var occupation = document.getElementById('occupation').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var hobbies = document.getElementById('hobbies').value;
    var favoriteColor = document.getElementById('favoriteColor').value;
    var birthdate = document.getElementById('birthdate').value;
    var nationality = document.getElementById('nationality').value;
    var language = document.getElementById('language').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var website = document.getElementById('website').value;
    var favoriteFood = document.getElementById('favoriteFood').value;
    var bio = document.getElementById('bio').value;
    var interests = document.getElementById('interests').value;
    
    // You can perform additional validation or data processing here
    
 
    
    // Display submitted data (for demo purposes)
    var alertBox = document.createElement('div');
    alertBox.className = 'alert';
    alertBox.textContent = 'Submitted data:\n\nName: ' + name + '\nEmail: ' + email + '\nAge: ' + age + '\nGender: ' + gender + '\nCountry: ' + country + '\nOccupation: ' + occupation + '\nAddress: ' + address + '\nPhone: ' + phone + '\nEducation: ' + education + '\nHobbies' + hobbies;
   
  alertBox.textContent += '\nFavorite Color: ' + favoriteColor + '\nBirthdate: ' + birthdate + '\nNationality: ' + nationality + '\nLanguage: ' + language + '\nHeight: ' + height + '\nWeight: ' + weight + '\nWebsite: ' + website + '\nFavorite Food: ' + favoriteFood + '\nBio: ' + bio + '\nInterests: ' + interests;
  document.body.appendChild(alertBox);
});

// Reset form
function resetForm() {
  document.getElementById('userForm').reset();
}
