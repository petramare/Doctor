<?php


namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Clinic;

class DoctorController extends Controller
{
    public function index(){
        $doctors = Doctor::query()
            ->with(['user'])
            ->get();
            return $doctors;
    }

    public function show($user_id) {
        $doctor = User::findOrFail($user_id);

        return $doctor;
    }

    public function searchPatients(Request $request)
    {
        $search = $request->input('search');

        if (empty($search)) {
            $patients = User::query()
                ->with(['patient'])
                ->where('role', 'patient')
                ->get();
        }

        if (!empty($search)) {
            $patients = User::query()
                ->with(['patient'])
                ->where('first_name', 'like', "%$search}%")
                ->where('surname', 'like', "%{$search}%")
                ->get();

        return $patients;   
        }

    }

    public function searchClinics(Request $request)
    {
        $search = $request->input('search');

        if (empty($search)) {
            $clinics = Clinic::query()
                ->where(['clinic'])
                ->get();
        }

        if (!empty($search)) {
            $clinics = Clinic::query()
                ->where('clinic', 'like', "%$search}%")
                ->get();

        return $clinics;   
        }

    }

    public function edit(Request $request)
    {
        $doctor = Doctor::findOrFail($request->input('doctor_id'));

        $doctor->visiting_hours = $request->input('visiting_hours');
        $doctor->save();

        //... co chci menit
    }
}