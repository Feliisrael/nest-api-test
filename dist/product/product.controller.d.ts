import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    create(res: any, createProductDTO: CreateProductDTO): Promise<any>;
    list(res: any): Promise<void>;
    read(res: any, productID: any): Promise<void>;
    delete(res: any, productID: any): Promise<void>;
    update(res: any, createProductDTO: CreateProductDTO, productID: any): Promise<void>;
}
