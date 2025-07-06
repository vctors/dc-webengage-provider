"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseMapper = void 0;
const analytics_1 = require("firebase/analytics");
class firebaseMapper {
    constructor() {
        this.eventMapper = {
            userSignUp: function (data, sdkInstance) {
            },
            languageSelected: function (data, sdkInstance) {
            },
            productSearched: function (data, sdkInstance) {
            },
            bannerClicked: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_carousel', { banner_id: data.banner_id });
            },
            productViewed: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_item', data);
            },
            addToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'add_to_cart', data);
            },
            removeFromCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'delete_product', data);
            },
            addToWishlist: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'add_to_wishlist', data);
            },
            viewCategory: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_category', data);
            },
            viewSubCategory: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_subcategory', data);
            },
            updateCart: function (data, sdkInstance) {
            },
            applyCoupon: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'apply_promo', data);
            },
            couponFailed: function (data, sdkInstance) {
            },
            viewCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_cart', data);
            },
            startCheckout: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'begin_checkout', data);
            },
            completeCheckout: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, "complete_checkout", data);
            },
            reportFailedPayment: function (data, sdkInstance) {
            },
            changeAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'chekout_change_address', data);
            },
            selectHomeBanner: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, "select_home_carousel", data);
            },
            selectHomeHotlink: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_hotlink', data);
            },
            viewHomeNewProducts: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_NP', data);
            },
            selectHomeNewProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_NP', data);
            },
            viewNewProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_NP', data);
            },
            selectHomeOnSaleProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_onsale', data);
            },
            viewOnSale: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_onsale', data);
            },
            viewHomePromotions: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_promotions', data);
            },
            selectHomePromotion: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_promo', data);
            },
            selectPromotion: function (data, sdkInstance) {
                //@ts-ignore
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_promotion', data);
            },
            viewHomeVendors: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_vendors', data);
            },
            viewHomeBestSellers: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_Bestsellers', data);
            },
            viewHomeBrands: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_brands', data);
            },
            selectHomeBrand: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_brand', data);
            },
            selectHomeVendor: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_home_vendor', data);
            },
            //Rest of Firebase
            filterProducts: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'filter_products', data);
            },
            sortProducts: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'sort_products', data);
            },
            selectVendor: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Vendor', data);
            },
            selectVariant: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Variant', data);
            },
            incrementQty: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Increment_Qty', data);
            },
            decrementQty: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Decrement_Qty', data);
            },
            deleteProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Delete_Product', data);
            },
            chekoutAddAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'chekout_add_address', data);
            },
            checkoutVerifyAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Checkout_verify_Address', data);
            },
            selectPaymentMethod: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_payment_method', data);
            },
            viewSupport: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_Support', data);
            },
            selectWhatsapp: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_whatsapp', data);
            },
            selectPhone: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_phone', data);
            },
            selectIntercom: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_intercom', data);
            },
            viewAccountSettings: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_account_settings', data);
            },
            viewAddressBook: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'view_address_book', data);
            },
            saveNewAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'save_new_address', data);
            },
            skipOTP: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'skip_OTP', data);
            },
            resendOTP: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Resend_OTP', data);
            },
            confirmOTP: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'confirm_OTP', data);
            },
            verifyAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'verify_address', data);
            },
            setDefaultAddress: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'set_default_address', data);
            },
            selectWishlist: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'select_wishlist', data);
            },
            moveToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Move_to_cart', data);
            },
            removeWishlistedProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Remove_wishlisted_product', data);
            },
            clearWishlist: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'clear_wishlist', data);
            },
            editProfile: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Edit_profile', data);
            },
            addProfileSpeciality: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_profile_speciality', data);
            },
            addProfileExpirience: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_profile_expirience', data);
            },
            addProfileDN: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_profile_DN', data);
            },
            addProfileOccupation: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_profile_occupation', data);
            },
            saveProfile: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Save_profile', data);
            },
            selectCurrency: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Currency', data);
            },
            userSignOut: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'user_sign_out', data);
            },
            selectBestseller: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Bestseller', data);
            },
            selectRewards: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Rewards', data);
            },
            selectBrand: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Brand', data);
            },
            addWishlistToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_Wishlist_to_cart', data);
            },
            incrementWishlistItem: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Increment_Wishlist_Item', data);
            },
            decrementWishlistItem: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Decrement_Wishlist_Item', data);
            },
            addFavToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_Fav_to_cart', data);
            },
            incrementFavItem: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Increment_Fav_Item', data);
            },
            viewFDCBanner: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_FDC_Banner', data);
            },
            signInClick: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Sign_in_click', data);
            },
            signInAction: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Sign_in_action', data);
            },
            signOutAction: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Sign_out_action', data);
            },
            viewBuyAgain: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_buy_again', data);
            },
            viewUserChallenge: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_User_Challenge', data);
            },
            reedemPoints: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Reedem_Points', data);
            },
            cancelReedemPoints: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Cancel_Reedem_points', data);
            },
            orderHelp: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Order_Help', data);
            },
            trackOrder: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Track_Order', data);
            },
            inlineSearch: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Inline_Search', data);
            },
            fullSearch: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Full_Search', data);
            },
            inlineSearchClick: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Inline_search_Click', data);
            },
            profileUpdated: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Profile_Updated', data);
            },
            claimCode: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Claim_Code', data);
            },
            skipCongratsBanner: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Skip_Congrats_Banner', data);
            },
            buildYourClinicAddName: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Add_name', data);
            },
            buildYourClinicAddMobile: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Add_mobile', data);
            },
            buildYourClinicSelectRoom: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Select_Room', data);
            },
            buildYourClinicSelectBudget: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Select_budget', data);
            },
            buildYourClinicSelectTimeslot: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Select_Timeslot', data);
            },
            buildYourClinicSubmitRequest: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'BYC_Submit_request', data);
            },
            selectListFromHome: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Home_Mylist', data);
            },
            selectListFromAccount: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Acount_mylist', data);
            },
            createList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Create_List', data);
            },
            AddItemToMyList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_item_to_mylist', data);
            },
            chooseList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Check_list', data);
            },
            saveList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Save_to_list', data);
            },
            removeItemFromList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Remove_Item_from_list', data);
            },
            incrementQtyFromList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Increment_Qty_Mylist', data);
            },
            decrementQtyFromList: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Decrement_Qty_Mylist', data);
            },
            removePromo: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'remove_promo', data);
            },
            addListToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_list_to_cart', data);
            },
            createListFromProductDetailsPage: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Create_List_from_product', data);
            },
            purchase: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'purchase', data);
            },
            selectFdcHomeBanner: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_Home_FDC_Campaign', data);
            },
            addFdcCampaignItemToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_FDC_Campaign_Item', data);
            },
            addHomeFdcCampaignItemToCart: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Add_home_FDC_Campaign_Item', data);
            },
            selectSimilarProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_Similar_Product', data);
            },
            selectItemsToCancel: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Select_items_to_cancel', data);
            },
            decrementToCancelItemQuantity: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Decrement_to_Cancel_Item_Qty', data);
            },
            rateProductFromToaster: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Product_Rating_Toaster', data);
            },
            rateProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Product_Rating', data);
            },
            reviewProductFromProductDetails: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Product_Review_model', data);
            },
            searchHistoryClick: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'Search_History_Click', data);
            },
            selectRecommendedProduct: function (data, sdkInstance) {
                (0, analytics_1.logEvent)(sdkInstance.analytics, 'View_recommended_Product', data);
            },
        };
    }
}
exports.firebaseMapper = firebaseMapper;
