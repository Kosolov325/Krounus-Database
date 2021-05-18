import { encode } from 'mb-warband-parser';
import { Ibank } from '../../models';
import { IBANK_SAVED_LOADED } from '../actions';

export default async function(ctx) {
  
  await Ibank.updateOne(
    { server: ctx.query.serverID, ibankid: ctx.query.ibankid },
	  { ibankIT: ctx.query.ibankit }
  )

  ctx.body = encode([IBANK_SAVED_LOADED]);
}
