import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) { }

    @Get()
    getallEmployee() {
        return this.employeeService.findAll();
    }

    @Get(":id")
    getEmployeeById(@Param("id") id: string) {
        return this.employeeService.findOne(Number(id));
    }

    @Post()
    createEmployee(@Body() employee: any) {
        return this.employeeService.create(employee);
    }

    @Put(":id")
    updateEmployee(@Param("id") id: string, @Body() employee: any) {
        return this.employeeService.update(Number(id), employee);
    }

    @Delete(":id")
    deleteEmployee(@Param("id") id: string) {
        return this.employeeService.remove(Number(id));
    }
}
