<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use App\Models\Message_type;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    public function list()
    {
        $messages = Message::query()->with(['user', 'message_type', 'patient', 'patient.user', 'doctor', 'doctor.user'])->get();
        return $messages;
    }

    public function details($message_id)
    {
        $message = Message::where('id', $message_id)->with(['message_type', 'patient', 'patient.user', 'doctor', 'doctor.user'])->get();
        return $message;
    }

    public function messageTypes()
    {
        $messageTypes = Message_type::query()->get();
        return $messageTypes;
    }

    public function insert(Request $request)
    {
        $message = new Message();

        $message->sender_user_id = Auth::id();
        $message->doctor_id = $request->input('doctor_id');
        $message->patient_id = Auth::User()->patient->patient_id;
        // Do not know if we will use it
        $message->file_path = 'not available';
        $message->message = $request->input('message');
        $message->message_type_id = $request->input('message_type_id');
        $message->save();
    }

    public function patientsDoctors()
    {
        $patientDoctor = Patient::query()->with(['doctors', 'doctors.user'])->get();
        return $patientDoctor;
    }

    public function patientDoctors($user_id)
    {
        // Still I have all the doctors but I need only doctors that approved me as their patient
        $found_user = User::findOrFail($user_id);
        $patient = $found_user->patient;
        $doctors = $patient->doctors;
        foreach ($doctors as $doctor) {
            $appointments = $doctor->appointments()->where('patient_id', $patient->id)->get();
            $doctor->appointments = $appointments;
            $doctor->user;
        }
        return $patient;
    }

    public function direct($doctor_id, $patient_id)
    {
        // Display dirrect messages between 1 patient and 1 doctor
        $messages = Message::query()
            ->where('doctor_id', $doctor_id)
            ->where('patient_id', $patient_id)
            ->with(['user', 'message_type', 'patient', 'patient.user', 'doctor', 'doctor.user'])
            ->get();
        return $messages;
    }
}
