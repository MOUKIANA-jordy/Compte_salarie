from rest_framework import serializers
from .models import Salarie

class SalarieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Salarie
        fields = "__all__"
