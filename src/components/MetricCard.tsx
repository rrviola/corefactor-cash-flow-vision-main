
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  className?: string;
}

export function MetricCard({ title, value, subtitle, icon: Icon, trend, className }: MetricCardProps) {
  return (
    <Card className={`card-hover ${className}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-corefactor-dark-gray">{title}</CardTitle>
        <Icon className="h-4 w-4 text-corefactor-dark-gray" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-corefactor-dark-blue">{value}</div>
        {subtitle && (
          <p className="text-xs text-corefactor-dark-gray mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className={`flex items-center mt-2 text-xs ${
            trend.isPositive ? 'text-corefactor-emerald-green' : 'text-red-600'
          }`}>
            <span>{trend.isPositive ? '↗' : '↘'} {trend.value}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
