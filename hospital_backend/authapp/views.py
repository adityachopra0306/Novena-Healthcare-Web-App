from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import User

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        role = data.get("role")
        user_id = data.get("id")
        password = data.get("password")

        user = get_object_or_404(User, role=role, user_id=user_id)
        print(f"Stored Password: {user.password}, Entered Password: {password}")  # Debugging step

        if user.password == password:  
            return JsonResponse({"message": "Login successful!", "id":user_id}, status=200)
        else:
            return JsonResponse({"message": "Invalid credentials!"}, status=400)

from django.http import JsonResponse
from .models import Doctor, Patient
from django.views.decorators.csrf import csrf_exempt

def admin_dashboard(request):
    doctors = list(Doctor.objects.select_related("user").values("user__user_id", "specialization"))
    patients = list(Patient.objects.select_related("user").values("user__user_id", "medical_history"))

    return JsonResponse({"doctors": doctors, "patients": patients})

def doctor_dashboard(request, doctor_id):
    # Find the doctor using user_id
    doctor = get_object_or_404(Doctor, user__user_id=doctor_id)

    # Find patients assigned to this doctor
    patients = list(Patient.objects.filter(assigned_doctor=doctor)
                    .select_related("user")
                    .values("user__user_id", "medical_history"))

    return JsonResponse({"patients": patients})
