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
                "name" => "Health Care Services",
                "address" => "Dlouhá 728/21, 110 00 Staré Město",
                "registration_code" => "23546184",
                "tax_registration_code" => "41754533"
            ],
            [
                "name" => "Hugo Clinic",
                "address" => "Václavské nám. 832/18, 110 00 Nové Město",
                "registration_code" => "32165744",
                "tax_registration_code" => "45517791"
            ],
            [
                "name" => "Doktor a syn",
                "address" => "Jugoslávská 670/8, 120 00 Vinohrady",
                "registration_code" => "6615164",
                "tax_registration_code" => "49248743"
            ],
            [
                "name" => "Medic Inc.",
                "address" => "Panská 5, 110 00 Staré Město",
                "registration_code" => "26314674",
                "tax_registration_code" => "48732299"
            ],
            [
                "name" => "Medical Group",
                "address" => "Vinohradská 167, 130 00 Praha 3-Žižkov",
                "registration_code" => "43321634",
                "tax_registration_code" => "49743233"
            ],
            [
                "name" => "Wellness Center",
                "address" => "Máchova 3118/15, 612 00 Brno-střed",
                "registration_code" => "5241714",
                "tax_registration_code" => "47716331"
            ],
            [
                "name" => "U Dvou doktorů",
                "address" => "Vodičkova 710/31, 110 00 Nové Město",
                "registration_code" => "5674346",
                "tax_registration_code" => "47822352"
            ],
            [
                "name" => "Flow Clinic",
                "address" => "Klatovská 41, 301 00 Plzeň 3",
                "registration_code" => "25736214",
                "tax_registration_code" => "47714154"
            ],
            [
                "name" => "Media clinic",
                "address" => "Olbrachtova 1994/15, 140 00 Praha",
                "registration_code" => "23466354",
                "tax_registration_code" => "45724741"
            ],
            [
                "name" => "Lopital Clinic",
                "address" => "Husova 244/14, 110 00 Staré Město",
                "registration_code" => "3442454",
                "tax_registration_code" => "47523222"
            ],
            [
                "name" => "Healthy Clinic",
                "address" => "Dolní 306/27, 586 01 Jihlava",
                "registration_code" => "7456761",
                "tax_registration_code" => "48574651"
            ],
            [
                "name" => "Care Clinic",
                "address" => "Nádražní 101, 702 00 Ostrava-Vítkovice",
                "registration_code" => "4436164",
                "tax_registration_code" => "47157645"
            ]
        ];

        DB::table('clinics')->insert($clinics);
    }
}
