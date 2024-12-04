export class Owner {
  id?: number;
  name: string;
  private phone?: string;

  constructor(name: string) {
    if (!name) {
      throw new Error("O campo não pode ser nulo");
    }
    this.name = name;
  }

  getPhone() {
    return this.phone;
  }
  setPhone(phone: string) {
    if (phone.length < 6) {
      throw new Error("O numero de telefone deve possuir ao menos 6 digitos");
    }
    this.phone = phone;
  }
}
