
import IEventMapper, { IProviderMapper } from "../interfaces/mapper";

export class WebEngageMapper implements IProviderMapper {
    public eventMapper: IEventMapper = {
        userSignUp: function (data: { event_time: any; mode: string; }, sdkInstance: any): void {
            sdkInstance.track('User Signed Up', data)
        },
        languageSelected: function (data: { language: "string"; }, sdkInstance: any): void {
            sdkInstance.track('Language Selected', data)
        },
        productSearched: function (data: { serch_keyword: "string"; item_count: number; }, sdkInstance: any): void {
            sdkInstance.track('Product Searched', data)
        },
        bannerClicked: function (data: { event_time: any; user_id: number; storefront_id: number; banner_id: number; }, sdkInstance: any): void {
            sdkInstance.track('Banner Clicked', data)
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; }, sdkInstance: any): void {
            sdkInstance.track('Product Viewed', data)
        },
        addToCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Added To Cart', {
                "Product Id": data.product_id,
                "Event_time": data.event_time,
                "User_ID": data.user_id,
                "storefront_id": data.storefront_id,
                "Product Name": data.product_name,
                "Category Name": data.category_name,
                "Category Id": data.category_id,
                "Sub Category Name": data.category_name,
                "Sub Category Id": data.category_id,
                "Quantity": data.quantity,
                "Brand": data.brand_id,
                "Vendor": data.vendor_id,
                "Retail Price": data.retail_price,
                "Discount": data.discount,
                "Price": data.price,
                "Currency": data.currency,
                "image": data.image
            })
        },
        removeFromCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Removed From Cart', {
                "Product Id": data.product_id,
                "Event_time": data.event_time,
                "User_ID": data.user_id,
                "storefront_id": data.storefront_id,
                "Product Name": data.product_name,
                "Category Name": data.category_name,
                "Category Id": data.category_id,
                "Sub Category Name": data.category_name,
                "Sub Category Id": data.category_id,
                "Quantity": data.quantity,
                "Brand": data.brand_id,
                "Vendor": data.vendor_id,
                "Retail Price": data.retail_price,
                "Discount": data.discount,
                "Price": data.price,
                "Currency": data.currency,
                "image": data.image
            })
        },
        addToWishlist: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Added To Wishlist', data)
        },
        viewCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Category Viewed', data)
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Sub Category Viewed', data)
        },
        updateCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Cart Updated", data);
        },
        applyCoupon: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Coupon Code Applied", data);
        },
        couponFailed: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Coupon Code Failed", data);
        },
        viewCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Cart Viewed", data);
        },
        startCheckout: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Checkout Started", data);
        },
        completeCheckout: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Checkout Completed", data);
        },
        reportFailedPayment: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Payment Failure", data);
        },
        changeAddress: function (data: any, sdkInstance: any): void {
            sdkInstance.track("Shipping Details Updated", data);
        },
        selectHomeBanner: function (data: { banner_id: number; }, sdkInstance: any): void {

        },
        selectHomeHotlink: function (data: { user_id: number; hotlink_id: number; }, sdkInstance: any): void {

        },
        viewHomeNewProducts: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        selectHomeNewProduct: function (data: { user_id: number; product_id: number; }, sdkInstance: any): void {

        },
        viewNewProduct: function (data: { product_id: number; section_name: string; }, sdkInstance: any): void {

        },
        selectHomeOnSaleProduct: function (data: { user_id: number; product_id: number; }, sdkInstance: any): void {

        },
        viewOnSale: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        viewHomePromotions: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {

        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {

        },
        viewHomeVendors: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        viewHomeBestSellers: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        viewHomeBrands: function (data: { user_id: number; }, sdkInstance: any): void {

        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; }, sdkInstance: any): void {

        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; }, sdkInstance: any): void {

        }
    }

}