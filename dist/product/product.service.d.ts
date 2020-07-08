import { Model } from 'mongoose';
import { Product } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    list(): Promise<Product[]>;
    create(createProductDTO: CreateProductDTO): Promise<Product>;
    read(productID: string): Promise<Product>;
    update(productID: string, createProductDTO: CreateProductDTO): Promise<Product>;
    delete(productID: string): Promise<Product>;
}
