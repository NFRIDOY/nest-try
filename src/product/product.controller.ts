import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts() {
        return this.productService.getProducts();
    }

    @Get(':id')
    getProductById(@Param('id') id: string) {
        return this.productService.getProductById(Number(id));
    }

    @Post()
    createProduct(@Body() product: any) {
        return this.productService.createProduct(product);
    }
}
