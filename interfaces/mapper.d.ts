export default interface IEventMapper {
    userSignUp: (data: {
        event_time: any;
        mode: string;
    }, sdkInstance: any) => void;
    languageSelected: (data: {
        language: "string";
    }, sdkInstance: any) => void;
    productSearched: (data: {
        serch_keyword: "string";
        item_count: number;
    }, sdkInstance: any) => void;
    bannerClicked: (data: {
        event_time: any;
        user_id: number;
        storefront_id: number;
        banner_id: number;
    }, sdkInstance: any) => void;
    productViewed: (data: {
        product_id: string;
        event_time: any;
        storefront_id: number;
        product_name: string;
        category_name: string;
        category_id: number;
        sub_category_name: string;
        sub_category_id: number;
        brand: string;
        retail_price: number;
        discount: number;
        price: number;
        currency: any;
        image: any;
    }, sdkInstance: any) => void;
    addToCart: (data: any, sdkInstance: any) => void;
    removeFromCart: (data: any, sdkInstance: any) => void;
    addToWishlist: (data: any, sdkInstance: any) => void;
    viewCategory: (data: any, sdkInstance: any) => void;
    viewSubCategory: (data: any, sdkInstance: any) => void;
    updateCart: (data: any, sdkInstance: any) => void;
    applyCoupon: (data: any, sdkInstance: any) => void;
    couponFailed: (data: any, sdkInstance: any) => void;
    viewCart: (data: any, sdkInstance: any) => void;
    startCheckout: (data: any, sdkInstance: any) => void;
    completeCheckout: (data: any, sdkInstance: any) => void;
    reportFailedPayment: (data: any, sdkInstance: any) => void;
    changeAddress: (data: any, sdkInstance: any) => void;
    selectHomeBanner: (data: {
        banner_id: number;
    }, sdkInstance: any) => void;
    selectHomeHotlink: (data: {
        user_id: number;
        hotlink_id: number;
    }, sdkInstance: any) => void;
    viewHomeNewProducts: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    selectHomeNewProduct: (data: {
        user_id: number;
        product_id: number;
    }, sdkInstance: any) => void;
    viewNewProduct: (data: {
        product_id: number;
        section_name: string;
    }, sdkInstance: any) => void;
    selectHomeOnSaleProduct: (data: {
        user_id: number;
        product_id: number;
    }, sdkInstance: any) => void;
    viewOnSale: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    viewHomePromotions: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    selectHomePromotion: (data: {
        user_id: number;
        promotion_id: number;
    }, sdkInstance: any) => void;
    selectPromotion: (data: {
        user_id: number;
        promotion_id: number;
    }, sdkInstance: any) => void;
    viewHomeVendors: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    viewHomeBestSellers: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    viewHomeBrands: (data: {
        user_id: number;
    }, sdkInstance: any) => void;
    selectHomeBrand: (data: {
        user_id: number;
        brand_id: number;
    }, sdkInstance: any) => void;
    selectHomeVendor: (data: {
        user_id: number;
        vendor_id: number;
    }, sdkInstance: any) => void;
}
export interface IProviderMapper {
    eventMapper: IEventMapper;
    contextMapper?: any;
}
