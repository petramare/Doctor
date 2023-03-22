<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Doctor;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;

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

        if (empty($search)) {
            $doctors = User::query()
                ->with(['doctor'])
                ->where('role', 'doctor')
                ->get();
        }

        if (!empty($search)) {
            $doctors = User::query()
                ->with(['doctor'])
                ->where('surname', 'like', "%$search%")
                ->orWhere('first_name', 'like', "%$search%")
                ->get();
        }
        return $doctors;
    }

    public function show($id)
    {
        $patient = Patient::query()
            ->with(['user'])
            ->where('user_id', $id)
            ->first();

        return $patient;
    }

    public function edit(Request $request, $id)
    {
        $patient = Patient::findOrFail($id);
        $patient->insurance_number = $request->input('insurance_number');
        $patient->save();






        // $user = $patient->user;
        // $user->first_name = $request->input('first_name');
        // $user->surname = $request->input('surname');
        // $user->email = $request->input('email');
        // $user->date_of_birth = $request->input('date_of_birth');
        // $user->id_number = $request->input('id_number');
        // $user->save();

    }
}
