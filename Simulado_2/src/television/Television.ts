import { Channel } from "../channel/Channel";
import { Owner } from "../owner/Owner";

export class Television {
  private model?: string;
  brand?: string;
  private owner: Owner;
  channels?: Channel;

  constructor(model: string, owner: Owner) {
    if (model.length < 2) {
      throw new Error("O modelo não pode conter menos do que 3 letras");
    }

    if (!owner) {
      throw new Error("Indique pelo menos um dono");
    }

    this.owner = owner;
    this.model = model;
  }

  getOwner() {
    return this.owner;
  }

  getModel() {
    return this.model;
  }

  setOwner(owner: Owner) {
    if (!owner) {
      throw new Error("Indique pelo menos um dono");
    }
    this.owner = owner;
  }

  setModel(model: string) {
    if (model.length < 2) {
      throw new Error("O modelo não pode conter menos do que 3 letras");
    }
    this.model = model;
  }
}
