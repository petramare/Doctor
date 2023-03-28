<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Clinic;
use App\Models\Patient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class DoctorController extends Controller
{
    public function index()
    {
        $doctors = Doctor::query()
            ->with(['user', 'appointments'])
            ->get();
        return $doctors;
    }

    public function show($id)
    {
        $doctor = Doctor::query()
            ->with(['user', 'appointments'])
            ->where('user_id', $id)
            ->first();

        // dd($doctor);
        return $doctor;
    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        if (strlen($search) < 2) {
            $clinics = Clinic::query()
                ->get();
        }

        if (strlen($search) >= 2) {
            $clinics = Clinic::query()

                ->where('name', 'like', "%$search%")

                ->get();
        }

        return $clinics;
    }

    public function update(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
            'doctor_id' => 'required|integer',
            
            'user.first_name' => 'required|min:4|max:20',
            'user.surname' => 'required|min:4|max:20',
            'user.email' => 'required|email',
            'user.date_of_birth' => 'required|date|date_format:d.m.Y|before:today',
            'user.id_number' => 'required|min:6|max:10',
            'specialization' => 'required|min:3|max:20',
            'doctor_license_number' => 'required|min:3|max:20'

        ], [
            'user.email.required' => 'Email is required',
            'user.email.email' => 'Email is invalid',
            'user.first_name.required' => 'First name is required',
            'user.first_name.min' => 'First name is too short',
            'user.first_name.max' => 'First name is too long',

            'specialization.required' => 'Specialization is required',
            'specialization.min' => 'Specialization is too short',
            'specialization.max' => 'Specialization is too long',

            'doctor_license_number.required' => 'Doctor License Number is required',
            'doctor_license_number.min' => 'Doctor License Number is too short',
            'doctor_license_number.max' => 'Doctor License Number is too long',

            'user.surname.required' => 'Surname is required',
            'user.surname.min' => 'Surname is too short',
            'user.surname.max' => 'Surname is too long',
            'user.id_number.required' => 'Id number is required',
            'user.date_of_birth' => "Please enter a valid date in past in format dd.mm.yyy (e.g. 12.04.1982)"
        ])->validate();

        // Find existing Doctor and User records
        $doctor = Doctor::findOrFail($request->input('doctor_id'));
        $user = User::findOrFail($request->input('user_id'));

        // What is about to be changed in Doctor record
        $doctor->doctor_license_number = $request->input('doctor_license_number');
        $doctor->specialization = $request->input('specialization');
        $doctor->visiting_hours = $request->input('visiting_hours');

        // What is about to be changed in User record
        $user->email = $request->input('user.email');
        $user->first_name = $request->input('user.first_name');
        $user->surname = $request->input('user.surname');
        $user->date_of_birth = $request->input('user.date_of_birth');
        $user->id_number = $request->input('user.id_number');

        // Save the changes to database
        $doctor->save();
        $user->save();
    }

    public function insert(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'doctor.specialization' => 'required|min:3|max:20',
            'doctor.doctor_license_number' => 'required|min:3|max:20'

        ], [
            'doctor.specialization.required' => 'Specialization is required',
            'doctor.specialization.min' => 'Specialization is too short',
            'doctor.specialization.max' => 'Specialization is too long',

            'doctor.doctor_license_number.required' => 'Doctor License Number is required',
            'doctor.doctor_license_number.min' => 'Doctor License Number is too short',
            'doctor.doctor_license_number.max' => 'Doctor License Number is too long',
        ])->validate();

        // Create new Doctor record and fill it with data

        // Default visiting hours
        $visitingHours = [
            'monday' => false,
            'tuesday' => false,
            'wednesday' => false,
            'thursday' => false,
            'friday' => false,
        ];

        $visitingHours = array_merge($visitingHours, $request->input('visiting_hours'));
        $doctor = new Doctor();
        $doctor->user_id = Auth::id();
        $doctor->specialization = $request->input('doctor.specialization');
        $doctor->doctor_license_number = $request->input('doctor.doctor_license_number');
        $doctor->visiting_hours = json_encode($visitingHours);
        $doctor->save();
    }

    public function patientRequest()
    {
        $user = Auth::user();

        $doctor = $user->doctor;

        // $result = $doctor->patients()->with('user')->get();
        $result = $doctor->appliedPatients;
        return $result;
    }

    public function patientList()
    {
        $user = Auth::user();
        $doctor = $user->doctor;

        $result = $doctor->acceptedPatients;
        return $result;
    }

    public function patientDetail($userid)
    {
        // dd($userid);

        $user = User::where('id', $userid)->with('patient')->first();
        return $user;
    }

    public function acceptPatient(Request $request)
    {

        $user = Auth::user();

        $doctor = $user->doctor;
        $patientId = $request->input('patient');

        $status = $request->input('status');
        $doctor->patients()->updateExistingPivot($patientId, ['status' => $status]);
    }

    public function rejectPatient(Request $request)
    {

        $user = Auth::user();

        $doctor = $user->doctor;
        $patientId = $request->input('patient');

        $status = $request->input('status');
        $doctor->patients()->updateExistingPivot($patientId, ['status' => $status]);
    }


    // public function mytest()
    // {

    //     $userid = 13;

    //     $user = User::findOrFail($userid);

    //     $patient = $user->patient;

    //     $result = $patient;

    //     return $result;
    // }
}
