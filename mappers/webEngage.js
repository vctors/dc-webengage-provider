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
                sdkInstance.track('Added To Cart', data);
            },
            removeFromCart: function (data, sdkInstance) {
                sdkInstance.track('Removed From Cart', data);
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
                sdkInstance.track("On Sale Clicked", data);
            },
            viewHomePromotions: function (data, sdkInstance) {
                sdkInstance.track("Promotions Clicked", data);
            },
            selectHomePromotion: function (data, sdkInstance) {
            },
            selectPromotion: function (data, sdkInstance) {
            },
            viewHomeVendors: function (data, sdkInstance) {
                sdkInstance.track("Vendor Viewed", data);
            },
            viewHomeBestSellers: function (data, sdkInstance) {
                sdkInstance.track("Best Sellers Clicked", data);
            },
            viewHomeBrands: function (data, sdkInstance) {
            },
            selectHomeBrand: function (data, sdkInstance) {
            },
            selectHomeVendor: function (data, sdkInstance) {
                sdkInstance.track("Vendors Clicked", data);
            },
            //Firebase Events
            filterProducts: function (data, sdkInstance) {
            },
            sortProducts: function (data, sdkInstance) {
            },
            selectVendor: function (data, sdkInstance) {
            },
            selectVariant: function (data, sdkInstance) {
            },
            incrementQty: function (data, sdkInstance) {
            },
            decrementQty: function (data, sdkInstance) {
            },
            deleteProduct: function (data, sdkInstance) {
            },
            chekoutAddAddress: function (data, sdkInstance) {
            },
            checkoutVerifyAddress: function (data, sdkInstance) {
            },
            selectPaymentMethod: function (data, sdkInstance) {
            },
            viewSupport: function (data, sdkInstance) {
            },
            selectWhatsapp: function (data, sdkInstance) {
            },
            selectPhone: function (data, sdkInstance) {
            },
            selectIntercom: function (data, sdkInstance) {
            },
            viewAccountSettings: function (data, sdkInstance) {
            },
            viewAddressBook: function (data, sdkInstance) {
            },
            saveNewAddress: function (data, sdkInstance) {
            },
            skipOTP: function (data, sdkInstance) {
            },
            resendOTP: function (data, sdkInstance) {
            },
            confirmOTP: function (data, sdkInstance) {
            },
            verifyAddress: function (data, sdkInstance) {
            },
            setDefaultAddress: function (data, sdkInstance) {
            },
            selectWishlist: function (data, sdkInstance) {
            },
            moveToCart: function (data, sdkInstance) {
            },
            removeWishlistedProduct: function (data, sdkInstance) {
            },
            clearWishlist: function (data, sdkInstance) {
            },
            editProfile: function (data, sdkInstance) {
            },
            addProfileSpeciality: function (data, sdkInstance) {
            },
            addProfileExpirience: function (data, sdkInstance) {
            },
            addProfileDN: function (data, sdkInstance) {
            },
            addProfileOccupation: function (data, sdkInstance) {
            },
            saveProfile: function (data, sdkInstance) {
            },
            selectCurrency: function (data, sdkInstance) {
            },
            userSignOut: function (data, sdkInstance) {
            },
            selectBestseller: function (data, sdkInstance) {
            },
            selectRewards: function (data, sdkInstance) {
            },
            selectBrand: function (data, sdkInstance) {
            },
            addWishlistToCart: function (data, sdkInstance) {
            },
            incrementWishlistItem: function (data, sdkInstance) {
            },
            decrementWishlistItem: function (data, sdkInstance) {
            },
            addFavToCart: function (data, sdkInstance) {
            },
            incrementFavItem: function (data, sdkInstance) {
            },
            viewFDCBanner: function (data, sdkInstance) {
            },
            signInClick: function (data, sdkInstance) {
            },
            signInAction: function (data, sdkInstance) {
            },
            signOutAction: function (data, sdkInstance) {
            },
            viewBuyAgain: function (data, sdkInstance) {
            },
            viewUserChallenge: function (data, sdkInstance) {
            },
            reedemPoints: function (data, sdkInstance) {
            },
            cancelReedemPoints: function (data, sdkInstance) {
            },
            orderHelp: function (data, sdkInstance) {
            },
            trackOrder: function (data, sdkInstance) {
            },
            inlineSearch: function (data, sdkInstance) {
            },
            inlineSearchClick: function (data, sdkInstance) {
            },
            fullSearch: function (data, sdkInstance) {
            },
            profileUpdated: function (data, sdkInstance) {
            },
            claimCode: function (data, sdkInstance) {
            },
            skipCongratsBanner: function (data, sdkInstance) {
            },
            buildYourClinicAddName: function (data, sdkInstance) {
                sdkInstance.track("BYC_Add_name", data);
            },
            buildYourClinicAddMobile: function (data, sdkInstance) {
                sdkInstance.track("BYC_Add_mobile", data);
            },
            buildYourClinicSelectRoom: function (data, sdkInstance) {
                sdkInstance.track("BYC_Select_Room", data);
            },
            buildYourClinicSelectBudget: function (data, sdkInstance) {
                sdkInstance.track("BYC_Select_budget", data);
            },
            buildYourClinicSelectTimeslot: function (data, sdkInstance) {
                sdkInstance.track("BYC_Select_Timeslot", data);
            },
            buildYourClinicSubmitRequest: function (data, sdkInstance) {
                sdkInstance.track("BYC_Submit_request", data);
            },
            selectListFromHome: function (data, sdkInstance) {
            },
            selectListFromAccount: function (data, sdkInstance) {
            },
            createList: function (data, sdkInstance) {
            },
            AddItemToMyList: function (data, sdkInstance) {
            },
            chooseList: function (data, sdkInstance) {
            },
            saveList: function (data, sdkInstance) {
            },
            removeItemFromList: function (data, sdkInstance) {
            },
            incrementQtyFromList: function (data, sdkInstance) {
            },
            decrementQtyFromList: function (data, sdkInstance) {
            },
            removePromo: function (data, sdkInstance) {
            },
            addListToCart: function (data, sdkInstance) {
            },
            createListFromProductDetailsPage: function (data, sdkInstance) {
            },
            purchase: function (data, sdkInstance) {
            },
            selectFdcHomeBanner: function (data, skInstance) {
            },
            addFdcCampaignItemToCart: function (data, sdkInstance) {
            },
            addHomeFdcCampaignItemToCart: function (data, sdkInstance) {
            },
            selectSimilarProduct: function (data, sdkInstance) {
            },
            selectItemsToCancel: function (data, sdkInstance) {
            },
            decrementToCancelItemQuantity: function (data, sdkInstance) {
            },
            rateProductFromToaster: function (data, sdkInstance) {
            },
            rateProduct: function (data, sdkInstance) {
            },
            reviewProductFromProductDetails: function (data, sdkInstance) {
            },
            searchHistoryClick: function (data, sdkInstance) {
            },
            selectRecommendedProduct: function (data, sdkInstance) {
            },
        };
    }
}
exports.WebEngageMapper = WebEngageMapper;
