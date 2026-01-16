import React from 'react'

// Login Handle
import { LoginHandle } from './handle/loginHandle'

export const LoginPage: React.FC = () => {
    let username: string;
    let password: string;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
            {/* Glass Card */}
            <div className="w-full max-w-md bg-white/30 backdrop-blur-lg rounded-2xl shadow-xl p-6">
                {/* Header */}
                <div className="text-center mb-6 mt-6">
                    <h1 className="text-3xl font-bold text-gray-800">STI</h1>
                    <h1 className="text-xl font-bold text-gray-800">Material Requirement Planning</h1>
                    <p className="text-sm text-gray-600 mt-2">
                        Please sign in to continue
                    </p>
                </div>

                {/* Form */}
                <form className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            placeholder="Username"
                            onChange={(e) => username = e.target.value}
                            className="w-full px-4 py-2 rounded-lg bg-white/60 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            onChange={(e) => password = e.target.value}
                            className="w-full px-4 py-2 rounded-lg bg-white/60 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Remember me + Forgot */}
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="rounded border-gray-300" />
                            <span className="text-gray-700">Remember me</span>
                        </label>
                        <a href="#" className="text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full py-2.5 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:scale-[1.02] hover:bg-blue-700 transition mb-6"
                        onClick={(e) => { 
                            e.preventDefault();
                            let status: boolean = LoginHandle(username, password);
                            if (status) {
                                window.location.href = "/dashboard";
                            }
                        }}
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
