import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Menu, X, Wrench, ShoppingCart, Truck, MapPin, Phone, Mail, Clock, Award } from 'lucide-react';
import Spline from '@splinetool/react-spline';


const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário enviado:', formData);
    // Aqui você pode adicionar a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
    setFormData({
      nome: '',
      sobrenome: '',
      email: '',
      assunto: '',
      mensagem: ''
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5592992119122?text=Olá! Gostaria de mais informações sobre os serviços da Tracionária.', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logovermelha.png"
                alt="Logo Tracionária"
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-tracionaria-red transition-colors">
                Início
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-gray-700 hover:text-tracionaria-red transition-colors">
                Nossos Serviços
              </button>
              <button onClick={() => scrollToSection('historia')} className="text-gray-700 hover:text-tracionaria-red transition-colors">
                Nossa História
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-tracionaria-red transition-colors">
                Contato
              </button>
              <button onClick={() => scrollToSection('localizacao')} className="text-gray-700 hover:text-tracionaria-red transition-colors">
                Localização
              </button>
            </nav>

            {/* WhatsApp Button Desktop */}
            <Button onClick={openWhatsApp} className="hidden md:flex bg-green-500 hover:bg-green-600 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t">
              <nav className="py-4 space-y-2">
                <button onClick={() => scrollToSection('inicio')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Início
                </button>
                <button onClick={() => scrollToSection('servicos')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Nossos Serviços
                </button>
                <button onClick={() => scrollToSection('historia')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Nossa História
                </button>
                <button onClick={() => scrollToSection('contato')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Contato
                </button>
                <button onClick={() => scrollToSection('localizacao')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Localização
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative bg-black text-white py-60">
        {/* Spline como fundo */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <Spline
            scene="https://prod.spline.design/W80dCQzp-tklDQcZ/scene.splinecode"
            className="w-full h-full"
          />
        </div>
        {/* Conteúdo da Hero Section */}
        <div className="container mx-auto px-4 text-left relative z-10">
          <img
              src="/logobranca.png"
              alt="Logo Tracionária"
              className="h-[0rem] md:h-[4.5rem] mb-2 animate-fade-in font-Horizon"
              style={{ width: "auto", marginLeft: "-12px", marginBottom: "-0.8rem" }}
          />
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">
            Especialistas em manutenção <br/>
            e venda de peças para empilhadeiras
          </p>
          <p className="text-lg mb-8 max-w-3xl animate-fade-in">
            Desde 1997 prestando serviços de qualidade para toda a região Norte
          </p>
          <Button onClick={openWhatsApp} size="lg" className="bg-green-500 hover:bg-green-600 text-white animate-fade-in">
            <MessageCircle className="w-5 h-5 mr-2" />
            Entre em contato
          </Button>
        </div>
      </section>

      {/* Nossa História */}
      <section id="historia" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-tracionaria-red mb-8">
              Nossa História
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              A Tracionária surge em meados de 1997 pela fundação de José Tomás de Aquino. 
              A Tracionária percorre este longo caminho prestando serviços de manutenção e 
              venda de peças de empilhadeiras.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="servicos" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tracionaria-red mb-12">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Manutenção */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-tracionaria-red">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-tracionaria-red rounded-full flex items-center justify-center mb-4">
                  <Wrench className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-tracionaria-red">Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Manutenção preventiva</li>
                  <li>• Manutenção corretiva</li>
                  <li>• Reforma</li>
                  <li>• Pintura</li>
                </ul>
              </CardContent>
            </Card>

            {/* Venda de Peças */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-tracionaria-orange">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-tracionaria-orange rounded-full flex items-center justify-center mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-tracionaria-orange">Venda de Peças</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Todas as peças para empilhadeiras (verificar disponibilidade)</li>
                  <li>• Baterias tracionárias</li>
                  <li>• Recondicionamento de peças</li>
                </ul>
              </CardContent>
            </Card>

            {/* Transpalete Manual */}
            <Card className="hover:shadow-lg transition-shadow border-l-4 border-l-gray-800">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-gray-800">Transpalete Manual</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• Reforma</li>
                  <li>• Pintura</li>
                  <li>• Peças</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tracionaria-red mb-12">
            Contato
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Informações de Contato */}
            <div className="space-y-6 flex flex-col items-start">
              <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start text-left space-y-3">
                    <MapPin className="w-5 h-5 text-tracionaria-red" />
                    <div>
                      <h3 className="font-semibold">Endereço</h3>
                      <p className="text-gray-600">R. Joracir Camargo, 61 - Manaus/AM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start text-left space-y-3">
                    <Mail className="w-5 h-5 text-tracionaria-red" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">adm@tracionaria.ind.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-start text-left space-y-3">
                    <Clock className="w-5 h-5 text-tracionaria-red" />
                    <div>
                      <h3 className="font-semibold">Horário de Funcionamento</h3>
                      <p className="text-gray-600">Segunda a Sexta: 08:00 às 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button onClick={openWhatsApp} className="w-full max-w-md bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar no WhatsApp
              </Button>
            </div>

            {/* Imagem ao lado */}
            <div className="flex justify-center items-start overflow-hidden rounded-lg bg-white" style={{ height: "500px" }}>
              <img
                src="empilhadeira.png"
                alt="Empilhadeira"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Representações */}
      <section id="representacoes" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tracionaria-red mb-8">
            Somos serviço autorizado 
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-8">
              A Tracionária é serviço autorizado das principais marcas do mercado de empilhadeiras
            </p>
            
            <Card className="border-2 border-tracionaria-orange/20 hover:border-tracionaria-orange/40 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-tracionaria-orange mr-3" />
                  <CardTitle className="text-2xl text-tracionaria-red">
                    Serviço autorizado
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-white p-8 rounded-lg shadow-inner">
                  <img 
                    src="/576b6cf8-43b1-43f2-bf9e-89a654096acc.png" 
                    alt="Linde, Still e Baoli - Members of KION Group" 
                    className="w-full max-w-2xl mx-auto h-auto"
                  />
                </div>
                <p className="text-gray-700 mt-6 text-lg">
                  <strong>Linde</strong>, <strong>Still</strong> e <strong>Baoli</strong> - Members of KION Group
                </p>
                <p className="text-gray-600 mt-4">
                  Trabalhamos com as melhores marcas do mercado mundial de empilhadeiras, 
                  garantindo qualidade, confiabilidade e suporte técnico especializado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nossa Localização */}
      <section id="localizacao" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-tracionaria-red mb-8">
            Nossa Localização
          </h2>
          
          <div className="max-w-4xl mx-auto text-center mb-8">
            <p className="text-lg text-gray-700">
              Nossa empresa localiza-se em Manaus e presta serviços para toda região Norte. 
              A sede conta com peças para pronta entrega e serviços de manutenção das 08:00 às 18:00.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8493842147845!2d-60.0254043!3d-3.1319197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c05173ac5fc8f%3A0x1eadbe52b7bdfb21!2sR.%20Joracir%20Camargo%2C%2061%20-%20Cidade%20Nova%2C%20Manaus%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1703123456789!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="text-center">
              <Button 
                onClick={() => window.open('https://maps.google.com/?q=R.+Joracir+Camargo,+61+-+Manaus/AM', '_blank')}
                className="bg-tracionaria-orange hover:bg-orange-600 text-white"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Ver no Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img
                src="/logovermelha-semfundo.png"
                alt="Logo Tracionária"
                className="h-12 w-auto"
              />
              <p className="text-gray-300">
                Especialistas em manutenção e venda de peças para empilhadeiras desde 1997.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-white transition-colors">
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('servicos')} className="text-gray-300 hover:text-white transition-colors">
                    Nossos Serviços
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('historia')} className="text-gray-300 hover:text-white transition-colors">
                    Nossa História
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contato')} className="text-gray-300 hover:text-white transition-colors">
                    Contato
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <p className="text-gray-300 mb-2">R. Joracir Camargo, 61 - Manaus/AM</p>
              <p className="text-gray-300 mb-4">adm@tracionaria.ind.br</p>
              <Button onClick={openWhatsApp} className="bg-green-500 hover:bg-green-600 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 Tracionária. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button (Mobile) */}
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 md:hidden transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Index;
