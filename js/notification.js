const NOTIFICATION_CONTAINER = document.getElementById('notification-container');
const NOTIFICATION_BODY = document.getElementById('notification-body');

function notify(message) {
  NOTIFICATION_BODY.innerText = message;
  NOTIFICATION_CONTAINER.classList.remove('animate__fadeOut');
  NOTIFICATION_CONTAINER.classList.add('animate__tada');
  NOTIFICATION_CONTAINER.classList.remove('hidden');

  setTimeout(() => {
    NOTIFICATION_CONTAINER.classList.remove('animate__tada');
    NOTIFICATION_CONTAINER.classList.add('animate__fadeOut');
  }, 5000);
}
