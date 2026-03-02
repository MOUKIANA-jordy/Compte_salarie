from django.contrib import admin
from django.utils.html import format_html
from datetime import date
from .models import Document


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "type_affichage",
        "statut_document",
        "date_expiration",
    )

    list_filter = (
        "type_document",
        "date_expiration",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
    )

    ordering = ("-uploaded_at",)

    def type_affichage(self, obj):
        return obj.get_type_document_display()
    type_affichage.short_description = "Type"

    def statut_document(self, obj):
        if obj.date_expiration and obj.date_expiration < date.today():
            return format_html('<span style="color:red;">Expiré</span>')
        return format_html('<span style="color:green;">Valide</span>')
    statut_document.short_description = "Statut"
