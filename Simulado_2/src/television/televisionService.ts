import { ITelevision } from "./ITelevision";
import { Television } from "./Television";

//url
const url = "https://775yjf-3000.csb.app";

export async function registerTelevision(television: Television) {
  await fetch(url + "/televisions", {
    method: "POST",
    body: JSON.stringify(television),
    headers: {
      "content-type": "application/json",
    },
  });
}

export async function listTelevision() {
  const response = await fetch(url + "/televisions");
  const television: ITelevision[] = await response.json();

  return television;
}
