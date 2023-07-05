const timelineModel = require("../src/models/timelineModel");

describe("GET model teste", () => {
  const timeline = new timelineModel({
    "title": "timeline teste",
    "description": "uma timeline criada para testes",
    "archived": true
  }); 

  it("Deve chamar o schema e retornar o nome correto da timeline", ()=> {
    expect(timeline.title).toBe("timeline teste");
  });

  it("Deve chamar o schema e retornar a descrição correta da timeline", () => {
    expect(timeline.description).toBe("uma timeline criada para testes");
  });

  it("Deve chamar o schema e retornar o valor arquivado", () => {
    expect(timeline.archived).toBe(true);
  });
});

describe("UPDATE model teste", () => {
  const timeline = new timelineModel({
    "title": "timeline teste",
    "description": "uma timeline criada para testes",
    "archived": true
  }); 

  it("Deve editar o título e salvar no banco de dados a nova timeline", ()=> {
    timeline.title = "Nova timeline";
    timeline.save().then((dados) => {
      expect(dados.title).toBe("Nova timeline");
    });
  });
});

describe("CREATE route teste", () => {
  const timeline = new timelineModel({
    "title": "timeline teste",
    "description": "uma timeline criada para testes",
    "archived": true
  }); 

  it("Deve salvar no banco de dados, a nova timeline", ()=> {
    timeline.save().then((dados) => {
      expect(dados.title).toBe("Nova timeline");
    });
  });
});

describe("DELETE route teste", () => {
  const timeline = new timelineModel({
    "title": "timeline teste",
    "description": "uma timeline criada para testes",
    "archived": true
  }); 

  it("Deve deletar no banco de dados, uma timeline", ()=> {
    timeline.save().then((dados) => {
      expect(dados.title).toBe("Nova timeline");
    });
  });
});