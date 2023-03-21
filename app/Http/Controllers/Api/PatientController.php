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

        return $doctors;
    }
}
