<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Relationship;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Support\Facades\Auth as FacadesAuth;
use Symfony\Component\Console\Input\Input;

class PatientController extends Controller
{
    public function index()
    {
        $patients = Patient::query()
            ->with(['user'])
            ->get();
        return $patients;
    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        if (strlen($search) < 2) {
            $doctors = User::query()
                ->with(['doctor'])
                ->where('role', 'doctor')
                ->get();
            return $doctors;
        } else if (strlen($search) >= 2) {
            $doctors = User::query()
                ->with(['doctor'])
                ->where('role', 'doctor')
                ->where(function ($query) use ($search) {
                    $query->where('surname', 'like', "%$search%")
                        ->orWhere('first_name', 'like', "%$search%");
                })
                ->get();
            return $doctors;
        }
    }




    public function show($id)
    {
        $patient = Patient::query()
            ->with(['user'])
            ->where('user_id', $id)
            ->first();
        return $patient;
    }

    public function update(Request $request)
    {

        // search for record in tables Patient and User
        $user = User::findOrFail($request->input('user_id'));
        // $patient = Patient::findOrFail($request->input('patient_id'));
        $patient = Patient::where('patient_id', $request->input('patient_id'))->first();

        // set what to be changed in table Patient
        $patient->insurance_number = $request->input('insurance_number');
        $patient->save();

        // set what to be changed in table User
        $user->email = $request->input('user.email');
        $user->first_name = $request->input('user.first_name');
        $user->surname = $request->input('user.surname');
        $user->date_of_birth = $request->input('user.date_of_birth');
        $user->id_number = $request->input('user.id_number');
        $user->save();
    }

    public function insert(Request $request)
    {
        // create new patient fill it with data and store it in db
        $patient = new Patient();
        $patient->user_id = Auth::id();
        $patient->insurance_company_id = $request->input('patient.insurance_company_id');
        $patient->insurance_number = $request->input('patient.insurance_number');
        $patient->save();
    }

    public function request(Request $request)
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $doctor = Doctor::where('doctor_id', $request->input('doctor'))->first();

        // dd($user->patient->id, $doctor->id);
        //attaching doctorid and patient id into doctor_patient table specified in Doctor model, 
        //it already knows the doctorId $request, and what patient to attach to from user->patients
        //second argument is array, with what column => the input status string 
        //maybe its not even like that but ...
        $doctor->patients()->attach($user->patient->patient_id, ['status' => $request->input('status')]);
    }

    public function status()
    {
        $user = Auth::user();

        $user = User::find($user->id);

        $patient = $user->patient;

        $result = $patient->doctors()->with('user')->get();
        return $result;
    }

    public function patientsDoctors()
    {
        $userId = 11; // Auth::id()

        $user = User::find($userId);

        $patient = $user->patient;

        $result = $patient->appliedDoctor;

        dd($result);
    }
}
