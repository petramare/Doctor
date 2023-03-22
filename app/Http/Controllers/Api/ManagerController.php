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
        // $manager = Manager::findOrFail($request->input('manager_id'));
        // // $manager->users()->sync($request->input('user', []));
        // // $manager->clinics()->sync($request->input('clinic', []));

        // $manager->save();

        $clinic = Clinic::findOrFail($request->input('clinic_id'));
        $clinic->name = $request->input('clinic.name');
        $clinic->address = $request->input('clinic.address');
        $clinic->registration_code = $request->input('clinic.registration_code');
        $clinic->tax_registration_code = $request->input('clinic.tax_registration_code');
        $clinic->save();

        $user = User::findOrFail($request->input('user_id'));
        $user->email = $request->input('user.email');
        $user->first_name = $request->input('user.first_name');
        $user->surname = $request->input('user.surname');
        $user->date_of_birth = $request->input('user.date_of_birth');
        $user->id_number = $request->input('user.id_number');
        $user->save();
    }
}
