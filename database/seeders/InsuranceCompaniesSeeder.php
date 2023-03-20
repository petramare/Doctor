<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class InsuranceCompaniesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('insurance_companies')->truncate();

        $companies = [
            [
                "name" => "111 - Vseobecna zdravotni pojistovna",
                "address" => "Na Perštýně 359/6, 110 00 Staré Město",

            ],
            [
                "name" => "201 - Vojenska zdravotni pojistovna",
                "address" => "Bělehradská 130, 120 00 Praha 2-Vinohrady",

            ],
            [
                "name" => "205 - Ceska zdravotni pojistovna",
                "address" => "Jeremenkova 161/11, Ostrava-Vítkovice PSČ: 703 00",

            ],
            [
                "name" => "207 - Oborova zdravotni pojistovna zamestnancu bank a pojistoven",
                "address" => "1, Roškotova 1225, 140 00 Praha",

            ],
        ];

        DB::table('insurance_companies')->insert($companies);
    }
}
