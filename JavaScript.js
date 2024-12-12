document.addEventListener('DOMContentLoaded', function () {
    const bookingButton = document.querySelector('.booking-btn');
    const confirmationMessage = document.querySelector('#confirmation-message');

    bookingButton.addEventListener('click', function (event) {
        event.preventDefault();

        const gameType = document.querySelector('#game-type').value;
        const date = document.querySelector('#date').value;
        const time = document.querySelector('#time').value;
        const name = document.querySelector('#name').value;

        if (gameType && date && time && name) {
            const bookingData = { gameType, date, time, name };

            console.log('Booking Data:', bookingData);
            localStorage.setItem('booking', JSON.stringify(bookingData));

            confirmationMessage.innerHTML = `<p>Booking Confirmed for ${gameType} on ${date} at ${time}.</p><p>Thank you for booking, ${name}!</p>`;
            confirmationMessage.style.display = 'block';
        } else {
            console.log('Error: Missing fields');
            confirmationMessage.innerHTML = '<p>Please fill all the details to confirm your booking.</p>';
            confirmationMessage.style.display = 'block';
        }
    });
});
