import { Friends } from "@/components/Friends/Friends";
import { Header } from "@/components/Header/Header";
import { Info } from "@/components/Info/Info";

export default function Home() {
  return (
    <div>
        <Header></Header>
        <Info></Info>
        <Friends></Friends>
    </div>
  );
}
