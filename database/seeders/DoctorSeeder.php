<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class DoctorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('doctors')->truncate();

        $doctors = [
            [
                "user_id" => "11",
                "manager_id" => "1",
                "specialization" => "General practitioner",
                "doctor_license_number" => "12341",
                "visiting_hours" => '{"monday": true, "tuesday": false, "wednesday": true, "thursday": false, "friday": true}',
            ],
            [
                "user_id" => "12",
                "manager_id" => "2",
                "specialization" => "Allergist",
                "doctor_license_number" => "76245",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true}',
            ],
            [
                "user_id" => "13",
                "manager_id" => "3",
                "specialization" => "Dermatologist",
                "doctor_license_number" => "84674",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": false}',
            ],
            [
                "user_id" => "14",
                "manager_id" => "2",
                "specialization" => "Dentist",
                "doctor_license_number" => "87135",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": false, "thursday": false, "friday": false}',
            ],
            [
                "user_id" => "15",
                "manager_id" => "2",
                "specialization" => "General practitioner",
                "doctor_license_number" => "34695",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": false, "thursday": false, "friday": false}',
            ],
            [
                "user_id" => "16",
                "manager_id" => "1",
                "specialization" => "Physician",
                "doctor_license_number" => "12341",
                "visiting_hours" => '{"monday": true, "tuesday": false, "wednesday": true, "thursday": false, "friday": true}',
            ],
            [
                "user_id" => "17",
                "manager_id" => "3",
                "specialization" => "Gastroenterologist",
                "doctor_license_number" => "62475",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true}',
            ],
            [
                "user_id" => "18",
                "manager_id" => "3",
                "specialization" => "Dentist",
                "doctor_license_number" => "84674",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": false}',
            ],
            [
                "user_id" => "19",
                "manager_id" => "3",
                "specialization" => "Gastroenterologist",
                "doctor_license_number" => "34515",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": false, "thursday": false, "friday": false}',
            ],
            [
                "user_id" => "20",
                "manager_id" => "2",
                "specialization" => "Allergist",
                "doctor_license_number" => "35858",
                "visiting_hours" => '{"monday": true, "tuesday": true, "wednesday": false, "thursday": false, "friday": false}',
            ],
        ];

        DB::table('doctors')->insert($doctors);
    }
}
