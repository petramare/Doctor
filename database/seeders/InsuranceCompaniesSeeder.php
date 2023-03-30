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
            [
                "name" => "209 - Zaměstnanecká pojišťovna Škoda",
                "address" => "Husova 302 293 01 Mladá Boleslav",
            ],
            [
                "name" => "211 - Zdravotní pojišťovna ministerstva vnitra České republiky",
                "address" => "Vinohradská 2577/178, Vinohrady 130 00 Praha 3",
            ],
            [
                "name" => "213 - RBP, zdravotní pojišťovna",
                "address" => "Michálkovická 967/108, Slezská Ostrava 710 00 Ostrava",
            ],
            [
                "name" => "222 - Zdravotní pojišťovna VZP při České poště",
                "address" => "Sokolovská 651/136c, 186 00 Prague 8",
            ],
            [
                "name" => "226 - Zdravotní pojišťovna METAL-ALIANCE",
                "address" => "Za Viaduktem 1571/2, 140 00 Prague 4",
            ],
            [
                "name" => "227 - Zdravotní pojišťovna ministerstva obrany",
                "address" => "Na Pankráci 1885/30, 140 00 Prague 4",
            ],
            [
                "name" => "231 - Pojišťovna České lékařské pojišťovny",
                "address" => "Vodičkova 736/31, 110 00 Prague 1",
            ],
            [
                "name" => "233 - MAXIMA pojišťovna",
                "address" => "Na Pankráci 1590/127, 140 00 Prague 4",
            ],
        ];

        DB::table('insurance_companies')->insert($companies);
    }
}