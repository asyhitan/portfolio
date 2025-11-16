import React, { useState, useEffect } from 'react';
import { Github, Mail, Code, GraduationCap, Home, User, FolderGit2, ExternalLink, Star, GitFork, Calendar, MapPin, ChevronRight } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [quote, setQuote] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    fetchQuote();
    fetchGithubRepos();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random?tags=technology,inspirational');
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Erro ao buscar citação:', error);
    }
  };

  const fetchGithubRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/asyhitan/repos?sort=updated&per_page=6');
      const data = await response.json();
      setGithubRepos(data);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar repositórios:', error);
      setLoading(false);
    }
  };

  const navigation = [
    { name: 'Home', icon: Home, id: 'home' },
    { name: 'Sobre', icon: User, id: 'about' },
    { name: 'Formação', icon: GraduationCap, id: 'education' },
    { name: 'Projetos', icon: FolderGit2, id: 'projects' },
  ];

  const skills = [
    'Python', 'HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'
  ];

  const technologies = [
    { category: 'Frontend', items: ['React 18', 'TailwindCSS', 'Lucide Icons', 'HTML5', 'CSS3'] },
    { category: 'APIs Integradas', items: ['GitHub API', 'Quotable API'] },
    { category: 'Ferramentas', items: ['Git', 'GitHub', 'VS Code'] },
  ];

  const education = [
    {
      degree: 'Tecnólogo em Sistemas para Internet',
      institution: 'UNICAP - Universidade Católica de Pernambuco',
      period: 'Em formação',
      description: 'Aprendendo a desenvolver sites e aplicações web modernas, com foco em desenvolvimento frontend e backend.'
    }
  ];

  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return (
          <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-4xl w-full text-center">
              <div className="mb-8 inline-block">
                <div className="w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
                  MC
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Maysa Clara Cavalcante da Silva
              </h1>
              <p className="text-2xl text-gray-600 mb-4">Estudante de Sistemas para Internet</p>
              <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
                <MapPin size={20} />
                <span>Recife - PE</span>
              </div>
              <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
                Apaixonada por tecnologia e desenvolvimento web. Sempre em busca de aprender novas tecnologias e criar soluções criativas.
              </p>
              
              {quote && (
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl mb-12 border border-purple-100">
                  <p className="text-gray-700 italic mb-2">"{quote.content}"</p>
                  <p className="text-gray-500 text-sm">— {quote.author}</p>
                </div>
              )}

              <div className="flex gap-4 justify-center mb-4">
                <a 
                  href="https://github.com/asyhitan" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition transform hover:scale-110"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
              </div>
              
              <div className="mb-12">
                <p className="text-gray-600 flex items-center justify-center gap-2">
                  <Mail size={18} className="text-purple-600" />
                  <a href="mailto:maysaccavalcante2@gmail.com" className="text-purple-600 hover:underline font-medium">
                    maysaccavalcante2@gmail.com
                  </a>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-white border-2 border-gray-200 rounded-full text-gray-700 font-medium hover:border-purple-500 hover:text-purple-600 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <User className="text-purple-600" size={40} />
              Sobre Mim
            </h1>
            
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Olá! Sou Maysa Clara, estudante de Sistemas para Internet na UNICAP. Estou em uma jornada empolgante de aprendizado no mundo do desenvolvimento web, descobrindo cada dia mais sobre as tecnologias que movem a internet.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Atualmente, estou focada em aprender desenvolvimento de sites e aplicações web, explorando tanto o frontend quanto o backend. Adoro a sensação de ver minhas ideias ganharem vida através do código!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Localizada em Recife-PE, estou sempre em busca de novos desafios e oportunidades para aplicar e expandir meus conhecimentos em tecnologia.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6 text-gray-800">Tecnologias Utilizadas neste Portfólio</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 transition">
                  <h3 className="text-xl font-bold mb-4 text-gray-800">{tech.category}</h3>
                  <ul className="space-y-2">
                    {tech.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <ChevronRight size={16} className="text-purple-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
              <h3 className="font-bold text-lg mb-2 text-gray-800">Integração com APIs</h3>
              <p className="text-gray-700">
                Este portfólio integra a <strong>GitHub API</strong> para exibir meus repositórios em tempo real e a <strong>Quotable API</strong> para mostrar citações inspiracionais sobre tecnologia na página inicial.
              </p>
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="max-w-4xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-purple-600" size={40} />
              Formação Acadêmica
            </h1>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-purple-600 hover:shadow-xl transition">
                  <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h2>
                      <p className="text-lg text-purple-600 font-semibold">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                <Code className="inline mr-2" size={28} />
                Aprendizado Contínuo
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Estou constantemente aprendendo e me desenvolvendo através de:
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Cursos e projetos práticos da faculdade</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Desenvolvimento de projetos pessoais no GitHub</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-purple-600 mt-1 flex-shrink-0" size={20} />
                  <span>Estudo autodidata de novas tecnologias web</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="max-w-6xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <FolderGit2 className="text-purple-600" size={40} />
              Meus Projetos
            </h1>

            <div className="mb-8 bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-xl">
              <p className="text-gray-700">
                <Github className="inline mr-2" size={20} />
                Repositórios do meu GitHub (via GitHub API)
              </p>
            </div>
            
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto"></div>
                <p className="text-gray-600 mt-4">Carregando projetos...</p>
              </div>
            ) : githubRepos.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                <FolderGit2 size={64} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 text-lg">Nenhum repositório público encontrado ainda.</p>
                <p className="text-gray-500 mt-2">Continue criando projetos incríveis! 🚀</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {githubRepos.map((repo) => (
                  <div key={repo.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition border-2 border-gray-100 hover:border-purple-300">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800 break-words">{repo.name}</h3>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 flex-shrink-0"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {repo.description || 'Sem descrição disponível'}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-500" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={16} className="text-gray-500" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                    
                    {repo.language && (
                      <div className="mt-4">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-100">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Em Desenvolvimento 🚀</h3>
              <p className="text-gray-700 leading-relaxed">
                Estou constantemente trabalhando em novos projetos e aprendendo novas tecnologias. 
                Acompanhe meu progresso no <a href="https://github.com/asyhitan" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-semibold hover:underline">GitHub</a> para ver as últimas atualizações!
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Code className="text-purple-600" size={28} />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Portfólio
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                    currentPage === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800 mb-1"></div>
              <div className="w-6 h-0.5 bg-gray-800"></div>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 w-full px-4 py-3 rounded-lg transition ${
                    currentPage === item.id
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <main className="pb-12">
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-4">© 2024 Maysa Clara Cavalcante da Silva. Todos os direitos reservados.</p>
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/asyhitan" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition flex items-center gap-2"
            >
              <Github size={20} />
              GitHub
            </a>
            <a 
              href="mailto:maysaccavalcante2@gmail.com"
              className="hover:text-purple-400 transition flex items-center gap-2"
            >
              <Mail size={20} />
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
