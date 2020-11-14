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
        // 1440 seconds in a day
        $days = 1440 * 5;

        if (!$request->user()->currentAccessToken()) {
            $token = $request->user()->createToken('auth');
            return Response::view('home')
                ->withCookie(cookie('auth', $token->plainTextToken, $days)->withHttpOnly(false));
        }

        $token = $request->user()->currentAccessToken();
        return Response::view('home')
            ->withCookie(cookie('auth', $token->plainTextToken, $days)->withHttpOnly(false));
    }
}
