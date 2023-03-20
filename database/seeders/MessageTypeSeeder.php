<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class MessageTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('message_types')->truncate();

        $types = [
            ["description" => "results"],
            ["description" => "invitation"],
            ["description" => "personal"],
            ["description" => "prescription"],
        ];

        DB::table('message_types')->insert($types);
    }
}
