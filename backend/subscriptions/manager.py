from datetime import datetime
from datetime import timedelta

from accounts.models import Profile
from subscriptions.models import SubscriptionPlan


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

        return SubscriptionPlan.objects.filter(status="A")

    @staticmethod
    def buy_subscription(data):
        user_id = data.get('userId')
        profile_data = Profile.objects.get(user_id=user_id)
        subscription_id = data.get('subscription_id')
        get_sub_obj = SubscriptionPlan.objects.get(id=subscription_id)

        current_datetime = datetime.now()

        if not profile_data.is_subscription_activated:
            profile_data.sub_active_till = current_datetime+timedelta(days=get_sub_obj.duration)

        else:
            profile_data.sub_active_till += timedelta(days=get_sub_obj.duration)

        profile_data.subscription = get_sub_obj
        profile_data.is_subscription_activated = True
        profile_data.save()


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



