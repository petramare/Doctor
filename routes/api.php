<?php

use App\Http\Controllers\Api\PatientController;
use App\Http\Controllers\Api\ManagerController;
use App\Http\Controllers\Api\AppointmentController;
use App\Http\Controllers\Api\DoctorController;
use App\Http\Controllers\api\InsuranceCompanyController;
use App\Models\Insurance_company;
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


//Patient
//Patient Route
Route::get('/patient', [PatientController::class, 'index']);
//Patient Search Route for Doctors
Route::get('/patient/find', [PatientController::class, 'search']);
//Patient detail info
Route::get('/patient/{id}', [PatientController::class, 'show']);
// Create new record in Patient Table
Route::post('/patient/insert', [PatientController::class, 'insert']);
//List of Insurance Companies
Route::get('/insuranceCompany', [InsuranceCompanyController::class, 'list']);
//Patient request status
Route::get('/patient/request/status', [PatientController::class, 'status']);
//Patient Edit info
Route::post('/patient/update', [PatientController::class, 'update']);
//Patient request
Route::post('/patient/request', [PatientController::class, 'request']);

Route::get('/mytest', [PatientController::class, 'mytest']);


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

//Doctors
// Doctor Route
Route::get('/doctors', [DoctorController::class, 'index']);
//Doctor Search Route for clinics
Route::get('/doctors/find', [DoctorController::class, 'search']);
// Doctor detail info
Route::get('/doctors/show/{id}', [DoctorController::class, 'show']);
//Doctor Search Route for clinics
Route::get('/doctor/findPatients', [DoctorController::class, 'searchPatients']);
//Doctor patientRequests
Route::get('/doctors/patient-request', [DoctorController::class, 'patientRequest']);
//Doctor patientList
Route::get('/doctors/patient-list', [DoctorController::class, 'patientList']);
//Doctor patientDetail
Route::get('/doctors/patient-detail', [DoctorController::class, 'patientDetail']);
// Create new record in Doctors Table
Route::post('/doctor/insert', [DoctorController::class, 'insert']);
//Doctor edit info
Route::post('/doctors/update', [DoctorController::class, 'update']);
//Doctor accept patient
Route::post('/doctors/accept', [DoctorController::class, 'acceptPatient']);
//TEST DOCTOR API
// Route::get('/doctor-mytest', [DoctorController::class, 'mytest']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});


// Appointments API
// patients of a doctor for appointment selection
Route::get('/appointments/patients', [AppointmentController::class, 'showDoctorsPatients']);
// Not used for anything at this point, might come handy
// Route::get('/appointments/{doctor_id}', [AppointmentController::class, 'showAppointments']);
// posting new appointment
Route::post('/appointments/update', [AppointmentController::class, 'updateAppointments']);
