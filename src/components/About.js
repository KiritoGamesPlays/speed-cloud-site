import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="about-section" id="about-section">
        <div className="about-header">
          <h3 className="h-color">Por que escolher a Speed?</h3>
        </div>
        <div className="about-container">
          <div className="about-card">
            <div>
              <h4 className="h-color">⚡ Velocidade</h4>
              <p className="p-color">
                Garantimos a velocidade do seu bot ou servidor Minecraft, utilizamos um serviço de hospedagem confiável com 99.9% de Uptime, então fique tranquilo.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">📨 Atualizações</h4>
              <p className="p-color">
                Nosso Painel recebe atualizações recorrentes para manter o melhor desempenho, todos os bots que somos responsáveis recebem a atualização automaticamente.
              </p>
              <hr />
            </div>
            <div>
              <h4 className="h-color">🔧 Gerenciamento</h4>
              <p className="p-color">
                Você pode gerenciar seu bot diretamente pelo painel ou via deploy Github, fique sempre por dentro das informações do seu bot em tempo real.
              </p>
              <hr />
            </div>
          </div>
        </div>
        <p>
          <Link href="/" className="h-color no-decoration">
            Confira nossos planos&rarr;
          </Link>
        </p>

        <section className="about-stats">
          <div className="about-stats-card">
            <h4 className="h-color">29+</h4>
            <p className="p-color">Clientes</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">+45</h4>
            <p className="p-color">Serviços hospedados</p>
          </div>
          <div className="about-stats-card">
            <h4 className="h-color">20+</h4>
            <p className="p-color">Avaliações</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
