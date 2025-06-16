import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import { AiFillEnvironment } from "react-icons/ai";
import { type SVGProps } from "react";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-800">
        <div className="flex-1">
          <Link className="flex items-center gap-2 font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span>InventoryMaster</span>
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <AiFillEnvironment className="rounded bg-amber-300 text-6xl text-dark-purple" />
        </div>
        <div className="flex flex-1 justify-end">
          <nav>
            <SignInButton>
              <Button size={"default"} className="hover:bg-purple-400">
                SIGN IN
              </Button>
            </SignInButton>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="flex flex-col items-center justify-center bg-gray-100 py-24 dark:bg-gray-900">
          <h1 className="text-center text-4xl font-bold">
            Simplify Your Inventory Management
          </h1>
          <p className="mt-4 max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
            InventoryMaster helps you streamline your inventory processes,
            reduce errors, and make data-driven decisions.
          </p>
          <SignInButton>
            <Button size={"lg"} className="mt-8 hover:bg-purple-400">
              SIGN IN
            </Button>
          </SignInButton>
        </section>
        <section className="py-24" id="features">
          <h2 className="text-center text-3xl font-bold">Key Features</h2>
          <div className="mt-12 grid grid-cols-1 gap-12 px-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center">
              <BarChartIcon className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-medium">Real-Time Analytics</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Get instant insights into your inventory levels and sales
                trends.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <SmartphoneIcon className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-medium">Unlimited Creations</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Manage multiple locations from once central location.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <LockIcon className="mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-medium">Secure Data</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Your data is stored securely and backed up regularly.
              </p>
            </div>
          </div>
        </section>
        <section
          className="bg-gray-100 py-24 dark:bg-gray-900"
          id="testimonials"
        >
          <h2 className="text-center text-3xl font-bold">
            What Our Customers Say
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-12 px-6 md:grid-cols-2">
            <div className="flex flex-col items-center text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {"InventoryMaster has revolutionized our inventory management."}
                <br />
                {" It's easy to use and provides real-time data."}
              </p>
              <p className="font-medium">John Doe, ACME Inc.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                {"We love the mobile access feature."}
                <br />
                {" It allows us to check our inventory levels on the go."}
              </p>
              <p className="font-medium">Jane Smith, XYZ Corp.</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-24 dark:bg-gray-900">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold">
              Ready to Simplify Your Inventory Management?
            </h2>
            <p className="max-w-2xl text-gray-600 dark:text-gray-400">
              Try for free today and see the difference
              <br />
            </p>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between bg-white px-6 py-4 dark:bg-gray-800">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © InventoryMaster
        </p>
        <div className="flex gap-4">
          <Link href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  );
}

function BarChartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function Package2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}

function SmartphoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      <polyline points="9 22 9 12 15 12 15 22"></polyline>
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
