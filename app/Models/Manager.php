<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Manager extends Model
{
    use HasFactory;

    // headache-solver - find, findorfail expect primary key to be named "id"
    protected $primaryKey = 'manager_id';


    public function user()
    {
        return $this->hasOne(User::class, 'id', 'user_id');
    }

    public function clinic()
    {
        return $this->hasOne(Clinic::class, 'id', 'clinic_id');
    }

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }
}
