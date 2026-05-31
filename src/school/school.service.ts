import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';

@Injectable()
export class SchoolService {

  private schools = [
    { id: 1, name: 'shcool one', type: 'school' },
    { id: 2, name: 'shcool two', type: 'college' },
    { id: 3, name: 'shcool three', type: 'university' },
  ]

  create(createSchoolDto: CreateSchoolDto) {
    const newSchool = {
      id: this.schools.length + 1,
      name: createSchoolDto.name,
      type: createSchoolDto.type
    }
    this.schools.push(newSchool)
    return newSchool
  }

  findAll() {
    return this.schools
  }

  findOne(id: number) {
    // return `This action returns a #${id} school`;
    const schoolFind = this.schools.find((sc) => sc.id === id)
    if (!schoolFind) {
      throw new NotFoundException("School not found")
    }
    return schoolFind
  }

  update(id: number, updateSchoolDto: UpdateSchoolDto) {
    // return `This action updates a #${id} school`;
    const updatedSchool = this.schools.map((sc) => {
      return (sc.id === id) ? { ...sc, ...updateSchoolDto } : sc;
    })
    return this.schools = updatedSchool;
  }

  patchUpdate(id: number, updateSchoolDto: UpdateSchoolDto) {
    const shoolData = this.findOne(id)

    Object.assign(shoolData, updateSchoolDto)
    // this.schools = [...this.schools,shoolData]

    return shoolData
  }

  remove(id: number) {
    // return `This action removes a #${id} school`;
    const filteredSchool = this.schools.filter((sc) => sc.id !== id)
    return this.schools = filteredSchool;

  }
}
