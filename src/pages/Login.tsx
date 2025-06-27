
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular login bem-sucedido
    navigate("/");
  };

  return (
    <div className="min-h-screen gradient-blue flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/8c8bc026-c633-45ea-a894-ce04ecaa2b87.png" 
              alt="CoreFactor" 
              className="h-16 w-auto filter brightness-0 invert"
            />
          </div>
          <h2 className="text-2xl font-bold text-white">Bem-vindo de volta</h2>
          <p className="text-white/80 mt-2">Faça login para acessar sua conta</p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-center text-corefactor-dark-blue">Entrar</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-corefactor-dark-gray">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 border-corefactor-light-gray"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-corefactor-dark-gray">Senha</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 border-corefactor-light-gray"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-corefactor-dark-blue hover:bg-corefactor-dark-blue/90 text-white"
              >
                Entrar
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-corefactor-dark-gray">
                Não tem uma conta?{" "}
                <Link to="/register" className="text-corefactor-dark-blue hover:underline font-medium">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
