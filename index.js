
function openEditForm() {
    const name = document.querySelector('.user-name').textContent;
    const email = document.querySelector('.user-email').textContent;
    document.querySelector('#name-input').value = name;
    document.querySelector('#email-input').value = email;
    document.querySelector('#edit-form').style.display = 'block';
  }
  
  // Submit the edit form
  function submitForm(event) {
    event.preventDefault(); // prevent default form submission behavior
    const name = document.querySelector('#name-input').value;
    const email = document.querySelector('#email-input').value;
  
    // send an AJAX request to update the user details in the database
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        // update the user details section with the new data
        document.querySelector('.user-name').textContent = name;
        document.querySelector('.user-email').textContent = email;
        document.querySelector('#edit-form').style.display = 'none'; // hide the edit form
        alert('User details updated successfully!');
      }
    };
    xhr.open('POST', '/update-user-details');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify({ name: name, email: email }));
  }
  
