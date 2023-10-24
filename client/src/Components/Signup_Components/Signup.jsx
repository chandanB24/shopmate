import React from "react";
import { Button, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";

export default function Signup() {
  const { user, loginWithRedirect, isAuthenticated,logout } = useAuth0();
  return (
    <div
      style={{
        backgroundColor: "#0d0d0d",
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isAuthenticated ? (
        <Button colorScheme="red"
          onClick={() =>
            logout({ logoutParams: { returnTo: window.location.origin } })
            
          }
        >
          Log Out
        </Button>
      ) : (
        <>
          {" "}
          <Image
            w={100}
            h={100}
            mixBlendMode={"lighten"}
            src="https://hothardware.com/ContentImages/NewsItem/48873/content/siri_apple.jpg"
          />
          <Text color={"white"} fontSize={20}>
            Welcome to Shopmate
          </Text>
          <p style={{ color: "gray" }}>
            Already Registered ?{" "}
            <a href="#" style={{ color: "white" }}>
              Log in
            </a>
          </p>
          <br></br>
          <Button
            m={5}
            colorScheme="blue"
            onClick={() =>{
                loginWithRedirect()

            } }
            leftIcon={<FontAwesomeIcon icon={faGoogle} />}
          >
            Continue with Google
          </Button>{" "}
        </>
      )}
    </div>
  );
}
