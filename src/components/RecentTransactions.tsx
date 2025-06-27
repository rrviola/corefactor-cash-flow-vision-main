
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: 1,
    description: "Pagamento via PIX",
    amount: 1250.00,
    date: "Hoje",
    status: "pendente",
    method: "PIX"
  },
  {
    id: 2,
    description: "Cartão de Crédito",
    amount: 850.00,
    date: "Amanhã",
    status: "pendente",
    method: "Cartão"
  },
  {
    id: 3,
    description: "Boleto Bancário",
    amount: 2100.00,
    date: "Em 3 dias",
    status: "confirmado",
    method: "Boleto"
  },
  {
    id: 4,
    description: "Cartão de Débito",
    amount: 675.00,
    date: "Em 5 dias",
    status: "pendente",
    method: "Cartão"
  },
];

export function RecentTransactions() {
  return (
    <Card className="border-corefactor-light-gray">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-corefactor-dark-blue">Próximos Recebimentos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-3 bg-corefactor-light-gray rounded-lg">
              <div className="flex-1">
                <p className="font-medium text-corefactor-dark-blue">{transaction.description}</p>
                <p className="text-sm text-corefactor-dark-gray">{transaction.date} • {transaction.method}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-corefactor-dark-blue">
                  R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <Badge 
                  variant={transaction.status === 'confirmado' ? 'default' : 'secondary'}
                  className={`mt-1 ${
                    transaction.status === 'confirmado' 
                      ? 'bg-corefactor-emerald-green text-white' 
                      : 'bg-corefactor-warning-teal text-white'
                  }`}
                >
                  {transaction.status === 'confirmado' ? 'Confirmado' : 'Pendente'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
