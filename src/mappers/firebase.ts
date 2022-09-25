import IEventMapper from "../interfaces/mapper";
import mapper, { IProviderMapper } from "../interfaces/mapper";

export class firebaseMapper implements IProviderMapper {
    eventMapper: IEventMapper = {
        userSignUp: function (data: { event_time: any; mode: string; }, sdkInstance: any): void {
        },
        languageSelected: function (data: { language: "string"; }, sdkInstance: any): void {
        },
        productSearched: function (data: { serch_keyword: "string"; item_count: number; }, sdkInstance: any): void {

        },
        bannerClicked: function (data: { event_time: any; user_id: number; storefront_id: number; banner_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_carousel', { banner_id: data.banner_id });
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; subject_id?: string }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_item', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        addToCart: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('add_to_cart', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        removeFromCart: function (data: any, sdkInstance: any): void {

        },
        addToWishlist: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('add_to_wishlist', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        viewCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_categories', { user_id: data?.subject_id || '' })
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_category', { user_id: data?.subject_id || '', category_id: data?.category_id })
        },
        updateCart: function (data: any, sdkInstance: any): void {
        },
        applyCoupon: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('apply_promo', { user_id: data?.subject_id || '', promo_code: data?.promo_code })
        },
        couponFailed: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('remove_promo', { user_id: data?.subject_id || '', promo_code: data?.promo_code })

        },
        viewCart: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_cart', { user_id: data?.subject_id || '' })
        },
        startCheckout: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('begin_checkout', { user_id: data?.subject_id || '' })
        },
        completeCheckout: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent("complete_checkout", { user_id: data?.subject_id || '' })
        },
        reportFailedPayment: function (data: any, sdkInstance: any): void {
        },
        changeAddress: function (data: any, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('chekout_change_address', { user_id: data?.subject_id || '' })

        },
        selectHomeBanner: function (data: { banner_id: number; user_id?: any }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent("select_home_carousel", { user_id: data?.user_id || "", banner_id: data?.banner_id })
        },
        selectHomeHotlink: function (data: { user_id: number; hotlink_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_hotlink', { user_id: data?.user_id || "", hotlink_id: data?.hotlink_id })
        },
        viewHomeNewProducts: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_NP', { user_id: data?.user_id || "" })
        },
        selectHomeNewProduct: function (data: { user_id: number; product_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_NP', { user_id: data?.user_id, product_id: data?.product_id })

        },
        viewNewProduct: function (data: { product_id: number; section_name: string; subject_id?: string }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_NP', { user_id: data?.subject_id || '', product_id: data.product_id })
        },
        selectHomeOnSaleProduct: function (data: { user_id: number; product_id: number; subject_id?: string }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_onsale', { user_id: data?.subject_id || '', product_id: data.product_id })
        },
        viewOnSale: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_onsale', { user_id: data?.user_id || "" })
        },
        viewHomePromotions: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_promotions', { user_id: data?.user_id || "" })
        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_promo', { user_id: data?.user_id, promotion_id: data?.promotion_id })
        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; subject_id?: string, }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_promotion', { user_id: data?.subject_id || '', promotion_id: data?.promotion_id })
        },
        viewHomeVendors: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_vendors', { user_id: data?.user_id })
        },
        viewHomeBestSellers: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('View_Bestsellers', { user_id: data?.user_id })
        },
        viewHomeBrands: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('view_brands', { user_id: data?.user_id })
        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_brand', { user_id: data.user_id, brand_id: data.brand_id })
        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; }, sdkInstance: any): void {
            sdkInstance.analytics.logEvent('select_home_vendor', { user_id: data?.user_id, vendor_id: data?.vendor_id })
        }
    };
    contextMapper?: any;

}