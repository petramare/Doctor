<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Insurance_company;
use Illuminate\Http\Request;

class InsuranceCompanyController extends Controller
{
    public function list()
    {
        $insuranceCompanies = Insurance_company::get();
        return $insuranceCompanies;
    }
}
