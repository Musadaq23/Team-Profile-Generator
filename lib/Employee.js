class Employee {
    contructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getname() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.Email
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;