<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    public function list()
    {
        $messages = Message::query()->with(['message_type', 'patient', 'patient.user', 'doctor', 'doctor.user'])->get();
        return $messages;
    }

    public function details($message_id)
    {
        $message = Message::where('id', $message_id)->with(['message_type', 'patient', 'patient.user', 'doctor', 'doctor.user'])->get();
        return $message;
    }
}
