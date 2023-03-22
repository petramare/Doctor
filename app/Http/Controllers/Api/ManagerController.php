<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Clinic;
use App\Models\Manager;
use App\Models\User;
use Illuminate\Http\Request;

class ManagerController extends Controller
{

    public function list()
    {
        $managers = Manager::query()->with(['user', 'clinic'])->get();
        return $managers;
    }

    public function details($manager_id)
    {
        $manager = Manager::where('manager_id', $manager_id)->with(['user', 'clinic'])->first();
        return $manager;
    }

    public function update(Request $request)
    {
        // search for record in tables Clinic and User
        $clinic = Clinic::findOrFail($request->input('clinic_id'));
        $user = User::findOrFail($request->input('user_id'));

        // set what to be changed in table Clinic
        $clinic->name = $request->input('clinic.name');
        $clinic->address = $request->input('clinic.address');
        $clinic->registration_code = $request->input('clinic.registration_code');
        $clinic->tax_registration_code = $request->input('clinic.tax_registration_code');
        $clinic->save();

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
        // when manager does additional registration - clinic record is being created
        $clinic = new Clinic();

        $clinic->name = $request->input('clinic.name');
        $clinic->address = $request->input('clinic.address');
        $clinic->registration_code = $request->input('clinic.registration_code');
        $clinic->tax_registration_code = $request->input('clinic.tax_registration_code');
        $clinic->save();

        // find clinic that have been just created
        $createdClinic = Clinic::latest()->first();

        // and also create manager record
        $manager = new Manager();
        $manager->user_id = $request->input('userId');
        $manager->clinic_id = $createdClinic->id;
        $manager->save();
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
}
