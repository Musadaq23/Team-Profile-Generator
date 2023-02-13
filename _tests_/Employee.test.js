const Employee = require('../lib/Employee');

describe('creates an employee object', () => {
    const employee = new Employee('Musadaq', 23,  'musadaq23@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets id from getId() 
describe('gets employee name', () => {
    const employee = new Employee('Musadaq', 23, 'musadaq23@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// gets id from getId() 
describe('gets employee ID', () => {
    const employee = new Employee('Musadaq', 23, 'musadaq23@hotmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// gets emails from getEmail()
describe('gets employee email', () => {
    const employee = new Employee('Musadaq', 23, 'musadaq23@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// gets role from getRole()
describe('gets role of employee', () => {
    const employee = new Employee('Musadaq', 23, 'musadaq23@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 