"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Icon } from "@iconify/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = () => {
    toast.success("Login successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  const handleSignup = () => {
    toast.success("Sign Up successful! Redirecting...");
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  };

  return (
    <div className="flex w-full  gap-6">
      <Tabs defaultValue="Login">
        <TabsList className="bg-orange-500 w-full ">
          <TabsTrigger
            value="Login"
            className="text-xl font-semibold cursor-pointer"
          >
            Log In
          </TabsTrigger>
          <TabsTrigger
            value="Signup"
            className="text-xl font-semibold cursor-pointer"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Login">
          <Card className="bg-[#013978] w-[350px] text-white">
            <CardHeader>
              <CardTitle>Log In</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <div htmlFor="tabs-demo-current">Email</div>
                <Input
                  id="tabs-demo-current"
                  type="email"
                  placeholder="email"
                  defaultValue="nasirq206@gmail.com"
                />
              </div>
              <div className="grid gap-3">
                <div htmlFor="tabs-demo-new">Password</div>
                <div className="relative">
                  <Input
                    id="tabs-demo-new"
                    type={showPassword ? "text" : "password"}
                    placeholder="password"
                    defaultValue="cryptxion"
                  />
                  <Icon
                    icon={showPassword ? "bi:eye-slash" : "bi:eye"}
                    width="16"
                    height="16"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                onClick={handleLogin} 
                className="cursor-pointer bg-orange-500"
              >
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Signup">
          <Card className="bg-[#013978] w-[350px] text-white">
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <div htmlFor="tabs-demo-current">Name</div>
                <Input id="tabs-demo-current" type="text" placeholder="name" required/>
              </div>
              <div className="grid gap-3">
                <div htmlFor="tabs-demo-current">Email</div>
                <Input
                  id="tabs-demo-current"
                  type="email"
                  placeholder="email"
                  required
                />
              </div>
              <div className="grid gap-3">
                <div htmlFor="tabs-demo-new">Password</div>
                <div className="relative">
                  <Input id="tabs-demo-new" placeholder="password" required />
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Button
                onClick={handleSignup}
                className="cursor-pointer bg-orange-500"
              >
                sign Up
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
