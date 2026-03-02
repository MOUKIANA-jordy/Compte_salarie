from django.contrib import admin
from django.utils.html import format_html
from .models import Notification


@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "titre",
        "type_affichage",
        "statut_lecture",
        "date_envoi",
    )

    list_filter = (
        "type_notification",
        "is_read",
        "date_envoi",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
        "titre",
    )

    ordering = ("-date_envoi",)

    # Affichage lisible du type
    def type_affichage(self, obj):
        return obj.get_type_notification_display()
    type_affichage.short_description = "Type"

    # Statut visuel lu / non lu
    def statut_lecture(self, obj):
        if obj.is_read:
            return format_html('<span style="color:green;">Lu</span>')
        return format_html('<span style="color:red;">Non lu</span>')

    statut_lecture.short_description = "Statut"
