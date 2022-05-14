<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{

    public function register(Request $request){
        $user = User::where('username', $request->input('username'))->first();

        if($user){
            return response()->json([
                "status" => 400,
                "message" => "Username already taken"
            ]);
        }

        else {
            $newUser = new User;
            $newUser->name = $request->input('name');
            $newUser->username = $request->input('username');
            $newUser->password = Hash::make($request->input('password'));
            $newUser->save();

            return response()->json([
                "status" => 200,
                "message" => "Create new user successfully",
                "user" => $newUser
            ]);
        }
    }

    public function login(Request $request){

        if(!Auth::attempt($request->only('username', 'password'))){
            return response()->json([
                'status' => 400,
                'message' => "Incorrect username or password"
            ]);
        }

        /** @var \App\Models\User */
        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;

        $cookie = cookie('jwt', $token, 1); // 1 day
        
        return response()->json([
            'status' => 200,
            'message' => "Login successfully",
            'token' => $token,
            'user' => $user
        ])->withCookie($cookie);
    }

    public function logout(Request $request)
    {
        $cookie = Cookie::forget('jwt');

        $request->user()->tokens()->delete();

        return response()->json([
            'status' => 200,
            'message' => "Logout successfully",
        ]);
    }

    public function checkUser()
    {
        return response()->json([
            'status' => 200,
            'message' => 'User Authenticated'
        ]);
    }

}
