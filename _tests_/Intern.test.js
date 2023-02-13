const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Musadaq', 23, 'musadaq23@hotmail.com', 'Carleton University');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Musadaq', 23, 'musadaq23@hotmail.com', 'Carleton University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
    const intern = new Intern('Musadaq', 23, 'nicole.elisaw@gmail.com', 'Carleton University');

    expect(intern.getRole()).toEqual("Intern");
}); 