import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from '@heroui/react'
import { FiSearch } from 'react-icons/fi'
import './Home.css'

export default function Home() {
  const navigate = useNavigate()
  const [busca, setBusca] = useState('')

  const sistemas = useMemo(
    () => [
      {
        id: 'symbaroum',
        nome: 'Symbaroum',
        descricao:
          'RPG de fantasia sombria com foco em exploração, corrupção e mistérios.',
        disponivel: true,
        imagem: '/images/systems/symbaroum.png',
      },
      {
        id: 'tormenta20',
        nome: 'Tormenta 20',
        descricao: 'Fantasia heroica brasileira com classes e poderes variados.',
        disponivel: false,
        imagem: '/images/systems/tormenta20.png',
      },
      {
        id: 'dnd5e',
        nome: 'Dungeons & Dragons 5e',
        descricao: 'Sistema clássico de fantasia medieval com d20.',
        disponivel: false,
        imagem: '/images/systems/dnd5e.png',
      },
      {
        id: 'pathfinder2e',
        nome: 'Pathfinder 2e',
        descricao: 'RPG tático com grande customização de personagem.',
        disponivel: false,
        imagem: '/images/systems/pathfinder2e.png',
      },
      {
        id: 'coc7e',
        nome: 'Call of Cthulhu 7e',
        descricao: 'Horror investigativo e sanidade em risco constante.',
        disponivel: false,
        imagem: '/images/systems/coc7e.webp',
      },
      {
        id: 'v5',
        nome: 'Vampiro: A Mascara V5',
        descricao: 'Narrativo urbano focado em intriga e drama pessoal.',
        disponivel: false,
        imagem: '/images/systems/v5.png',
      },
      {
        id: 'cyberpunkred',
        nome: 'Cyberpunk RED',
        descricao: 'Ficcao cientifica distopica com combate e hacks.',
        disponivel: false,
        imagem: '/images/systems/cyberpunkred.png',
      },
      {
        id: 'starfinder1e',
        nome: 'Starfinder 1e',
        descricao: 'Fantasia cientifica com exploracao espacial e combate tatico.',
        disponivel: false,
        imagem: '/images/systems/starfinder1e.png',
      },
    ],
    [],
  )

  const sistemasFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase()
    if (!termo) return sistemas

    return sistemas.filter((sistema) => {
      return (
        sistema.nome.toLowerCase().includes(termo) ||
        sistema.descricao.toLowerCase().includes(termo)
      )
    })
  }, [busca, sistemas])

  return (
    <main className="home-page">
      <Card>
        <Card.Header>
          <div>
            <h1 className="home-title">Editor de fichas de RPG</h1>
            <p className="home-subtitle">
              Escolha o sistema para criar sua ficha de personagem.
            </p>
          </div>
        </Card.Header>
        <Card.Content>
          <div className="home-content">
            <div className="search-box">
              <FiSearch className="search-icon" aria-hidden="true" />
              <input
                id="busca-sistemas"
                className="search-input"
                placeholder="Buscar sistema (ex.: Symbaroum)"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
                aria-label="Buscar sistema de RPG"
              />
            </div>

            {sistemasFiltrados.length === 0 ? (
              <p>Nenhum sistema encontrado para "{busca}".</p>
            ) : (
              <div className="system-grid">
                {sistemasFiltrados.map((sistema, index) => (
                  <div
                    key={sistema.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Abrir sistema ${sistema.nome}`}
                    className={`system-card ${sistema.disponivel ? '' : 'is-disabled'}`}
                    onClick={() => {
                      if (sistema.disponivel) {
                        navigate(`/sistemas/${sistema.id}`)
                      }
                    }}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        if (sistema.disponivel) {
                          navigate(`/sistemas/${sistema.id}`)
                        }
                      }
                    }}
                    style={{
                      backgroundImage: sistema.imagem
                        ? `linear-gradient(135deg, rgba(7,10,20,0.38), rgba(7,10,20,0.58)), url("${sistema.imagem}")`
                        : 'linear-gradient(135deg, rgba(255,255,255,0.26), rgba(255,255,255,0.08))',
                      animation: `cardCascadeIn 420ms ease both`,
                      animationDelay: `${index * 70}ms`,
                    }}
                  >
                    <div className="system-card-title">{sistema.nome}</div>
                    <div className="system-card-status">
                      {sistema.disponivel ? 'Disponivel' : 'Em breve'}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Card.Content>
      </Card>
    </main>
  )
}
