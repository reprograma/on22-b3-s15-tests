const memoryModel = require("../src/models/memoryModel")

describe("GET model test", () => {
    const memory = new memoryModel({
        "title": "memoria teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memoria implantada para testes",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    it("deve chamar o schema e retornar o nome correto da memoria", () => {
        expect(memory.title).toBe("memoria teste");
    });
    it("deve chamar o schema e retorna a data correta da memoria", () => {
        expect(JSON.stringify(memory.date).substring(1, (JSON.stringify(memory.date)).length - 1)).toBe("2022-07-01T17:42:09.375Z")
    });
    it("deve chamar o schema e retorna a descrição correta da memoria", () => {
        expect(memory.description).toBe("uma memoria implantada para testes");
    });
    it("deve chamar o schema e retorna a categoria correta da memoria", () => {
        expect(memory.category).toStrictEqual(["testes"]);
    });
    it("deve chamar o schema e retorna a URL da imagem correta da memoria", () => {
        expect(memory.imgURL).toBe("https://www.imagem.com");
    });
    it("deve chamar o schema e retornar o id de timeline correto da memória", () => {
        expect(JSON.stringify(memory.timelineID).substring(1, ((JSON.stringify(memory.timelineID)).length - 1))).toBe("62bf30a95bd3be0daadb34f3")
    });
    it("deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
        expect(memory.archived).toBe(true);
    });
}
)

describe("GET route test", () => {
    const memory = new memoryModel({
        "title": "memoria teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memoria implantada para testes",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    it("deve salvar no banco de dados a nova memoria", () => {
        memory.save().then((dados) => {
            expect(dados.title).toBe("memoria teste");
        })
    });
})
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
    it("Deve excluir a memória", () => {

    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375Z",
        "description": "uma memória implantada para testes",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true
    });
    memory.save().then((dados) => {
        
        memory.delete().then((novosDados) => {
            expect(dados.title).toBe(null);
        })
})
})
})