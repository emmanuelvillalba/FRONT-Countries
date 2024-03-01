export default (activityDate, fieldName) => {
  let errors = {};

  const lettersOnlyRegex = /^[a-zA-Z]+$/;
  if (fieldName === "name" && !activityDate.name) {
    errors.name = "The activity must have a name";
  } else if (
    fieldName === "name" &&
    !lettersOnlyRegex.test(activityDate.name)
  ) {
    errors.name = "Only letters allowed";
  } else {
    errors.name = "";
  }

  const integerRegex = /^\d+$/;
  if (
    fieldName === "difficulty" &&
    (!activityDate.difficulty || isNaN(Number(activityDate.difficulty)))
  ) {
    errors.difficulty = "Enter a number";
  } else if (
    fieldName === "difficulty" &&
    (activityDate.difficulty < 1 || activityDate.difficulty > 5)
  ) {
    errors.difficulty = "Number between 1 and 5";
  } else if (
    fieldName === "difficulty" &&
    !integerRegex.test(activityDate.difficulty)
  ) {
    errors.difficulty = "The number must be integer";
  } else {
    errors.difficulty = "";
  }

  if (
    fieldName === "duration" &&
    (!activityDate.duration || isNaN(Number(activityDate.duration)))
  ) {
    errors.duration = "Enter a number";
  } else if (
    fieldName === "duration" &&
    (activityDate.duration < 1 || activityDate.duration > 72)
  ) {
    errors.duration = "Hour range: min 1 - max 72";
  } else {
    errors.duration = "";
  }

  if (fieldName === "season" && !activityDate.season) {
    errors.season = "Season is required";
  } else {
    errors.season = "";
  }

  if (
    fieldName === "countries" &&
    (!activityDate.countries || activityDate.countries.length === 0)
  ) {
    errors.countries = "Assign at least one country ID";
  } else {
    errors.countries = [];
  }

  return errors;
};
