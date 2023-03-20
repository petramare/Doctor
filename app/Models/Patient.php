<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->hasOne(User::class);
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
