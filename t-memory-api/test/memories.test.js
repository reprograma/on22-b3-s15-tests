const memoryModel = require("../src/models/memoryModel");

describe('GET model test', () => {
  const memory = new memoryModel({
    "title": "memória teste",
    "date": "2022-07-01T17:42:09.375Z",
    "description": "Uma memória implanta os testes",
    "category": "testes",
    "imgURL": "https://www.imagem.com",
    "timelineID": "62bf30a95bd3be0daadb34f3",
    "archived": true
  });

  it("Deve chamar schema e retornar o nome correto da memória", ( )=> {
    expect(memory.title).toBe("memória teste");
  });

  it("Deve chamar schema e retornar a data correta da memória", ( )=> {
    expect(JSON.stringify(memory.date).toBe("2022-07-01T17:42:09.375Z"));
  });

  it("Deve chamar schema e retornar a descrição correta da memória", ( )=> {
    expect(memory.description).toBe("Uma memória implanta os testes");
  });

  it("Deve chamar o schema e retornar a categoria correta da memória", ( )=> {
    expect(memory.category).toStrictEqual(["testes"]);
  });

  it("Deve chamar o schema e retornar a url da imagem correta da memória", ( )=> {
    expect(memory.imgURL).toStrictEqual("https://www.imagem.com");
  });

  it("Deve chamar o schema e retornar o id de timelina correto da memória", ( )=> {
    expect(JSON.stringify(memory.timelineID).substring(1, JSON.stringify(memory.timelineID).length -1));
  });

  it("Deve chamar o schema e retornar o valor arquivado verdadeiro", ( )=> {
    expect(memory.archived).toStrictEqual(true);
  });
});

describe("CREATE route test", () => {
  const memory = new memoryModel({
    "title": "memória teste",
    "date": "2022-07-01T17:42:09.375Z",
    "description": "Uma memória implanta os testes",
    "category": "testes",
    "imgURL": "https://www.imagem.com",
    "timelineID": "62bf30a95bd3be0daadb34f3",
    "archived": true
  });

  it("Deve salvar no banco de dados, a nova memória", ()  => {
    memory.save().then((dados) => {
      expect(dados.title).toBe("memória teste");
    });
  });
});

describe("UPDATE route test", () => {
  const memory = new memoryModel({
    "title": "memória teste",
    "date": "2022-07-01T17:42:09.375Z",
    "description": "Uma memória implanta os testes",
    "category": "testes",
    "imgURL": "https://www.imagem.com",
    "timelineID": "62bf30a95bd3be0daadb34f3",
    "archived": true
  });

  it("Deve editar o título e salvar no banco de dados", ()  => {
    memory.title = "nova memória teste";
    memory.save().then((dados) => {
      expect(dados.title).toBe("memória teste");
    });
  });
});

describe("DELETE route test", () => {
  const memory = new memoryModel({
    "title": "memória teste",
    "date": "2022-07-01T17:42:09.375Z",
    "description": "Uma memória implanta os testes",
    "category": "testes",
    "imgURL": "https://www.imagem.com",
    "timelineID": "62bf30a95bd3be0daadb34f3",
    "archived": true
  });

  it("Deve deletar o título e salvar no banco de dados", ()  => {
    memory.save().then((dados) => {
      memory.delete().then((novosDados) => {
        expect(dados.title).toBe(null);
      });
    });
  });
});