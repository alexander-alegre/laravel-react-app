<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @param Request $request
     */
    public function index(Request $request)
    {
        if (!$request->hasCookie('auth')) {
            $token = $request->user()->createToken('auth');
            $minutes = 60;
            return Response::view('home')->withCookie(cookie('auth', $token->plainTextToken, $minutes)->withHttpOnly(false));
        }
        return Response::view('home');
    }
}
