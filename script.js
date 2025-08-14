// Simple front-end interactions for tourism-app prototype

// Helpers to open modals with data
function openOrderModal(itemName, price){
  const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
  document.getElementById('orderItem').value = price;
  document.getElementById('orderItemName').value = itemName + ' — Rs. ' + price;
  document.getElementById('orderQty').value = 1;
  document.getElementById('orderNote').value = '';
  orderModal.show();
}

function submitOrder(e){
  e.preventDefault();
  const itemInfo = document.getElementById('orderItemName').value;
  const qty = parseInt(document.getElementById('orderQty').value, 10) || 1;
  const price = parseInt(document.getElementById('orderItem').value, 10) || 0;
  const total = qty * price;
  // Simple demo: show alert. In real app you would send this to server.
  alert(`Order placed:\n${itemInfo}\nQuantity: ${qty}\nTotal: Rs. ${total}\n(Prototype — no payment)`);
  bootstrap.Modal.getInstance(document.getElementById('orderModal')).hide();
  document.getElementById('orderForm').reset();
}

// Vehicles
function openVehicleModal(name, pricePerDay){
  const vehicleModal = new bootstrap.Modal(document.getElementById('vehicleModal'));
  document.getElementById('vehicleType').value = pricePerDay;
  document.getElementById('vehicleName').value = name + ' — Rs. ' + pricePerDay + ' / day';
  document.getElementById('vehicleDays').value = 1;
  document.getElementById('pickupLocation').value = '';
  vehicleModal.show();
}

function submitVehicleBooking(e){
  e.preventDefault();
  const vehicle = document.getElementById('vehicleName').value;
  const days = parseInt(document.getElementById('vehicleDays').value, 10) || 1;
  const price = parseInt(document.getElementById('vehicleType').value, 10) || 0;
  const pickup = document.getElementById('pickupLocation').value || 'Not specified';
  const total = days * price;
  alert(`Vehicle booked:\n${vehicle}\nDays: ${days}\nPickup: ${pickup}\nTotal: Rs. ${total}\n(Prototype — driver/payment not implemented)`);
  bootstrap.Modal.getInstance(document.getElementById('vehicleModal')).hide();
  document.getElementById('vehicleForm').reset();
}
