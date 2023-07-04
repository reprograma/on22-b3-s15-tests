const personModel = require('../src/models/personModel');
const bcrypt = require('bcrypt');

describe('GET model test', () => {
  const password = 'password123';
  const hashedPassword = bcrypt.hashSync(password, 10);

  const person = new personModel({
    nome: 'john tester',
    email: 'john@jest.com',
    senha: hashedPassword,
  });

  it('Should call the person schema and return the correct name', () => {
    expect(person.nome).toBe('john tester');
  });

  it('Should call the person schema and return the correct email', () => {
    expect(person.email).toBe('john@jest.com');
  });

  it('Should hash the password correctly', () => {
    expect(bcrypt.compareSync(password, person.senha)).toBe(
      true
    );
  });
});
