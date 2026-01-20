self.addEventListener("push", function(event){
  const data = event.data ? event.data.json() : {};
  self.registration.showNotification("🚨 FIRE DRILL ALERT", {
    body: data.message || "Evacuate immediately",
    icon: "icon-192.png",
    vibrate: [1000,500,1000,500,1000],
    requireInteraction: true
  });
});
