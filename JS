// Sample data for demonstration
const orders = [
  { id: 1, table: 5, items: ['Burger', 'Fries', 'Soda'], status: 'In Progress' },
  { id: 2, table: 8, items: ['Pizza', 'Salad'], status: 'Ready' }
];

const reservations = [
  { id: 1, name: 'John Doe', dateTime: '2024-04-15 18:30', guests: 4 },
  { id: 2, name: 'Jane Smith', dateTime: '2024-04-16 19:00', guests: 2 }
];

const menus = [
  { id: 1, name: 'Burger', price: 10 },
  { id: 2, name: 'Pizza', price: 12 },
  { id: 3, name: 'Salad', price: 8 },
  { id: 4, name: 'Fries', price: 5 },
  { id: 5, name: 'Soda', price: 3 }
];

// Function to display orders
function displayOrders() {
  const ordersSection = document.getElementById('orders');
  ordersSection.innerHTML = '<h2>Orders</h2>';
  orders.forEach(order => {
      const orderElement = document.createElement('div');
      orderElement.classList.add('order');
      orderElement.innerHTML = `
          <p><strong>ID:</strong> ${order.id}</p>
          <p><strong>Table:</strong> ${order.table}</p>
          <p><strong>Items:</strong> ${order.items.join(', ')}</p>
          <p><strong>Status:</strong> ${order.status}</p>
      `;
      ordersSection.appendChild(orderElement);
  });
}

// Function to display reservations
function displayReservations() {
  const reservationsSection = document.getElementById('reservations');
  reservationsSection.innerHTML = '<h2>Reservations</h2>';
  reservations.forEach(reservation => {
      const reservationElement = document.createElement('div');
      reservationElement.classList.add('reservation');
      reservationElement.innerHTML = `
          <p><strong>ID:</strong> ${reservation.id}</p>
          <p><strong>Name:</strong> ${reservation.name}</p>
          <p><strong>Date & Time:</strong> ${reservation.dateTime}</p>
          <p><strong>Guests:</strong> ${reservation.guests}</p>
      `;
      reservationsSection.appendChild(reservationElement);
  });
}

// Function to display menus
function displayMenus() {
  const menusSection = document.getElementById('menus');
  menusSection.innerHTML = '<h2>Menus</h2>';
  menus.forEach(menu => {
      const menuElement = document.createElement('div');
      menuElement.classList.add('menu-item');
      menuElement.innerHTML = `
          <p><strong>ID:</strong> ${menu.id}</p>
          <p><strong>Name:</strong> ${menu.name}</p>
          <p><strong>Price:</strong> $${menu.price}</p>
      `;
      menusSection.appendChild(menuElement);
  });
}
// Sample menu data
const menu = [
  { id: 1, name: 'Burger', price: 10 },
  { id: 2, name: 'Pizza', price: 12 },
  { id: 3, name: 'Salad', price: 8 },
  { id: 4, name: 'Fries', price: 5 },
  { id: 5, name: 'Soda', price: 3 }
];

// Function to display menus in slides
function displayMenus() {
  const menuSlider = document.getElementById('menu-slider');
  menuSlider.innerHTML = ''; // Clear existing content
  menus.forEach(menu => {
      const menuElement = document.createElement('div');
      menuElement.classList.add('menu-item');
      menuElement.innerHTML = `
          <p><strong>ID:</strong> ${menu.id}</p>
          <p><strong>Name:</strong> ${menu.name}</p>
          <p><strong>Price:</strong> $${menu.price}</p>
      `;
      menuSlider.appendChild(menuElement);
  });
}

// Slide index to track current slide
let slideIndex = 0;

// Function to show current slide
function showSlide(index) {
  const slides = document.querySelectorAll('.menu-item');
  slides.forEach((slide, idx) => {
      slide.style.display = idx === index ? 'block' : 'none';
  });
}

// Function to show next slide
function showNextSlide() {
  slideIndex++;
  if (slideIndex >= menus.length) {
      slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Function to show previous slide
function showPrevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
      slideIndex = menus.length - 1;
  }
  showSlide(slideIndex);
}

// Display initial menu
displayMenus();

// Event listeners for slide buttons
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

prevBtn.addEventListener('click', showPrevSlide);
nextBtn.addEventListener('click', showNextSlide);

// Show initial slide
showSlide(slideIndex);


// Display initial data
displayOrders();
displayReservations();
displayMenus();
