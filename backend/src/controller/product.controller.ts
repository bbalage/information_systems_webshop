import { getRepository } from "typeorm";
import { Product } from "../entity/Product";
import { Controller } from "./controller";


export class ProductController extends Controller {
    repository = getRepository(Product);

    getAll = async (req, res) => {
        const search = req.body.query || '';

        try {
            const entities = await this.repository
                .createQueryBuilder('product')
                .where("product.title LIKE CONCAT('%', :search, '%')", {search: search})
                .getMany(); 
            res.json(entities);
        }
        catch(err) {
            console.error(err);
            this.handleError(res);
        }
    }
}