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
                "email" => "arny@neznam.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Arnošt",
                "surname" => "Křiklan",
                "date_of_birth" => "30-02-1987",
                "id_number" => "124236523",
                "role" => "patient",
            ],
            [
                "email" => "e.svarna@bigboss.eu",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Evelína",
                "surname" => "Švarná",
                "date_of_birth" => "14-03-1992",
                "id_number" => "767354656",
                "role" => "manager",
            ],
            [
                "email" => "pavel@rakl.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Pavel",
                "surname" => "Rakl",
                "date_of_birth" => "14-03-1992",
                "id_number" => "145346584",
                "role" => "doctor",
            ],
            [
                "email" => "maso@slavia.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Lukáš",
                "surname" => "Masopust",
                "date_of_birth" => "14-03-1992",
                "id_number" => "42523452",
                "role" => "patient",
            ],
            [
                "email" => "radio@gaga.com",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Lady",
                "surname" => "Gaga",
                "date_of_birth" => "14-03-1992",
                "id_number" => "435346457",
                "role" => "doctor",
            ],
            [
                "email" => "dan@pudil.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Daniel",
                "surname" => "Pudil",
                "date_of_birth" => "14-03-1992",
                "id_number" => "4537456735",
                "role" => "manager",
            ],
            [
                "email" => "weirdo@weirdo.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Karel",
                "surname" => "Janeček",
                "date_of_birth" => "14-03-1992",
                "id_number" => "1354575683",
                "role" => "manager",
            ],
            [

                "email" => "pzel@poodle.com",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Pavlína",
                "surname" => "Zelená",
                "date_of_birth" => "14-03-1992",
                "id_number" => "23492039",
                "role" => "patient",
            ],
            [
                "email" => "rud@neznam.cz",
                "password" => Hash::make('qwertqwert'),
                "first_name" => "Rudolf",
                "surname" => "Blatný",
                "date_of_birth" => "14-03-1992",
                "id_number" => "2546345768",
                "role" => "doctor",
            ],
            [
                "email" => "angie@yahoo.com",
                "password" => Hash::make('qwertqwert'),
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
