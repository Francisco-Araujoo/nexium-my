




"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import {
  MessageCircle, ArrowRight, X, Menu, Check, Globe, Code, Smartphone, Star, Instagram, Github, Mail
} from "lucide-react"
import { ChatBot } from "@/components/ChatBot"

export default function NexiumLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handlePortfolioClick = () => {
    window.open('https://franciscoaraujodev.netlify.app/', '_blank')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-purple-500/20 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-2 sm:px-4 md:px-6 max-w-full md:max-w-7xl">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div className="relative min-w-[32px] min-h-[32px] sm:min-w-[40px] sm:min-h-[40px]">
              <Image
                src="/images/nexium-logo.png"
                alt="Nexium Logo"
                width={40}
                height={40}
                className="rounded-lg transition-transform hover:scale-110 duration-300 w-8 h-8 sm:w-10 sm:h-10 object-contain"
                priority
              />
            </div>
            <span className="truncate text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent max-w-[120px] sm:max-w-none">
              NEXIUM
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <Link
              href="#servicos"
              className="text-xs sm:text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="https://franciscoaraujodev.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="#sobre"
              className="text-xs sm:text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#contato"
              className="text-xs sm:text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors"
            >
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link
              href="https://wa.me/43988331584?text=Solicitar%20Orçamentos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="hidden md:inline-flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Solicitar Orçamento
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-300 hover:text-white hover:bg-purple-600/20"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur border-t border-purple-500/20">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link
                href="#servicos"
                className="block text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="#portfolio"
                className="block text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Portfólio
              </Link>
              <Link
                href="#sobre"
                className="block text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#contato"
                className="block text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="https://wa.me/43988331584?text=Solicitar%20Orçamentos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 mt-4"
                >
                  Solicitar Orçamento
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left min-w-0">
                <div className="space-y-4">
                  <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 bg-purple-600/20 text-purple-300 border-purple-500/30">
                    🚀 Conectando Ideias ao Futuro
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
                    Transforme Sua
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent break-words">
                      {" "}
                      Presença Digital
                    </span>
                  </h1>
                  <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-300 md:text-xl">
                    Desenvolvemos sistemas, landing pages de alta conversão e aplicativos mobile que impulsionam seu negócio para o próximo nível. Soluções tecnológicas que geram resultados reais.
                  </p>
                </div>
                <div className="flex flex-col gap-3 w-full max-w-xs mx-auto lg:mx-0">
                  <Button
                    size="lg"
                    className="w-full h-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base font-semibold"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp: (43) 98833-1584
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full h-12 px-4 border-purple-500/50 text-purple-300 hover:bg-purple-600/20 text-base bg-transparent"
                  >
                    Ver Portfólio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-xs mx-auto lg:mx-0 mt-2 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                  <div className="flex items-center space-x-2 group rounded-lg px-3 py-1 bg-gradient-to-r from-purple-700/60 to-blue-700/60 shadow-md hover:scale-105 transition-transform duration-300">
                    <Check className="h-5 w-5 text-green-400 animate-pulse group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-sm bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-sm tracking-wide">Orçamento Gratuito</span>
                  </div>
                  <div className="flex items-center space-x-2 group rounded-lg px-3 py-1 bg-gradient-to-r from-purple-700/60 to-blue-700/60 shadow-md hover:scale-105 transition-transform duration-300">
                    <Check className="h-5 w-5 text-green-400 animate-pulse group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-sm bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-sm tracking-wide">Entrega Garantida</span>
                  </div>
                  <div className="flex items-center space-x-2 group rounded-lg px-3 py-1 bg-gradient-to-r from-purple-700/60 to-blue-700/60 shadow-md hover:scale-105 transition-transform duration-300">
                    <Check className="h-5 w-5 text-green-400 animate-pulse group-hover:scale-125 transition-transform" />
                    <span className="font-semibold text-sm bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent drop-shadow-sm tracking-wide">Suporte 24/7</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000 delay-800">
                <div className="relative w-full flex justify-center items-center">
                  <Image
                    src="/images/NexiumRobo.png"
                    width={480}
                    height={480}
                    alt="Nexium Robot"
                    className="mx-auto w-full max-w-[340px] sm:max-w-[400px] md:max-w-[480px] h-auto rounded-2xl object-contain shadow-2xl transition-all duration-500 hover:scale-105 float-animation"
                    priority
                  />
                  <div className="absolute top-6 right-10 w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50 glow-animation"></div>
                  <div className="absolute bottom-10 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
                  <div className="absolute top-1/2 right-16 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="w-full py-12 md:py-24 lg:py-32 bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                  Nossos Serviços
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Soluções Completas para Seu Negócio
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Especializados em desenvolvimento de alta qualidade com foco em conversão e resultados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden bg-slate-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-purple-500/25">
                    <Globe className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-purple-300 transition-colors duration-300">Landing Pages de Alta Conversão</CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Páginas otimizadas para converter visitantes em clientes, com design moderno e estratégias
                    comprovadas.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Design responsivo</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Otimização para SEO</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Integração com analytics</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Testes A/B inclusos</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-slate-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-blue-500/25">
                    <Code className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-blue-300 transition-colors duration-300">Sistemas Web Personalizados</CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Desenvolvimento de sistemas robustos e escaláveis para automatizar processos do seu negócio.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Arquitetura moderna</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Banco de dados otimizado</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>API's integradas</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Segurança avançada</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden bg-slate-800/50 border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom duration-700 delay-700">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-indigo-500/25">
                    <Smartphone className="h-6 w-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-white group-hover:text-indigo-300 transition-colors duration-300">Aplicativos Mobile</CardTitle>
                  <CardDescription className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    Apps nativos e híbridos para Android e iOS, prontos para publicação na Play Store.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Interface intuitiva</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Performance otimizada</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Publicação incluída</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-green-400" />
                      <span>Suporte pós-lançamento</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
          <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Imagem do fundador */}
              <div className="flex items-center justify-center order-2 lg:order-1 w-full">
                <div className="relative w-full max-w-[160px] xs:max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-md group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl opacity-20 animate-pulse"></div>
                  <Image
                    src="/images/myFace.webp"
                    width={260}
                    height={260}
                    alt="Francisco Araújo - Fundador da Nexium"
                    className="relative mx-auto w-full h-auto rounded-2xl object-cover shadow-2xl border border-purple-500/30 hover:border-purple-400/50 transition-all duration-500 group-hover:scale-105"
                    quality={95}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                  />
                  <div className="absolute bottom-4 right-4 w-4 h-4 bg-green-400 rounded-full animate-ping shadow-lg shadow-green-400/50"></div>
                </div>
              </div>
              {/* Informações do fundador e empresa */}
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left order-1 lg:order-2 w-full">
                <Badge variant="secondary" className="w-fit mx-auto lg:mx-0 bg-purple-600/20 text-purple-300 border-purple-500/30 hover:scale-105 transition-transform animate-in fade-in slide-in-from-top duration-700 delay-300">
                  Sobre a Nexium
                </Badge>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-white">Francisco Araújo</h2>
                <h3 className="text-base sm:text-xl text-purple-400 font-semibold">Fundador & CEO da Nexium</h3>
                <p className="text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto lg:mx-0">
                  Com anos de experiência em desenvolvimento web e mobile, fundei a Nexium com a missão de conectar ideias ao futuro através da tecnologia. Nossa empresa é especializada em criar soluções digitais que não apenas impressionam visualmente, mas que geram resultados concretos para nossos clientes.
                </p>
                {/* Grid de informações */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-2 max-w-xs mx-auto lg:mx-0 text-xs sm:text-sm">
                  <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-2">
                    <span className="text-purple-400 font-bold text-base sm:text-lg">50+</span>
                    <span className="text-gray-400">Projetos Entregues</span>
                  </div>
                  <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-2">
                    <span className="text-purple-400 font-bold text-base sm:text-lg">100%</span>
                    <span className="text-gray-400">Clientes Satisfeitos</span>
                  </div>
                  <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-2">
                    <span className="text-purple-400 font-bold text-base sm:text-lg">3+</span>
                    <span className="text-gray-400">Anos de Experiência</span>
                  </div>
                  <div className="flex flex-col items-center bg-slate-800/60 rounded-lg p-2">
                    <span className="text-purple-400 font-bold text-base sm:text-lg">24/7</span>
                    <span className="text-gray-400">Suporte Técnico</span>
                  </div>
                  <div className="col-span-2 flex justify-center items-center bg-slate-800/60 rounded-lg p-2 mt-1">
                    <span className="text-xs text-gray-400"><span className="text-purple-400 font-bold">CNPJ:</span> 60.286.542/0001-02</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-800/50">
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                  Depoimentos
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  O que nossos clientes dizem
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Resultados reais de empresas que confiaram na Nexium.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300">
                    "A landing page desenvolvida pela Nexium aumentou nossas conversões em 300%. O Francisco é um
                    profissional excepcional e entrega exatamente o que promete."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Maria"
                      width={40}
                      height={40}
                      alt="Maria Silva"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Maria Silva</p>
                      <p className="text-xs text-gray-400">CEO, TechStart</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300">
                    "O sistema desenvolvido automatizou completamente nossos processos. Economizamos 20 horas por semana
                    e aumentamos nossa produtividade significativamente."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=João"
                      width={40}
                      height={40}
                      alt="João Santos"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">João Santos</p>
                      <p className="text-xs text-gray-400">Diretor, LogiCorp</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>

              <Card className="bg-slate-800/50 border-purple-500/30">
                <CardHeader>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-300">
                    "Nosso app mobile foi um sucesso total! Mais de 10.000 downloads no primeiro mês. A qualidade do
                    trabalho da Nexium é incomparável."
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center space-x-3">
                    <Image
                      src="/placeholder.svg?height=40&width=40&text=Ana"
                      width={40}
                      height={40}
                      alt="Ana Costa"
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-white">Ana Costa</p>
                      <p className="text-xs text-gray-400">Fundadora, AppVenture</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-7xl">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Pronto para Transformar Seu Negócio?
                </h2>
                <p className="max-w-[600px] mx-auto text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Entre em contato agora e receba um orçamento personalizado para seu projeto.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <div className="flex flex-col w-full gap-2 max-w-xs mx-auto">
                  <Button
                    size="lg"
                    className="w-full h-12 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-base font-semibold"
                    asChild
                  >
                    <Link href="https://wa.me/5543988331584" target="_blank">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp: (43) 98833-1584
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 px-4 border-purple-500/50 text-purple-300 hover:bg-purple-600/20 text-base bg-transparent"
                    asChild
                  >
                    <Link href="mailto:franciscoaraujodev@gmail.com">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar E-mail
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Resposta em até 2 horas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Orçamento sem compromisso</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-400" />
                  <span>Consultoria gratuita</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contato" className="w-full py-12 bg-slate-900 border-t border-purple-500/20">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Image src="/images/nexium-logo.png" alt="Nexium Logo" width={32} height={32} className="rounded-lg" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  NEXIUM
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Conectando ideias ao futuro através da tecnologia. Desenvolvemos soluções digitais que transformam
                negócios.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://instagram.com/fraanciis_co"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="https://github.com/Francisco-Araujoo"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
                <Link
                  href="https://wa.me/5543988331584"
                  target="_blank"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <Link
                  href="mailto:franciscoaraujodev@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Serviços</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#servicos" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Landing Pages
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Sistemas Web
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Apps Mobile
                  </Link>
                </li>
                <li>
                  <Link href="#servicos" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Consultoria
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#sobre" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Sobre Nós
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Portfólio
                  </Link>
                </li>
                <li>
                  <Link href="#contato" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Contato
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400">CNPJ: 60.286.542/0001-02</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-white">Contato</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4 text-purple-400" />
                  <Link
                    href="https://wa.me/5543988331584"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    (43) 98833-1584
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-purple-400" />
                  <Link
                    href="mailto:franciscoaraujodev@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    franciscoaraujodev@gmail.com
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4 text-purple-400" />
                  <Link
                    href="https://instagram.com/fraanciis_co"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    @fraanciis_co
                  </Link>
                </li>
                <li className="flex items-center space-x-2">
                  <Github className="h-4 w-4 text-purple-400" />
                  <Link
                    href="https://github.com/Francisco-Araujoo"
                    target="_blank"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Francisco-Araujoo
                  </Link>
                </li>
              </ul>
              <ChatBot />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-purple-500/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">© {new Date().getFullYear()} Nexium - Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-purple-400 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
