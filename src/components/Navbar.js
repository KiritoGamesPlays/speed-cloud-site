import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <navbar className="navbar">
        <nav className="navbar-header">
          <ul>
            <li>
              <Link className="h-color" href="/">
                Speed Host 
              </Link>
            </li>
          </ul>
        </nav>
        <nav className="navbar-items">
          <ul>
            <li>
              <Link className="p-color" href="/">
                Início
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/">
                Hospedagem de bot's
              </Link>
            </li>
            <li>
              <Link className="p-color" href="/">
                Hospedagem Minecraft
              </Link>
            </li>
            <li>
              <Link
                className="p-color"
                href="https://discord.com/invite/sAwZDNThPP"
                target="_blank"
              >
                Discord
              </Link>
            </li>
                 <li>
              <a
                className="p-color discord-button"
                href="/"
                target="_blank"
              > <strong>Login</strong>
              </a>
            </li>
          </ul>
        </nav>
      </navbar>
    </div>
  );
};

export default Navbar;
