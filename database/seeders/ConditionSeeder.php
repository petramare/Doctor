<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class ConditionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('conditions')->truncate();

        $conditions = [
            [
                "patient_id" => 1,
                "weight" => 105,
                "height" => 194,
                "history" => "strong as bear",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 4,
                "weight" => 77,
                "height" => 176,
                "history" => "almost dead",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 8,
                "weight" => 70,
                "height" => 154,
                "history" => "surviving",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 1,
                "weight" => 88,
                "height" => 194,
                "history" => "light af",
                "date" => "20070523"
            ],
        ];

        DB::table('conditions')->insert($conditions);
    }
}
