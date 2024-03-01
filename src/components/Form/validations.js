export default (activityDate, fieldName) => {
  let errors = {};

  if (fieldName === "name" && !activityDate.name) {
    errors.name = "The activity must have a name";
  } else {
    errors.name = "";
  }

  const lettersOnlyRegex = /^[a-zA-Z]+$/;

  if (fieldName === "name" && !lettersOnlyRegex.test(activityDate.name)) {
    errors.name = "Only letters allowed";
  } else {
    errors.name = "";
  }

  if (
    fieldName === "difficulty" &&
    (!activityDate.difficulty ||
      activityDate.difficulty < 1 ||
      activityDate.difficulty > 5)
  ) {
    errors.difficulty = "Number between 1 and 5";
  } else {
    errors.difficulty = "";
  }

  const integerRegex = /^\d+$/;
  if (
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
