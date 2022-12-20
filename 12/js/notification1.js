var container = document.getElementsByClassName("container");
function showNotification(text) {

    let notification = document.createElement('div');
    notification.className = "notification";

    notification.innerHTML = text;
    container[0].append(notification);

    setTimeout(() => notification.remove(), 1500);
  }

  // test it
  let i = 1;
  setInterval(() => {
    showNotification("Уведомление " + i++);
  }, 2000);