<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class PatientSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('patients')->truncate();

        $patients = [
            [
                "user_id" => 1,
                "insurance_company_id" => 1,
                "insurance_number" => "524521"
            ],
            [
                "user_id" => 4,
                "insurance_company_id" => 2,
                "insurance_number" => "8456756"
            ],
            [
                "user_id" => 8,
                "insurance_company_id" => 3,
                "insurance_number" => "973652"
            ],

        ];

        DB::table('patients')->insert($patients);
    }
}
