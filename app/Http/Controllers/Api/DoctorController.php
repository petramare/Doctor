<?php


namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Clinic;
use Illuminate\Support\Facades\Auth;
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

    // public function search(Request $request)
    // {
    //     $search = $request->input('search');

    //     if (strlen($search) < 2 ) {
    //         $patients = User::query()
    //             ->with(['patient'])
    //             ->where('role', 'patient')
    //             ->get();
    //             return $patients;
    //     }

    //     else if (strlen($search) >= 2) {
    //         $patients = User::query()
    //             ->with(['patient'])
    //             ->where('role', 'patient')
    //             ->where(function ($query) use ($search) {
    //                 $query->where('first_name', 'like', "%$search%")
    //                     ->orWhere('surname', 'like', "%$search%");
    //             })
    //             ->get();

    //     return $patients;   
    //     }

    //}

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
}
