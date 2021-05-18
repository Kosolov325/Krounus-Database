import mongoose from 'mongoose';

const PdoorSchema = new mongoose.Schema({
  server: { type: Number, require: true },
  pdoorID: { type: Number, require: true },
  pdoorOW: { type: Number }
});

export default mongoose.model('Pdoor', PdoorSchema);
