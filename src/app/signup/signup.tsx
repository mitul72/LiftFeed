"use client";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import { useUserAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, handleSignUp } = useUserAuth();
  const onSignUp = () => {
    handleSignUp(username, email, password);
  };

  useEffect(() => {
    if (user) {
      toast.success("Account created successfully");
      router.push("/");
    }
  }, [user]);

  return (
    <Card className="py-4 px-14 w-1/2  text-center max-md:w-5/6 max-md:px-5">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-center max-md:px-0">
        <h4 className="uppercase font-bold text-medium mt-2">
          Welcome to LiftFeed
        </h4>
        <small className="text-default-500">
          Start with your lifting journey today
        </small>
      </CardHeader>
      <CardBody className="overflow-visible py-2 flex flex-col gap-2 mt-2">
        <Input
          label="Username"
          placeholder="Enter your username"
          className="mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          className="mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          className="mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p className="text-tiny text-default-500">Select your interests:</p>
        <div className="flex gap-2">
          <Chip>Weightlifting</Chip>
          <Chip>Cardio</Chip>
          <Chip>Yoga</Chip>
          <Chip>Running</Chip>
        </div> */}
        <Button
          onClick={() => handleSignUp(username, email, password)}
          color="primary"
        >
          Sign Up
        </Button>
        <p className="text-small text-neutral-700">
          Already have an account{" "}
          <Link href="login" className="text-blue-400">
            log in
          </Link>
        </p>
      </CardBody>
    </Card>
  );
}
