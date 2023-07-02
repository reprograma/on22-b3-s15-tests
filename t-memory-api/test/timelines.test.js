const timelineModel = require('../src/models/timelineModel');

describe('GET model test', () => {
  const timeline = new timelineModel({
    title: 'test timeline',
    description: 'a timeline created for testing',
    archived: true,
  });
  it('Should call the schema and return the correct timeline name', () => {
    expect(timeline.title).toBe('test timeline');
  });
  it('Should call the schema and return the correct timeline name', () => {
    expect(timeline.description).toBe(
      'a timeline created for testing'
    );
  });
  it('Should call the schema and return the correct timeline name', () => {
    expect(timeline.archived).toBe(true);
  });
});

describe('CREATE route test', () => {
  const timeline = new timelineModel({
    title: 'test timeline',
    description: 'a timeline created for testing',
    archived: true,
  });
  it('Should save the new timeline to the database.', () => {
    timeline.save().then((dados) => {
      expect(dados.title).toBe('test memory');
    });
  });
});

describe('UPDATE route test', () => {
  it('Should edit the title and save the updated document to the database', () => {
    const timeline = new timelineModel({
      title: 'test timeline',
      description: 'a timeline created for testing',
      archived: true,
    });
    (timeline.title = 'new memory test'),
      timeline.save().then((dados) => {
        expect(dados.title).tosBe('new timeline test');
      });
  });
});

describe('DELETE route test', () => {
  it('Should edit the title and save the updated document to the database', () => {
    const timeline = new timelineModel({
      title: 'test timeline',
      description: 'a timeline created for testing',
      archived: true,
    });
    (timeline.title = 'new memory test'),
      timeline.save().then((dados) => {
        timeline.delete().then(() => {
          expect(dados.title).toBe(null);
        });
      });
  });
});
