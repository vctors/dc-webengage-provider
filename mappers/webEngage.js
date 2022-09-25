"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebEngageMapper = void 0;
class WebEngageMapper {
    constructor() {
        this.eventMapper = {
            userSignUp: function (data, sdkInstance) {
                sdkInstance.track('User Signed Up', data);
            },
            languageSelected: function (data, sdkInstance) {
                sdkInstance.track('Language Selected', data);
            },
            productSearched: function (data, sdkInstance) {
                sdkInstance.track('Product Searched', data);
            },
            bannerClicked: function (data, sdkInstance) {
                sdkInstance.track('Banner Clicked', data);
            },
            productViewed: function (data, sdkInstance) {
                sdkInstance.track('Product Viewed', data);
            },
            addToCart: function (data, sdkInstance) {
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
                });
            },
            removeFromCart: function (data, sdkInstance) {
                sdkInstance.track('Added To Wishlist', {
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
                });
            },
            addToWishlist: function (data, sdkInstance) {
                sdkInstance.track('Added To Wishlist', data);
            },
            viewCategory: function (data, sdkInstance) {
                sdkInstance.track('Category Viewed', data);
            },
            viewSubCategory: function (data, sdkInstance) {
                sdkInstance.track('Sub Category Viewed', data);
            },
            updateCart: function (data, sdkInstance) {
                sdkInstance.track("Cart Updated", data);
            },
            applyCoupon: function (data, sdkInstance) {
                sdkInstance.track("Coupon Code Applied", data);
            },
            couponFailed: function (data, sdkInstance) {
                sdkInstance.track("Coupon Code Failed", data);
            },
            viewCart: function (data, sdkInstance) {
                sdkInstance.track("Cart Viewed", data);
            },
            startCheckout: function (data, sdkInstance) {
                sdkInstance.track("Checkout Started", data);
            },
            completeCheckout: function (data, sdkInstance) {
                sdkInstance.track("Checkout Completed", data);
            },
            reportFailedPayment: function (data, sdkInstance) {
                sdkInstance.track("Payment Failure", data);
            },
            changeAddress: function (data, sdkInstance) {
                sdkInstance.track("Shipping Details Updated", data);
            },
            selectHomeBanner: function (data, sdkInstance) {
            },
            selectHomeHotlink: function (data, sdkInstance) {
            },
            viewHomeNewProducts: function (data, sdkInstance) {
            },
            selectHomeNewProduct: function (data, sdkInstance) {
            },
            viewNewProduct: function (data, sdkInstance) {
            },
            selectHomeOnSaleProduct: function (data, sdkInstance) {
            },
            viewOnSale: function (data, sdkInstance) {
            },
            viewHomePromotions: function (data, sdkInstance) {
            },
            selectHomePromotion: function (data, sdkInstance) {
            },
            selectPromotion: function (data, sdkInstance) {
            },
            viewHomeVendors: function (data, sdkInstance) {
            },
            viewHomeBestSellers: function (data, sdkInstance) {
            },
            viewHomeBrands: function (data, sdkInstance) {
            },
            selectHomeBrand: function (data, sdkInstance) {
            },
            selectHomeVendor: function (data, sdkInstance) {
            }
        };
    }
}
exports.WebEngageMapper = WebEngageMapper;
