<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AppointmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('appointments')->truncate();

        $appointments = [
            [
                "doctor_id" => 1,
                "patient_id" => 1,
                "start" => "2023-03-20 10:00:53",
                "end" => "2023-03-20 11:00:53",
                "description" => "Just quick check",
                "appointment_status_id" => 1,
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 2,
                "start" => "2023-03-20 15:00:53",
                "end" => "2023-03-20 17:00:53",
                "description" => "Just quick check",
                "appointment_status_id" => 1,
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 1,
                "start" => "2023-03-15 16:00:53",
                "end" => "2023-03-15 18:00:53",
                "description" => "Just quick check",
                "appointment_status_id" => 1,
            ],

        ];

        DB::table('appointments')->insert($appointments);
    }
}
