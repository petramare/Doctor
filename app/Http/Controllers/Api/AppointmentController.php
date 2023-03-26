<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;

use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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

    public function updateAppointmentsDoctor(Request $request)
    {
        // dd($request->all());

        // getting the logged in user
        $logged_user = Auth::user();
        //cool shit
        // getting the doctor that has the belongs to the user id
        $doctor = $logged_user->doctor;
        // dd($doctor);
        // creating new Appointment
        $new_appointment = new Appointment();
        // adding one hour to start of the appointment
        $hour_added_start = new Carbon($request->input("start"));
        $hour_added_start->addHours(1);
        $new_appointment->start = $hour_added_start;
        // adding one hout to end of the apppointment
        $hour_added_end = new Carbon($request->input('end'));
        $hour_added_end->addHours(1);
        $new_appointment->end = $hour_added_end;
        $new_appointment->description = $request->input("title");
        $new_appointment->patient_id = $request->input('patient_id');
        // adding the doctor id from the doctor
        $new_appointment->doctor_id = $doctor->doctor_id;
        $new_appointment->appointment_status_id = 3;
        // dd($new_appointment);
        $new_appointment->save();
    }

    public function updateAppointmentPatient(Request $request)
    {

        $logged_user = Auth::user();
        $patient = $logged_user->patient;



        $new_appointment = new Appointment();
        $new_appointment->patient_id = $patient->patient_id;
        $hour_added_start = new Carbon($request->input("start"));
        $hour_added_start->addHours(1);
        $new_appointment->start = $hour_added_start;
        $hour_added_end = new Carbon($request->input('end'));
        $hour_added_end->addHours(1);
        $new_appointment->end = $hour_added_end;
        $new_appointment->description = $request->input("title");
        $new_appointment->doctor_id = $request->input('doctor_id');
        $new_appointment->appointment_status_id = 1;
        // dd($new_appointment);
        $new_appointment->save();
    }

    public function showDoctorsPatients()
    {


        // getting locked in user
        $logged_user = Auth::user();
        // connecting user with doctor
        $doctor = $logged_user->doctor;
        // finding patients for a doctor with users
        $patients = $doctor->acceptedPatients;

        return $patients;
    }

    public function showPatientsDoctors()
    {
        $logged_user = Auth::user();

        $patient = $logged_user->patient;


        $doctors = $patient->acceptedDoctor;

        foreach ($doctors as $doctor) {
            $appointments = $doctor->appointments()
                ->where('patient_id', $patient->patient_id)
                ->where('appointment_status_id', 3)
                ->get();
            $doctor->appointments = $appointments;
            $doctor->user;
        }

        return $patient;
    }

    public function test()
    {
        // $logged_user_id = 11;
        // $logged_user = User::findOrFail($logged_user_id);

        // $doctor = $logged_user->doctor;
        // $patients = $doctor->patients()->with('user')->get();

        // return $patients;

        // $logged_user = Auth::user();
        $logged_user_id = 13;
        $logged_user = User::findOrFail($logged_user_id);


        $patient = $logged_user->patient;


        $doctors = $patient->doctors;

        foreach ($doctors as $doctor) {
            $appointments = $doctor->appointments()
                ->where('patient_id', $patient->patient_id)
                ->where('appointment_status_id', 3)
                ->get();
            $doctor->appointments = $appointments;
            $doctor->user;
        }

        return $patient;
    }
}
