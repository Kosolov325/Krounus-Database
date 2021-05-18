import { encode } from 'mb-warband-parser';
import { PDOOR } from '../../models';
import { PDOOR_SAVED_LOADED } from '../actions';

export default async function(ctx) {
  
  await Pdoor.updateOne(
    { server: ctx.query.serverID, pdoorID: ctx.query.pdoorID },
	  { pdoorOW: ctx.query.pdoorOW }
  )

  ctx.body = encode([PDOOR_SAVED_LOADED]);
}
