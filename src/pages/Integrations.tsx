
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, CheckCircle, AlertCircle, Plus } from "lucide-react";

const integrations = [
  {
    id: 1,
    name: "Mercado Pago",
    status: "connected",
    description: "Receba pagamentos via PIX, cartão e boleto",
    logo: "💳",
    lastSync: "2024-01-15 10:30"
  },
  {
    id: 2,
    name: "PagSeguro",
    status: "connected",
    description: "Maquininha e pagamentos online",
    logo: "🏪",
    lastSync: "2024-01-15 09:15"
  },
  {
    id: 3,
    name: "Stone",
    status: "pending",
    description: "Maquininha e soluções de pagamento",
    logo: "💎",
    lastSync: null
  },
  {
    id: 4,
    name: "Cielo",
    status: "error",
    description: "Cartões de crédito e débito",
    logo: "🔵",
    lastSync: "2024-01-14 18:45"
  },
];

const availableIntegrations = [
  { name: "GetNet", description: "Maquininha e pagamentos", logo: "🟢" },
  { name: "Rede", description: "Soluções de pagamento", logo: "🔴" },
  { name: "Banco Inter", description: "PIX e conta digital", logo: "🧡" },
  { name: "Nubank", description: "Conta PJ e cartões", logo: "💜" },
];

const Integrations = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Conectado</Badge>;
      case 'pending':
        return <Badge variant="secondary">Pendente</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800"><AlertCircle className="w-3 h-3 mr-1" />Erro</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-corefactor-light-gray">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center px-6">
          <SidebarTrigger className="mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Integrações</h1>
            <p className="text-sm text-gray-600">Conecte seus meios de pagamento</p>
          </div>
        </header>
        
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Integrações Ativas */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-gray-800">
                <Settings className="w-5 h-5 mr-2" />
                Integrações Ativas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-800">
                {integrations.map((integration) => (
                  <div key={integration.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{integration.logo}</div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{integration.name}</h3>
                          <p className="text-sm text-gray-600">{integration.description}</p>
                        </div>
                      </div>
                      {getStatusBadge(integration.status)}
                    </div>
                    
                    {integration.lastSync && (
                      <p className="text-xs text-gray-500 mb-3">
                        Última sincronização: {new Date(integration.lastSync).toLocaleString('pt-BR')}
                      </p>
                    )}
                    
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1 border-gray-200">
                        Configurar
                      </Button>
                      {integration.status === 'connected' && (
                        <Button variant="outline" size="sm" className="border-gray-200">
                          Sincronizar
                        </Button>
                      )}
                      {integration.status === 'error' && (
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                          Reconectar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Novas Integrações */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-gray-800">
                <Plus className="w-5 h-5 mr-2" />
                Adicionar Integração
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-800">
                {availableIntegrations.map((integration, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow text-center">
                    <div className="text-3xl mb-2">{integration.logo}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{integration.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{integration.description}</p>
                    <Button variant="outline" size="sm" className="w-full border-gray-200">
                      Conectar
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Instruções */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Como Conectar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corefactor-dark-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium">Escolha sua integração</h4>
                    <p className="text-sm text-gray-600">Selecione o meio de pagamento que você utiliza</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corefactor-dark-blue text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium">Autorize o acesso</h4>
                    <p className="text-sm text-gray-600">Permita que o CoreFactor acesse seus dados de transações</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-corefactor-dark-blue text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium">Sincronização automática</h4>
                    <p className="text-sm text-gray-600">Seus recebíveis serão sincronizados automaticamente</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Integrations;
