import React from "react";
import Flor from "../../assets/Personaje.png";
import Logo from "../../assets/Logo.png";

const Hero = () => {
  return (
    <section className="mt-36">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Texto y descripcion */}
        <div className="p-10 ">
          <img src={Logo} alt="logo" />
          <p className="py-12 text-white">
            Magic, towers, strategy and super heroes are all in one tower
            defense game: Magic Quest! Plan your strategy and use special spells
            to defend your towers and win all battles. You will be able to
            command legendary heroes, such as elven archers, dwarven gunners,
            shaman warriors and wizards, golems and others there is different
            8 heroes with unique abilities in this tower defense game. Moreover,
            one of the main features is a scaling of maps. Bring them closer to
            see more details or hold the maps away to plan your actions. In the
            Magic Quest tower defense you will face the enemies in various
            locations — valleys, dwarven mines, full of hidden treasures,
            mountains, deserts, seaboard, floating islands swamps and volcanic
            plains. All this marvellous places will serve as the scenery for
            your epic adventure.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href=""
              className=" max-w-[205px] bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center text-cente "
            >
              <i className="bi bi-bag-check-fill text-xl ml-2"></i> Comprar
            </a>
            <a
              href=""
              className=" min-w-[205px] bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center text-center"
            >
              <i className="bi bi-info-square-fill text-xl ml-2"></i> info
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36">
          <img src={Flor} alt="flor" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
