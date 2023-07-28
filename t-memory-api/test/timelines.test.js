const timelineModel = require("../src/models/timelineModel");

describe("GET model test", () => {
  const timeline = new timelineModel({
    title: "timeline teste",
    description: "uma timeline criada para testes",
    archived: true,
  });

  it("Chama o Schema e retorna o nome certo da timeline", () => {
    expect(timeline.title).toBe("timeline teste");
  });

  it("Chama o Schema e retorna o nome certo da timeline", () => {
    expect(timeline.title).toBe("timeline teste");
  });

  it("Chama o Schema e retorna o valor certo da description", () => {
    expect(timeline.description).toBe("uma timeline criada para testes");
  });

  it("Chama o Schema e retorna o valor certo da description", () => {
    expect(timeline.description).toBe("uma timeline criada para testes");
  });
});

describe("UPDATE route test", () => {
  it("Deve editar o titulo e salvar no banco de dados a atualização", async () => {
    try {
      const timeline = new timelineModel({
        title: "timeline teste 2",
        description: "uma timeline criada para testes",
        archived: true,
      });

      const dados = await timeline.save();
      console.log("@@@ oi");
      expect(dados.title).toBe("nova timeline teste");

      timeline.title = "nova timeline teste";

      const novosDados = await timeline.save();
      expect(novosDados.title).toBe("nova timeline teste");
    } catch (error) {
      console.log(error)
    }
  });
});

describe("CREATE route teste", () => {
  it("Deve salvar no banco de dados a nova timeline", async () => {
    const timeline = new timelineModel({
      title: "timeline teste 3",
      description: "uma timeline criada para testes",
      archived: true,
    });

    const dados = await timeline.save();

    expect(dados.title).toBe("timeline teste");
  });

  describe("DELETE route teste", () => {
    it("Deve excluir uma timeline", async () => {
      const timeline = new timelineModel({
        title: "timeline teste 4",
        description: "uma timeline criada para testes",
        archived: true,
      });
      await timeline.save(); 
      const deletado = await timeline.delete(); 

      expect(deletado.title).toBe(null);
    });
  });
});