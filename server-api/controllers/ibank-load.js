import { encode } from 'mb-warband-parser';
import {
  Ibank
} from '../../models';

import {
  IBANK_LOAD
} from '../actions';

export default async ctx => {
  
    let ibank = await Ibank.findOne({
      server: ctx.query.serverID,
      ibankid: ctx.query.ibankid
    });

    if (ibank === null) {
      ibank = new Ibank({
        server: ctx.query.serverID,
        ibankid: ctx.query.ibankid,
	ibankIT: '0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0A0'
      });
      await ibank.save();	    
    }

      ctx.body =
        encode([
          IBANK_LOAD,
          ibank.ibankid,
	  ctx.query.instanceid,
          ibank.ibankIT
        ]);
}
