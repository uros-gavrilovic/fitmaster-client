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
