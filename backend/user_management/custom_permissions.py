from rest_framework.permissions import BasePermission
import jwt
from django.conf import settings
from datetime import datetime, timedelta

class CheckAuthUser(BasePermission):
    message = "Access denied. You must be a member of the 'special_group' group."

    def has_permission(self, request, view):
        try:
            token = request.headers.get("jwtToken", False)
            if not token:
                return False
            try:
                decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
                if decoded_payload['id']:
                    request.user.id = decoded_payload['id']
                    return True
            except jwt.ExpiredSignatureError:
                return None
            except jwt.InvalidTokenError:
                return None
        except Exception:
            return False

class CheckAdminUser(BasePermission):
    message = "Access denied. You must be a member of the 'special_group' group."

    def has_permission(self, request, view):
        try:
            token = request.headers.get("jwtToken", False)
            if not token:
                return False
            try:
                decoded_payload = jwt.decode(token, settings.JWT_SECRET_KEY, algorithms=[settings.JWT_ALGORITHM])
                if decoded_payload['id'] and decoded_payload['role'] == "admin":
                    request.user.id = decoded_payload['id']
                    return True
            except jwt.ExpiredSignatureError:
                return None
            except jwt.InvalidTokenError:
                return None
        except Exception:
            return False

