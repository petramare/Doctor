<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function showAppointments($doctor_id)
    {
        $appointments = Appointment::query()
            ->where('doctor_id', $doctor_id)
            ->with('appointment_status')
            ->get();

        return $appointments;
    }
}
