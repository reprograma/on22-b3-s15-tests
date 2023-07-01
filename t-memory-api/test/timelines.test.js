const timelineModel = require("../src/models/timelineModel");

describe("GET model test", () => {
  const timeline = new timelineModel({
    title: "timeline teste",
    description: "uma timeline criada para testes",
    archived: true,
  });
  it("Deve chamar o schema e retornar o nome correto da timeline", () => {
    expect(timeline.title).toBe("timeline teste");
  });
  it("Deve chamar o schema e retornar a descrição correta da timeline", () => {
    expect(timeline.description).toBe("uma timeline criada para testes");
  });
  it("Deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
    expect(timeline.archived).toBe(true);
  });
});

describe("CREATE route test", () => {
  const timeline = new timelineModel({
    title: "timeline teste",
    description: "uma timeline criada para testes",
    archived: true,
  });
  it("Deve salvar no banco de dados a nova timeline", () => {
    timeline.save().then((dados) => {
      expect(dados.title).toBe("timeline teste");
    });
  });
});

describe("UPDATE route test", () => {
  it("Deve editar o título e salvar no banco de dados a nova timeline", () => {
    const timeline = new timelineModel({
      title: "timeline teste",
      description: "uma timeline criada para testes",
      archived: true,
    });
    timeline.title = "Novo título teste";
    timeline.save().then((dados) => {
      expect(dados.title).toBe("Novo título teste");
    });
  });
});

describe("DELETE route test", () => {
  it("Deve excluir uma timeline", () => {
    const timeline = new timelineModel({
      title: "timeline teste",
      description: "uma timeline criada para testes",
      archived: true,
    });
    timeline.save().then((dados) => {
      timeline.delete().then((novosDados) => {
        expect(dados.title).toBe(null);
      });
    });
  });
});
