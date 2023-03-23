<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;

class AppointmentController extends Controller
{
    public function showAppointments($doctor_id)
    {
        $appointments = Appointment::query()
            ->where('doctor_id', $doctor_id)
            ->get();

        return $appointments;
    }
}
