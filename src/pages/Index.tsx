
import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { MetricCard } from "@/components/MetricCard";
import { ReceivablesChart } from "@/components/ReceivablesChart";
import { CashFlowChart } from "@/components/CashFlowChart";
import { RecentTransactions } from "@/components/RecentTransactions";
import { CreditCard, TrendingUp, Calendar, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full bg-corefactor-light-gray">
      <AppSidebar />
      <main className="flex-1 overflow-hidden">
        <header className="h-16 border-b bg-white flex items-center px-6 border-corefactor-light-gray">
          <SidebarTrigger className="mr-4" />
          <div>
            <h1 className="text-2xl font-bold text-corefactor-dark-blue">Dashboard</h1>
            <p className="text-sm text-corefactor-dark-gray">Visão geral dos seus recebíveis</p>
          </div>
        </header>
        
        <div className="p-6 space-y-6 animate-fade-in">
          {/* Métricas principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Recebível Hoje"
              value="R$ 12.450"
              subtitle="3 transações pendentes"
              icon={Calendar}
              trend={{ value: "12%", isPositive: true }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200"
            />
            <MetricCard
              title="Próximos 7 Dias"
              value="R$ 34.200"
              subtitle="12 transações"
              icon={TrendingUp}
              trend={{ value: "8%", isPositive: true }}
              className="bg-gradient-to-br from-green-50 to-green-100 border-green-200"
            />
            <MetricCard
              title="Próximo Mês"
              value="R$ 89.750"
              subtitle="45 transações"
              icon={CreditCard}
              trend={{ value: "15%", isPositive: true }}
              className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200"
            />
            <MetricCard
              title="Recebível Líquido"
              value="R$ 85.320"
              subtitle="Após taxas estimadas"
              icon={DollarSign}
              trend={{ value: "3%", isPositive: false }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200"
            />
          </div>

          {/* Gráficos e tabelas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <CashFlowChart />
            </div>
            <div>
              <ReceivablesChart />
            </div>
          </div>

          {/* Transações recentes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentTransactions />
            <div className="bg-white rounded-lg p-6 border border-corefactor-light-gray">
              <h3 className="text-lg font-semibold mb-4 text-corefactor-dark-blue">Resumo Mensal</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-corefactor-dark-gray">Total Recebido</span>
                  <span className="font-semibold text-corefactor-dark-blue">R$ 125.750</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-corefactor-dark-gray">Taxas Paginas</span>
                  <span className="font-semibold text-red-600">- R$ 4.430</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-corefactor-dark-gray">Valor Líquido</span>
                  <span className="font-semibold text-corefactor-emerald-green">R$ 121.320</span>
                </div>
                <hr className="my-3 border-corefactor-light-gray" />
                <div className="flex justify-between items-center">
                  <span className="text-corefactor-dark-gray">Taxa Média</span>
                  <span className="font-semibold text-corefactor-dark-blue">3.52%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
