document.addEventListener("DOMContentLoaded", function() {
    const dateElement = document.querySelector(".data");
    
    function updateDate() {
      const today = new Date();
      const day = String(today.getDate()).padStart(2, '0');
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Meses são baseados em zero, então adicione 1
  
      dateElement.innerHTML = `${day}<span>/${month}</span>`;
    }
  
    updateDate();
  });