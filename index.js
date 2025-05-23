import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      <Head>
        <title>Banana Coin</title>
        <meta name="description" content="芸術で世界を救う。Banana Coin公式ページ。" />
      </Head>

      <div className="flex flex-col items-center justify-center text-center py-20 px-4">
        <Image src="/banana-coin-logo.png" alt="Banana Coin Logo" width={120} height={120} />
        <h1 className="text-4xl font-bold mt-6">芸術で世界を救う</h1>
        <p className="text-lg mt-2">全てはみんなの為に</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-4">Banana Coinのビジョン</h2>
        <p className="text-md leading-relaxed">
          Banana Coinは、アートとユーモアの力で世界を照らします。時代の流れと世界の流動の中で、笑いと価値を届ける新しい通貨です。
        </p>
      </div>

      <div className="bg-yellow-100 py-10 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">トークン情報</h2>
          <div className="bg-white shadow-md rounded-xl p-6 space-y-2">
            <p><strong>名前:</strong> Banana Coin</p>
            <p><strong>シンボル:</strong> BNNA</p>
            <p><strong>総供給量:</strong> 1,000,000,000</p>
            <p><strong>チェーン:</strong> Binance Smart Chain</p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">リンク</h2>
        <p className="mb-2">コントラクトアドレス: <span className="font-mono">0x123...banana</span>（仮）</p>
        <a href="#" className="inline-block mt-4 px-4 py-2 border rounded-lg hover:bg-yellow-200">PancakeSwapで見る（準備中）</a>
      </div>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; 2025 Banana Coin. All rights reserved.
      </footer>
    </div>
  );
}
