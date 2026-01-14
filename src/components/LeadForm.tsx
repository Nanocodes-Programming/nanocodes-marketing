import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useToast } from "@/hooks/use-toast";

export const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    company_name: "",
    full_name: "",
    role: "",
    phone: "",
    email: "",
    country: "",
    project_type: "",
    budget_range: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({ 
      ...prev, 
      country: value,
      budget_range: "",
    }));
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleProjectTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, project_type: value }));
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleBudgetChange = (value: string) => {
    setFormData((prev) => ({ ...prev, budget_range: value }));
    if (submitStatus === "error") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const resetForm = () => {
    setFormData({
      company_name: "",
      full_name: "",
      role: "",
      phone: "",
      email: "",
      country: "",
      project_type: "",
      budget_range: "",
    });
    setSubmitStatus("idle");
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const trimmedData = {
      company_name: formData.company_name.trim(),
      full_name: formData.full_name.trim(),
      role: formData.role.trim(),
      phone: formData.phone.trim(),
      email: formData.email.trim(),
      country: formData.country,
      project_type: formData.project_type,
      budget_range: formData.budget_range,
    };
    
    if (!trimmedData.company_name || !trimmedData.full_name || !trimmedData.role || 
        !trimmedData.phone || !trimmedData.email || !trimmedData.country || 
        !trimmedData.project_type || !trimmedData.budget_range) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields.");
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedData.email)) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(trimmedData.phone.replace(/\s/g, ""))) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid phone number.");
      toast({
        title: "Validation Error",
        description: "Please enter a valid phone number.",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    const payload = {
      company_name: trimmedData.company_name,
      full_name: trimmedData.full_name,
      role: trimmedData.role,
      phone: trimmedData.phone,
      email: trimmedData.email.toLowerCase(),
      country: trimmedData.country,
      project_type: trimmedData.project_type,
      budget_range: trimmedData.budget_range,
    };

    try {
      await fetch(import.meta.env.VITE_GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      setIsSubmitting(false);
      setSubmitStatus("success");

      toast({
        title: "🎉 Submission Successful!",
        description: "Your project assessment request has been received. We'll contact you within 2 hours during business hours.",
        duration: 5000,
      });

      setTimeout(() => {
        resetForm();
        e.currentTarget.reset();
      }, 1000);

    } catch (err) {
      setIsSubmitting(false);
      setSubmitStatus("error");
      const errorMsg = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setErrorMessage(errorMsg);
      
      toast({
        title: "Submission Failed",
        description: errorMsg,
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 animate-pulse-glow" id="lead-form">
      <div className="text-center mb-4 sm:mb-6">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
          Get FREE Project Assessment
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Worth <span className="font-bold text-secondary">R2,500/₦150K</span>
        </p>
        <div className="mt-2 sm:mt-3 inline-block bg-secondary/10 text-secondary px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold">
          Response time: Under 2 hours
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
        {/* Error Message Display */}
        {submitStatus === "error" && errorMessage && (
          <div className="bg-red-50 border-2 border-red-200 text-red-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-start gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium break-words">{errorMessage}</span>
          </div>
        )}

        {/* Success Message Display */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border-2 border-green-200 text-green-800 px-3 sm:px-4 py-2 sm:py-3 rounded-lg flex items-start gap-2">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-xs sm:text-sm font-medium">Form submitted successfully! Thank you for your interest.</span>
          </div>
        )}
        
        {/* Company */}
        <div>
          <Label htmlFor="company_name">Company Name*</Label>
          <Input 
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleInputChange}
            placeholder="Your Company Ltd"
            required
            disabled={isSubmitting}
            className="border-2 focus:border-primary"
          />
        </div>

        {/* Full Name */}
        <div>
          <Label htmlFor="full_name">Your Name*</Label>
          <Input 
            id="full_name"
            name="full_name"
            value={formData.full_name}
            onChange={handleInputChange}
            placeholder="John Doe"
            required
            disabled={isSubmitting}
            className="border-2 focus:border-primary"
          />
        </div>

        {/* Role */}

        <div>
          <Label htmlFor="role">Role*</Label>
          <Input 
            id="role"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            placeholder="CEO, CTO, etc."
            required
            disabled={isSubmitting}
            className="border-2 focus:border-primary"
          />
        </div>

        {/* Phone */}
        <div>
          <Label htmlFor="phone">Phone Number (WhatsApp)*</Label>
          <Input 
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+234 or +27..."
            required
            disabled={isSubmitting}
            className="border-2 focus:border-primary"
          />
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email*</Label>
          <Input 
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@company.com"
            required
            disabled={isSubmitting}
            className="border-2 focus:border-primary"
          />
        </div>

        {/* Country */}
        <div>
          <Label>Country*</Label>
          <Select 
            value={formData.country} 
            onValueChange={handleCountryChange} 
            required
            disabled={isSubmitting}
          >
            <SelectTrigger className="border-2 focus:border-primary">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              <SelectItem value="nigeria">🇳🇬 Nigeria</SelectItem>
              <SelectItem value="south-africa">🇿🇦 South Africa</SelectItem>
              <SelectItem value="other">🌍 Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Project Type */}
        <div>
          <Label htmlFor="project_type">Project Type*</Label>
          <Select 
            value={formData.project_type} 
            onValueChange={handleProjectTypeChange} 
            required
            disabled={isSubmitting}
          >
            <SelectTrigger className="border-2 focus:border-primary">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              <SelectItem value="mobile-app">📱 Mobile App</SelectItem>
              <SelectItem value="web-app">🌐 Web Application</SelectItem>
              <SelectItem value="website">💻 Website</SelectItem>
              <SelectItem value="ui-ux">🎨 UI/UX Design</SelectItem>
              <SelectItem value="integration">🔗 Software Integration</SelectItem>
              <SelectItem value="not-sure">🤔 Not Sure Yet</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Budget */}
        <div>
          <Label htmlFor="budget_range">Budget Range*</Label>
          <Select 
            value={formData.budget_range} 
            onValueChange={handleBudgetChange} 
            required
            disabled={isSubmitting || !formData.country}
          >
            <SelectTrigger className="border-2 focus:border-primary">
              <SelectValue placeholder={formData.country ? "Select budget" : "Select country first"} />
            </SelectTrigger>
            <SelectContent className="bg-white z-50">
              {formData.country === "nigeria" ? (
                <>
                  <SelectItem value="₦500K - ₦2M">₦500K - ₦2M</SelectItem>
                  <SelectItem value="₦2M - ₦5M">₦2M - ₦5M</SelectItem>
                  <SelectItem value="₦5M - ₦10M">₦5M - ₦10M</SelectItem>
                  <SelectItem value="₦10M+">₦10M+</SelectItem>
                </>
              ) : formData.country === "south-africa" ? (
                <>
                  <SelectItem value="R10K - R35K">R10K - R35K</SelectItem>
                  <SelectItem value="R35K - R90K">R35K - R90K</SelectItem>
                  <SelectItem value="R90K - R180K">R90K - R180K</SelectItem>
                  <SelectItem value="R180K+">R180K+</SelectItem>
                </>
              ) : formData.country === "other" ? (
                <>
                  <SelectItem value="small">Small Budget</SelectItem>
                  <SelectItem value="medium">Medium Budget</SelectItem>
                  <SelectItem value="large">Large Budget</SelectItem>
                </>
              ) : null}
            </SelectContent>
          </Select>
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          size="lg"
          disabled={isSubmitting || submitStatus === "success"}
          className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold text-sm sm:text-base md:text-lg py-4 sm:py-5 md:py-6 shadow-glow-secondary transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="hidden xs:inline">Submitting...</span>
              <span className="xs:hidden">Sending...</span>
            </span>
          ) : submitStatus === "success" ? (
            "✓ Submitted Successfully!"
          ) : (
            <span className="block truncate">
              <span className="hidden sm:inline">→ GET FREE CONSULTATION NOW ←</span>
              <span className="sm:hidden">GET FREE CONSULTATION</span>
            </span>
          )}
        </Button>

        {/* Footer */}
        <div className="flex items-center gap-2 text-[10px] xs:text-xs text-muted-foreground pt-2 flex-wrap">
          <svg className="w-3 h-3 xs:w-4 xs:h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="leading-tight">100% Free. No obligation. NDA available.</span>
        </div>
      </form>
    </div>
  );
};
