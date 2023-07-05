const timelines = require("../src/models/timelineModel")

describe("GET model test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });

it("Deve chamar o Schema e retornar o nome certo da timeline", () => {
expect(timeline.title).toBe("timeline teste")
});

it("Deve chamar o Schema e retornar o valor certo da description", () => {
expect(timeline.description).toBe("uma timeline criada para testes")

    it('Deve chamar schema e retornar o valor arquivado como verdadeiro', () => {
        expect(timeline.archived).toBe(true)
    })

describe('UPDATE route test', () => {
    it('Deve editar o titulo e salvar no banco de dados a atualização', () => {
        const timeline = new timelineModel({
            'title': 'timeline teste',
            'description': 'uma timeline criada para testes',
            'archived': true
        }) 
        timeline.title = 'nova timeline teste'
        timeline.save().then((dados) => {
            expect(dados.title).toBe('nova timeline teste')
        })
    })   
})

    })
describe("CREATE route teste", () => {
    it("Deve salvar no banco de dados a nova timeline", () => {
        const timeline = new timelineModel({
            "title": "timeline teste",
            "description": "uma timeline criada para testes",
            "archived": true
        });
        timeline.save().then((dados) => {
            expect(dados.title).toBe("timeline teste")
        })

describe("DELETE route teste", () => {
    it("Deve excluir uma timeline", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    timeline.save().then((dados) => {
        timeline.delete().then ((novosDados) => {
            expect(dados.title).toBe(null)
    })
   })
    
})
})
})
})
})
