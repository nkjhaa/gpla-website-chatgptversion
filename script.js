document.getElementById('membershipForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    title: document.getElementById('title').value,
    company: document.getElementById('company').value,
    location: document.getElementById('location').value
  };

  fetch("https://script.google.com/macros/s/AKfycbz8GPXIOtZ5Oqkq4PXwLyJuq4dsGsqUm3kGi-u_RA-tg7KMs_o_J7H4G2icxUD36UxDTA/exec", {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(data => {
    if (data.result === "success") {
      document.getElementById('membershipForm').reset();
      document.getElementById('confirmation').style.display = 'block';
    } else {
      alert("There was an error submitting your request.");
    }
  })
  .catch(err => alert("Error: " + err));
});
