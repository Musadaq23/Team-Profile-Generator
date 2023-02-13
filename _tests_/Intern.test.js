const Intern = require('../lib/Intern');

describe('creates an Intern object', () => {
    const intern = new Intern('Musadaq', 23, 'musadaq23@hotmail.com', 'Carleton University');
    
    expect(intern.school).toEqual(expect.any(String));
});

describe('gets employee school', () => {
    const intern = new Intern('Musadaq', 23, 'musadaq23@hotmail.com', 'Carleton University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

describe('gets role of employee', () => {
    const intern = new Intern('Musadaq', 23, 'nicole.elisaw@gmail.com', 'Carleton University');

    expect(intern.getRole()).toEqual("Intern");
}); 