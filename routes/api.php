<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\ManagerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


//Patient Route
Route::get('/patient', [PatientController::class, 'index']);
//Patient Search Route for Doctors
Route::get('/patient/find', [PatientController::class, 'search']);

// Display list of managers
Route::get('/managers', [ManagerController::class, 'list'])->name('api.managers.list');
// Display details of one manager
Route::get('/managers/{id}', [ManagerController::class, 'details'])->name('api.managers.detail');
// Update existing record of managers, users, clinic table
Route::post('/managers/update', [ManagerController::class, 'update'])->name('api.managers.update');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});
