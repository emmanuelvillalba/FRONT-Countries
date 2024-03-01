export default (activityDate, fieldName) => {
  let errors = {};
  //fieldName === "name" &&
  if (!activityDate.name) {
    errors.name = "The activity must have a name";
  }

  const lettersOnlyRegex = /^[a-zA-Z]+$/;
  //fieldName === "name" &&
  if (!lettersOnlyRegex.test(activityDate.name)) {
    errors.name = "Only letters allowed";
  }

  if (
    !activityDate.difficulty ||
    activityDate.difficulty < 1 ||
    activityDate.difficulty > 5
    // fieldName === "difficulty" &&
    // (!activityDate.difficulty ||
    //   activityDate.difficulty < 1 ||
    //   activityDate.difficulty > 5)
  ) {
    errors.difficulty = "Number between 1 and 5";
  }

  const integerRegex = /^\d+$/;
  //fieldName === "difficulty" &&
  if (!integerRegex.test(activityDate.difficulty)) {
    errors.difficulty = "The number must be integer";
  }

  if (!activityDate.duration || isNaN(Number(activityDate.duration))
    // fieldName === "duration" &&
    // (!activityDate.duration || isNaN(Number(activityDate.duration)))
  ) {
    errors.duration = "Enter a number";
  }
//fieldName === "season" && 
  if (!activityDate.season) {
    errors.season = "Season is required";
  }

  if (!activityDate.countries || activityDate.countries.length === 0
    // fieldName === "countries" &&
    // (!activityDate.countries || activityDate.countries.length === 0)
  ) {
    errors.countries = "Assign at least one country ID";
  }

  return errors;
};
