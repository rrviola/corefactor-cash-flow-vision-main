
import { NavLink, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  CreditCard, 
  TrendingUp, 
  Settings, 
  LogOut,
  Home
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const mainItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Recebíveis", url: "/receivables", icon: CreditCard },
  { title: "Fluxo de Caixa", url: "/cash-flow", icon: TrendingUp },
  { title: "Integrações", url: "/integrations", icon: Settings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-corefactor-dark-blue text-white font-medium" 
      : "hover:bg-corefactor-light-gray text-corefactor-dark-gray";

  return (
    <Sidebar className={!open ? "w-14" : "w-64"} collapsible="icon">
      <SidebarHeader className="p-4">
        {open && (
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/8c8bc026-c633-45ea-a894-ce04ecaa2b87.png" 
              alt="CoreFactor" 
              className="h-8 w-auto"
            />
          </div>
        )}
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-corefactor-dark-gray text-sm font-bold text-gray-700">
            {open && "Menu Principal"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 text-gray-700">
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end 
                      className={({ isActive }) => 
                        `flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${getNavCls({ isActive })}`
                      }
                    >
                      <item.icon className="w-5 h-5 text-blue-500" />
                      {open && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {open && (
          <Button 
            variant="ghost" 
            className="w-full justify-start text-corefactor-dark-gray hover:text-corefactor-dark-blue hover:bg-corefactor-light-gray"
            onClick={() => window.location.href = '/login'}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sair
          </Button>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
