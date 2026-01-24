import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getMessaging,
  getToken,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1FlnMJN9ThCuIXqqg5fyuiia62W81BSI",
  authDomain: "firedrill-8bb54.firebaseapp.com",
  projectId: "firedrill-8bb54",
  messagingSenderId: "7847919788",
  appId: "1:7847919788:web:03c5563d04bbe9007edf09",
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

window.getFCMToken = async (reg) => {
  return await getToken(messaging, {
    serviceWorkerRegistration: reg,
    vapidKey:
      "BARgxo2wFQBQQkup8tqDhCNs1TbUVYgfj3fQFw82lOcRL7i8vSYNuzaC-XD59C9vGxABPtBL2CLRCDrgJF0PRlI",
  });
};