const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../../models');
const { NotAuthorizedError } = require('../../helpers');

const userLogin = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new NotAuthorizedError(`Email: '${email}' not found`);
  }
  if (!await bcrypt.compare(password, user.password)) {
    throw new NotAuthorizedError('Password is wrong');
  }

  const tokenShort = jwt.sign({ _id: user._id }, process.env.ACCES_TOKEN_SECRET, { expiresIn: '1h' });
  await User.findByIdAndUpdate(user._id, { tokenShort });
  return {
    tokenShort,
    user: {
      email: user.email,
      balance: user.balance,
    },
  };
};

module.exports = userLogin;
