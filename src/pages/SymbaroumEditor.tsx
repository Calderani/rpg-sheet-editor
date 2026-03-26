import { Card } from '@heroui/react'

export default function SymbaroumEditor() {
  return (
    <main style={{ maxWidth: 840, margin: '40px auto', padding: 16 }}>
      <Card>
        <Card.Header>
          <h1 style={{ margin: 0 }}>Symbaroum</h1>
        </Card.Header>
        <Card.Content>
          <p style={{ marginTop: 0 }}>
            Esta sera a area de criacao e edicao da ficha de personagem.
          </p>
          <p>Proximo passo: montar schema, dados iniciais e formulario da ficha.</p>
        </Card.Content>
      </Card>
    </main>
  )
}
