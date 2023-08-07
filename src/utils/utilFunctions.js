import { createNotification } from "../utils/notificationService";
import { notificationType } from "../constants/globals";

export function capitalizeFirstLetter(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function formatDate(arr) {
  if (!arr) return null;
  return `${arr[2]}/${arr[1]}/${arr[0]}`;
}

export function generateIDField(arr, fieldName) {
  // used to create another field called ID based on given fieldName
  // utilized in PaginationTable to keep it reusable by having every row have a same name field called ID
  // to create key attribute for each row

  return arr.map((element) => ({
    ...element,
    id: element[fieldName],
  }));
}
export function isNumber(str) {
  return /^\d+$/.test(str);
}

export function convertEmptyFieldsToNull(state) {
  return Object.fromEntries(
    Object.entries(state).map(([key, value]) => [
      key,
      typeof value === "string" && value.trim() === "" ? null : value,
    ])
  );
}

export function contains(obj, string, ignoreCase = false) {
  return obj.includes(string);
}

export function validateField(field, fieldName, setErrorState) {
  // Validates whetever field is empty or not.

  const error = !field;
  setErrorState((prevState) => ({ ...prevState, [fieldName]: error }));
  return error;
}

export const errorAction = (error, action, dispatch, messages) => {
  // creates notification and dispatches error action

  dispatch(action(error?.response?.data));
  createNotification(
    notificationType.error,
    messages?.title,
    error?.response?.data?.error_message
  );
};
