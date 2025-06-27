
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: 'Hoje', value: 2400 },
  { name: 'Amanhã', value: 1398 },
  { name: '3 dias', value: 9800 },
  { name: '1 sem', value: 3908 },
  { name: '2 sem', value: 4800 },
  { name: '3 sem', value: 3800 },
  { name: '1 mês', value: 4300 },
];

export function CashFlowChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-corefactor-dark-blue">Previsão de Fluxo de Caixa</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F2F2F2" />
            <XAxis dataKey="name" tick={{ fill: '#495057' }} />
            <YAxis tick={{ fill: '#495057' }} />
            <Tooltip 
              formatter={(value) => [`R$ ${Number(value).toLocaleString('pt-BR')}`, 'Valor']}
              contentStyle={{ 
                backgroundColor: '#FFFFFF',
                border: '1px solid #F2F2F2',
                borderRadius: '8px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#1A2E44" 
              strokeWidth={3}
              dot={{ fill: '#1A2E44', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
