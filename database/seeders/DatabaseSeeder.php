<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call(appointmentStatusesSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(DoctorSeeder::class);
        $this->call(ClinicSeeder::class);
        $this->call(ManagerSeeder::class);
        $this->call(InsuranceCompaniesSeeder::class);
        $this->call(PatientSeeder::class);
        $this->call(MessageTypeSeeder::class);
        $this->call(DoctorPatientSeeder::class);
        $this->call(ConditionSeeder::class);
        $this->call(AppointmentSeeder::class);
        $this->call(MessageSeeder::class);



    }
}
