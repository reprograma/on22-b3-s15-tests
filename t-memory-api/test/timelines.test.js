const timeLines = require("../src/models/timelineModel");

describe("GET model teste", () => {
    const timeLine = new timeLineModel({
        "title": "timeLine teste",
        "description": "uma timeLine criada para testes",
        "archived": true
    })
    it("Deve chamar a schema e retornar o nome correto da timeline", () => {
        expect(timeLine.title).toBe("timeLine teste")
    });
    it("Deve chamar o schema e retornar o valor correto de description", () => {
        expect(timeLine.description).toBe("uma timeLine criada para testes");
    });
    it("Deve chamar o schema e retornar como verdadeiro", () => {
        expect(timeLine.archived).toBe(true);
    });
});

describe("UPDATE route test", () => {
  it("Deve editar o titulo e salvar no banco de dados a atualização", () => {
    const timeLine = new timeLineModel({
        "title": "timeLine teste",
        "description": "uma timeLine criada para testes",
        "archived": true
    })
    timeLine.title = "nova timeLine teste"
    timeLine.save().then((dados) => {
        expect(dados.title).toBe("nova timeLine teste")
    });
  });
});

describe("CREATE route test", () => {
    it("Deve salvar a nova timeline no bancod e dados", () => {
        const timeLine = new timeLineModel({
            "title": "timeLine teste",
            "description": "uma timeLine criada para testes",
            "archived": true
        })
        timeLine.save().then((dados) => {
            expect(dados.title).toBe("timeline teste");
        });
    });
});

describe("DELETE route test", () => {
    it("Deve excluir a timeline", () => {
        const timeLine = new timeLineModel({
            "title": "timeLine teste",
            "description": "uma timeLine criada para testes",
            "archived": true
        })
        timeLine.save().then((dados) => {
            timeLine.delete().then((novosDados) => {
                expect(dados.title).toBe(null)
            });
        });
    });
})