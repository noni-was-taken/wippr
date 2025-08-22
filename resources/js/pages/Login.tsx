import React from 'react';

export default function Login({ test }: { test?: string }) {
    return (
        <div className="flex items-center justify-center h-screen">
            <h1 className="text-4xl font-bold text-blue-600">
                {test ?? "Login Page"}
            </h1>
        </div>
    );
}
