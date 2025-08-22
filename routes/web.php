<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/login', function () {
    return Inertia::render('Login', [
        'test' => 'Hello from Laravel!'
    ]);
});

Route::get('/test', function () {
    return Inertia::render('Test');
});

Route::get('/blade-test', function () {
    return view('blade-test');
});
