import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="p-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h1 className="text-6xl font-bold leading-tight mb-4">
            Todos pelo RS
          </h1>
          <p className="text-3xl">
            Saiba como ajudar as vítimas das enchentes no{" "}
            <strong>Rio Grande do Sul</strong>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Vaquinhas SOS Enchentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Aqui você encontra vaquinhas criadas por pessoas afetadas pela
                catástrofe e também a campanha promovida pelo Vakinha para levar
                apoio até locais atingidos.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <a
                  href="https://www.vakinha.com.br/tag/sos_enchentes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clique para fazer sua doação
                </a>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Doações de itens básicos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                A Defesa Civil do Rio Grande do Sul pediu a doação de itens
                específicos, já higienizados, como <strong>colchões</strong>,{" "}
                <strong>cobertores</strong> e{" "}
                <strong>roupas de cama e banho</strong>.
              </p>

              <p>
                As doações podem ser entregues no Centro Logístico do órgão
                estadual, na Avenida Joaquim Porto Villanova, 101, bairro Jardim
                Carvalho, em Porto Alegre.
              </p>

              <p>
                O telefone para contato é <strong>(51) 3210-4255.</strong>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
