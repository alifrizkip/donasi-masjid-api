const successMsg = {
  create: 'User created successfully',
  update: 'User updated successfully',
  delete: 'User deleted successfully',
};

const errMsg = {
  user_not_found: 'User not found',
  incorrect_password: 'Incorrect password',
  email_registered: 'Email already registered',
  file_not_allowed: 'File type is not allowed',
  image_required: 'Image is required',
};

const message = { successMsg, errMsg };

export { successMsg, errMsg };
export default message;
