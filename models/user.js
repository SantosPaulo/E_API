const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcryptjs = require('bcryptjs');
 
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String, required: false, default: null },
  gravatar: { type: String, required: false, default: null },
  created_at: { type: Date, required: true, default: Date.now() },
  updated_at: { type: Date, required: false },
  deleted_at: { type: Date, required: false }
}, { versionKey: false });

UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

UserSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcryptjs.compare(password, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = mongoose.model('User', UserSchema);
