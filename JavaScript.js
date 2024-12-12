import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase();

bookingButton.addEventListener('click', function(event) {
    event.preventDefault();

    const gameType = document.querySelector('#game-type').value;
    const date = document.querySelector('#date').value;
    const time = document.querySelector('#time').value;
    const name = document.querySelector('#name').value;

    if (gameType && date && time && name) {
        const bookingRef = ref(db, 'bookings/' + Date.now());
        set(bookingRef, {
            gameType,
            date,
            time,
            name,
        }).then(() => {
            confirmationMessage.innerHTML = `<p>Booking Confirmed for ${gameType} on ${date} at ${time}.</p><p>Thank you for booking, ${name}!</p>`;
            confirmationMessage.style.display = 'block';
        }).catch((error) => {
            confirmationMessage.innerHTML = '<p>Error processing your booking. Try again later.</p>';
            confirmationMessage.style.display = 'block';
        });
    } else {
        confirmationMessage.innerHTML = '<p>Please fill all the details to confirm your booking.</p>';
        confirmationMessage.style.display = 'block';
    }
});
