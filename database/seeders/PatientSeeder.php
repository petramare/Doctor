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
                "user_id" => 4,
                "insurance_company_id" => 1,
                "insurance_number" => "5245212635"
            ],
            [
                "user_id" => 5,
                "insurance_company_id" => 2,
                "insurance_number" => "84567564587"
            ],
            [
                "user_id" => 6,
                "insurance_company_id" => 3,
                "insurance_number" => "9736525896"
            ],
            [
                "user_id" => 7,
                "insurance_company_id" => 1,
                "insurance_number" => "5245217895"
            ],
            [
                "user_id" => 8,
                "insurance_company_id" => 1,
                "insurance_number" => "8456754786"
            ],
            [
                "user_id" => 9,
                "insurance_company_id" => 2,
                "insurance_number" => "9736578992"
            ],[
                "user_id" => 10,
                "insurance_company_id" => 1,
                "insurance_number" => "5225854521"
            ],
            [
                "user_id" => 11,
                "insurance_company_id" => 4,
                "insurance_number" => "8451476756"
            ],
            [
                "user_id" => 12,
                "insurance_company_id" => 2,
                "insurance_number" => "9736899552"
            ],
            [
                "user_id" => 13,
                "insurance_company_id" => 4,
                "insurance_number" => "9736586632"
            ],

        ];

        DB::table('patients')->insert($patients);
    }
}
