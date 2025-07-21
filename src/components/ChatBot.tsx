
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface ChatBotProps {
  language: string;
}

const ChatBot = ({ language }: ChatBotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
  }>>([]);
  const [inputMessage, setInputMessage] = useState('');

  const content = {
    english: {
      title: "Career Counselor",
      placeholder: "Ask me anything about careers, courses, or colleges...",
      send: "Send",
      welcomeMessage: "Hi! I'm your AI Career Counselor. How can I help you today?",
      quickQuestions: [
        "What should I do after 12th Science?",
        "Best engineering colleges in Delhi?",
        "NEET exam preparation tips?",
        "Commerce stream career options?"
      ]
    },
    hindi: {
      title: "करियर काउंसलर",
      placeholder: "करियर, कोर्स या कॉलेज के बारे में कुछ भी पूछें...",
      send: "भेजें",
      welcomeMessage: "नमस्ते! मैं आपका AI करियर काउंसलर हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      quickQuestions: [
        "12वीं साइंस के बाद क्या करना चाहिए?",
        "दिल्ली के सबसे अच्छे इंजीनियरिंग कॉलेज?",
        "NEET परीक्षा की तैयारी के टिप्स?",
        "कॉमर्स स्ट्रीम के करियर विकल्प?"
      ]
    }
  };

  const currentContent = content[language as keyof typeof content];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      type: 'user' as const,
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        type: 'bot' as const,
        content: getBotResponse(inputMessage),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputMessage('');
  };

  const getBotResponse = (message: string) => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('engineering') || lowerMessage.includes('इंजीनियरिंग')) {
      return language === 'english' 
        ? "Engineering is a great choice! You can pursue B.Tech in various streams like Computer Science, Mechanical, Electrical, etc. The main entrance exams are JEE Main and JEE Advanced. Top colleges include IITs, NITs, and BITS."
        : "इंजीनियरिंग एक बेहतरीन विकल्प है! आप कंप्यूटर साइंस, मैकेनिकल, इलेक्ट्रिकल आदि विभिन्न स्ट्रीम में B.Tech कर सकते हैं। मुख्य प्रवेश परीक्षाएं JEE Main और JEE Advanced हैं।";
    }
    
    if (lowerMessage.includes('medical') || lowerMessage.includes('doctor') || lowerMessage.includes('मेडिकल') || lowerMessage.includes('डॉक्टर')) {
      return language === 'english'
        ? "For medical field, you need to clear NEET UG exam. You can pursue MBBS, BDS, BAMS, etc. AIIMS and government medical colleges are highly sought after."
        : "मेडिकल फील्ड के लिए आपको NEET UG परीक्षा पास करनी होगी। आप MBBS, BDS, BAMS आदि कर सकते हैं। AIIMS और सरकारी मेडिकल कॉलेज बहुत अच्छे हैं।";
    }

    if (lowerMessage.includes('commerce') || lowerMessage.includes('कॉमर्स')) {
      return language === 'english'
        ? "Commerce stream offers great opportunities! You can pursue CA, CS, CMA, B.Com, BBA, Economics, etc. Career options include Accountant, Financial Analyst, Banker, Entrepreneur."
        : "कॉमर्स स्ट्रीम में बेहतरीन अवसर हैं! आप CA, CS, CMA, B.Com, BBA, Economics आदि कर सकते हैं। करियर विकल्पों में Accountant, Financial Analyst, Banker शामिल हैं।";
    }

    return language === 'english'
      ? "That's a great question! Could you be more specific about what you'd like to know? I can help you with information about streams, courses, colleges, entrance exams, and career guidance."
      : "यह एक अच्छा सवाल है! क्या आप अधिक स्पष्ट बता सकते हैं कि आप क्या जानना चाहते हैं? मैं स्ट्रीम, कोर्स, कॉलेज, प्रवेश परीक्षा और करियर गाइडेंस के बारे में मदद कर सकता हूं।";
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 ${isOpen ? 'hidden' : 'flex'} items-center justify-center z-50`}
      >
        <MessageCircle className="h-8 w-8 text-white" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 bg-white border-0">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                {currentContent.title}
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-[400px] p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">{currentContent.welcomeMessage}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-xs text-gray-500 px-2">Quick questions:</p>
                    {currentContent.quickQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="w-full text-left text-xs h-auto p-2 justify-start"
                        onClick={() => handleQuickQuestion(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
              
              {messages.map((message, index) => (
                <div key={index} className={`flex items-start gap-2 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.type === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600'
                  }`}>
                    {message.type === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-lg p-3 max-w-[80%] ${
                    message.type === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Input
                  placeholder={currentContent.placeholder}
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;
