import { NotificationManager } from "react-notifications";

export const createNotification = (type, titleMessage, descriptionMessage) => {
  switch (type) {
    case notificationType.info:
      NotificationManager.info(descriptionMessage, titleMessage, 3000);
      break;
    case notificationType.success:
      NotificationManager.success(descriptionMessage, titleMessage, 3000);
      break;
    case notificationType.warning:
      NotificationManager.warning(descriptionMessage, titleMessage, 3000);
      break;
    case notificationType.error:
      NotificationManager.error(descriptionMessage, titleMessage, 4200);
      break;
    default:
      break;
  }
};
