<?php

namespace App\Http\Controllers;
use App\Models\Doctor;
use App\Models\User;
use Illuminate\Http\Request;

class DoctorController extends Controller
{
    public function index(){
        $doctors = Doctor::query()
            ->with(['user'])
            ->get();
            return $doctors;

    }

    public function search(Request $request)
    {
        $search = $request->input('search');

        $patients = User::query()
        ->with(['patient'])
        ->where('first_name', 'like', "%$search}%")
        ->where('surname', 'like', "%{$search}%")
        ->get();

        return $patients;


    }

}