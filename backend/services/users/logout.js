const { User } = require('../../models');
const { NotAuthorizedError } = require('../../helpers');

const userLogout = async ({ _id }, token) => {
  const user = await User.findOne({ _id });
  if (!user) {
    throw new NotAuthorizedError(`User with id : '${_id}' not found`);
  }
  await User.findByIdAndUpdate(_id, { shortToken: null });
};

module.exports = userLogout;