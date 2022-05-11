<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
        $username = $request->input('username');
        $password = $request->input('password');

        $user = User::where('username', $username)->first();

        if(!$user){
            return response()->json([
                'status' => 400,
                'message' => "Incorrect username or password"
            ]);
        }

        if(!Hash::check($password, $user['password'])){
            return response()->json([
                'status' => 400,
                'message' => "Incorrect username or password"
            ]);
        }

        return response()->json([
            'status' => 200,
            'message' => "Login successfully",
            'user' => $user
        ]);
    }

}
