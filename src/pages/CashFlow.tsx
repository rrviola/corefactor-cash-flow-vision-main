
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { TrendingUp, Calendar, DollarSign, AlertTriangle } from "lucide-react";

const cashFlowData = [
  { date: '15/01', entrada: 2400, saida: 800, liquido: 1600 },
  { date: '16/01', entrada: 1398, saida: 1200, liquido: 198 },
  { date: '17/01', entrada: 9800, saida: 2000, liquido: 7800 },
  { date: '18/01', entrada: 3908, saida: 1500, liquido: 2408 },
  { date: '19/01', entrada: 4800, saida: 2200, liquido: 2600 },
  { date: '20/01', entrada: 3800, saida: 1800, liquido: 2000 },
  { date: '21/01', entrada: 4300, saida: 1900, liquido: 2400 },
];

const weeklyData = [
  { period: 'Semana 1', valor: 15600 },
  { period: 'Semana 2', valor: 18200 },
  { period: 'Semana 3', valor: 22400 },
  { period: 'Semana 4', valor: 19800 },
];

const CashFlow = () => {
  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center px-6">
          <SidebarTrigger className="mr-4" />
          <div className="flex-1 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Fluxo de Caixa</h1>
              <p className="text-sm text-gray-600">Previsão e análise do seu fluxo financeiro</p>
            </div>
            <div className="flex items-center space-x-4">
              <Select defaultValue="weekly">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Período" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Diário</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </header>
        
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Métricas de resumo */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-green-800">Entradas Previstas</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-900">R$ 76.240</div>
                <p className="text-xs text-green-700 mt-1">Próximos 30 dias</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-red-800">Saídas Previstas</CardTitle>
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-900">R$ 23.850</div>
                <p className="text-xs text-red-700 mt-1">Próximos 30 dias</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-800">Fluxo Líquido</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-900">R$ 52.390</div>
                <p className="text-xs text-blue-700 mt-1">Próximos 30 dias</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-purple-800">Saldo Projetado</CardTitle>
                <Calendar className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-900">R$ 125.480</div>
                <p className="text-xs text-purple-700 mt-1">Final do mês</p>
              </CardContent>
            </Card>
          </div>

          {/* Gráfico de Fluxo de Caixa Diário */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Fluxo de Caixa Diário</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={cashFlowData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [
                      `R$ ${Number(value).toLocaleString('pt-BR')}`, 
                      name === 'entrada' ? 'Entrada' : name === 'saida' ? 'Saída' : 'Líquido'
                    ]} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="entrada" 
                    stroke="#10B981" 
                    strokeWidth={2}
                    name="entrada"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="saida" 
                    stroke="#EF4444" 
                    strokeWidth={2}
                    name="saida"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="liquido" 
                    stroke="#1E40AF" 
                    strokeWidth={3}
                    name="liquido"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gráfico Semanal */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Análise Semanal</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={weeklyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString('pt-BR')}`, 'Valor']} />
                    <Bar dataKey="valor" fill="#1E40AF" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Alertas e Insights */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Alertas e Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-white-200">
                    <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Atenção</h4>
                      <p className="text-sm text-blue-700">Você tem R$ 3.200 em boletos com vencimento em 2 dias</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-green-800">Oportunidade</h4>
                      <p className="text-sm text-green-700">Seus recebimentos via PIX cresceram 15% este mês</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-blue-800">Dica</h4>
                      <p className="text-sm text-blue-700">Considere negociar melhores taxas com suas operadoras</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CashFlow;
