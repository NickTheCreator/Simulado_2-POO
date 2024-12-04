Enunciado a seguir:

Usando os conceitos da programação orientada a objetos apresentados em aula (Encapsulamento, Abstração, Polimorfismo e Associação), desenvolva um software web de Gestão de Eletrônicos.

- É necessário cadastrar e listar (use servidor de objetos JSON): Televisão,canais e dono.

- Televisão possui os atributos/propriedades: modelo (string, obrigatório, não pode ser menor que 3 caracteres), marca (tipo string), dono (tipo Dono, obrigatório), também possui a propriedade canais (tipo vários Canais e não obrigatório).
-   *Na listagem de televisão não é necessário apresentar a propriedade canais.

- Canais possui a propriedade: nome (tipo string, obrigatório)

- Dono possui as propriedades: nome (tipo string, obrigatório) e também possui a propriedade fone que é composto pelo ddd (2 números) e pelo número (4 números).
    *Não é obrigatório realizar validação do fone.
