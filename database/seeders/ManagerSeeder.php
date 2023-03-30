<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ManagerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('managers')->truncate();

        $managers = [
            [
                "user_id" => 21,
                "clinic_id" => 1,
            ],
            [
                "user_id" => 22,
                "clinic_id" => 2,
            ],
            [
                "user_id" => 23,
                "clinic_id" => 3,
            ],
        ];

        DB::table('managers')->insert($managers);
    }
}
