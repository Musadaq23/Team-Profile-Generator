 const Manager = require('../lib/Manager');
 
describe('creates an Manager object', () => {
    const manager = new Manager('Musadaq', 23, 'musadaq23@hotmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

describe('gets role of employee', () => {
    const manager = new Manager('Musadaq', 23, 'musadaq23@hotmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
}); 