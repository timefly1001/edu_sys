from django.apps import AppConfig
from django.db.models.signals import post_migrate


def init_user(sender, **kwargs):
    from system.models import User
    if User.objects.count() == 0:
        add_info = {'username': 'admin', 'password': '123456'}
        User.objects.create(**add_info)


class SystemConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'system'

    def ready(self):
        post_migrate.connect(init_user, sender=self)
