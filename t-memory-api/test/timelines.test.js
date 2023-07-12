const timelineModel = require("../src/models/timelineModel")

describe("GET model teste", () =>{
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    it("Deve chamar o schema e retornar o nome correto na timeline", () =>{
        expect(timeline.title).toBe("timeline teste")
    })
    it("Deve chamar o schema e retornar a descrição correta na timeline", () =>{
        expect(timeline.description).toBe("uma timeline criada para testes")
    })
    it("Deve chamar o schema e retornar o valor arquivado", () =>{
        expect(timeline.archived).toBe(true)
    })
})

describe("UPDATE route test", () =>{
    it("Deve editar o título e salvar no banco de dados a atualização", () =>{
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        })
        timeline.title = "nova timeline teste"
        timeline.save().then((dados) =>{
            expect(dados.title).toBe("nova timeline teste")
        })
    })
})
describe("CREATE route test", () =>{
    it("Deve salvar a nova timeline no banco de dados", () =>{
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
            })
            timeline.save().then((dados)=>{
                expect(dados.title).toBe("timeline teste")
            })
      })
})

describe("DELETE route test", () =>{
    it("Deve deletar a timeline do banco de dados", () =>{
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        })
        timeline.save().then((dados) =>{
        timeline.delete().then((novosDados) =>{
            expect(dados.title).toBe(null)
            })
        })
    })
})