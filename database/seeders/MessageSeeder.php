<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('messages')->truncate();

        $messages = [
            //conversation invitation - unpaired
            [
                "doctor_id" => 1,
                "patient_id" => 1,
                "sender_user_id" => 14,
                "message" => "Hello, please bring your morning urine to the examination on Monday. Thank you.",
                "file_path" => "c:/invitation",
                "message_type_id" => 2,
                "created_at" => date('Y-m-d H:i:s')
            ],
             //conversation personal - unpaired
             [
                "doctor_id" => 8,
                "patient_id" => 6,
                "sender_user_id" => 9,
                "message" => "Hello, could you send me your number? I think we could be a good match together.",
                "file_path" => "c:/invitation",
                "message_type_id" => 3,
                "created_at" => date('Y-m-d H:i:s')
            ],
            //conversation personal
            [
                "doctor_id" => 2,
                "patient_id" => 2,
                "sender_user_id" => 15,
                "message" => "Hello, I'm sorry, but unfortunately I won't be present at the clinic on Tuesday. Could you come on Wednesday?",
                "file_path" => "c:/personal",
                "message_type_id" => 3,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 2,
                "sender_user_id" => 5,
                "message" => "Hello, I can't on Wednesday. What about Thursday?",
                "file_path" => "c:/personal",
                "message_type_id" => 3,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 2,
                "sender_user_id" => 15,
                "message" => "Hello, I'm sorry, I won't be at the clinic neither on Thursday. Please pick a date at our reservation system for a visit.",
                "file_path" => "c:/personal",
                "message_type_id" => 3,
                "created_at" => date('Y-m-d H:i:s')
            ],
            //conversation results
            [
                "doctor_id" => 3,
                "patient_id" => 3,
                "sender_user_id" => 16,
                "message" => "Hello, your results just arrived and there was nothing found in the blood sample.",
                "file_path" => "c:/results",
                "message_type_id" => 1,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 3,
                "sender_user_id" => 6,
                "message" => "Good to hear. Thank you and have a nice day.",
                "file_path" => "c:/results",
                "message_type_id" => 1,
                "created_at" => date('Y-m-d H:i:s')
            ],
            //conversation invitation
            [
                "doctor_id" => 4,
                "patient_id" => 4,
                "sender_user_id" => 17,
                "message" => "Hello, your results just arrived and I would like to discuss them with you personally. May you come on Wednesay at 10am?.",
                "file_path" => "c:/invitation",
                "message_type_id" => 2,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 4,
                "sender_user_id" => 7,
                "message" => "Hello, should I be worried? Wednesday suits me well.",
                "file_path" => "c:/invitation",
                "message_type_id" => 2,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 4,
                "sender_user_id" => 17,
                "message" => "We will talk. See you on Wednesday then.",
                "file_path" => "c:/invitation",
                "message_type_id" => 2,
                "created_at" => date('Y-m-d H:i:s')
            ],
            //conversation prescription
            [
                "doctor_id" => 5,
                "patient_id" => 5,
                "sender_user_id" => 8,
                "message" => "Hello, please can you send me a prescription for Cardisure?",
                "file_path" => "c:/prescription",
                "message_type_id" => 4,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 5,
                "sender_user_id" => 18,
                "message" => "Hello, we can not send the prescription for Cardisure without previous visit. Please pick a date at our reservation system for a visit.",
                "file_path" => "c:/prescription",
                "message_type_id" => 4,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 5,
                "sender_user_id" => 8,
                "message" => "Okey, I will see you on Wednesday at 11am. have a nice day.",
                "file_path" => "c:/prescription",
                "message_type_id" => 4,
                "created_at" => date('Y-m-d H:i:s')
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 5,
                "sender_user_id" => 18,
                "message" => "Perfect, you too.",
                "file_path" => "c:/prescription",
                "message_type_id" => 4,
                "created_at" => date('Y-m-d H:i:s')
            ],
            

        ];

        DB::table('messages')->insert($messages);
    }
}
