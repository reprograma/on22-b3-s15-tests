const personModel = require('../src/models/personModel');

describe('GET model test', () => {
  const originalPassword = 'password123';
  const hashedPassword = bcrypt.hashSync(originalPassword, 10);

  const person = new personModel({
    nome: 'john tester',
    email: 'john@jest.com',
    senha: originalPassword,
  });

  it('Should call the person schema and return the correct name', () => {
    expect(person.nome).toBe('john tester');
  });

  it('Should call the person schema and return the correct email', () => {
    expect(person.email).toBe('john tester');
  });

  it('Should hash the password correctly', () => {
    expect(bcrypt.compareSync(hashedPassword, person.senha)).toBe(
      true
    );
  });
});
