import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

    private employees: any[] = [
        { id: 1, name: 'John', age: 30, position: 'Developer' },
        { id: 2, name: 'Jane', age: 25, position: 'Designer' },
        { id: 3, name: 'Bob', age: 35, position: 'Manager' }
    ];

    findAll() {
        return this.employees;
    }

    findOne(id: number) {
        return this.employees.find(employee => employee.id === id);
    }

    create(employee: any) {
        const newEmployee = { ...employee, id: this.employees.length + 1 };
        this.employees.push(newEmployee);
        return newEmployee;
    }

    update(id: number, employee: any) {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
            this.employees[index] = { ...this.employees[index], ...employee };
            return this.employees[index];
        }
        return null;
    }

    remove(id: number) {
        const index = this.employees.findIndex(employee => employee.id === id);
        if (index !== -1) {
            this.employees.splice(index, 1);
            return true;
        }
        return false;
    }
}
