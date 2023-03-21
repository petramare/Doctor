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
}
