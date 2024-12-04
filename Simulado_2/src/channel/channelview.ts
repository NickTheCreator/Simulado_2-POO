//Arquivos importados
import { Channel } from "./Channel";
import { registerChannel, listChannel } from "./channelService";

//Criação input
const iptName = document.getElementById("iptName") as HTMLInputElement;

//Criação botoẽs
const btnRegister = document.getElementById("btnRegister");
const btnList = document.getElementById("btnList");

//Criação tabela
const tblChannel = document.getElementById("tblChannel") as HTMLTableElement;

//Criação funções
function register() {
  try {
    const channel = new Channel(iptName.value);
    registerChannel(channel);

    alert("Canal cadastrado com sucesso");
  } catch (error) {
    alert(error);
  }
}
list();
async function list() {
  tblChannel.innerHTML = "";
  for (let channel of await listChannel()) {
    tblChannel.innerHTML += `
    <tr>
        <td>${channel.name}</td>
    </tr>
    `;
  }
  //tblChannel!.innerHTML = table;
}

//Criação event listener
btnRegister?.addEventListener("click", register);
btnList?.addEventListener("click", list);
