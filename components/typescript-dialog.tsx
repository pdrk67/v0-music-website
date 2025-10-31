"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface TypeScriptDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function TypeScriptDialog({ open, onOpenChange }: TypeScriptDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-background border-2 border-primary max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-primary font-mono text-xl">O QUE É TYPESCRIPT?</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 font-mono text-sm">
          <section>
            <h3 className="text-accent font-bold mb-2">📚 Introdução</h3>
            <p className="text-foreground leading-relaxed">
              TypeScript é uma linguagem de programação desenvolvida pela Microsoft que adiciona tipagem estática ao
              JavaScript. Isso significa que você pode definir tipos para suas variáveis, funções e objetos, tornando
              seu código mais seguro e fácil de manter.
            </p>
          </section>

          <section>
            <h3 className="text-accent font-bold mb-2">💡 Por que usar TypeScript?</h3>
            <ul className="text-foreground space-y-2 list-disc list-inside">
              <li>Detecta erros antes de executar o código</li>
              <li>Autocompletar inteligente no editor</li>
              <li>Código mais fácil de entender e manter</li>
              <li>Melhor para trabalhar em equipe</li>
              <li>Usado por grandes empresas como Google, Microsoft e Airbnb</li>
            </ul>
          </section>

          <section>
            <h3 className="text-accent font-bold mb-2">🔧 Exemplo Prático</h3>
            <div className="bg-primary/10 border border-primary p-3 rounded">
              <p className="text-primary mb-2">// JavaScript (sem tipos)</p>
              <code className="text-foreground block mb-3">
                function somar(a, b) {"{"}
                <br />
                &nbsp;&nbsp;return a + b<br />
                {"}"}
              </code>

              <p className="text-primary mb-2">// TypeScript (com tipos)</p>
              <code className="text-foreground block">
                function somar(a: number, b: number): number {"{"}
                <br />
                &nbsp;&nbsp;return a + b<br />
                {"}"}
              </code>
            </div>
          </section>

          <section>
            <h3 className="text-accent font-bold mb-2">🎯 Onde é usado?</h3>
            <ul className="text-foreground space-y-2 list-disc list-inside">
              <li>Desenvolvimento Web (React, Angular, Vue)</li>
              <li>Aplicativos Mobile (React Native)</li>
              <li>Servidores (Node.js)</li>
              <li>Aplicações Desktop (Electron)</li>
            </ul>
          </section>

          <section>
            <h3 className="text-accent font-bold mb-2">🚀 Carreira</h3>
            <p className="text-foreground leading-relaxed">
              Desenvolvedores TypeScript estão em alta demanda no mercado de trabalho. É uma das habilidades mais
              procuradas por empresas de tecnologia, com salários competitivos e muitas oportunidades de crescimento
              profissional.
            </p>
          </section>

          <section>
            <h3 className="text-accent font-bold mb-2">📖 Como aprender?</h3>
            <ul className="text-foreground space-y-2 list-disc list-inside">
              <li>Documentação oficial: typescriptlang.org</li>
              <li>Cursos online gratuitos e pagos</li>
              <li>Prática com projetos pessoais</li>
              <li>Comunidades e fóruns de programação</li>
            </ul>
          </section>

          <div className="bg-accent/20 border border-accent p-4 rounded mt-4">
            <p className="text-accent font-bold text-center">💻 Este site foi construído usando TypeScript! 💻</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
