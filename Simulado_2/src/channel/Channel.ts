export class Channel {
  name?: string;

  constructor(name: string) {
    if (!name) {
      throw new Error("O campo não pode ser nulo");
    }
    this.name = name;
  }
}
