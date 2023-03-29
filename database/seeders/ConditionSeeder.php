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
                "weight" => 95,
                "height" => 184,
                "history" => "cardiac",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 2,
                "weight" => 77,
                "height" => 176,
                "history" => "diabetic",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 3,
                "weight" => 70,
                "height" => 154,
                "history" => "After patella surgery",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 4,
                "weight" => 88,
                "height" => 194,
                "history" => "After heart surgery",
                "date" =>  date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 5,
                "weight" => 105,
                "height" => 194,
                "history" => "After brain surgery",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 6,
                "weight" => 77,
                "height" => 176,
                "history" => "cardiac",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 7,
                "weight" => 70,
                "height" => 154,
                "history" => "After lung cancer",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 8,
                "weight" => 88,
                "height" => 194,
                "history" => "after anorexia",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 9,
                "weight" => 70,
                "height" => 154,
                "history" => "Insomniac",
                "date" => date('Y-m-d H:i:s')
            ],
            [
                "patient_id" => 10,
                "weight" => 88,
                "height" => 194,
                "history" => "heavy smoker",
                "date" => date('Y-m-d H:i:s')
            ],
        ];

        DB::table('conditions')->insert($conditions);
    }
}
