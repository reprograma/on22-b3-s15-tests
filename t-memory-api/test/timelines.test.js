const timelineModel = require("../src/models/timelineModel")

describe("GET model test", () => {
    const timeline = new timelineModel({
        "title": "Timeline teste",
        "description": "Uma timeline criada para testes",
        "archived": true
    });
    it("Deve chamar o schema e retornar o título correto da timeline", () => {
        expect(timeline.title).toBe("Timeline teste")
    });
    it("Deve chamar o schema e retornar a descrição correta de timeline", () => {
        expect(timeline.description).toBe("Uma timeline criada para testes")
    });
    it("Deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
        expect(timeline.archived).toBe(true)
    })
})

describe("UPDATE route test", () => {
    it("Deve salvar no banco de dados a nova timeline", () => {

    const timeline = new timelineModel({
        "title": "Timeline teste",
        "description": "Uma timeline criada para testes",
        "archived": true
        });
    timeline.title = "Nova timeline teste"
    timeline.save().then((dados) => {
       expect(dados.title).toBe("Nova timeline teste") 
    })
})
})

describe("CREATE route test", () => {
    const timeline = new timelineModel({
        "title": "Timeline teste",
        "description": "Uma timeline criada para testes",
        "archived": true
        });
    it("Deve salvar no banco de dados a nova timeline", () => {
        timeline.save().then((dados) => {
            expect(dados.title).toBe("Timeline teste")
        })
    })
})

describe("Delete route test", () => {
    it("Deve exluir uma timeline", () => {
    const timeline = new timelineModel({
        "title": "Timeline teste",
         "description": "Uma timeline criada para testes",
         "archived": true
         });
         timeline.save().then((dados) => {
            dados.title = "Timeline teste"
            timeline.delete().then((novosDados) => {
                expect(dados.title).toBe(null)
            })
         })
    })
})