from rest_framework import serializers
from .models import Paie

class PaieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paie
        fields = "__all__"
