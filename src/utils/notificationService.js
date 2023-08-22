import { NotificationManager } from "react-notifications";
import { notificationType } from "../constants/globals";

export function createNotification(type, title, description) {
  title = title?.toUpperCase();

  switch (type) {
    case notificationType.info:
      NotificationManager.info(description, title, 3000);
      break;
    case notificationType.success:
      NotificationManager.success(description, title, 3000);
      break;
    case notificationType.warning:
      NotificationManager.warning(description, title, 3000);
      break;
    case notificationType.error:
      NotificationManager.error(description, title, 4200);
      break;
    default:
      break;
  }
}
