import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppWidget = () => {
  const phoneNumber = "919739368638";
  const message = "Hello! I'm interested in LumiPath Education Solutions.";
  const userAgent = navigator.userAgent.toLowerCase();
  const encodedMessage = encodeURIComponent(message);
  const handleWhatsAppClick = () => {
    
    //if (/android|iphone|ipad|ipod/i.test(userAgent)) {
      // 📱 Mobile → Open WhatsApp App
      //whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    //} else {
      // 💻 Desktop → Open WhatsApp Web
      //whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    //}
    //const whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}?text=${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default WhatsAppWidget;
