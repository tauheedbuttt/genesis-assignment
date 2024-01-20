import Lottery from "@/components/lottery";

export default function Home() {
  return (
    <main className="px-4">
      <h1 className="text-lg font-bold mb-5">Latest Results</h1>
      <Lottery lotteryType="COSMIC" />
      <Lottery lotteryType="CLASSIC" />
      <Lottery lotteryType="ATOMIC" />
    </main>
  );
}
