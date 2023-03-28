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
                "user_id" => "14",
                "manager_id" => "1",
                "specialization" => "General practitioner",
                "doctor_license_number" => "12341",
                "visiting_hours" => '{"Monday": true, "Tuesday": false, "Wednesday": true, "Thursday": false, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "15",
                "manager_id" => "2",
                "specialization" => "Allergist",
                "doctor_license_number" => "76245",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "16",
                "manager_id" => "3",
                "specialization" => "Dermatologist",
                "doctor_license_number" => "84674",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "17",
                "manager_id" => "2",
                "specialization" => "Dentist",
                "doctor_license_number" => "87135",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": false, "Thursday": false, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "18",
                "manager_id" => "2",
                "specialization" => "General practitioner",
                "doctor_license_number" => "34695",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": false, "Thursday": false, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "19",
                "manager_id" => "1",
                "specialization" => "Physician",
                "doctor_license_number" => "12341",
                "visiting_hours" => '{"Monday": true, "Tuesday": false, "Wednesday": true, "Thursday": false, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "20",
                "manager_id" => "3",
                "specialization" => "Gastroenterologist",
                "doctor_license_number" => "62475",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "21",
                "manager_id" => "3",
                "specialization" => "Dentist",
                "doctor_license_number" => "84674",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "22",
                "manager_id" => "3",
                "specialization" => "Gastroenterologist",
                "doctor_license_number" => "34515",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": false, "Thursday": false, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "23",
                "manager_id" => "2",
                "specialization" => "Allergist",
                "doctor_license_number" => "35858",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": false, "Thursday": false, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
        ];

        DB::table('doctors')->insert($doctors);
    }
}
