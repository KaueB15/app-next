import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-between items-center">
      <Header/>
      <Button/>
      <Footer/>
    </div>
  );
}
