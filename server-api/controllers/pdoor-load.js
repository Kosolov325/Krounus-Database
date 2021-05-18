import { encode } from 'mb-warband-parser';
import {
  Pdoor
} from '../../models';

import {
  PDOOR_LOAD
} from '../actions';

export default async ctx => {
  
    let pdoor = await Pdoor.findOne({
      server: ctx.query.serverID,
      pdoorID: ctx.query.pdoorID
    });

    if (pdoor === null) {
      pdoor = new Pdoor({
        server: ctx.query.serverID,
        pdoorID: ctx.query.pdoorID,
	pdoorOW: 0
      });
      await pdoor.save();	    
    }

      ctx.body =
        encode([
          PDOOR_LOAD,
	  ctx.query.instanceid,
          pdoor.pdoorOW
        ]);
}
