document.addEventListener("DOMContentLoaded", function () {
    const targetDate = new Date(1708794000 * 1000);

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = targetDate - currentDate;

        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            const countdownElement = document.getElementById("countdown");
            countdownElement.innerHTML = `${days}j ${hours}h ${minutes}min ${seconds}s`;
        } else {
            document.getElementById("countdown").innerHTML = "La maintenance est terminée.";
        }
    }
    setInterval(updateCountdown, 1000);
});
