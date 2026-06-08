import dynamic from "next/dynamic";

const Contact = dynamic(() => import("./Contact"));

export const metadata = {
  title: "Contact ",
  description: "description",
};

export default function Page() {
  return <Contact />;
}
