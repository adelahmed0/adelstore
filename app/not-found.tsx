"use client";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        alt={`${APP_NAME} Logo`}
        width={48}
        height={48}
        priority={true}
      />
      <div className="p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">The page you are looking for does not exist.</p>
        <Button
          variant="outline"
          className="mt-4 ml-2 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};
export default NotFoundPage;
