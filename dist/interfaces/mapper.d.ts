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
        platform_type: string;
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
        platform_type: string;
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
        user_id?: any;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomeHotlink: (data: {
        user_id: number;
        hotlink_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewHomeNewProducts: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomeNewProduct: (data: {
        user_id: number;
        product_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewNewProduct: (data: {
        product_id: number;
        section_name: string;
        subject_id?: string;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomeOnSaleProduct: (data: {
        user_id: number;
        product_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewOnSale: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewHomePromotions: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomePromotion: (data: {
        user_id: number;
        promotion_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectPromotion: (data: {
        user_id: number;
        promotion_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewHomeVendors: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewHomeBestSellers: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    viewHomeBrands: (data: {
        user_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomeBrand: (data: {
        user_id: number;
        brand_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    selectHomeVendor: (data: {
        user_id: number;
        vendor_id: number;
        platform_type: string;
    }, sdkInstance: any) => void;
    filterProducts: (data: any, sdkInstance: any) => void;
    sortProducts: (data: any, sdkInstance: any) => void;
    selectVendor: (data: any, sdkInstance: any) => void;
    selectVariant: (data: any, sdkInstance: any) => void;
    incrementQty: (data: any, sdkInstance: any) => void;
    decrementQty: (data: any, sdkInstance: any) => void;
    deleteProduct: (data: any, sdkInstance: any) => void;
    chekoutAddAddress: (data: any, sdkInstance: any) => void;
    checkoutVerifyAddress: (data: any, sdkInstance: any) => void;
    selectPaymentMethod: (data: any, sdkInstance: any) => void;
    viewSupport: (data: any, sdkInstance: any) => void;
    selectWhatsapp: (data: any, sdkInstance: any) => void;
    selectPhone: (data: any, sdkInstance: any) => void;
    selectIntercom: (data: any, sdkInstance: any) => void;
    viewAccountSettings: (data: any, sdkInstance: any) => void;
    viewAddressBook: (data: any, sdkInstance: any) => void;
    saveNewAddress: (data: any, sdkInstance: any) => void;
    skipOTP: (data: any, sdkInstance: any) => void;
    resendOTP: (data: any, sdkInstance: any) => void;
    confirmOTP: (data: any, sdkInstance: any) => void;
    verifyAddress: (data: any, sdkInstance: any) => void;
    setDefaultAddress: (data: any, sdkInstance: any) => void;
    selectWishlist: (data: any, sdkInstance: any) => void;
    moveToCart: (data: any, sdkInstance: any) => void;
    removeWishlistedProduct: (data: any, sdkInstance: any) => void;
    clearWishlist: (data: any, sdkInstance: any) => void;
    editProfile: (data: any, sdkInstance: any) => void;
    addProfileSpeciality: (data: any, sdkInstance: any) => void;
    addProfileExpirience: (data: any, sdkInstance: any) => void;
    addProfileDN: (data: any, sdkInstance: any) => void;
    addProfileOccupation: (data: any, sdkInstance: any) => void;
    saveProfile: (data: any, sdkInstance: any) => void;
    selectCurrency: (data: any, sdkInstance: any) => void;
    userSignOut: (data: any, sdkInstance: any) => void;
    selectBestseller: (data: any, sdkInstance: any) => void;
    selectRewards: (data: any, sdkInstance: any) => void;
    selectBrand: (data: any, sdkInstance: any) => void;
    addWishlistToCart: (data: any, sdkInstance: any) => void;
    incrementWishlistItem: (data: any, sdkInstance: any) => void;
    decrementWishlistItem: (data: any, sdkInstance: any) => void;
    addFavToCart: (data: any, sdkInstance: any) => void;
    incrementFavItem: (data: any, sdkInstance: any) => void;
    viewFDCBanner: (data: any, sdkInstance: any) => void;
    signInClick: (data: any, sdkInstance: any) => void;
    signInAction: (data: any, sdkInstance: any) => void;
    signOutAction: (data: any, sdkInstance: any) => void;
    viewBuyAgain: (data: any, sdkInstance: any) => void;
    viewUserChallenge: (data: any, sdkInstance: any) => void;
    reedemPoints: (data: any, sdkInstance: any) => void;
    cancelReedemPoints: (data: any, sdkInstance: any) => void;
    orderHelp: (data: any, sdkInstance: any) => void;
    trackOrder: (data: any, sdkInstance: any) => void;
    inlineSearch: (data: any, sdkInstance: any) => void;
    inlineSearchClick: (data: any, sdkInstance: any) => void;
    fullSearch: (data: any, sdkInstance: any) => void;
    profileUpdated: (data: any, sdkInstance: any) => void;
    claimCode: (data: any, sdkInstance: any) => void;
    skipCongratsBanner: (data: any, sdkInstance: any) => void;
    buildYourClinicAddName: (data: any, sdkInstance: any) => void;
    buildYourClinicAddMobile: (data: any, sdkInstance: any) => void;
    buildYourClinicSelectRoom: (data: any, sdkInstance: any) => void;
    buildYourClinicSelectBudget: (data: any, sdkInstance: any) => void;
    buildYourClinicSelectTimeslot: (data: any, sdkInstance: any) => void;
    buildYourClinicSubmitRequest: (data: any, sdkInstance: any) => void;
    selectListFromHome: (data: any, sdkInstance: any) => void;
    selectListFromAccount: (data: any, sdkInstance: any) => void;
    createList: (data: any, sdkInstance: any) => void;
    AddItemToMyList: (data: any, sdkInstance: any) => void;
    chooseList: (data: any, sdkInstance: any) => void;
    saveList: (data: any, sdkInstance: any) => void;
    removeItemFromList: (data: any, sdkInstance: any) => void;
    incrementQtyFromList: (data: any, sdkInstance: any) => void;
    decrementQtyFromList: (data: any, sdkInstance: any) => void;
    removePromo: (data: any, sdkInstance: any) => void;
    addListToCart: (data: any, sdkInstance: any) => void;
    createListFromProductDetailsPage: (data: any, sdkInstance: any) => void;
    purchase: (data: any, sdkInstance: any) => void;
    selectFdcHomeBanner: (data: any, skInstance: any) => void;
    addFdcCampaignItemToCart: (data: any, sdkInstance: any) => void;
    addHomeFdcCampaignItemToCart: (data: any, sdkInstance: any) => void;
    selectSimilarProduct: (data: any, sdkInstance: any) => void;
    selectItemsToCancel: (data: any, sdkInstance: any) => void;
    decrementToCancelItemQuantity: (data: any, sdkInstance: any) => void;
    rateProductFromToaster: (data: any, sdkInstance: any) => void;
    rateProduct: (data: any, sdkInstance: any) => void;
    reviewProductFromProductDetails: (data: any, sdkInstance: any) => void;
    searchHistoryClick: (data: any, sdkInstance: any) => void;
    selectRecommendedProduct: (data: any, sdkInstance: any) => void;
}
export interface IProviderMapper {
    eventMapper: IEventMapper;
    contextMapper?: any;
}
