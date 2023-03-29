<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();

        $users = [
            [
                "email" => "e.svarna@bigboss.eu",
                "password" => Hash::make('123456789'),
                "first_name" => "Evelína",
                "surname" => "Švarná",
                "date_of_birth" => "17-10-1950",
                "id_number" => "7673546156",
                "role" => "manager",
            ],
            [
                "email" => "karel@karel.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Karel",
                "surname" => "Slaneček",
                "date_of_birth" => "14-03-1992",
                "id_number" => "1354575683",
                "role" => "manager",
            ],
            [
                
                "email" => "pzel@poodle.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Pavlína",
                "surname" => "Zelená",
                "date_of_birth" => "14-03-1992",
                "id_number" => "234921039",
                "role" => "manager",
            ],
            [
                "email" => "anna.cer@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Anna",
                "surname" => "Černá",
                "date_of_birth" => "14-08-1982",
                "id_number" => "2349552039",
                "role" => "patient",
            ],
            [
                "email" => "maso@slavia.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Lukáš",
                "surname" => "Masopust",
                "date_of_birth" => "14-03-1992",
                "id_number" => "425231452",
                "role" => "patient",
            ],
            [
                "email" => "arny@neznam.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Arnošt",
                "surname" => "Křiklan",
                "date_of_birth" => "30-02-1987",
                "id_number" => "124236523",
                "role" => "patient",
            ],
            [
                "email" => "david.prasan@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "David",
                "surname" => "Prašan",
                "date_of_birth" => "14-11-1997",
                "id_number" => "2344466439",
                "role" => "patient",
            ],
            [
                "email" => "ladee.dee@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Marie",
                "surname" => "Libocká",
                "date_of_birth" => "25-11-1999",
                "id_number" => "2349203259",
                "role" => "patient",
            ],
            [
                "email" => "sylva.zak@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Sylvie",
                "surname" => "Žáková",
                "date_of_birth" => "10-10-1992",
                "id_number" => "2349203779",
                "role" => "patient",
            ],
            [
                "email" => "Fialka@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Lucie",
                "surname" => "Fialová",
                "date_of_birth" => "14-07-1991",
                "id_number" => "2349203179",
                "role" => "patient",
            ],
            [
                "email" => "karim@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Karim",
                "surname" => "Surim",
                "date_of_birth" => "14-11-1985",
                "id_number" => "2893492039",
                "role" => "patient",
            ],
            [
                "email" => "krevetka@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Ana",
                "surname" => "Peréz-Suaréz",
                "date_of_birth" => "17-06-1999",
                "id_number" => "2349203969",
                "role" => "patient",
            ],
            [
                "email" => "noe.wild@neznam.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Natan",
                "surname" => "Divoký",
                "date_of_birth" => "11-11-1998",
                "id_number" => "2346992039",
                "role" => "patient",
            ],
            [
                "email" => "simona@rakl.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Simona",
                "surname" => "Raklová",
                "date_of_birth" => "11-03-1960",
                "id_number" => "1415696584",
                "role" => "doctor",
            ],
            [
                "email" => "Lana@clinique.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Lana",
                "surname" => "Krátká",
                "date_of_birth" => "21-07-1968",
                "id_number" => "141535884",
                "role" => "doctor",
            ],
            [
                "email" => "adam@clinique.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Adam",
                "surname" => "Novotný",
                "date_of_birth" => "08-03-1995",
                "id_number" => "1415346569",
                "role" => "doctor",
            ],
            [
                "email" => "rud@neznam.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Rudolf",
                "surname" => "Blatný",
                "date_of_birth" => "14-08-1992",
                "id_number" => "2546345768",
                "role" => "doctor",
            ],
            [
                "email" => "angie@yahoo.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Angelika",
                "surname" => "Rajská",
                "date_of_birth" => "14-03-1972",
                "id_number" => "2464374568",
                "role" => "doctor",
            ],
            [
                "email" => "pavel@rakl.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Pavel",
                "surname" => "Rakl",
                "date_of_birth" => "01-03-1965",
                "id_number" => "1415346584",
                "role" => "doctor",
            ],
            [
                "email" => "radio@gaga.com",
                "password" => Hash::make('123456789'),
                "first_name" => "Lady",
                "surname" => "Gaga",
                "date_of_birth" => "14-03-1992",
                "id_number" => "435346457",
                "role" => "doctor",
            ],
            [
                "email" => "katerina@kellnerova.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Kateřina",
                "surname" => "Kellnerová",
                "date_of_birth" => "10-03-1988",
                "id_number" => "141746584",
                "role" => "doctor",
            ],
            [
                "email" => "ondrej.hans@neznam.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Ondřej",
                "surname" => "Hans",
                "date_of_birth" => "13-03-1991",
                "id_number" => "1415346111",
                "role" => "doctor",
            ],
            [
                "email" => "sebastian.seb@lab.cz",
                "password" => Hash::make('123456789'),
                "first_name" => "Sebastian",
                "surname" => "Pauk",
                "date_of_birth" => "01-02-1985",
                "id_number" => "141696284",
                "role" => "doctor",
            ],
        ];

        DB::table('users')->insert($users);
    }
}
