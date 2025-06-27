
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const receivables = [
  {
    id: 1,
    description: "Venda - Produto A",
    grossAmount: 1250.00,
    netAmount: 1205.50,
    dueDate: "2024-01-15",
    status: "pendente",
    method: "PIX",
    fees: 44.50
  },
  {
    id: 2,
    description: "Serviço - Consultoria",
    grossAmount: 2850.00,
    netAmount: 2764.75,
    dueDate: "2024-01-16",
    status: "confirmado",
    method: "Cartão de Crédito",
    fees: 85.25
  },
  {
    id: 3,
    description: "Venda - Produto B",
    grossAmount: 675.00,
    netAmount: 658.88,
    dueDate: "2024-01-18",
    status: "pendente",
    method: "Cartão de Débito",
    fees: 16.12
  },
  {
    id: 4,
    description: "Pagamento - Boleto",
    grossAmount: 3200.00,
    netAmount: 3168.00,
    dueDate: "2024-01-20",
    status: "atrasado",
    method: "Boleto",
    fees: 32.00
  },
  {
    id: 5,
    description: "Venda - Produto C",
    grossAmount: 950.00,
    netAmount: 922.50,
    dueDate: "2024-01-22",
    status: "pendente",
    method: "PIX",
    fees: 27.50
  },
];

const Receivables = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmado':
        return <Badge className="bg-green-100 text-green-800">Confirmado</Badge>;
      case 'pendente':
        return <Badge variant="secondary">Pendente</Badge>;
      case 'atrasado':
        return <Badge className="bg-red-100 text-red-800">Atrasado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'PIX':
        return 'text-green-500';
      case 'Cartão de Crédito':
        return 'text-blue-500';
      case 'Cartão de Débito':
        return 'text-purple-500';
      case 'Boleto':
        return 'text-orange-500';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-gray-50">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center px-6">
          <SidebarTrigger className="mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Recebíveis</h1>
            <p className="text-sm text-gray-600">Gerencie todos os seus recebimentos</p>
          </div>
        </header>
        
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Filtros */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-700">Filtros</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 text-gray-600">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4" />
                    <Input
                      className="pl-10"
                      placeholder="Buscar por descrição..."
                    />
                  </div>
                </div>
                <Select>
                  <SelectTrigger className="w-full md:w-48 text-gray-500">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pendente">Pendente</SelectItem>
                    <SelectItem value="confirmado">Confirmado</SelectItem>
                    <SelectItem value="atrasado">Atrasado</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full md:w-48 text-gray-500">
                    <SelectValue placeholder="Meio de Pagamento" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todos</SelectItem>
                    <SelectItem value="pix">PIX</SelectItem>
                    <SelectItem value="credit">Cartão de Crédito</SelectItem>
                    <SelectItem value="debit">Cartão de Débito</SelectItem>
                    <SelectItem value="boleto">Boleto</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" className="w-full md:w-auto">
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tabela de Recebíveis */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Lista de Recebíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Descrição</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Valor Bruto</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Valor Líquido</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Taxas</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Data</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Método</th>
                      <th className="text-left py-3 px-4 font-medium text-blue-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {receivables.map((receivable) => (
                      <tr key={receivable.id} className="border-b hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="font-medium text-blue-500">{receivable.description}</div>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-gray-500">
                            R$ {receivable.grossAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-medium text-green-500">
                            R$ {receivable.netAmount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-red-500">
                            R$ {receivable.fees.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-500">
                            {new Date(receivable.dueDate).toLocaleDateString('pt-BR')}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`font-medium ${getMethodColor(receivable.method)}`}>
                            {receivable.method}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          {getStatusBadge(receivable.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Receivables;
