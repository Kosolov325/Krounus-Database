import mongoose from 'mongoose';

const FactionSchema = new mongoose.Schema({
  server: { type: Number, require: true },
  factionid: { type: Number, require: true },
  name: { type: String },
  mesh: { type: Number },
  saved: { type: Number }
});

export default mongoose.model('Faction', FactionSchema);
