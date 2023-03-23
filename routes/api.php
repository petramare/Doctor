<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\ManagerController;
use App\Http\Controllers\Api\AppointmentController;
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


//Doctors
//insert all Doctor routes petra 

//Patient
//Patient Route
Route::get('/patient', [PatientController::class, 'index']);
//Patient Search Route for Doctors
Route::get('/patient/find', [PatientController::class, 'search']);
//Patient detail info
Route::get('/patient/{id}', [PatientController::class, 'show']);
//Patient Edit info
Route::post('/patient/update', [PatientController::class, 'update']);

//Managers
//Manager Search Doctors
Route::get('/managers/find', [ManagerController::class, 'search'])->name('api.managers.search');
// Display list of managers
Route::get('/managers', [ManagerController::class, 'list'])->name('api.managers.list');
// Display details of one manager
Route::get('/managers/{user_id}', [ManagerController::class, 'details'])->name('api.managers.detail');
// Create record of managers and clinic tables
Route::post('/manager/insert', [ManagerController::class, 'insert'])->name('api.managers.update');
// Update existing record of managers, users, clinic tables
Route::post('/managers/update', [ManagerController::class, 'update'])->name('api.managers.insert');


// Doctor Route
Route::get('/doctors', [DoctorController::class, 'index']);
// Doctor detail info
Route::get('/doctors/show/{id}', [DoctorController::class, 'show']);
//Doctor Search Route for clinics
Route::get('/doctors/find', [DoctorController::class, 'search']);
//Doctor Search Route for clinics
//Route::get('/doctor/findPatients', [DoctorController::class, 'searchPatients']);
//Doctor edit info
Route::post('/doctors/update', [DoctorController::class, 'update']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});


// Appointments API
Route::get('/appointments/{doctor_id}', [AppointmentController::class, 'showAppointments']);
