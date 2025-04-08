import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertMessageSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Extend the schema with additional validation
const contactFormSchema = insertMessageSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof contactFormSchema>) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error("Error sending message:", error);
      toast({
        title: "Error sending message",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#E0E0E0]">Name</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333333] focus:border-[#E0E0E0] rounded focus:outline-none text-light" 
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-[#E0E0E0]">Email</FormLabel>
                <FormControl>
                  <Input 
                    {...field} 
                    type="email" 
                    className="w-full px-4 py-3 bg-[#121212] border border-[#333333] focus:border-[#E0E0E0] rounded focus:outline-none text-light" 
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#E0E0E0]">Subject</FormLabel>
              <FormControl>
                <Input 
                  {...field} 
                  className="w-full px-4 py-3 bg-[#121212] border border-[#333333] focus:border-[#E0E0E0] rounded focus:outline-none text-light" 
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-[#E0E0E0]">Message</FormLabel>
              <FormControl>
                <Textarea 
                  {...field} 
                  rows={5} 
                  className="w-full px-4 py-3 bg-[#121212] border border-[#333333] focus:border-[#E0E0E0] rounded focus:outline-none text-light resize-none" 
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <motion.div whileTap={{ scale: 0.97 }}>
          <Button 
            type="submit" 
            disabled={isPending} 
            className="px-6 py-3 bg-[#E0E0E0] text-[#121212] hover:bg-[#F5F5F5] transition-colors duration-300 font-medium uppercase tracking-wider text-sm"
          >
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default ContactForm;
