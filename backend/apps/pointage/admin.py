from django.contrib import admin
from .models import Pointage

@admin.register(Pointage)
class PointageAdmin(admin.ModelAdmin):

    list_display = (
        "id",
        "salarie",
        "date",
        "heure_arrivee",
        "heure_depart",
        "heures_travaillees",
        "heures_sup",
        "mois_paie",
    )

    list_filter = (
        "mois_paie",
        "date",
    )

    search_fields = (
        "salarie__prenom",
        "salarie__nom",
    )

    ordering = ("-date",)
