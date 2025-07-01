function updateTimer() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const diff = newYear - now;

  if (diff <= 0) {
    console.log('С Новым Годом!');
    return;
  }

  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

  const timerStr = `${months} мес, ${days} дн, ${hours} час, ${minutes} мин, ${seconds} сек`;
  console.log(timerStr);
}

setInterval(updateTimer, 1000);
updateTimer();
