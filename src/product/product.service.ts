import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { Product } from './interfaces/product.interface'
import { CreateProductDTO } from './dto/product.dto'

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    async list(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products; 
    }
    
    async create(createProductDTO: CreateProductDTO): Promise<Product> {
        const product = new this.productModel(createProductDTO);
        return await product.save();
    }
    async read(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID);
        return product;
    }
    async update(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const product = await this.productModel.findByIdAndUpdate(productID, createProductDTO, {new: true});
        return product;
    }
    async delete(productID: string): Promise<Product> {
        const product = await this.productModel.findByIdAndDelete(productID);
        return product;
    }

}
