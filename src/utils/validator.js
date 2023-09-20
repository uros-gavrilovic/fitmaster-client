export default function validateEmail(field, fieldName, setErrorState) {
  // Validates email address

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const error = !emailRegex.test(field);
  setErrorState((prevState) => ({ ...prevState, [fieldName]: error }));
  return error;
}
