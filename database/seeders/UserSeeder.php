<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

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
                "name" => "arnyrulez",
                "email" => "arny@neznam.cz",
                "password" => "krtecek",
                "first_name" => "Arnošt",
                "surname" => "Křiklan",
                "date_of_birth" => "30-02-1987",
                "id_number" => "124236523",
                "role" => "patient",
            ],
            [
                "name" => "Evelin",
                "email" => "e.svarna@bigboss.eu",
                "password" => "gucci",
                "first_name" => "Evelína",
                "surname" => "Švarná",
                "date_of_birth" => "14-03-1992",
                "id_number" => "767354656",
                "role" => "manager",
            ],
            [
                "name" => "dokturek",
                "email" => "pavel@rakl.cz",
                "password" => "granat",
                "first_name" => "Pavel",
                "surname" => "Rakl",
                "date_of_birth" => "14-03-1992",
                "id_number" => "145346584",
                "role" => "doctor",
            ],
            [
                "name" => "masicko",
                "email" => "maso@slavia.cz",
                "password" => "ligamistru",
                "first_name" => "Lukáš",
                "surname" => "Masopust",
                "date_of_birth" => "14-03-1992",
                "id_number" => "42523452",
                "role" => "patient",
            ],
            [
                "name" => "pokerface",
                "email" => "radio@gaga.com",
                "password" => "popopopoker",
                "first_name" => "Lady",
                "surname" => "Gaga",
                "date_of_birth" => "14-03-1992",
                "id_number" => "435346457",
                "role" => "doctor",
            ],
            [
                "name" => "pudil",
                "email" => "dan@pudil.cz",
                "password" => "boleslav",
                "first_name" => "Daniel",
                "surname" => "Pudil",
                "date_of_birth" => "14-03-1992",
                "id_number" => "4537456735",
                "role" => "manager",
            ],
            [
                "name" => "prezident",
                "email" => "weirdo@weirdo.cz",
                "password" => "moneybag",
                "first_name" => "Karel",
                "surname" => "Janeček",
                "date_of_birth" => "14-03-1992",
                "id_number" => "1354575683",
                "role" => "manager",
            ],
            [
                "name" => "pavca",
                "email" => "pzel@poodle.com",
                "password" => "kamion",
                "first_name" => "Pavlína",
                "surname" => "Zelená",
                "date_of_birth" => "14-03-1992",
                "id_number" => "23492039",
                "role" => "patient",
            ],
            [
                "name" => "rudy07",
                "email" => "rud@neznam.cz",
                "password" => "fagaerhrt",
                "first_name" => "Rudolf",
                "surname" => "Blatný",
                "date_of_birth" => "14-03-1992",
                "id_number" => "2546345768",
                "role" => "doctor",
            ],
            [
                "name" => "angel",
                "email" => "angie@yahoo.com",
                "password" => "fgsrth",
                "first_name" => "Angelika",
                "surname" => "Rajská",
                "date_of_birth" => "14-03-1992",
                "id_number" => "24643574568",
                "role" => "doctor",
            ],
        ];

        DB::table('users')->insert($users);
    }
}
