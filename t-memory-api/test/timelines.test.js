const timelineModel = require("../src/models/timelineModel")

describe("GET model test", () => {
    const timeline = new timelineModel({
        "title": "timeline teste",
        "description": "uma timeline criada para testes",
        "archived": true
    });
    it("Chamar o Schema e retornar o nome correto da timeline", () => {
        expect(timeline.title).toBe("timeline teste")
    })
    it("Deve chamar o Schema e verificar a descrição correta", () => {
        expect(timeline.description).toBe("uma timeline criada para testes")
    })
})



describe ("UPTADE route test", () => {
    it ("Deve editar o título e salvar no bando de dados a atualização", () => {
        const timeline = new timelineModel({
            'title': 'timeline teste',
            'description': 'uma timeline criada para testes',
            'archived': true
    })
    timeline.title = "nova timeline teste"
    timeline.save().then((dados) => {
        expect(dados.title).toBe("nova timeline teste")
    })
})

})
describe ("CREAT route test",() => {
    it ("Deve salvar no banco de dados a nova timeline", () => {
        const timeline = new timelineModel({
            'title': 'timeline teste',
            'description': 'uma timeline criada para testes',
            'archived': true
    })
    timeline.save().then((dados) => {
        expect(dados.title).toBe("timeline teste")
    })
    
})

})
describe ("DELETE route test", () =>{
    it ("Deve excluir uma timeline", () =>{
        const timeline = new timelineModel({
            'title': 'timeline teste',
            'description': 'uma timeline criada para testes',
            'archived': true 
    })
    timeline.save().then((dados) =>{
        timeline.delete().then(() =>{
            expect(dados.title).toBe(null)
        })    
    })
})})