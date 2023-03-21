<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Manager;
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


        //-taken from MI6
        // $mission = Mission::findOrFail($request->input('id'));

        // $originalOutcome = $mission->outcome;

        // $mission->name = $request->input('name');
        // $mission->year = $request->input('year');
        // $mission->outcome = $request->input('outcome');

        // $mission->save();

        // $admins = User::where('role', 'admin')->get();
        // if ($originalOutcome != $request->input('outcome')) {
        //     Notification::send($admins, new MissionOutcomeUpdated($mission));
        // }

        // return ['message' => 'Succesfully saved'];
    }
}
