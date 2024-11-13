import MyComponent from "./_components/MyComponent";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>hello, world</h1>
      <Link href="/cabins">cabins</Link>
      <MyComponent />
    </div>
  );
}
