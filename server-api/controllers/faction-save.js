import { encode } from 'mb-warband-parser';
import { Faction } from '../../models';
import { FACTION_SAVED_LOADED } from '../actions';

export default async function(ctx) {
 
 let update = {
    name: ctx.query.Name,
    mesh: ctx.query.Mesh,
    saved: ctx.query.Saved
  };

  await Faction.updateOne(
    { server: ctx.query.serverID, factionid: ctx.query.factionID },
	  update
  );

  ctx.body = encode([FACTION_SAVED_LOADED]);
}
