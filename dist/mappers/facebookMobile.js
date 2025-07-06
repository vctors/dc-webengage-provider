"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facebookMobileMapper = void 0;
class facebookMobileMapper {
    constructor() {
        this.eventMapper = {
            userSignUp: function (data, sdkInstance) {
            },
            languageSelected: function (data, sdkInstance) {
            },
            productSearched: function (data, sdkInstance) {
            },
            bannerClicked: function (data, sdkInstance) {
            },
            productViewed: function (data, sdkInstance) {
                sdkInstance.logEvent(sdkInstance.AppEvents.ViewedContent, data);
            },
            addToCart: function (data, sdkInstance) {
            },
            removeFromCart: function (data, sdkInstance) {
            },
            addToWishlist: function (data, sdkInstance) {
            },
            viewCategory: function (data, sdkInstance) {
            },
            viewSubCategory: function (data, sdkInstance) {
            },
            updateCart: function (data, sdkInstance) {
            },
            applyCoupon: function (data, sdkInstance) {
            },
            couponFailed: function (data, sdkInstance) {
            },
            viewCart: function (data, sdkInstance) {
            },
            startCheckout: function (data, sdkInstance) {
            },
            completeCheckout: function (data, sdkInstance) {
            },
            reportFailedPayment: function (data, sdkInstance) {
            },
            changeAddress: function (data, sdkInstance) {
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
            },
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
            },
            buildYourClinicAddMobile: function (data, sdkInstance) {
            },
            buildYourClinicSelectRoom: function (data, sdkInstance) {
            },
            buildYourClinicSelectBudget: function (data, sdkInstance) {
            },
            buildYourClinicSelectTimeslot: function (data, sdkInstance) {
            },
            buildYourClinicSubmitRequest: function (data, sdkInstance) {
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
                sdkInstance.logPurchase(data.amount, data.currency, data.params);
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
exports.facebookMobileMapper = facebookMobileMapper;
