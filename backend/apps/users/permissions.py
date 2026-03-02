from rest_framework import permissions

class IsRHOrAdmin(permissions.BasePermission):
    """
    Permet l'accès si l'utilisateur est RH ou Admin.
    """
    def has_permission(self, request, view):
        return request.user.role in ["RH", "ADMIN"]

class IsOwnerOrRH(permissions.BasePermission):
    """
    Permet l'accès si l'utilisateur est le propriétaire de l'objet
    ou si c'est un RH/Admin.
    """
    def has_object_permission(self, request, view, obj):
        # RH et Admin peuvent tout voir
        if request.user.role in ["RH", "ADMIN"]:
            return True
        # Sinon, seul le salarié peut voir ses données
        return obj.salarie == request.user
