function getUpcomingBills() {
  const bills = state.budget?.bills || [];
  const today = new Date().getDate();
  return bills.filter((bill) => {
    const day = Number(bill.dueDay);
    return day && day >= today && day <= today + 2 && Number(bill.amount) > 0;
  });
}

function checkBillReminders() {
  const upcoming = getUpcomingBills();
  if (!upcoming.length) {
    return;
  }

  const title = "Conta próxima do vencimento";
  const body = upcoming.map((bill) => `${bill.title}: dia ${bill.dueDay}`).join(" | ");
  showLocalNotification(title, body, "bill-reminder");
}

function checkSevereWeatherAlert() {
  if (!state.weatherInfo?.stormRisk) {
    return;
  }

  showLocalNotification(
    "Alerta climático",
    "Risco de tempestade na sua região. Verifique janelas e deslocamentos.",
    "weather-alert"
  );
}

async function showLocalNotification(title, body, tag) {
  if (!("Notification" in window)) {
    return;
  }

  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }

  if (Notification.permission !== "granted") {
    return;
  }

  if ("serviceWorker" in navigator) {
    const registration = await navigator.serviceWorker.ready;
    await registration.showNotification(title, {
      body,
      tag,
      icon: "/assets/casaclima-icon.svg"
    });
    return;
  }

  new Notification(title, { body, tag });
}

function initPushReminders() {
  if (!pageFeatures.budget && !pageFeatures.home) {
    return;
  }

  window.setInterval(() => {
    checkBillReminders();
    checkSevereWeatherAlert();
  }, 60 * 60 * 1000);

  window.setTimeout(() => {
    checkBillReminders();
    checkSevereWeatherAlert();
  }, 8000);
}

window.initPushReminders = initPushReminders;
