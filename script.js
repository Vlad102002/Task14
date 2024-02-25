document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('myForm');
  const formData = JSON.parse(localStorage.getItem('formData'));
  if (formData) {
      Object.keys(formData).forEach(key => {
          form.elements[key].value = formData[key];
      });
  }
});

const form = document.getElementById('myForm');
form.addEventListener('input', function() {
  debounceSaveFormData();
});

 
let timeout;
function debounceSaveFormData() {
  clearTimeout(timeout);
  timeout = setTimeout(saveFormData, 1000);  
}

 
function saveFormData() {
  const formData = {};
  const form = document.getElementById('myForm');
  for (let i = 0; i < form.elements.length; i++) {
      if (form.elements[i].name) {
          formData[form.elements[i].name] = form.elements[i].value;
      }
  }
  localStorage.setItem('formData', JSON.stringify(formData));
}