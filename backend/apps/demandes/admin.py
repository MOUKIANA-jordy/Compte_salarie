from django.contrib import admin
from django.utils.html import format_html
from .models import Demande


@admin.register(Demande)
class DemandeAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "type_affichage",
        "montant_souhaite",
        "statut_colore",
        "date_demande",
    )

    list_filter = (
        "type_demande",
        "statut",
        "date_demande",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
    )

    ordering = ("-date_demande",)

    # Affichage propre du type
    def type_affichage(self, obj):
        return obj.get_type_demande_display()
    type_affichage.short_description = "Type"

    # Statut coloré (projet +10 points)
    def statut_colore(self, obj):
        if obj.statut == "EN_ATTENTE":
            return format_html('<span style="color:orange;">En attente</span>')
        elif obj.statut == "APPROUVEE":
            return format_html('<span style="color:green;">Approuvée</span>')
        elif obj.statut == "REFUSEE":
            return format_html('<span style="color:red;">Refusée</span>')
        return obj.statut

    statut_colore.short_description = "Statut"
