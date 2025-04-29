import { useState } from "react";

export default function Home() {
  const [stage, setStage] = useState("seed");

  const handleGrow = () => {
    if (stage === "seed") setStage("sprout");
    else if (stage === "sprout") setStage("leaf");
    else if (stage === "leaf") setStage("flower");
    else if (stage === "flower") setStage("fruit");
    else if (stage === "fruit") setStage("harvest");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-orange-50">
      {stage === "seed" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">トマトの種をまこう！</h1>
          <img src="/tomato_stage2.png" alt="Seed" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <button onClick={handleGrow} className="bg-orange-400 text-white px-6 py-2 rounded-full">
            種をまく
          </button>
        </div>
      )}

      {stage === "sprout" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">発芽したよ！</h1>
          <img src="/tomato_stage2.png" alt="Sprout" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <button onClick={handleGrow} className="bg-orange-400 text-white px-6 py-2 rounded-full">
            お世話する
          </button>
        </div>
      )}

      {stage === "leaf" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">葉っぱが育った！</h1>
          <img src="/tomato_stage2.png" alt="Leaf" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <button onClick={handleGrow} className="bg-orange-400 text-white px-6 py-2 rounded-full">
            お世話する
          </button>
        </div>
      )}

      {stage === "flower" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">花が咲いた！</h1>
          <img src="/tomato_stage2.png" alt="Flower" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <button onClick={handleGrow} className="bg-orange-400 text-white px-6 py-2 rounded-full">
            お世話する
          </button>
        </div>
      )}

      {stage === "fruit" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">実がなったよ！</h1>
          <img src="/tomato_stage5.png" alt="Fruit" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <button onClick={handleGrow} className="bg-orange-500 text-white px-6 py-2 rounded-full">
            収穫する
          </button>
        </div>
      )}

      {stage === "harvest" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">収穫おめでとう！</h1>
          <img src="/nft_tomato.png" alt="Harvest" className="w-32 h-32 mx-auto mb-4 object-contain" />
          <p className="text-lg">NFTとして記録されたよ！</p>
        </div>
      )}
    </div>
  );
}
