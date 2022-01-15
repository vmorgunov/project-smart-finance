
const { User } = require('../../models');
const { RegistrationConflictError } = require('../../helpers');

const registrationUser = async ({ email, password }) => {
  const findUserByEmail = await User.findOne({ email })
  if (findUserByEmail) {
    throw new RegistrationConflictError('Email in use')
  }

  const user = new User({ email, password })
  await user.save()

  const newUser = {
    email: user.email,
  }

  return newUser
};

module.exports = registrationUser;