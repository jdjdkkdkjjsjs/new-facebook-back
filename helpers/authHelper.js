export const hashPassword = async (password) => {
  return password;
}

export const comparePassword = async (password, hashedPassword) => {
  return password === hashedPassword;
}
