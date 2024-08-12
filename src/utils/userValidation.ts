export const onlyAlphaNum = (input: string) => {
  const regex = new RegExp(/^[a-z0-9]+$/i)
  return regex.test(input)
}

export const lengthMoreThan4 = (input: string) => {
  return input.length > 4;
}

export const lengthMoreThan7 = (input: string) => {
  return input.length > 7;
}

export const usernameExists = (input: string, otherUsernames: string[]) => {
  return otherUsernames.includes(input)
}

export const passwordIsComplex = (input: string) => {
  const regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
  return regex.test(input);
};

export const passwordsMatch = (input1: string, input2: string) => {
  return input1 === input2;
}

export const validateUsername = (username: string, otherUsernames: string[]) : string[] => {
  const errors = [];

  if (!onlyAlphaNum(username)) {
    errors.push('Only letters and numbers allowed');
  }

  if (usernameExists(username, otherUsernames)) {
    errors.push('Username is taken');
  }

  if (!lengthMoreThan4(username)) {
    errors.push('Username must be 5 or more characters')
  }

  return errors;
};

export const validatePassword = (password: string) : string[] => {
  const errors = [];
  if (!lengthMoreThan7(password)) {
    errors.push('Password must be 8 or more characters');
  }

  if (!passwordIsComplex(password)) {
    errors.push('Password must have at least one uppercase letter, one lowercase letter, one number and one special character');
  }

  return errors;
}

export const validateConfirmation = (password: string, confirmation: string) => {
  const errors = [];

  if (!passwordsMatch(password, confirmation)) {
    errors.push('Password and Confirmation must match')
  }

  return errors;
}