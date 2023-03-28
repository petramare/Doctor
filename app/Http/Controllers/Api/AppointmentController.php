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

        // striping the name of the timezone from the string
        $start = explode(' (', $request->input('start'))[0];
        $end = explode(' (', $request->input('end'))[0];


        // creating new Appointment
        $new_appointment = new Appointment();
        // adding one hour to start of the appointment
        $start_date = new Carbon($start);
        $new_appointment->start = $start_date;
        // adding one hout to end of the apppointment
        $end_date = new Carbon($end);
        $new_appointment->end = $end_date;
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

        $start = explode(' (', $request->input('start'))[0];
        $end = explode(' (', $request->input('end'))[0];

        $new_appointment = new Appointment();
        $new_appointment->patient_id = $patient->patient_id;
        $start_date = new Carbon($start);
        $new_appointment->start = $start_date;
        $end_date = new Carbon($end);
        $new_appointment->end = $end_date;
        $new_appointment->description = $request->input("title");
        $new_appointment->doctor_id = $request->input('doctor_id');
        $new_appointment->appointment_status_id = 1;
        // dd($new_appointment);
        $new_appointment->save();
    }

    public function showDoctorsPatients()
    {

        // $logged_user_id = 11;
        // $logged_user = User::findOrFail($logged_user_id);
        // getting locked in user
        $logged_user = Auth::user();
        // connecting user with doctor
        $doctor = $logged_user->doctor;
        // finding patients for a doctor with users
        $patients = $doctor->acceptedPatients;

        // dd($patients[0]->pivot);

        return $patients;
    }

    public function showPatientsDoctors()
    {
        $logged_user = Auth::user();

        // $patient = $logged_user->patient;


        // $doctors = $patient->acceptedDoctor;

        // foreach ($doctors as $doctor) {
        //     $appointments = $doctor->appointments()
        //         // ->where('patient_id', $patient->patient_id)
        //         ->where('appointment_status_id', 3)
        //         ->get();
        //     $doctor->appointments = $appointments;
        //     $doctor->user;
        // }

        // return $patient;

        // $logged_user_id = 13;
        // $logged_user = User::findOrFail($logged_user_id);


        $patient = $logged_user->patient;


        $doctors = $patient->acceptedDoctor;

        foreach ($doctors as $doctor) {
            $appointments = $doctor->appointments()
                ->where(function ($query) use ($patient) {
                    $query->where('patient_id', '!=', $patient->patient_id);
                    $query->where('appointment_status_id', 3);
                })
                ->orWhere(function ($query) use ($patient, $doctor) {
                    $query->where('patient_id', $patient->patient_id);
                    $query->where('doctor_id', $doctor->doctor_id);
                    $query->whereIn('appointment_status_id', [1, 2, 3]);
                })
                ->get();

            $doctor->appointments = $appointments;
            $doctor->user;
        }
        return $patient;
    }

    public function test()
    {

        // $patients = $doctor->patients()->with('user')->get();

        // return $patients;

        // $logged_user = Auth::user();
        // $logged_user_id = 13;
        // $logged_user = User::findOrFail($logged_user_id);



        // $patient = $logged_user->patient;
        // dd($patient);

        // $doctors = $patient->doctors;

        // foreach ($doctors as $doctor) {
        //     $appointments = $doctor->appointments()
        //         ->where('patient_id', $patient->patient_id)
        //         ->where('appointment_status_id', 3)
        //         ->get();
        //     $doctor->appointments = $appointments;
        //     $doctor->user;
        // }

        // return $patient;


        // $appointments->patient = $patient;

        // foreach ($appointments as $appointment) {
        //     $patient = $appointment->patient()->where('patient_id', $appointment->patient_id)->first();
        //     $appointment->patient = $patient;
        // }
        // $patient = Patient::find($appointments->patient_id);
        // return $patient;

        // $logged_user_id = 13;
        // $logged_user = User::findOrFail($logged_user_id);
        // $doctor = $logged_user->doctor;

        // $appointments = Appointment::where('doctor_id', $doctor->doctor_id)
        //     ->with('appointment_status')
        //     ->get();
        // foreach ($appointments as $appointment) {
        //     $patient_id = $appointment->patient_id;
        //     $patient = Patient::find($patient_id);
        //     $user = $patient->user;
        //     $appointment->patient = $user;
        // }
        // return $appointments;

        $logged_user_id = 11;
        $logged_user = User::findOrFail($logged_user_id);


        $patient = $logged_user->patient;

        $doctors = $patient->acceptedDoctor;

        foreach ($doctors as $doctor) {
            $appointments = $doctor->appointments()
                ->where(function ($query) use ($patient) {
                    $query->where('patient_id', '!=', $patient->patient_id);
                    $query->where('appointment_status_id', 3);
                })
                ->orWhere(function ($query) use ($patient, $doctor) {
                    $query->where('patient_id', $patient->patient_id);

                    $query->where('doctor_id', $doctor->doctor_id);
                    $query->whereIn('appointment_status_id', [1, 2, 3]);
                })
                ->get();

            $doctor->appointments = $appointments;
            $doctor->user;
        }
        return $patient;
        // foreach ($doctors as $doctor) {
        //     $appointments_patient = $doctor->appointments()
        //         ->where('patient_id', $patient->patient_id)
        //         ->whereIn('appointment_status_id', [1, 2, 3])

        //         ->get();
        // }





        // return ([$appointments_other_patients, $appointments_patient]);


        // $user = Auth::user();
        // $doctor = $user->doctor;

        // $logged_user_id = 13;
        // $logged_user = User::findOrFail($logged_user_id);
        // $doctor = $logged_user->doctor;
        // // dd($doctor);

        // $appId = 4;
        // $status = 3;
        // $appointment = Appointment::findOrFail($appId);
        // $appointment->update(['appointment_status_id' => $status]);

    }

    public function appList()
    {
        $logged_user = Auth::user();
        $doctor = $logged_user->doctor;

        $appointments = Appointment::where('doctor_id', $doctor->doctor_id)
            ->with('appointment_status')
            ->where('appointment_status_id', 1)
            ->get();
        foreach ($appointments as $appointment) {
            $patient_id = $appointment->patient_id;
            $patient = Patient::find($patient_id);
            $user = $patient->user;
            $appointment->patient = $user;
        }
        return $appointments;
    }

    public function updateStatusAppointmentApproved(Request $request)
    {
        $appId = $request->input('appId');
        $status = $request->input('value');
        $appointment = Appointment::findOrFail($appId);
        $appointment->update(['appointment_status_id' => $status]);
    }

    public function updateStatusAppointmentRejected(Request $request)
    {

        $appId = $request->input('appId');
        $status = $request->input('value');
        $appointment = Appointment::findOrFail($appId);
        $appointment->update(['appointment_status_id' => $status]);
    }
}
