<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ClinicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('clinics')->truncate();

        $clinics = [
            [
                "name" => "Alfa Clinic",
                "address" => "Na Perštýně 359/6, 110 00 Staré Město",
                "registration_code" => "23452243",
                "tax_registration_code" => "41197518",
            ],
            [
                "name" => "Beta Clinic",
                "address" => "Bělehradská 130, 120 00 Praha 2-Vinohrady",
                "registration_code" => "6524531",
                "tax_registration_code" => "47114975",
            ],
            [
                "name" => "Gamma Clinic",
                "address" => "Jeremenkova 161/11, 703 00 Ostrava-Vítkovice",
                "registration_code" => "1454636",
                "tax_registration_code" => "47672234",
            ],
            // [
            //     "name" => "Omega Clinic",
            //     "address" => "Roškotova 1225/1, 140 00 Praha",
            //     "registration_code" => "1234145",
            //     "tax_registration_code" => "47114321",
            // ],
        ];

        DB::table('clinics')->insert($clinics);
    }
}
