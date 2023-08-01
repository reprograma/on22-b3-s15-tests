const memoryModel = require('../src/models/memoryModel');

describe('GET model test', () => {
  const memory = new memoryModel({
    title: 'test memory',
    date: '2022-07-01T17:42:09.375Z',
    description: 'a memory implanted for testing',
    category: 'tests',
    imgURL: 'https://www.image.com',
    timelineID: '62bf30a95bd3be0daadb34f3',
    archived: true,
  });

  it('Should call the schema and return the correct name of the memory', () => {
    expect(memory.title).toBe('test memory');
  });

  it('Should call the schema and return the correct date of the memory', () => {
    expect(
      JSON.stringify(memory.date).substring(
        1,
        JSON.stringify(memory.date).length - 1
      )
    ).toBe('2022-07-01T17:42:09.375Z');
  });

  it('Should call the schema and return the correct description of the memory', () => {
    expect(memory.description).toBe('a memory implanted for testing');
  });

  it('Should call the schema and return the correct category of the memory', () => {
    expect(memory.category).toStrictEqual(['tests']);
  });

  it('Should call the schema and return the correct imgURL of the memory', () => {
    expect(memory.imgURL).toBe('https://www.image.com');
  });

  it('Should call the schema and return the correct timelineID of the memory', () => {
    expect(
      JSON.stringify(memory.timelineID).substring(
        1,
        JSON.stringify(memory.timelineID).length - 1
      )
    ).toBe('62bf30a95bd3be0daadb34f3');
  });
  
  it('Should call the schema and return the archived value as true', () => {
    expect(memory.archived).toBe(true);
  });
});

describe('CREATE route test', () => {
  const memory = new memoryModel({
    title: 'test memory',
    date: '2022-07-01T17:42:09.375Z',
    description: 'a memory implanted for testing',
    category: 'tests',
    imgURL: 'https://www.image.com',
    timelineID: '62bf30a95bd3be0daadb34f3',
    archived: true,
  });
  it('Should save the new memory to the database.', () => {
    memory.save().then((dados) => {
      expect(dados.title).toBe('test memory');
    });
  });
});

describe('UPDATE route test', () => {
  it('Should edit the title and save the updated document to the database', () => {
    const memory = new memoryModel({
      title: 'test memory',
      date: '2022-07-01T17:42:09.375Z',
      description: 'a memory implanted for testing',
      category: 'tests',
      imgURL: 'https://www.image.com',
      timelineID: '62bf30a95bd3be0daadb34f3',
      archived: true,
    });
    (memory.title = 'new memory test'),
      memory.save().then((dados) => {
        expect(dados.title).toBe('new memory test');
      });
  });
});

describe('DELETE route test', () => {
  it('Should delete a memory from the database', () => {
    const memory = new memoryModel({
      title: 'test memory',
      date: '2022-07-01T17:42:09.375Z',
      description: 'a memory implanted for testing',
      category: 'tests',
      imgURL: 'https://www.image.com',
      timelineID: '62bf30a95bd3be0daadb34f3',
      archived: true,
    });
    memory.save().then((dados) => {
      memory.delete().then(() => {
        expect(dados.title).toBe(null);
      });
    });
  });
  });