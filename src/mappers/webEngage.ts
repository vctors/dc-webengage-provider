
import IEventMapper, { IProviderMapper } from "../interfaces/mapper";

export class WebEngageMapper implements IProviderMapper {
    public eventMapper: IEventMapper = {
        userSignUp: function (data: { event_time: any; mode: string; }, sdkInstance: any): void {
            sdkInstance.track('User Signed Up', data);
        },
        languageSelected: function (data: { language: "string"; }, sdkInstance: any): void {
            sdkInstance.track('Language Selected', data);
        },
        productSearched: function (data: { serch_keyword: "string"; item_count: number; }, sdkInstance: any): void {
            sdkInstance.track('Product Searched', data);
        },
        bannerClicked: function (data: { event_time: any; user_id: number; storefront_id: number; banner_id: number; }, sdkInstance: any): void {
            sdkInstance.track('Banner Clicked', data);
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; }, sdkInstance: any): void {
            sdkInstance.track('Product Viewed', data);
        },
        addToCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Added To Cart', data);
        },
        removeFromCart: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Removed From Cart', data);
        },
        addToWishlist: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Added To Wishlist', data);
        },
        viewCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Category Viewed', data);
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
            sdkInstance.track('Sub Category Viewed', data);
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
            sdkInstance.track("On Sale Clicked", data);
        },
        viewHomePromotions: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.track("Promotions Clicked", data);
        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {
        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {
        },
        viewHomeVendors: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.track("Vendor Viewed", data);
        },
        viewHomeBestSellers: function (data: { user_id: number; }, sdkInstance: any): void {
            sdkInstance.track("Best Sellers Clicked", data);
        },
        viewHomeBrands: function (data: { user_id: number; }, sdkInstance: any): void {
        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; }, sdkInstance: any): void {
        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; }, sdkInstance: any): void {
            sdkInstance.track("Vendors Clicked", data);
        },
        //Firebase Events
        filterProducts: function (data: any, sdkInstance: any): void {
        },
        sortProducts: function (data: any, sdkInstance: any): void {
        },
        selectVendor: function (data: any, sdkInstance: any): void {
        },
        selectVariant: function (data: any, sdkInstance: any): void {
        },
        incrementQty: function (data: any, sdkInstance: any): void {
        },
        decrementQty: function (data: any, sdkInstance: any): void {
        },
        deleteProduct: function (data: any, sdkInstance: any): void {
        },
        chekoutAddAddress: function (data: any, sdkInstance: any): void {
        },
        checkoutVerifyAddress: function (data: any, sdkInstance: any): void {
        },
        selectPaymentMethod: function (data: any, sdkInstance: any): void {
        },
        viewSupport: function (data: any, sdkInstance: any): void {
        },
        selectWhatsapp: function (data: any, sdkInstance: any): void {
        },
        selectPhone: function (data: any, sdkInstance: any): void {
        },
        selectIntercom: function (data: any, sdkInstance: any): void {
        },
        viewAccountSettings: function (data: any, sdkInstance: any): void {
        },
        viewAddressBook: function (data: any, sdkInstance: any): void {
        },
        saveNewAddress: function (data: any, sdkInstance: any): void {
        },
        skipOTP: function (data: any, sdkInstance: any): void {
        },
        resendOTP: function (data: any, sdkInstance: any): void {
        },
        confirmOTP: function (data: any, sdkInstance: any): void {
        },
        verifyAddress: function (data: any, sdkInstance: any): void {
        },
        setDefaultAddress: function (data: any, sdkInstance: any): void {
        },
        selectWishlist: function (data: any, sdkInstance: any): void {
        },
        moveToCart: function (data: any, sdkInstance: any): void {
        },
        removeWishlistedProduct: function (data: any, sdkInstance: any): void {
        },
        clearWishlist: function (data: any, sdkInstance: any): void {
        },
        editProfile: function (data: any, sdkInstance: any): void {
        },
        addProfileSpeciality: function (data: any, sdkInstance: any): void {
        },
        addProfileExpirience: function (data: any, sdkInstance: any): void {
        },
        addProfileDN: function (data: any, sdkInstance: any): void {
        },
        addProfileOccupation: function (data: any, sdkInstance: any): void {
        },
        saveProfile: function (data: any, sdkInstance: any): void {
        },
        selectCurrency: function (data: any, sdkInstance: any): void {
        },
        userSignOut: function (data: any, sdkInstance: any): void {
        },
        selectBestseller: function (data: any, sdkInstance: any): void {
        },
        selectRewards: function (data: any, sdkInstance: any): void {
        },
        selectBrand: function (data: any, sdkInstance: any): void {
        },
        addWishlistToCart: function (data: any, sdkInstance: any): void {
        },
        incrementWishlistItem: function (data: any, sdkInstance: any): void {
        },
        decrementWishlistItem: function (data: any, sdkInstance: any): void {
        },
        addFavToCart: function (data: any, sdkInstance: any): void {
        },
        incrementFavItem: function (data: any, sdkInstance: any): void {
        },
        viewFDCBanner: function (data: any, sdkInstance: any): void {
        },
        signInClick: function (data: any, sdkInstance: any): void {
        },
        signInAction: function (data: any, sdkInstance: any): void {
        },
        signOutAction: function (data: any, sdkInstance: any): void {
        },
        viewBuyAgain: function (data: any, sdkInstance: any): void {
        },
        viewUserChallenge: function (data: any, sdkInstance: any): void {
        },
        reedemPoints: function (data: any, sdkInstance: any): void {
        },
        cancelReedemPoints: function (data: any, sdkInstance: any): void {
        },
        orderHelp: function (data: any, sdkInstance: any): void {
        },
        trackOrder: function (data: any, sdkInstance: any): void {
        },
        inlineSearch: function (data: any, sdkInstance: any): void {
        },
        fullSearch: function (data: any, sdkInstance: any): void {
        },
        profileUpdated: function (data: any, sdkInstance: any): void {
        },
        claimCode: function (data: any, sdkInstance: any): void {
        },
        skipCongratsBanner: function (data: any, sdkInstance: any): void {
        },
        buildYourClinicAddName: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Add_name", data);
        },
        buildYourClinicAddMobile: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Add_mobile", data);
        },
        buildYourClinicSelectRoom: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Select_Room", data);
        },
        buildYourClinicSelectBudget: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Select_budget", data);
        },
        buildYourClinicSelectTimeslot: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Select_Timeslot", data);
        },
        buildYourClinicSubmitRequest: function (data: any, sdkInstance: any): void {
            sdkInstance.track("BYC_Submit_request", data);
        },
        selectListFromHome:function (data: any, sdkInstance: any): void {
        },
        selectListFromAccount: function (data: any, sdkInstance: any): void {
        },
        createList:function (data: any, sdkInstance: any): void {
        },
        AddItemToMyList:function (data: any, sdkInstance: any): void {
        },
        chooseList:function (data: any, sdkInstance: any): void {
        },
        saveList: function (data: any, sdkInstance: any): void {
        },
        removeItemFromList:function (data: any, sdkInstance: any): void {
        },
        incrementQtyFromList:function (data: any, sdkInstance: any): void {
        },
        decrementQtyFromList:function (data: any, sdkInstance: any): void {
        },
        addListToCart:function (data: any, sdkInstance: any): void {
        },
    }

}