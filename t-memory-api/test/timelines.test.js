const timelineModel = require("../src/models/timelineModel");

describe("GET model test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    it("Deve chamar o schema e retornar o nome correto da timeline", () => {
        expect(timeline.title).toBe("timeline teste")
    });
    it("Deve chamar o schema e retornar o valor correto de description na memória", () => {
        expect(timeline.description).toBe("uma timeline criada para testes")
    });
    it("Deve chamar a schema e retornar o valor arquivado", () => {
        expect(timeline.archived).toBe(true)
    })
})

describe("UPDATE route test", () => {
    it("Deve editar o título e salvar no banco de dados a nova atualização", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        });
        timeline.title = "nova timeline teste"
        timeline.save().then((titulos) => {
            expect(titulos.title).toBe("nova timeline teste")
        })
    })
})

describe("CREATE route test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });

    it("Deve salvar no banco de dados a nova timeline", () => {
        timeline.save().then((dados) => {
            expect(dados.title).toBe("timeline teste")
        })
    })
})

describe("DELETE route test", () => {
    it("Precisa excluir  alguma timeline", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        });
        timeline.save().then((dados) => {
            timeline.delete().then((novosDados) => {
                expect(dados.title).toBe(null);
            })
        })
    })
})