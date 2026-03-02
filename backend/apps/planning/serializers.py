from rest_framework import serializers
from .models import Planning

class PlanningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Planning
        fields = "__all__"
