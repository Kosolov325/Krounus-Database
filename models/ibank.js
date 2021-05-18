import mongoose from 'mongoose';

const IbankSchema = new mongoose.Schema({
  server: { type: Number, require: true },
  ibankid: { type: Number, require: true },
  ibankIT: { type: String }
});

export default mongoose.model('Ibank', IbankSchema);
