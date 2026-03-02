from django.contrib import admin
from .models import Dossier


@admin.register(Dossier)
class DossierAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "numero_secu",
        "ville",
        "pays",
        "created_at",
    )

    fieldsets = (
        ("Salarié", {
            "fields": ("salarie",)
        }),
        ("État civil", {
            "fields": ("date_naissance", "lieu_naissance", "numero_secu")
        }),
        ("Adresse", {
            "fields": ("adresse", "ville", "pays")
        }),
        ("Banque", {
            "fields": ("iban",)
        }),
        ("Contact d'urgence", {
            "fields": ("contact_nom", "contact_telephone", "lien_familial")
        }),
        ("Autres informations", {
            "fields": ("infos_complementaires",)
        }),
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
        "numero_secu",
    )

    list_filter = (
        "ville",
        "pays",
    )

    ordering = ("-created_at",)
