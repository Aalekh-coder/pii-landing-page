import dynamic from "next/dynamic";

const Blog = dynamic(() => import("./Blog"));

export const metadata = {
  title: "Our Blog | Insights and Updates",
  description:
    "Stay up to date with the latest news, tutorials, and insights from our team.",
};

export default function Page() {
  return <Blog />;
}
