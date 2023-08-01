const memoryModel = require("../src/models/memoryModel");

//criamos uma describe/schema falsa para testar a API
describe("GET model test", () => {      
    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375",
        "description": "uma memória implantada para testar",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true,
    });
    it("deve chamar o schema e retornar o nome correto da memória", () => {
        expect(memory.title).toBe("memória teste");
    });
    it("Deve chamar o schema e retornar a data correta da memória", () => {
        expect(JSON.stringify(memory.date).substring(1, (JSON.stringify(memory.date)).length - 1)).toBe("2022-07-01T20:42:09.375Z");
    });
    it("Deve chamar o schema e retornar a descrição correta da memória", () => {
        expect(memory.description).toBe("uma memória implantada para testar");
    });
    it("Deve chamar o schema e retornar a categoria correta da memória", () => {
        expect(memory.category).toStrictEqual(["testes"]);
    });
    it("Deve chamar o schema e retornar a url da imagem correta da memória", () => {
        expect(memory.imgURL).toBe("https://www.imagem.com");
    });
    it("Deve chamar o schema e retornar o ID de timeline correta da memória", () => {
        expect(JSON.stringify(memory.timelineID).substring(1, (JSON.stringify(memory.timelineID)).length - 1)).toBe("62bf30a95bd3be0daadb34f3");
    });
    it("Deve chamar o schema e retornar o valor arquivado como verdadeiro", () => {
        expect(memory.archived).toBe(true);
    });
    },
);

describe("CREAT route test", () => {
    const memory = new memoryModel({
        "title": "memória teste",
        "date": "2022-07-01T17:42:09.375",
        "description": "uma memória implantada para testar",
        "category": "testes",
        "imgURL": "https://www.imagem.com",
        "timelineID": "62bf30a95bd3be0daadb34f3",
        "archived": true,
    });
    it("Deve salvar no banco de dados a nova memória", () => {
        memory.save().then((dados) => {
            expect(dados.title).toBe("memória teste")
        });
    });
});

describe("UPDATE route test", () => {
    it("Deve editar e salvar no banco de dados a nova memória", () => {
    
        const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375",
            "description": "uma memória implantada para testar",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true,
        });
        memory.title = "nova memória teste"
        memory.save().then((dados) => {
            expect(dados.title).toBe("nova memória teste");
        });
    }); 
});

describe("DELETE route test", () => {
    it("Deve excluir uma memória", () => {
        const memory = new memoryModel({
            "title": "memória teste",
            "date": "2022-07-01T17:42:09.375",
            "description": "uma memória implantada para testar",
            "category": "testes",
            "imgURL": "https://www.imagem.com",
            "timelineID": "62bf30a95bd3be0daadb34f3",
            "archived": true,
        })
        memory.save().then((dados) => {
            memory.delete().then((novosDados) => {
                expect(dados.title).toBe(null);
            })
        });
        
    });
});