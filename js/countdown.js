const TARGET_DATE = new Date('2025-11-25T13:00:00+05:30');
let countdownInterval;

function countdownTimer() {
  const currentDate = new Date();

  const timeDifference = TARGET_DATE - currentDate;

  if (timeDifference <= 0) {
    document.getElementById('countdown-completion-message').classList.remove('hidden');
    document.getElementById('timer').classList.add('hidden');
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  daysElement.textContent = days;
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

function startCountdown() {
  countdownTimer();
  document.getElementById('timer').classList.remove('hidden');
  countdownInterval = setInterval(countdownTimer, 1000);
}

startCountdown();
