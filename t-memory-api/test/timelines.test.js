const timelineModel = require("../src/models/timelineModel")

describe("GET model test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    it("deve chamar schema e retornar o valor correto de timeline", () => {
        expect(timeline.title).toBe("timeline teste")
    });
    it("deve chamar schema e retornar o valor correto de description", () => {
        expect(timeline.description).toBe("uma timeline criada para testes")
    });
    it("Deve chamar schema e retornar o valor arquivado como verdadeiro", () => {
        expect(timeline.archived).toBe(true)
    });

})

describe("UPDATE router test", () => {
    it("edite o titulo e salve a atualização no banco de dados", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true

        });
        timeline.title = "nova timeline teste"
        timeline.save().then((dados) => {
            expect(dados.title).toBe("nova timeline teste")
        })
    })
})
describe("CREATE route test", () => {
    it("deve salvar a nova timeline no banco de dados", () =>{
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        })
        timeline.save().then((dados) =>{
            expect(dados.title).toBe("timeline teste")
        })
    })
    
})
describe("DELETE route test", () => {
    it("deve escluir a timeline", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        })
        timeline.save().then((dados) =>{
            timeline.delete().then((novosDados)=>{
                expect(dados.title).toBe(null)
            })
        })
    })

})









