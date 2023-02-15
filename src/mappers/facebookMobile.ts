import IEventMapper, { IProviderMapper } from "../interfaces/mapper";
export class facebookMobileMapper implements IProviderMapper {
    eventMapper: IEventMapper = {
        userSignUp: function (data: { event_time: any; mode: string; }, sdkInstance: any): void {
        },
        languageSelected: function (data: { language: "string"; }, sdkInstance: any): void {
        },
        productSearched: function (data: { serch_keyword: "string"; item_count: number; }, sdkInstance: any): void {
        },
        bannerClicked: function (data: { event_time: any; user_id: number; storefront_id: number; banner_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; platform_type: string; }, sdkInstance: any): void {
            console.log("FB-E-1", sdkInstance);
            sdkInstance.logEvent(sdkInstance.AppEvents.ViewedContent, data);

        },
        addToCart: function (data: any, sdkInstance: any): void {
        },
        removeFromCart: function (data: any, sdkInstance: any): void {
        },
        addToWishlist: function (data: any, sdkInstance: any): void {
        },
        viewCategory: function (data: any, sdkInstance: any): void {
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
        },
        updateCart: function (data: any, sdkInstance: any): void {
        },
        applyCoupon: function (data: any, sdkInstance: any): void {
        },
        couponFailed: function (data: any, sdkInstance: any): void {
        },
        viewCart: function (data: any, sdkInstance: any): void {
        },
        startCheckout: function (data: any, sdkInstance: any): void {
        },
        completeCheckout: function (data: any, sdkInstance: any): void {
        },
        reportFailedPayment: function (data: any, sdkInstance: any): void {
        },
        changeAddress: function (data: any, sdkInstance: any): void {
        },
        selectHomeBanner: function (data: { banner_id: number; user_id?: any; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomeHotlink: function (data: { user_id: number; hotlink_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewHomeNewProducts: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomeNewProduct: function (data: { user_id: number; product_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewNewProduct: function (data: { product_id: number; section_name: string; subject_id?: string | undefined; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomeOnSaleProduct: function (data: { user_id: number; product_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewOnSale: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewHomePromotions: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewHomeVendors: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewHomeBestSellers: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        viewHomeBrands: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; platform_type: string; }, sdkInstance: any): void {
        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; platform_type: string; }, sdkInstance: any): void {
        },
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
        },
        buildYourClinicAddMobile: function (data: any, sdkInstance: any): void {
        },
        buildYourClinicSelectRoom: function (data: any, sdkInstance: any): void {
        },
        buildYourClinicSelectBudget: function (data: any, sdkInstance: any): void {
        },
        buildYourClinicSelectTimeslot: function (data: any, sdkInstance: any): void {
        },
        buildYourClinicSubmitRequest: function (data: any, sdkInstance: any): void {
        },
        selectListFromHome: function (data: any, sdkInstance: any): void {
        },
        selectListFromAccount: function (data: any, sdkInstance: any): void {
        },
        createList: function (data: any, sdkInstance: any): void {
        },
        AddItemToMyList: function (data: any, sdkInstance: any): void {
        },
        chooseList: function (data: any, sdkInstance: any): void {
        },
        saveList: function (data: any, sdkInstance: any): void {
        },
        removeItemFromList: function (data: any, sdkInstance: any): void {
        },
        incrementQtyFromList: function (data: any, sdkInstance: any): void {
        },
        decrementQtyFromList: function (data: any, sdkInstance: any): void {
        },
        removePromo: function (data: any, sdkInstance: any): void {
        },
        addListToCart: function (data: any, sdkInstance: any): void {
        },
        purchase: function (data: any, sdkInstance: any): void {
            console.log("FB-E-2", sdkInstance);
            sdkInstance.logPurchase(data.amount, data.currency, data.params);
        }
    };
}