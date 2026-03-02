from django.contrib import admin
from .models import Paie

@admin.register(Paie)
class PaieAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "type_affichage",
        "montant",
        "date_paiement",
        "created_at",
    )

    list_filter = (
        "type_paiement",
        "date_paiement",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
    )

    ordering = ("-date_paiement",)

    # Affichage lisible du type de paiement
    def type_affichage(self, obj):
        return obj.get_type_paiement_display()
    type_affichage.short_description = "Type de paiement"
