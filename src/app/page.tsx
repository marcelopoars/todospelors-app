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
    <section className="p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl leading-tight">
              Vaquinhas SOS Enchentes
            </CardTitle>
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
            <CardTitle className="text-xl lg:text-2xl leading-tight">
              Pix para a conta SOS Rio Grande do Sul
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Diante da situação de calamidade pública enfrentada no Estado, o
              governo gaúcho reativou o canal de doações para a conta SOS Rio
              Grande do Sul.
            </p>
            <p>
              Esta iniciativa centraliza a ajuda financeira e fornece segurança
              e transparência no recebimento e na destinação dos recursos.
            </p>

            <p className="font-bold">Chave Pix (CNPJ): 92.958.800/0001-38</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl lg:text-2xl leading-tight">
              Doações de itens básicos
            </CardTitle>
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
  );
}
