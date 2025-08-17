import React from "react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignUpForm({
  onSwitch,
}: {
  onSwitch: (form: string) => void;
}) {
  return (
    <>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <Card className="bg-gray-900/50 backdrop-blur border-gray-800 shadow-xl">
            <CardHeader>
              <CardTitle className="text-white text-xl">Sign Up</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email address"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <div>
                  <Input
                    type="password"
                    placeholder="Password"
                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
                >
                  Create Account
                </Button>
              </form>
              <div className="text-center space-y-3 pt-4">
                <p className="text-gray-500 text-sm">
                  <Button
                    onClick={() => onSwitch("landing")}
                    variant="link"
                    className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal transition-colors duration-200"
                  >
                    Go Back
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
