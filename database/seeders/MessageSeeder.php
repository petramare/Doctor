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
            [
                "doctor_id" => 1,
                "patient_id" => 1,
                "sender_user_id" => 3,
                "message" => "wassup dawg?",
                "file_path" => "c:/yo-mamma",
                "message_type_id" => 3,
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 1,
                "sender_user_id" => 1,
                "message" => "yo doc - just chillin mah man",
                "file_path" => "c:/bling-bling/sheesh",
                "message_type_id" => 3,
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 2,
                "sender_user_id" => 3,
                "message" => "youll gonna die",
                "file_path" => "c:/almost-dead-patients",
                "message_type_id" => 1,
            ],

        ];

        DB::table('messages')->insert($messages);
    }
}
