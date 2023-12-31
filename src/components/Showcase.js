import Link from "next/link";
import Image from "next/image";

import botOnlineStatus from "../utils/images/botStatus.svg";

const Showcase = () => {
  return (
    <>
      <main className="showcase">
        <h1 className="showcase-header h-color">Speed Host</h1>
        <h2 className="showcase-header-text h-color">
          A solução para hospedagem no discord!
        </h2>
        <p className="showcase-para p-color">
          Aprimore seu bot, sua API ou seu servidor de Minecraft com a Speed, profissionalismo? É com a gente mesmo!
        </p>
        <Image
          src={botOnlineStatus}
          width={40}
          height={40}
          alt="status-online"
          className="onlineStatus"
        />{" "}
        <span className="p-color">Compras online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Adquira um plano!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="https://discord.com/invite/sAwZDNThPP">
              Junte-se ao servidor!
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Showcase;
