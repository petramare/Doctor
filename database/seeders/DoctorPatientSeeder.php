<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class DoctorPatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('doctor_patient')->truncate();

        $doctor_patient = [
            [
                "doctor_id" => 1,
                "patient_id" => 1
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 2
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 3
            ],
        ];

        DB::table('doctor_patient')->insert($doctor_patient);
    }
}
