import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface Message {
    text: string;
    sender: 'bot' | 'user';
}

const socialLinks = {
    github: 'https://github.com/Francisco-Araujoo',
    linkedin: 'https://www.linkedin.com/in/franciscofaraujoo/',
    instagram: 'https://www.instagram.com/franc.araujoo/'
};

const commonQuestions = [
    {
        pattern: /(oi|olá|ola|oii|opa|hey|e ai|eai|iae)/i,
        responses: [
            "Olá! Como posso ajudar você hoje?",
            "Oi! Que bom ter você por aqui! Como posso auxiliar?",
            "Olá! Bem-vindo à Nexium! Em que posso ajudar?"
        ]
    },
    {
        pattern: /(preço|valor|custo|quanto custa|orçamento)/i,
        responses: [
            "Para fornecer um orçamento preciso, precisamos entender melhor seu projeto. Por favor, me conte:\n\n1. Qual tipo de projeto você precisa?\n2. Qual é o prazo desejado?\n3. Tem alguma referência de projeto similar?\n\nVocê também pode falar diretamente com nosso time pelo WhatsApp: wa.me/43988331584"
        ]
    },
    {
        pattern: /(serviços|fazem|trabalham|desenvolvimento|site|app|aplicativo)/i,
        responses: [
            "A Nexium oferece diversos serviços de desenvolvimento:\n\n• Desenvolvimento Web\n• Aplicativos Mobile\n• Sistemas Empresariais\n• E-commerce\n• Landing Pages\n• Integrações de API\n\nQual desses serviços mais te interessa?"
        ]
    },
    {
        pattern: /(tempo|prazo|demora|entrega)/i,
        responses: [
            "O prazo de desenvolvimento varia conforme a complexidade do projeto. Em geral:\n\n• Landing Pages: 1-2 semanas\n• Sites institucionais: 2-4 semanas\n• E-commerce: 4-8 semanas\n• Aplicativos: 6-12 semanas\n\nPara um prazo mais preciso, conte-me mais sobre seu projeto!"
        ]
    },
    {
        pattern: /(pagamento|forma de pagamento|parcelar|parcelas)/i,
        responses: [
            "Oferecemos diversas formas de pagamento:\n\n• PIX\n• Cartão de crédito (até 12x)\n• Boleto bancário\n• Transferência bancária\n\nAceitamos também pagamentos parcelados conforme as etapas do projeto."
        ]
    },
    {
        pattern: /(tecnologias|stack|ferramentas|linguagens)/i,
        responses: [
            "Trabalhamos com as tecnologias mais modernas do mercado:\n\n• Frontend: React, Next.js, TypeScript\n• Backend: Node.js, Python, Java\n• Mobile: React Native, Flutter\n• Banco de dados: PostgreSQL, MongoDB\n• Cloud: AWS, Google Cloud\n\nTodas escolhidas para garantir qualidade e performance!"
        ]
    }
];

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [showInitialMessage, setShowInitialMessage] = useState(true);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (scrollAreaRef.current) {
            const scrollArea = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
            if (scrollArea) {
                scrollArea.scrollTop = scrollArea.scrollHeight;
            }
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (showInitialMessage) {
            const currentHour = new Date().getHours();
            let greeting = '';

            if (currentHour >= 5 && currentHour < 12) {
                greeting = 'Bom dia';
            } else if (currentHour >= 12 && currentHour < 18) {
                greeting = 'Boa tarde';
            } else {
                greeting = 'Boa noite';
            }

            const initialMessage = `${greeting}! 👋\n\nSou o assistente virtual da Nexium. Estou aqui para ajudar você! 😊\n\nPosso auxiliar com:\n\n📋 Orçamentos\n👨‍💻 Informações sobre nossos serviços\n🔗 Links e redes sociais\n💼 Portfólio\n💰 Formas de pagamento\n⏱️ Prazos de entrega\n\nComo posso te ajudar hoje?`;

            setMessages([{ text: initialMessage, sender: 'bot' }]);
            setShowInitialMessage(false);
        }
    }, [showInitialMessage]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = input.trim();
        setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
        setInput('');

        // Processar a mensagem do usuário
        setTimeout(() => {
            const response = generateResponse(userMessage.toLowerCase());
            setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
        }, 500);
    };

    const generateResponse = (message: string) => {
        // Verifica as respostas comuns primeiro
        for (const question of commonQuestions) {
            if (question.pattern.test(message)) {
                return question.responses[Math.floor(Math.random() * question.responses.length)];
            }
        }

        // Respostas específicas sobre Francisco e redes sociais
        if (message.includes('francisco') || message.includes('quem é')) {
            return '👨‍💻 Francisco é um desenvolvedor Full Stack apaixonado por tecnologia e inovação!\n\n💡 Especialidades:\n• Desenvolvimento Web\n• Aplicações Mobile\n• Sistemas Empresariais\n\n🛠️ Tecnologias:\n• React, Next.js, TypeScript\n• Node.js, Python\n• React Native\n\n🔗 Conheça mais em seu portfólio:\nhttps://franciscoaraujodev.netlify.app/';
        }

        if (message.includes('redes') || message.includes('sociais') || message.includes('links')) {
            return `🌐 Redes sociais do Francisco:\n\n📱 Instagram: ${socialLinks.instagram}\n💼 LinkedIn: ${socialLinks.linkedin}\n💻 GitHub: ${socialLinks.github}`;
        }

        if (message.includes('contato') || message.includes('falar') || message.includes('whats') || message.includes('whatsapp')) {
            return '📱 Você pode entrar em contato conosco através do WhatsApp:\n\nwa.me/43988331584\n\nEstamos disponíveis de segunda a sexta, das 8h às 18h.';
        }

        if (message.includes('experiência') || message.includes('portfolio') || message.includes('projetos')) {
            return '🚀 A Nexium tem vasta experiência em desenvolvimento de software!\n\n✨ Alguns de nossos casos de sucesso incluem:\n\n• E-commerces de alta performance\n• Sistemas de gestão empresarial\n• Aplicativos mobile inovadores\n• Sites institucionais modernos\n\n🔗 Veja nosso portfólio completo em:\nhttps://franciscoaraujodev.netlify.app/';
        }

        // Resposta padrão com sugestões
        return '🤔 Desculpe, não entendi completamente. Posso ajudar você com:\n\n📋 Orçamentos\n💻 Serviços de desenvolvimento\n⏱️ Prazos de entrega\n💰 Formas de pagamento\n🔗 Redes sociais\n👨‍💻 Informações sobre nossa equipe\n\nPor favor, me diga como posso ajudar!';
    };

    return (
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 z-50">
            {isOpen ? (
                <div className="bg-slate-900 border border-purple-500/20 rounded-lg shadow-lg w-[90vw] sm:w-96 h-[80vh] sm:h-[600px] max-h-[600px] transition-all duration-300 ease-in-out">
                    <div className="p-4 border-b border-purple-500/20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-lg">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <h3 className="text-white font-semibold">Assistente Nexium</h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-200 hover:bg-white/10"
                            >
                                ✕
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col h-[calc(100%-8rem)]" ref={scrollAreaRef}>
                        <ScrollArea className="flex-1 p-4">
                            {messages.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 ${message.sender === 'bot'
                                            ? 'text-left'
                                            : 'text-right'
                                        }`}
                                >
                                    <div
                                        className={`inline-block p-3 rounded-lg max-w-[85%] whitespace-pre-wrap ${message.sender === 'bot'
                                                ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-gray-200'
                                                : 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-gray-200'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </div>
                    <div className="p-4 border-t border-purple-500/20 bg-slate-900/95 backdrop-blur">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Digite sua mensagem..."
                                className="flex-1 p-2 rounded-md bg-slate-800 border border-purple-500/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                            />
                            <Button
                                onClick={handleSend}
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all"
                            >
                                <span className="hidden sm:inline">Enviar</span>
                                <span className="sm:hidden">📤</span>
                            </Button>
                        </div>
                    </div>
                </div>
            ) : (
                <Button
                    onClick={() => setIsOpen(true)}
                    className="rounded-full w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 animate-bounce"
                >
                    💬
                </Button>
            )}
        </div>
    );
}
