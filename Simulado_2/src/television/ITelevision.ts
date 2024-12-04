import { Channel } from "../channel/Channel";
import { Owner } from "../owner/Owner";

export interface ITelevision {
  id: number;
  model: string;
  brand: string;
  owner: Owner;
  channels: Channel;
}
