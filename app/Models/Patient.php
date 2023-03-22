<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    // headache-solver - find, findorfail expect primary key to be named "id"
    protected $primaryKey = 'patient_id';

    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function doctors()
    {
        return $this->belongsToMany(Doctor::class);
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function insurance_company()
    {
        return $this->belongsTo(Insurance_company::class);
    }

    public function conditions()
    {
        return $this->hasMany(Condition::class);
    }
}
