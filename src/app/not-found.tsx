import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center gap-16">
      <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
      <Link href="/" className="text-2xl">Let&apos;s go back to Home</Link>
    </main>
  )
}

export default NotFound