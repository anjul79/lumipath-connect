import { createContext, useContext, useState, ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ContactForm from "@/components/ContactForm";

interface ContactFormDialogContextType {
  openContactDialog: () => void;
  closeContactDialog: () => void;
}

const ContactFormDialogContext = createContext<ContactFormDialogContextType | undefined>(undefined);

export const useContactFormDialog = () => {
  const context = useContext(ContactFormDialogContext);
  if (!context) {
    throw new Error("useContactFormDialog must be used within a ContactFormDialogProvider");
  }
  return context;
};

export const ContactFormDialogProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactDialog = () => setIsOpen(true);
  const closeContactDialog = () => setIsOpen(false);

  return (
    <ContactFormDialogContext.Provider value={{ openContactDialog, closeContactDialog }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get Started with LumiPath</DialogTitle>
            <DialogDescription>
              Fill out the form below and our team will get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>
          <ContactForm />
        </DialogContent>
      </Dialog>
    </ContactFormDialogContext.Provider>
  );
};
