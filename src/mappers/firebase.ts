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
        bannerClicked: function (data: { event_time: any; user_id: number; storefront_id: number; banner_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_carousel', { banner_id: data.banner_id });
        },
        productViewed: function (data: { product_id: string; event_time: any; storefront_id: number; product_name: string; category_name: string; category_id: number; sub_category_name: string; sub_category_id: number; brand: string; retail_price: number; discount: number; price: number; currency: any; image: any; subject_id?: string }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_item', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        addToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'add_to_cart', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        removeFromCart: function (data: any, sdkInstance: any): void {

        },
        addToWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'add_to_wishlist', { user_id: data.subject_id || '', product_id: data.product_id })
        },
        viewCategory: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_category', data)
        },
        viewSubCategory: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_subcategory', data)
        },
        updateCart: function (data: any, sdkInstance: any): void {
        },
        applyCoupon: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'apply_promo', { user_id: data?.subject_id || '', promo_code: data?.promo_code })
        },
        couponFailed: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'remove_promo', { user_id: data?.subject_id || '', promo_code: data?.promo_code })

        },
        viewCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_cart', { user_id: data?.subject_id || '' })
        },
        startCheckout: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'begin_checkout', data)
        },
        completeCheckout: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, "complete_checkout", data)
        },
        reportFailedPayment: function (data: any, sdkInstance: any): void {
        },
        changeAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'chekout_change_address', { user_id: data?.subject_id || '' })

        },
        selectHomeBanner: function (data: { banner_id: number; user_id?: any }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, "select_home_carousel", { user_id: data?.user_id || "", banner_id: data?.banner_id })
        },
        selectHomeHotlink: function (data: { user_id: number; hotlink_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_hotlink', { user_id: data?.user_id || "", hotlink_id: data?.hotlink_id })
        },
        viewHomeNewProducts: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_NP', { user_id: data?.user_id || "" })
        },
        selectHomeNewProduct: function (data: { user_id: number; product_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_NP', { user_id: data?.user_id, product_id: data?.product_id })

        },
        viewNewProduct: function (data: { product_id: number; section_name: string; subject_id?: string }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_NP', { user_id: data?.subject_id || '', product_id: data.product_id })
        },
        selectHomeOnSaleProduct: function (data: { user_id: number; product_id: number; subject_id?: string }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_onsale', { user_id: data?.subject_id || '', product_id: data.product_id })
        },
        viewOnSale: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_onsale', { user_id: data?.user_id || "" })
        },
        viewHomePromotions: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_promotions', { user_id: data?.user_id || "" })
        },
        selectHomePromotion: function (data: { user_id: number; promotion_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_promo', { user_id: data?.user_id, promotion_id: data?.promotion_id })
        },
        selectPromotion: function (data: { user_id: number; promotion_id: number; subject_id?: string, }, sdkInstance: any): void {
            //@ts-ignore
            logEvent(sdkInstance.analytics, 'select_promotion', { user_id: data?.subject_id || '', promotion_id: data?.promotion_id })
        },
        viewHomeVendors: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_vendors', { user_id: data?.user_id })
        },
        viewHomeBestSellers: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_Bestsellers', { user_id: data?.user_id })
        },
        viewHomeBrands: function (data: { user_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'view_brands', { user_id: data?.user_id })
        },
        selectHomeBrand: function (data: { user_id: number; brand_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_brand', { user_id: data.user_id, brand_id: data.brand_id })
        },
        selectHomeVendor: function (data: { user_id: number; vendor_id: number; }, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_home_vendor', { user_id: data?.user_id, vendor_id: data?.vendor_id })
        },
        //Rest of Firebase
        filterProducts: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'filter_products', data)
        },
        sortProducts: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'sort_products', data)
        },
        selectVendor: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Vendor', data)
        },
        selectVariant: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Variant', data)
        },
        incrementQty: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Qty', data)
        },
        decrementQty: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Decrement_Qty', data)
        },
        deleteProduct: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Delete_Product', data)
        },
        chekoutAddAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Chekout_Add_Address', data)
        },
        checkoutVerifyAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Checkout_verify_Address', data)
        },
        selectPaymentMethod: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_payment_method', data)
        },
        viewSupport: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_Support', data)
        },
        selectWhatsapp: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_whatsapp', data)
        },
        selectPhone: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_phone', data)
        },
        selectIntercom: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'select_intercom', data)
        },
        viewAccountSettings: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_account_settings', data)
        },
        viewAddressBook: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_address_book', data)
        },
        saveNewAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Save_new_address', data)
        },
        skipOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Skip_OTP', data)
        },
        resendOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Resend_OTP', data)
        },
        confirmOTP: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Confirm_OTP', data)
        },
        verifyAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Verify_Address', data)
        },
        setDefaultAddress: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Set_default_address', data)
        },
        selectWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_wishlist', data)
        },
        moveToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Move_to_cart', data)
        },
        removeWishlistedProduct: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Remove_wishlisted_product', data)
        },
        clearWishlist: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Clear_wishlist', data)
        },
        editProfile: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Edit_profile', data)
        },
        addProfileSpeciality: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_speciality', data)
        },
        addProfileExpirience: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_expirience', data)
        },
        addProfileDN: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_DN', data)
        },
        addProfileOccupation: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_profile_occupation', data)
        },
        saveProfile: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Save_profile', data)
        },
        selectCurrency: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Currency', data)
        },
        userSignOut: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'User_sign_out', data)
        },
        selectBestseller: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Bestseller', data)
        },
        selectRewards: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Rewards', data)
        },
        selectBrand: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Select_Brand', data)
        },
        addWishlistToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_Wishlist_to_cart', data)
        },
        incrementWishlistItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Wishlist_Item', data)
        },
        decrementWishlistItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Decrement_Wishlist_Item', data)
        },
        addFavToCart: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Add_Fav_to_cart', data)
        },
        incrementFavItem: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Increment_Fav_Item', data)
        },
        viewFDCBanner: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_FDC_Banner', data)
        },
        signInClick: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_in_click', data)
        },
        signInAction: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_in_action', data)
        },
        signOutAction: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Sign_out_action', data)
        },
        viewBuyAgain: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_buy_again', data)
        },
        viewUserChallenge: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'View_User_Challenge', data)
        },
        reedemPoints: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Reedem_Points', data)
        },
        cancelReedemPoints: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Cancel_Reedem_points', data)
        },
        orderHelp: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Order_Help', data)
        },
        trackOrder: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Track_Order', data)
        },
        inlineSearch: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Inline_Search', data)
        },
        fullSearch: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Full_Search', data)
        },
        profileUpdated: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Profile_Updated', data)
        },
        claimCode: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Claim_Code', data)
        },
        skipCongratsBanner: function (data: any, sdkInstance: any): void {
            logEvent(sdkInstance.analytics, 'Skip_Congrats_Banner', data)
        }

    };
    contextMapper?: any;

}