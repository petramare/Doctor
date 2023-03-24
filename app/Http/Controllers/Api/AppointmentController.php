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

    public function updateAppointments(Request $request)
    {
        dd($request);
        $new_appointment = new Appointment();
        $new_appointment->start = $request->input("start");
        $new_appointment->end = $request->input('end');
        $new_appointment->description = $request->input("title");
        dd($new_appointment);
    }
}
