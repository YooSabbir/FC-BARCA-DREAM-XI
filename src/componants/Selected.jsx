import React from "react";
import { toast } from "react-toastify";

const Selected = ({ selectedPlayers, setSelectedPlayers, coin, setCoin }) => {
  const handleRemove = (playerToRemove, indexToRemove) => {
    const remainingPlayers = selectedPlayers.filter(
      (_, index) => index !== indexToRemove,
    );
    setSelectedPlayers(remainingPlayers);

    const priceNumber = parseInt(playerToRemove.price.replace(/[$,]/g, ""), 10);
    const coinNumber = parseInt(coin.replace(/[$,]/g, ""), 10);

    setCoin("$ " + (coinNumber + priceNumber).toLocaleString());
    toast.error(`${playerToRemove.player_name} removed from squad`, {
      position: "bottom-left",
      autoClose: 700,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "dark",
      className:
        "bg-black text-white border border-red-900/40 text-[12px] font-bold  tracking-wider",
      progressClassName: "bg-[#A50044]",
    });
  };

  return (
    <div className="px-2 py-4 mx-auto max-w-[90%] md:container md:py-8">
      {selectedPlayers.length === 0 ? (
        <div className="relative overflow-hidden p-8 flex flex-col items-center justify-center min-h-[250px]">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#A50044] to-[#004D98] rounded-full blur opacity-15 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gray-50 p-4 rounded-full border border-gray-100 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </div>

          <div className="relative mt-6 text-center">
            <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">
              No Warriors Found
            </h2>
            <p className="text-gray-400 mt-1 font-medium text-sm">
              Please select your legends and dominate the pitch.
            </p>
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[#A50044] to-[#004D98] mx-auto rounded-full opacity-60"></div>
          </div>
        </div>
      ) : (
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
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
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
                    className="p-2 rounded-sm bg-red-600/10 border border-red-600/30 hover:bg-red-600 text-red-500 hover:text-white transition-all duration-300 shadow-lg shadow-red-900/20"
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
      )}
    </div>
  );
};

export default Selected;
