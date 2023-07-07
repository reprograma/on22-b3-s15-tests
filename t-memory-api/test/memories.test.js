const memoryModel = require("../src/models/memoryModel")

describe("GET model test",() =>{
    const memory = new memoryModel({
        "title":"Memoria teste",
        "date":"2022-07-01T17:42:09.375Z",
        "description":"uma memoria implantada para teste",
        "category":"testes",
        "imgURL":"https://www.imagem.com",
        "timeLineID":"62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    //espero que o titulo da constante memoria seja Memoria teste
    it("Deve chamar o schema e retornar o nome correto da memória",()=>{
        expect(memory.title).toBe("Memoria teste")
    });
    it("Deve chamar o schema e a data correta da memória", () => {
        expect(JSON.stringify(memory.date).substring(1,(JSON.stringify(memory.date)).length - 1)).toBe("2022-07-01T17:42:09.375Z")
    });
    it("Deve chamar o schema e retornar a descrição correta da memória",()=>{
        expect(memory.description).toBe("uma memoria implantada para teste")
    });
    //para checar um array de dados
    it("Deve chamar o schema e retornar a categoria correta da memória",()=>{
        expect(memory.category).toStricEqual(["testes"])
    });
    it("Deve chamar a schema e retornar a URL da imagem correta da memória",()=>{
        expect(memory.imgURL).toBe("https://www.imagem.com")
    });
    it("Deve chamar o schema e retornar o valor arquivado como true",()=>{
        expect(memory.archived).toBe(true)
    });
})

describe("CREATE route test",()=>{
    const memory = new memoryModel({
        "title":"Memoria teste",
        "date":"2022-07-01T17:42:09.375Z",
        "description":"uma memoria implantada para teste",
        "category":"testes",
        "imgURL":"https://www.imagem.com",
        "timeLineID":"62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    it("Deve salvar no banco de dados a nova memoria",()=>{
        memory.save().then((dados)=>{
            expect(dados.title).toBe("Memoria teste")
        })
    })
})
//nao entendi esse
describe("UPDATE route test", () => {
    it("Deve editar o título e salvar no banco de dados a nova memória", () => {

    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memória implantada para testes",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    memory.title = "nova memória teste"
    memory.save().then((dados) => {
        expect(dados.title).toBe("nova memória teste")
    })
})
})
describe("DELETE route test", () => {
    it("Deve excluir uma memória", () => {
        const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375Z",
            "description": "uma memória implantada para testes",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true
    })
    memory.save().then((dados) => {
        memory.delete().then((novosDados) => {
         expect(dados.title).toBe(null);
        })
    })
})
})