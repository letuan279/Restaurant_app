<?php

use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\RestaurantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/get-restaurants', [RestaurantController::class, 'index']);
Route::post('/add-restaurant', [RestaurantController::class, 'store']);
Route::put('/update-restaurant/{id}', [RestaurantController::class, 'update']);
Route::delete('/delete-restaurant/{id}', [RestaurantController::class, 'destroy']);

Route::post('/register', [AuthController::class, 'register']);  
Route::post('/login', [AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user', [AuthController::class, 'user']);   
    Route::get('/logout', [AuthController::class, 'logout']);
});