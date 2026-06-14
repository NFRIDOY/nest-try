import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  private categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      description: "Electronic products",
    },
    {
      id: 2,
      name: "Clothing",
      description: "Clothing products",
    },
    {
      id: 3,
      name: "Books",
      description: "Books products",
    },
  ];
  create(createCategoryDto: CreateCategoryDto): Category {
    const newCategory: Category = {
      id: this.categories.length + 1,
      ...createCategoryDto
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAll(): Category[] {
    return this.categories;
  }

  findOne(id: number): Category | string {
    const category = this.categories.find(category => category.id === id);
    if (category) {
      return category;
    }
    return `Category with id ${id} not found`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto): Category | string {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories[index] = { ...updateCategoryDto, id };
      return this.categories[index];
    }
    return `Category with id ${id} not found`;
  }

  remove(id: number): string {
    const index = this.categories.findIndex(category => category.id === id);
    if (index !== -1) {
      this.categories.splice(index, 1);
      // return this.categories[index];
      return `Category with id ${id} removed successfully`;
    }
    return `Category with id ${id} not found`;
  }
}
