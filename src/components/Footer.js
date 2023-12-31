import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer className="footer">
        <div className="footer-sec1">
          <div className="footer-header">
            <ul>
              <li>
                <Link className="h-color" href="https://discord.com/invite/sAwZDNThPP">
                 Dê um boost na sua hospedagem!
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-items">
            <ul>
              <li>
                <Link className="p-color" href="#">
                  Hospedagem de bot's
                </Link>
              </li>
              <li>
                <Link className="p-color" href="#">
                  Hospedagem Minecraft
                </Link>
              </li>
              <li>
                <Link className="p-color" href="https://discord.com/invite/sAwZDNThPP">
                 Discord
                </Link>
              </li>
    <li>
                <Link className="p-color" href="#">
                  Nossos Termos
                </Link>
              </li>
    <li>
                <Link className="p-color" href="#">
                  Nossa Equipe
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-sec2">
          <hr />
          <div>
            <p className="p-color">
              Criado com ❤️ por{" "}
              <Link
                href="https://github.com/luizdeveloperr"
                className="h-color no-decoration"
              >
                Luiz Developer
              </Link>
            </p>
            <p className="p-color">{year} &copy; Todos os direitos reservados!</p>
          </div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;
    
