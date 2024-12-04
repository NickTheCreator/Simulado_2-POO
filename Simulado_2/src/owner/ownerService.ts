import { IOwner } from "./IOwner";
import { Owner } from "./Owner";

//url
const url = "https://775yjf-3000.csb.app";

export async function registerOwner(owner: Owner) {
  await fetch(url + "/owners", {
    method: "POST",
    body: JSON.stringify(owner),
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function listOwner() {
  const response = await fetch(url + "/owners");
  const owner: IOwner[] = await response.json();

  return owner;
}
