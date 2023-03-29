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
                "name" => "111 - Všeobecná zdravotní pojišťovna",
                "address" => "Orlická 2020/2, Vinohrady, 130 00, Praha",

            ],
            [
                "name" => "201 - Vojenská zdravotní pojišťovna České republiky",
                "address" => "Drahobejlova 1404/4, 190 00, Praha",

            ],
            [
                "name" => "205 - Česká průmyslová zdravotní pojišťovna",
                "address" => "Jeremenkova 161/11, 703 00 Ostrava - Vítkovice",

            ],
            [
                "name" => "207 - Oborová zdravotní pojišťovna zaměstnanců bank, pojišťoven a stavebnictví",
                "address" => "Roškotova 1225/1, 140 00 Praha",
            ],
        ];

        DB::table('insurance_companies')->insert($companies);
    }
}
