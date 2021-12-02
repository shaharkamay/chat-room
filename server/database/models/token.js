import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  jwt: String,
  userId: mongoose.Types.ObjectId,
});

TokenSchema.options.toJSON = {
  transform(_, ret) {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
    return ret;
  },
};

const Token = mongoose.model('Token', TokenSchema);
export default Token;