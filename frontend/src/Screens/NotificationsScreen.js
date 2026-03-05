import { useEffect, useState } from "react";
import api from "../api/axios";

function NotificationsScreen() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    api.get("notifications/")
      .then(res => setNotifications(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(n => (
          <li key={n.id}>
            {n.titre} - {n.type_notification}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotificationsScreen;
