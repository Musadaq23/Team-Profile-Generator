const Engineer = require('../lib/Engineer');

describe('creates an Engineer object', () => {
    const engineer = new Engineer('Musadaq', 23, 'musadaq23@hotmail.com', 'musadaq23');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

describe('gets engineer github value', () => {
    const engineer = new Engineer('Msuadaq', 23, 'musadaq23@hotmail.com', 'musadaq23');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

 describe('gets role of employee', () => {
    const engineer = new Engineer('Musadaq', 23, 'musadaq23@hotmail.com', 'musadaq23@hotmail.com');

    expect(engineer.getRole()).toEqual("Engineer");
});