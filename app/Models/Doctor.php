<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Doctor extends Model
{
    use HasFactory;

    // headache-solver - find, findorfail expect primary key to be named "id"
    protected $primaryKey = 'doctor_id';

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function manager()
    {
        return $this->belongsTo(Manager::class);
    }

    public function patients()
    {                                           // name of the table, id-> doctor_id, id->patient_id
        return $this->belongsToMany(Patient::class, 'doctor_patient', 'doctor_id', 'patient_id')->withPivot('status');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function clinics()
    {
        return $this->belongsTo(Clinic::class);
    }
}
