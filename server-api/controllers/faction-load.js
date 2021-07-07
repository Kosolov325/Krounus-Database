import { encode } from 'mb-warband-parser';
import {
  Faction
} from '../../models';

import {
  FACTION_LOAD
} from '../actions';

export default async ctx => {
  
    let faction = await Faction.findOne({
      server: ctx.query.serverID,
      factionid: ctx.query.factionid
    });

    if (faction === null) {
      faction = new Faction({
        server: ctx.query.serverID,
        factionid: ctx.query.factionid,
	name: "default",
	mesh: 0,
        saved: 0
      });
      await faction.save();	    
    }

      ctx.body =
        encode([
          FACTION_LOAD,
	  ctx.query.factionid,
	  faction.name,
          faction.mesh,
	  faction.saved
        ]);
}
