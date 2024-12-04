import { Channel } from "./Channel";
import { IChannel } from "./IChannel";

const url = "https://775yjf-3000.csb.app";

export async function registerChannel(channel: Channel) {
  const response = await fetch(url + "/channels", {
    method: "POST",
    body: JSON.stringify(channel),
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function listChannel() {
  const response = await fetch(url + "/channels");
  const channels: IChannel[] = await response.json();

  return channels;
}
