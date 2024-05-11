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




