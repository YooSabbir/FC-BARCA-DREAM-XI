import React from "react";

const Selected = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  const handleRemove = (playerToRemove, indexToRemove) => {
    const remainingPlayers = selectedPlayers.filter(
      (_, index) => index !== indexToRemove,
    );
    setSelectedPlayers(remainingPlayers);

    const priceNumber = parseInt(playerToRemove.price.replace(/[$,]/g, ""), 10);
    const coinNumber = parseInt(coin.replace(/[$,]/g, ""), 10);

    setCoin("$ " + (coinNumber + priceNumber).toLocaleString());
  };

  return (
    <div className="px-2 py-4 mx-auto max-w-[90%] md:container md:py-8">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
        {selectedPlayers.map((player, index) => (
          <div
            key={index}
            className="group relative w-full bg-[#121212] rounded-xl overflow-hidden border border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:border-[#A50044]"
          >
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={player.player_img}
                alt={player.player_name}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90"></div>
            </div>

            <div className="p-4 relative -mt-8 z-10">
              <div className="flex justify-between items-start gap-1">
                <h2 className="text-base font-bold text-white uppercase truncate">
                  {player.player_name}
                </h2>
                <span className="text-lg">
                  {player.player_country === "Spain" ? "🇪🇸" : "🌍"}
                </span>
              </div>

              <div
                className={`mt-1 inline-block px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider
                ${
                  player.player_type === "Forward"
                    ? "bg-green-500/20 text-green-500 border border-green-500/30"
                    : player.player_type === "Midfielder"
                      ? "bg-blue-500/20 text-blue-500 border border-blue-500/30"
                      : player.player_type === "Defender"
                        ? "bg-purple-500/20 text-purple-500 border border-purple-500/30"
                        : player.player_type === "Goalkeeper"
                          ? "bg-yellow-500/20 text-yellow-500 border border-yellow-500/30"
                          : "bg-gray-500/20 text-gray-500 border border-gray-500/30"
                }`}
              >
                {player.player_type}
              </div>

              <div className="flex justify-between items-end mt-4 pt-3 border-t border-gray-800/50">
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[9px] uppercase font-bold">
                    Price
                  </span>
                  <span className="text-[#FFD700] font-bold text-base leading-none">
                    {player.price}
                  </span>
                </div>

                <button
                  onClick={() => handleRemove(player, index)}
                  className="p-2 rounded-sm bg-red-600/10 border border-red-600/30 hover:bg-red-600 text-red-500 hover:text-white transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selected;
