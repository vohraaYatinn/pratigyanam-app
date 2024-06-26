/* eslint-disable */
export class Urls {
    static MPHRMS_API_PREFIX = 'api/v2/';

    static SIGN_IN_EMAIL = Urls.MPHRMS_API_PREFIX + 'users/sign-in-email/';
    static PHONE_NUMBER_OTP = Urls.MPHRMS_API_PREFIX + 'users/phone-otp-verify/';
    static SIGN_UP_USER = Urls.MPHRMS_API_PREFIX + 'users/sign-up/';
    // static SIGN_UP_USER = Urls.MPHRMS_API_PREFIX + 'users/sign-up/';
    static EDIT_USER_PROFILE = Urls.MPHRMS_API_PREFIX + 'users/edit-profile/';
    static GET_USER_FAV = Urls.MPHRMS_API_PREFIX + 'accounts/user-favourite-music/';
    static GET_ALL_SUBSCRIPTION = Urls.MPHRMS_API_PREFIX + 'subscriptions/get-post-subscription/';
    static GET_ALL_SUBSCRIPTION_USERS = Urls.MPHRMS_API_PREFIX + 'subscriptions/get-post-subscription-for-user/';
    static EDIT_SUBSCRIPTION_ADMIN = Urls.MPHRMS_API_PREFIX + 'subscriptions/edit-subscription-admin/';
    static FETCH_ALL_SUBSCRIPTION_ADMIN = Urls.MPHRMS_API_PREFIX + 'subscriptions/fetch-all-subscription-admin/';
    static GET_MUSIC = Urls.MPHRMS_API_PREFIX + 'music/get-post-music/';
    static GET_SEARCH_MUSIC = Urls.MPHRMS_API_PREFIX + 'music/search-music/';

    static FETCH_MUSIC_BY_CATEGORY = Urls.MPHRMS_API_PREFIX + 'music/fetch-music-by-category/';
    static ADD_GET_CATEGORIES = Urls.MPHRMS_API_PREFIX + 'music/get-post-category/';
    static FETCH_MORNING_EVENING_CATEGORIES = Urls.MPHRMS_API_PREFIX + 'accounts/fetch-morning-evening-categories/';
    static SINGLE_DEVICE_LOGIN_CHECK = Urls.MPHRMS_API_PREFIX + 'users/single-device-login-check/';
    static DELETE_CATEGORIES = Urls.MPHRMS_API_PREFIX + 'music/delete-categories/';
    static DELETE_MUSIC = Urls.MPHRMS_API_PREFIX + 'music/delete-music/';
    static ADD_GET_RECENT = Urls.MPHRMS_API_PREFIX + 'accounts/user-recent-music/';
    static FETCH_ADMIN_ACCOUNT = Urls.MPHRMS_API_PREFIX + 'accounts/admin-dashboard/';
    static GET_REFRESH_TOKEN = Urls.MPHRMS_API_PREFIX + 'accounts/get-refresh-token/';

    static BUY_SUBSCRIPTION = Urls.MPHRMS_API_PREFIX + 'subscriptions/buy-subscription/';
    
    static GET_MUSIC_BY_ID = Urls.MPHRMS_API_PREFIX + 'music/get-music-by-id/';

    static IS_MUSIC_USER_FAV = Urls.MPHRMS_API_PREFIX + 'accounts/is-music-user-fav/';
    static LOGIN_USING_PHONE_NUMBER = Urls.MPHRMS_API_PREFIX + 'accounts/login-using-phone-number/';
    static VERIFY_OTP = Urls.MPHRMS_API_PREFIX + 'accounts/verify-otp/';
    static PAYMENT_ORDER_GATEWAY = Urls.MPHRMS_API_PREFIX + 'accounts/payment-order-fetch/';
    static CONFIRM_PAYMENT = Urls.MPHRMS_API_PREFIX + 'accounts/confirm-payment/';

}
