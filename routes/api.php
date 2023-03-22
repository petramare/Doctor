<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\ManagerController;
use App\Http\Controllers\Api\DoctorController;
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

// Display list of one manager
Route::get('/managers/{id}', [ManagerController::class, 'details'])->name('api.managers.detail');

// Doctor Route
Route::get('/doctor', [DoctorController::class, 'index']);
// Doctor Route
Route::get('/doctor/{user_id}', [DoctorController::class, 'show']);
//Doctor Search Route for clinics
Route::get('/doctor/findClinics', [DoctorController::class, 'searchClinics']);
//Doctor Search Route for clinics
Route::get('/doctor/findPatients', [DoctorController::class, 'searchPatients']);
//Doctor edit info
Route::post('/doctor/edit', [DoctorController::class, 'edit']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});
