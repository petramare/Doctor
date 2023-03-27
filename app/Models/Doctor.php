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
        return $this->belongsToMany(Patient::class, 'doctor_patient', 'doctor_id', 'patient_id')->with('user')->withPivot('status')->orderBy("patient_id");
        // all code here, will be replaced with just ( patients() ) below this code. so it does not repeat.
    }

    public function appliedPatients()
    {
        return $this->patients()->wherePivot('status', 'applied');
        // return $this->belongsToMany(Patient::class, 'doctor_patient', 'doctor_id', 'patient_id')->withPivot('status')->wherePivot('status', 'applied');
    }

    public function acceptedPatients()
    {
        return $this->patients()->wherePivot('status', 'accepted');
        // return $this->belongsToMany(Patient::class, 'doctor_patient', 'doctor_id', 'patient_id')->withPivot('status')->wherePivot('status', 'accepted');
    }

    public function rejectedPatients()
    {
        return $this->patients()->wherePivot('status', 'rejected');
        // return $this->belongsToMany(Patient::class, 'doctor_patient', 'doctor_id', 'patient_id')->withPivot('status')->wherePivot('status', 'rejected');
    }

    public function messages()
    {
        return $this->hasMany(Message::class);
    }

    public function appointments()
    {
        return $this->hasMany(Appointment::class, 'doctor_id');
    }

    public function clinics()
    {
        return $this->belongsTo(Clinic::class);
    }
}
