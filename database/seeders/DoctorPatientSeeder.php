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
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 1,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 2,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 3,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 4,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 5,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 6,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 7,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 8,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 9,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 1,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 2,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 3,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 4,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 5,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 6,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 7,
                "status" => 'rejected'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 8,
                "status" => 'applied'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 9,
                "status" => 'accepted'
            ],
            [
                "doctor_id" => 10,
                "patient_id" => 10,
                "status" => 'rejected'
            ],
        ];

        DB::table('doctor_patient')->insert($doctor_patient);
    }
}
