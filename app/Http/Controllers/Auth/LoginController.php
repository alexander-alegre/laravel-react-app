<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

//    public function login(Request $request)
//    {
//        $this->validateLogin($request);
//
//        // If the class is using the ThrottlesLogins trait, we can automatically throttle
//        // the login attempts for this application. We'll key this by the username and
//        // the IP address of the client making these requests into this application.
//        if (method_exists($this, 'hasTooManyLoginAttempts') &&
//            $this->hasTooManyLoginAttempts($request)) {
//            $this->fireLockoutEvent($request);
//
//            return $this->sendLockoutResponse($request);
//        }
//
//        if ($this->attemptLogin($request)) {
//            // generate auth cookie
//            $token = $request->user()->createToken('auth');
//            // login
//            $request->session()->regenerate();
//            $this->clearLoginAttempts($request);
//
//            if ($response = $this->authenticated($request, $this->guard()->user())) {
//                return $response;
//            }
//
//            // modify the first line if you want to return the user and token for an api
//            return $request->wantsJson()
//                ? new JsonResponse([], 204)
//                : redirect()->intended($this->redirectPath())->cookie('auth', $token->plainTextToken, 500);
//        }
//
//        // If the login attempt was unsuccessful we will increment the number of attempts
//        // to login and redirect the user back to the login form. Of course, when this
//        // user surpasses their maximum number of attempts they will get locked out.
//        $this->incrementLoginAttempts($request);
//
//        return $this->sendFailedLoginResponse($request);
//    }
//
//    public function logout(Request $request)
//    {
//        $this->guard()->logout();
//
//        $request->session()->invalidate();
//
//        $request->session()->regenerateToken();
//
//        if ($response = $this->loggedOut($request)) {
//            return $response;
//        }
//
//        if ($request->hasCookie('auth')) {
//           cookie()->forget('auth');
//        }
//
//        // TODO: delete token
//
//        return $request->wantsJson()
//            ? new JsonResponse([], 204)
//            : redirect('/');
//    }


    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
