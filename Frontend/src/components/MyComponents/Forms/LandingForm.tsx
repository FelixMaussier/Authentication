import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import ShinyText from "@/components/reactbits/ShinyText";
import { Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import SplitText from "@/components/reactbits/SplitText";
import { Rocket } from "lucide-react";

export default function LandingForm({
  onSwitch,
}: {
  onSwitch: (form: string) => void;
}) {
  return (
    <>
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Rocket className="h-8 w-8 text-blue-400" />
            </div>
            <SplitText
              text="Welcome Back!"
              className="text-5xl font-semibold text-center text-white mb-2"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <ShinyText
              text="Sign in to your account"
              disabled={false}
              speed={3}
              className="text-lg text-gray-400"
            />
          </div>
          <Card className="bg-gray-900/50 backdrop-blur border-gray-800 shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-white text-xl">Sign In</CardTitle>
              <ShinyText
                text="Choose your preferred method"
                disabled={false}
                speed={3}
                className="text-sm text-gray-400"
              />
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Button
                  onClick={() => onSwitch("google")}
                  variant="outline"
                  className="w-full bg-gray-800/50 border-gray-700 text-gray-200 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  <Chrome className="mr-2 h-4 w-4" />
                  Continue with Google
                </Button>
                <Button
                  onClick={() => onSwitch("bankID")}
                  variant="outline"
                  className="w-full bg-gray-800/50 border-gray-700 text-gray-200 hover:bg-blue-600 hover:border-gray-600 hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-gray-500/20"
                >
                  <img
                    className="mr-2 h-8 w-8"
                    src="/BankID_logo_white.svg"
                    alt="Bank ID Logo"
                  />
                  Continue with BankID
                </Button>
              </div>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full bg-gray-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-800 px-3 text-gray-400">Or</span>
                </div>
              </div>
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
                  <Mail className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </form>
              <div className="text-center space-y-3 pt-4">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  Forgot password?
                </Button>
                <p className="text-gray-500 text-sm">
                  {"Don't have an account? "}
                  <Button
                    onClick={() => onSwitch("signUp")}
                    variant="link"
                    className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal transition-colors duration-200"
                  >
                    Sign up
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
