import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Button, Center, Text } from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export default function Auth() {
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        if (res) {
          const load = await axios.post(
            "http://localhost:8080/admin/add_owner",
            { email: res.data.email, name: res.data.name }
          );
          console.log(load)
        }
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div
      className="flex justify-center items-center h-[100vh] flex-col"
      style={{
        background:
          "linear-gradient(to right top, #d474f6, #a48aff, #7099ff, #3ca3fc, #12a9eb)",
      }}
    >
      <div className="p-10 bg-gray-50 rounded-2xl shadow-2xl">
        <p className="text-2xl lg:text-4xl md:text-3xl mb-4 font-bold">
          welcome to shopmate
        </p>
        <div className="rounded-md bg-gray-">
          <Button
            w={"full"}
            variant="solid"
            leftIcon={<FaGoogle />}
            colorScheme={"red"}
            onClick={() => login()}
          >
            <Center>
              <Text>Sign in with Google</Text>
            </Center>
          </Button>
        </div>
      </div>
    </div>
  );
}
