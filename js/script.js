// Script
let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2
      },
      640: {
         slidesPerView: 3
      },
      768: {
         slidesPerView: 4
      },
      1000: {
         slidesPerView: 5
      },
   }
});

// ... (existing JavaScript remains the same) ...

// Project popup functionality
// Get modal element
// Get modal element
const modal = document.getElementById("project-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModalButton = document.querySelector(".modal__close");

// Project data
const projectData = [
   {
      id: 1,
      title: "BPCL Kochin",
      description: "Coak Handling System at BPCL Site, Kochin, Kerala. Cost: 2.5 CR. Completed in 2016.",
      image: "images/project-1.jpg"
   },
   {
      id: 2,
      title: "HEG Mandideep",
      description: "Structural work at HEG Mandideep plant, Bhopal. Cost: 1.80 CR. Completed between 2021 and 2023.",
      image: "images/project-2.jpg"
   },
   {
      id: 3,
      title: "Grasim Industries",
      description: "Structural work at Grasim Industries, Vilayat GIDC, Bharuch. Cost: 1.20 CR. Completed in 2015.",
      image: "images/project-3.jpg"
   },
   {
      id: 4,
      title: "IGPL Limited",
      description: "Fabrication and erection at IGPL Limited, Taloja MIDC. Cost: 97 Lac. Completed in 2017.",
      image: "images/project-4.jpg"
   },
   {
      id: 5,
      title: "Rothe Erde Nasik",
      description: "Structural fabrication at Rothe Erde India Ltd, Nasik. Cost: 80 Lac. Completed in 2012.",
      image: "images/project-5.jpg"
   },
   {
      id: 6,
      title: "Prabhat Dairy",
      description: "Structural work at Prabhat Dairy, Shrirampur. Cost: 25 Lac. Completed in 2021.",
      image: "images/project-6.jpg"
   }
];

// Show modal when "Read More" button is clicked
document.querySelectorAll('.projects__button').forEach(button => {
   button.addEventListener('click', function() {
      const projectId = parseInt(this.getAttribute('data-project'));
      const project = projectData.find(p => p.id === projectId);

      // Update modal content
      modalImage.src = project.image;
      modalTitle.textContent = project.title;
      modalDescription.textContent = project.description;

      // Show modal
      modal.style.display = "flex";
   });
});

// Close the modal when close button is clicked
closeModalButton.addEventListener('click', function() {
   modal.style.display = "none";
});

// Close the modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
   if (event.target === modal) {
      modal.style.display = "none";
   }
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission

   // Collect form data
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const phone = document.getElementById('phone').value;
   const message = document.getElementById('message').value;
   console.log(`${name} ${email} ${phone} ${message}`);
   // Prepare the email parameters
   const params = {
      from_name: name,
      email_id: email,
      phone_number: phone,
      message: message
   };

   // Send email using EmailJS
   emailjs.send("service_za34v36", "template_33wpy8n", params)
   .then(function(response) {
      alert("Message sent successfully!");
      document.getElementById('contact-form').reset();
   }, function(error) {
      alert("Failed to send message. Please try again later.");
   });
});









































































/* let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
   },
}); */