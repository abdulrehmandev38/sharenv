import { useEffect, useRef, useState } from "react";

export function LoginForm({
  type = "standard",
  theme = "outline",
  size = "large",
  text,
  shape,
  logoAlignment,
  width,
  locale,
  ...props
}) {
  const signup = (p) => {
    console.log(p);
  };
  const [isOAuthClientLoaded, setIsOAuthClientLoaded] = useState(false);

  const btnContainerRef = useRef(null);

  const onSuccessRef = useRef(null);
  onSuccessRef.current = (token) => signup(token);

  useEffect(() => {
    const scriptTag = document.createElement("script");

    scriptTag.src = "https://accounts.google.com/gsi/client";
    scriptTag.async = true;
    scriptTag.defer = true;

    scriptTag.onload = () => {
      setIsOAuthClientLoaded(true);
    };

    scriptTag.onerror = () => {
      setIsOAuthClientLoaded(false);
    };

    document.body.appendChild(scriptTag);

    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  useEffect(() => {
    if (!isOAuthClientLoaded) {
      return;
    }

    window.google?.accounts.id.initialize({
      client_id: process.env.REACT_AAPP_GOOGLE_CLIENT_ID,
      scope: "profile email",
      callback: (credentialResponse) => {
        if (!credentialResponse.clientId || !credentialResponse.credential) {
          return;
        }

        onSuccessRef.current(credentialResponse.credential);
      },
      ...props,
    });

    window.google?.accounts.id.renderButton(btnContainerRef.current, {
      type,
      theme,
      size,
      text,
      shape,
      logo_alignment: logoAlignment,
      width,
      locale,
    });
  }, [isOAuthClientLoaded]);

  return (
    <div
      className="flex items-center justify-center mb-4"
      ref={btnContainerRef}
    />
  );
}
