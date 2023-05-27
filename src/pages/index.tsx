import Sidebar from "components/sidebar";
import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "components/ui/card";

// Define the Home page component

const Home: NextPage = () => {
  return (
    <Sidebar>
      <div>
        <div className=" flex items-center justify-center">
          <h1>Home</h1>
        </div>
        <div className="flex justify-around">
          <div className="">
            <Card className="">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

// Export the Home page component
export default Home;
