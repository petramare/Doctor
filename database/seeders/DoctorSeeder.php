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
                "user_id" => "3",
                "manager_id" => "1",
                "specialization" => "ORL",
                "doctor_license_number" => "12341",
                "visiting_hours" => '{"Monday": true, "Tuesday": false, "Wednesday": true, "Thursday": false, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "5",
                "manager_id" => "2",
                "specialization" => "ortoped",
                "doctor_license_number" => "6245",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "9",
                "manager_id" => "3",
                "specialization" => "ocni",
                "doctor_license_number" => "84674",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
            [
                "user_id" => "10",
                "manager_id" => "0",
                "specialization" => "zubar",
                "doctor_license_number" => "345135",
                "visiting_hours" => '{"Monday": true, "Tuesday": true, "Wednesday": false, "Thursday": false, "Friday": false, "Saturday": false, "Sunday": false}',
            ],
        ];

        DB::table('doctors')->insert($doctors);
    }
}
