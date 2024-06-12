from datetime import datetime
from datetime import timedelta

from accounts.models import Profile
from subscriptions.models import SubscriptionPlan
from user_management.models import UserDetails
from django.db import transaction


class SubscriptionManager:

    @staticmethod
    def add_new_subscription(data):
        name = data.get('name')
        description = data.get('description')
        price = data.get('price')
        duration = data.get('duration')
        sub_type = data.get('type')
        existing_plan = SubscriptionPlan.objects.filter(name=name)
        if existing_plan:
            raise Exception("Use a different name")
        SubscriptionPlan.objects.create(name=name, description=description, price=price,
                                        duration=duration, type=sub_type)

    @staticmethod
    def get_all_subscription(data):

        return SubscriptionPlan.objects.filter()

    @staticmethod
    def get_all_subscription_users(data):
        return SubscriptionPlan.objects.filter(status="A")

    @staticmethod
    @transaction.atomic
    def buy_subscription(request, data):
        subscription_id = data.get('subscription_id', False)
        user_id = request.user.id
        if not subscription_id:
            raise Exception("")
        profile_data = Profile.objects.get(user_id=user_id)
        get_sub_obj = SubscriptionPlan.objects.get(id=subscription_id)
        new_extended_time = profile_data.sub_active_till + timedelta(days=get_sub_obj.duration)
        profile_data.sub_active_till = new_extended_time
        profile_data.subscription = get_sub_obj
        profile_data.is_subscription_activated = True
        applied_referral_code = profile_data.applied_referral_code
        if applied_referral_code:
            get_users = UserDetails.objects.filter(referral_code=applied_referral_code)
            if get_users:
                profile_data_referral = Profile.objects.get(user_id=get_users[0].id)
                get_sub_obj = SubscriptionPlan.objects.filter(name__icontains="referral")
                if get_sub_obj:
                    get_sub_obj = get_sub_obj[0]
                    new_extended_time_for_referral = profile_data_referral.sub_active_till + timedelta(days=get_sub_obj.duration)
                    profile_data_referral.sub_active_till = new_extended_time_for_referral
                    profile_data_referral.subscription = get_sub_obj
                    profile_data_referral.is_subscription_activated = True
                    profile_data_referral.save()
        profile_data.save()
        return UserDetails.objects.filter(id=user_id).select_related(
                    'user_profile').prefetch_related('user_preferences')


    @staticmethod
    def edit_subscription_admin(data):
        id = data.get('id')
        if not id:
            raise Exception("No id provided")
        name = data.get('name')
        description = data.get('description')
        price = data.get('price')
        duration = data.get('duration')
        try:
            existing_plan = SubscriptionPlan.objects.get(id=id)
        except SubscriptionPlan.DoesNotExist:
            raise Exception("Subscription plan does not exist")
        if name:
            existing_plan.name = name
        if description:
            existing_plan.description = description
        if price:
            existing_plan.price = price
        if duration:
            existing_plan.duration = duration
        existing_plan.save()



