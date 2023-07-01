const { INT24 } = require('mysql/lib/protocol/constants/types')
const timelineModel = require('../src/models/timelineModel')

describe('GET model test', ()=>{
    const timeline = new timelineModel({
    "title": "teste timeline model",
    "description": "teste description",
    "archived": true
    })

    it("Deve chamar a schema e devolver o title correto da timeline", ()=>{
        expect(timeline.title).toBe("teste timeline model")
    })
    it("Deve chamar o schema e devolver a description da timeline", ()=>{
        expect(timeline.description).toBe("teste description")
    })
    it("Deve chamar o schema e devolver o archived da memória", ()=>{
        expect(timeline.archived).toBe(true)
    }) 
})


describe('CREATE route test', ()=>{
    const timeline = new timelineModel({
    "title": "nova teste tinmeline model",
    "description": "novo teste description",
    "archived": false
    })

    it("Deve salvar no banco de dados a nova timeline", ()=>{
        timeline.save().then((dados)=>{
            expect(timeline.title).toBe("nova teste timeline model")
        })
    })
})


describe('UPDATE route test', ()=>{
    it("Deve salvar no banco de dados a nova timeline", ()=>{
    const timeline = new timelineModel({
    "title": "teste timeline model",
    "description": "teste description",
    "archived": true
    })
    timeline.description = "nova nova descrição"
    timeline.save().then((dados)=>{
        expect(dados.description).toBe("nova nova descrição")
        expect(dados.archived).toBe(true)
    })
})})


describe('DELETE route test', ()=>{
    it("Deve deletar a timeline", ()=>{
    const timeline = new timelineModel({
    "title": "teste timeline model",
    "description": "teste description",
    "archived": true
    })
    timeline.save().then((dados)=>{
        timeline.delete().then(()=>{
            expect(dados.title).toBe(null)
        })
    })
    
})})