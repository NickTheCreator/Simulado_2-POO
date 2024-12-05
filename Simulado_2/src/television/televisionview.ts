import { listChannel } from "../channel/channelService";
import { listOwner } from "../owner/ownerService";
import { Owner } from "../owner/Owner";
import { Television } from "./Television";
import { Channel } from "../channel/Channel";
import { listTelevision, registerTelevision } from "./televisionService";

//input
const iptModel = document.getElementById("iptModel") as HTMLInputElement;
const iptBrand = document.getElementById("iptBrand") as HTMLInputElement;

//Select
const selectOwner = document.getElementById("selectOwner") as HTMLSelectElement;
const selectChannel = document.getElementById(
  "selectChannel"
) as HTMLSelectElement;

//Botoẽs
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//tabela
const tblTelevision = document.getElementById(
  "tblTelevision"
) as HTMLTableElement;


//Funções
renderOwners();
renderChannels();

async function renderOwners() {
  selectOwner.innerHTML = "";
  for (let owner of await listOwner()) {
    selectOwner.innerHTML += `
      <option value=${owner}>
        ${owner.name}
      </option>
    `;
  }
}

async function renderChannels() {
  selectChannel.innerHTML = "";
  for (let channel of await listChannel()) {
    selectChannel.innerHTML += `
      <option value=${channel}>
        ${channel.name}
      </option>
    `;
  }
}

function register() {
  try {
    //Select do owner
    const ownerName = selectOwner.options[selectOwner.selectedIndex].text;
    const owner = new Owner(ownerName);

    //Select dos canais
    const channelName = selectChannel.options[selectChannel.selectedIndex].text;
    const channel = new Channel(channelName);

    //Registrar
    const television = new Television(iptModel.value, owner);
    television.channels = channel;
    registerTelevision(television);

    alert("Televisor salvo com sucesso");
  } catch (err) {
    alert(err);
  }
}

async function list() {
  tblTelevision.innerHTML = "";
  for (let television of await listTelevision()) {
    tblTelevision.innerHTML += `
<tr>
    <td>${television.model}</td>
    <td>${television.brand}</td>
    <td>${television.owner.name}</td>
    <td>${television.channels.name}</td>
</tr>`;
  }
}

//Evento
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
