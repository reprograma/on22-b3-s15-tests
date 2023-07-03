const timelineModel = require('../src/models/timelineModel')

describe('READ route test', () => {
    const timeline = new timelineModel({
        title: "another timeline",
        description: "É um isekai interessante",
        ID: "62bf30a95bd3be0daadb34f3"
    })
    it('Get timelines title and return it', () => {
        expect(timeline.title).toBe("another timeline")
    })
    it('Get timelines description and return it', () => {
        expect(timeline.description).toBe("É um isekai interessante")
    })

})

describe('READ one route', () => {
    const timeline = new timelineModel({
        title: "another timeline",
        description: "É um isekai interessante",
        _id: "62bf30a95bd3be0daadb34f3"
    })
    it('Get timeline by ID and return it', () => {
        expect(JSON.stringify(timeline._id).substring(1, (JSON.stringify(timeline._id)).length - 1)).toBe("62bf30a95bd3be0daadb34f3")
    })


})

describe('CREATE route', () => {
    it('Create a new timeline and return confirmation and timeline', () => {
        const timeline = new timelineModel({
            title: "another timeline",
            description: "É um isekai interessante",
            ID: "62bf30a95bd3be0daadb34f3"
        })
        timeline.save().then((tl) => {expect(tl.description).toBe("É um isekai interessante")})
    })
})

describe('UPDATE timeline', () => {
    it('Update a existing timeline title and return it', () => {
        const timeline = new timelineModel({
            title: "another timeline",
            description: "É um isekai interessante",
            _id: "62bf30a95bd3be0daadb34f3"
        })
        timeline.title = "teste"
        timeline.save().then((tl) => {
            expect(tl.title).toBe("teste")
        })
    })
})

describe('Delete a timeline and return the deleted', () => {
    it('Deve deletar uma timeline', () => {
        const timeline = new timelineModel({
            title: "another timeline",
            description: "É um isekai interessante",
            ID: "62bf30a95bd3be0daadb34f3"
        })
        timeline.save().then((tl) => {
            timeline.delete().then(() => { expect(tl.title).toBe(null) })
        })
    })
})