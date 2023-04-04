import IEventMapper from "../interfaces/mapper";
import mapper, { IProviderMapper } from "../interfaces/mapper";
import { logEvent } from "firebase/analytics";

export class firebaseMapper implements IProviderMapper {
    eventMapper: IEventMapper = {
        userSignUp: function (data: { event_time: any; mode: string; }, sdkInstance: any): void {
        },
        languageSelected: function (data: { language: "string"; }, sdkInstance: any): void {
        },
        productSearched: function (data: { serch_keyword: "string"; item_count: number; }, sdkInstance: any): void {
        },
        bannerClicked: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_carousel', { banner_id: data.banner_id });
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; subject_id?: string; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_item', data);
        },
        addToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'add_to_cart', data);
        },
        removeFromCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'delete_product', data);
        },
        addToWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'add_to_wishlist', data);
        },
        viewCategory: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_category', data);
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_subcategory', data);
        },
        updateCart: function (data: any, sdkInstance: any): void {
        },
        applyCoupon: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'apply_promo', data);
        },
        couponFailed: function (data: any, sdkInstance: any): void {
        },
        viewCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_cart', data);
        },
        startCheckout: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'begin_checkout', data);
        },
        completeCheckout: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, "complete_checkout", data);
        },
        reportFailedPayment: function (data: any, sdkInstance: any): void {
        },
        changeAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'chekout_change_address', data);

        },
        selectHomeBanner: function (data: { banner_id: number; user_id?: any; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, "select_home_carousel", data);
        },
        selectHomeHotlink: function (data: { user_id: number; hotlink_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_hotlink', data);
        },
        viewHomeNewProducts: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_NP', data);
        },
        selectHomeNewProduct: function (data: { user_id: number; product_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_NP', data);

        },
        viewNewProduct: function (data: { product_id: number; section_name: string; subject_id?: string; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_NP', data);
        },
        selectHomeOnSaleProduct: function (data: { user_id: number; product_id: number; subject_id?: string; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_onsale', data);
        },
        viewOnSale: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_onsale', data);
        },
        viewHomePromotions: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_promotions', data);
        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_promo', data);
        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; subject_id?: string; platform_type: string; }, sdkInstance: any): void {
            //@ts-ignore
            logEvent(sdkInstance.analytics, 'select_promotion', data);
        },
        viewHomeVendors: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_vendors', data);
        },
        viewHomeBestSellers: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_Bestsellers', data);
        },
        viewHomeBrands: function (data: { user_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_brands', data);
        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_brand', data);
        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; platform_type: string; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_vendor', data);
        },
        //Rest of Firebase
        filterProducts: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'filter_products', data);
        },
        sortProducts: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'sort_products', data);
        },
        selectVendor: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Vendor', data);
        },
        selectVariant: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Variant', data);
        },
        incrementQty: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Qty', data);
        },
        decrementQty: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Decrement_Qty', data);
        },
        deleteProduct: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Delete_Product', data);
        },
        chekoutAddAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'chekout_add_address', data);
        },
        checkoutVerifyAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Checkout_verify_Address', data);
        },
        selectPaymentMethod: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_payment_method', data);
        },
        viewSupport: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_Support', data);
        },
        selectWhatsapp: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_whatsapp', data);
        },
        selectPhone: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_phone', data);
        },
        selectIntercom: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_intercom', data);
        },
        viewAccountSettings: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_account_settings', data);
        },
        viewAddressBook: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_address_book', data);
        },
        saveNewAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'save_new_address', data);
        },
        skipOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'skip_OTP', data);
        },
        resendOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Resend_OTP', data);
        },
        confirmOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'confirm_OTP', data);
        },
        verifyAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'verify_address', data);
        },
        setDefaultAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'set_default_address', data);
        },
        selectWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_wishlist', data);
        },
        moveToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Move_to_cart', data);
        },
        removeWishlistedProduct: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Remove_wishlisted_product', data);
        },
        clearWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'clear_wishlist', data);
        },
        editProfile: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Edit_profile', data);
        },
        addProfileSpeciality: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_speciality', data);
        },
        addProfileExpirience: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_expirience', data);
        },
        addProfileDN: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_DN', data);
        },
        addProfileOccupation: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_occupation', data);
        },
        saveProfile: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Save_profile', data);
        },
        selectCurrency: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Currency', data);
        },
        userSignOut: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'user_sign_out', data);
        },
        selectBestseller: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Bestseller', data);
        },
        selectRewards: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Rewards', data);
        },
        selectBrand: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Brand', data);
        },
        addWishlistToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_Wishlist_to_cart', data);
        },
        incrementWishlistItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Wishlist_Item', data);
        },
        decrementWishlistItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Decrement_Wishlist_Item', data);
        },
        addFavToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_Fav_to_cart', data);
        },
        incrementFavItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Fav_Item', data);
        },
        viewFDCBanner: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_FDC_Banner', data);
        },
        signInClick: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_in_click', data);
        },
        signInAction: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_in_action', data);
        },
        signOutAction: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_out_action', data);
        },
        viewBuyAgain: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_buy_again', data);
        },
        viewUserChallenge: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_User_Challenge', data);
        },
        reedemPoints: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Reedem_Points', data);
        },
        cancelReedemPoints: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Cancel_Reedem_points', data);
        },
        orderHelp: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Order_Help', data);
        },
        trackOrder: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Track_Order', data);
        },
        inlineSearch: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Inline_Search', data);
        },
        fullSearch: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Full_Search', data);
        },
        inlineSearchClick: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Inline_Search_Click', data);
        },
        profileUpdated: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Profile_Updated', data);
        },
        claimCode: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Claim_Code', data);
        },
        skipCongratsBanner: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Skip_Congrats_Banner', data);
        },
        buildYourClinicAddName: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Add_name', data);
        },
        buildYourClinicAddMobile: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Add_mobile', data);
        },
        buildYourClinicSelectRoom: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Select_Room', data);
        },
        buildYourClinicSelectBudget: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Select_budget', data);
        },
        buildYourClinicSelectTimeslot: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Select_Timeslot', data);
        },
        buildYourClinicSubmitRequest: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'BYC_Submit_request', data);
        },
        selectListFromHome: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Home_Mylist', data);
        },
        selectListFromAccount: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Acount_mylist', data);
        },
        createList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Create_List', data);
        },
        AddItemToMyList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_item_to_mylist', data);
        },
        chooseList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Check_list', data);
        },
        saveList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Save_to_list', data);
        },
        removeItemFromList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Remove_Item_from_list', data);
        },
        incrementQtyFromList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Qty_Mylist', data);
        },
        decrementQtyFromList: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Decrement_Qty_Mylist', data);
        },
        removePromo: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'remove_promo', data);
        },
        addListToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_list_to_cart', data);
        },
        createListFromProductDetailsPage: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Create_List_from_product', data);
        },
        purchase: function (data: any, sdkInstance: any): void {
        },
        selectFdcHomeBanner: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Home_FDC_Campaign', data);
        },
        addFdcCampaignItemToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_FDC_Campaign_Item', data);

        },
        addHomeFdcCampaignItemToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_home_FDC_Campaign_Item', data);
        }
    };
    contextMapper?: any;

}