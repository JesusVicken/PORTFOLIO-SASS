import { DiHtml5, DiCss3, DiJsBadge, DiNodejsSmall, DiMysql, DiSass, DiLinux, DiBootstrap, DiGit, DiReact } from "react-icons/di";

import '../styles/components/tecnologiescontainer.sass';

const technologies = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />, description: "Tenho 4 anos de experiência utilizando HTML5 para estruturar páginas web de maneira eficiente e semântica. Durante esse período, desenvolvi uma base sólida através de diversos projetos e cursos. Minhas aplicações são robustas e responsivas, garantindo acessibilidade e uma experiência de usuário superior." },
    { id: 'css', name: 'CSS3', icon: <DiCss3 />, description: "Minha expertise em CSS3 me permite estilizar interfaces web com precisão e criatividade. Utilizo técnicas avançadas de layout, como Flexbox e Grid, para criar designs responsivos que se adaptam a diversos dispositivos e resoluções." },
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, description: "Com uma sólida experiência em JavaScript, desenvolvi e mantenho várias aplicações web interativas. Domino frameworks e bibliotecas como ReactJS, e estou continuamente aprimorando minhas habilidades para seguir as melhores práticas e inovações da linguagem." },
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, description: "Tenho experiência em desenvolver servidores e aplicações backend utilizando Node.js. Criei APIs RESTful eficientes e escaláveis, integrando bancos de dados e serviços externos para fornecer funcionalidades robustas em tempo real." },
    { id: 'mysql', name: 'Mysql', icon: <DiMysql />, description: "Minha proficiência em MySQL envolve a criação, manutenção e otimização de bancos de dados relacionais. Desenvolvi sistemas de gerenciamento de dados complexos, garantindo performance, segurança e integridade dos dados." },
    { id: 'react', name: 'React', icon: <DiReact />, description: "Especialista em React, desenvolvi interfaces de usuário dinâmicas e interativas. Utilizo componentes reutilizáveis e o conceito de estado para criar aplicações eficientes e fáceis de manter, proporcionando uma experiência de usuário excelente." },
    { id: 'sass', name: 'SASS', icon: <DiSass />, description: "Tenho ampla experiência com SASS, utilizando suas funcionalidades avançadas para criar estilos CSS de maneira modular e eficiente. Minhas habilidades em SASS permitem a manutenção de código CSS limpo e organizado, facilitando a escalabilidade dos projetos." },
    { id: 'linux', name: 'Linux', icon: <DiLinux />, description: "Com anos de experiência em sistemas Linux, administro servidores e ambientes de desenvolvimento com eficiência. Tenho habilidades em script bash e conhecimento aprofundado dos comandos e ferramentas essenciais para gerenciar sistemas baseados em Linux." },
    { id: 'git', name: 'Git', icon: <DiGit />, description: "Utilizo Git diariamente para controle de versão e colaboração em projetos. Tenho experiência em trabalhar com branches, pull requests e resolução de conflitos, garantindo que o desenvolvimento de software ocorra de maneira ordenada e controlada." },
    { id: 'bootstrap', name: 'Bootstrap', icon: <DiBootstrap />, description: "Utilizo Bootstrap para desenvolver rapidamente interfaces web responsivas e esteticamente agradáveis. Minha experiência com esta biblioteca facilita a criação de layouts consistentes e funcionais, economizando tempo e esforço no desenvolvimento de projetos." }
];
const Technologies = () => {
    return (
        <section className="technologies-container">
            <h2>Tecnologias</h2>
            <div className="technologies-grid">
                {technologies.map((tech) => (
                    <div className="technology-card" id={tech.id} key={tech.id}>
                        {tech.icon}
                        <div className="technology-info">
                            <h3>{tech.name}</h3>
                            <p>{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Technologies;

