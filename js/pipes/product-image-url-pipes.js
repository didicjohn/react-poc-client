import {configuration} from '../config/service-urls';
const INVALID_ARGUMENTS = 'Invalid Argument(s) Specified.';

class ProductImageUrlPipes {

    static transform(ProductId) {
        if (!ProductId) {
            throw new Error(INVALID_ARGUMENTS);
        }
      //  let url =`${configuration.imageUrls.imageBaseUrl}/product${ProductId}.jpg`;
        let url =`${configuration.imageUrls.imageBaseUrl}/product.jpg`;
        return url;
    }
}

export { ProductImageUrlPipes
};
