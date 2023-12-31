import Link from "next/link";

const JoinNow = () => {
  return (
    <>
      <section className="joinUs">
        <div className="h-color joinUs-header">
          <h3>Junte-se a nós agora!</h3>
        </div>
        <div className="joinUs-para p-color">
          Entre em nosso servidor!{" "}
        </div>
        <button className="btn">
          <Link className="h-color no-decoration" href="https://discord.com/invite/sAwZDNThPP">
            Clique aqui!
          </Link>
        </button>
      </section>
    </>
  );
};

export default JoinNow;
