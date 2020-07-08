import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto'

import { ProductService } from './product.service'

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post('/create')
    async create(@Res() res, @Body() createProductDTO: CreateProductDTO){
    console.log(createProductDTO);

    const product =  await this.productService.create(createProductDTO);

    return res.status(HttpStatus.OK).json({
            message: 'Product Succesfully Created',
            product
        });
    }

    @Get('/')
    async list(@Res() res){
        const products = await this.productService.list();
        res.status(HttpStatus.OK).json({
            message: 'Products',
            products
        });
    }

    @Get('/:productID')
    async read(@Res() res, @Param('productID') productID){
        const product = await this.productService.read(productID);
        if(!product) throw new NotFoundException('Product does not exists') 
        res.status(HttpStatus.OK).json({
            message: 'Product',
            product
        });
    }

    @Delete('/delete')
    async delete(@Res() res, @Query('productID') productID) {
        const product = await this.productService.delete(productID);
        if(!product) throw new NotFoundException('Product does not exists') 
        res.status(HttpStatus.OK).json({
            message: 'Product deleted succesfully',
            product
        });
    }

    @Put('/update/:productID')
    async update(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('productID') productID){
        const products = await this.productService.update(productID, createProductDTO);
        if(!products) throw new NotFoundException('Product does not exists') 
        res.status(HttpStatus.OK).json({
            message: 'Product updates succesfully',
            products
        }) 
    }
}
