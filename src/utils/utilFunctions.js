import { createNotification } from "../utils/notificationService";
import { notificationType } from "../constants/globals";
import { appInfo } from "../constants/globals";

export function capitalizeFirstLetter(str, capitalizeEachWord = false) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  if (capitalizeEachWord) {
    return str
      .split(" ")
      .map((word) => capitalizeFirstLetter(word))
      .join(" ");
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

export function removeUnderscores(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

  return str.split("_").join(" ");
}

export function formatDate(arr, asString = true) {
  if (!arr) return null;

  if (asString) {
    return `${arr[2]}/${arr[1]}/${arr[0]}`;
  } else {
    return new Date(arr[0], arr[1] - 1, arr[2]);
  }
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
export function isNumber(str, allowBlank = false) {
  if (allowBlank && str === "") return true;
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

export function convertNullToEmptyString(obj) {
  // Utility function to convert null values to empty string

  const result = {};
  for (const key in obj) {
    if (obj[key] === null) {
      result[key] = "";
    } else {
      result[key] = obj[key];
    }
  }
  return result;
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

export function validatePlan(eventDetails, messages) {
  const requiredFields = [
    { field: "member", message: "noMemberSelected" },
    { field: "trainer", message: "noTrainerSelected" },
    { field: "startsAt", message: "noDateTimeSelected" },
    { field: "endsAt", message: "noDateTimeSelected" },
    { field: "exercises", message: "noExerciseSelected" },
  ];

  for (const { field, message } of requiredFields) {
    if (!eventDetails[field] || eventDetails[field].length === 0) {
      createNotification(
        notificationType.error,
        messages?.title,
        messages?.[message]
      );
      return false;
    }
  }

  return true;
}

export function handleError(error, actions, dispatch) {
  // Creates notification and dispatches error action.

  const messages = error.response.data;
  dispatch(actions.actionError(error?.response?.data));
  createNotification(
    notificationType.error,
    messages?.title,
    messages?.message
  );

  // if (error.response.status === 401) return window.location.reload();
}
export const boldTextParser = (text) => {
  // Used to parse text and make it bold (eg. MUI label tags)

  let i = 0;
  let renderables = [];
  let boldText = "";

  while (i < text.length) {
    if (text[i] === "<" && text[i + 1] === "<") {
      let isBoldTextFound = false;
      i += 2;
      while (!isBoldTextFound) {
        if (text[i] !== ">" || text[i + 1] !== ">") {
          boldText = boldText.concat(text[i]);
          i += 1;
        } else {
          isBoldTextFound = true;
          i += 2;
        }
      }

      renderables.push(<strong key={i}>{boldText}</strong>);
      boldText = "";
    } else {
      renderables.push(text[i]);
      i += 1;
    }
  }

  return renderables;
};

export function getTranslationFile() {
  // Returns translation file name

  const appName = sessionStorage.getItem("appName") || appInfo.name;
  const language =
    sessionStorage.getItem("appLocale") || appInfo.default_locale;
  return `${appName}_${language}`;
}

export function calculatePixelValue(
  percentage,
  referenceElement = document.documentElement
) {
  // Calculates pixel value based on percentage and reference element

  const parentHeight = referenceElement.clientHeight;
  const pixelValue = (percentage / 100) * parentHeight;

  return pixelValue;
}

export function formatDateForScheduler(backEndDate) {
  // Formats date received from back-end from format [YYYY, MM, DD, HH, MM] to the one applicable for Date  JS class.

  return new Date(
    Date.UTC(
      backEndDate[0], // Year
      backEndDate[1] - 1, // Month (0-based)
      backEndDate[2], // Day
      backEndDate[3], // Hour
      backEndDate[4] // Minute
    )
  );
}
