<?php


namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Clinic;
use Symfony\Component\Console\Input\Input;


class DoctorController extends Controller
{
    public function index(){
        $doctors = Doctor::query()
            ->with(['user'])
            ->get();
            return $doctors;
    }

    public function show($id) 
    {
        $doctor = Doctor::query()
            ->with(['user'])
            ->where('user_id', $id)
            ->first();

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
        
      if (strlen($search) < 2 ) {
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
        $doctor = Doctor::findOrFail($request->input('doctor_id'));

        $doctor->visiting_hours = $request->input('visiting_hours');
        $doctor->save();

        //... co chci menit
    }
}