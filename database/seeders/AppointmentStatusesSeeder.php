<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class AppointmentStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('appointment_statuses')->truncate();

        $statuses = [
            ["description" => "suggested"],
            ["description" => "rejected"],
            ["description" => "approved"],
            ["description" => "completed"],
        ];

        DB::table('appointment_statuses')->insert($statuses);
    }
}
