document.addEventListener('DOMContentLoaded', function() {
    // Ensure elements exist before proceeding
    const logoContainer = document.querySelector(".logo-container");
    const logo = document.querySelector(".logo");
    const logoHover = document.querySelector(".logo-hover");

    if (logoContainer && logo && logoHover) {
        logoContainer.addEventListener("mouseover", function() {
            logo.style.opacity = "0";
            logoHover.style.opacity = "1";
        });

        logoContainer.addEventListener("mouseout", function() {
            logo.style.opacity = "1";
            logoHover.style.opacity = "0";
        });
    } else {
        console.error("Logo elements not found in DOM.");
    }

    const bookingButton = document.querySelector('.booking-btn');
    const confirmationMessage = document.querySelector('#confirmation-message');

    if (bookingButton && confirmationMessage) {
        bookingButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission

            const gameType = document.querySelector('#game-type')?.value;
            const date = document.querySelector('#date')?.value;
            const time = document.querySelector('#time')?.value;
            const name = document.querySelector('#name')?.value;

            if (gameType && date && time && name) {
                confirmationMessage.innerHTML = `
                    <p>Booking Confirmed for ${gameType} on ${date} at ${time}.</p>
                    <p>Thank you for booking, ${name}!</p>`;
                confirmationMessage.style.display = 'block';
            } else {
                confirmationMessage.innerHTML = '<p>Please fill all the details to confirm your booking.</p>';
                confirmationMessage.style.display = 'block';
            }
        });
    } else {
        console.error("Booking form elements not found in DOM.");
    }

    const reviewButton = document.querySelector('.review-btn');
    const reviewList = document.querySelector('.reviews');

    if (reviewButton && reviewList) {
        reviewButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent form submission

            const userName = document.querySelector('#user-name')?.value;
            const userReview = document.querySelector('#user-review')?.value;

            if (userName && userReview) {
                const newReview = document.createElement('div');
                newReview.classList.add('review');
                newReview.innerHTML = `
                    <h3>${userName}</h3>
                    <p>${userReview}</p>`;
                reviewList.appendChild(newReview);

                // Reset the form
                document.querySelector('#user-name').value = '';
                document.querySelector('#user-review').value = '';
            } else {
                alert('Please enter both your name and review.');
            }
        });
    } else {
        console.error("Review form elements not found in DOM.");
    }
});
