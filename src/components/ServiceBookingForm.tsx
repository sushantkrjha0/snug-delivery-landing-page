"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { roboto_slab } from "@/app/fonts"

const FormSchema = z.object({
    firstname: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastname: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
        message: "Invalid phone number.",
    }), // Supports international format
    description: z.string().min(10, {
        message: "Description must be at least 10 characters.",
    }).max(500, {
        message: "Description must be at most 500 characters.",
    }),
});

interface ServiceBookingFormProps {
    buttonText?: string;
    buttonStyle?: 'primary' | 'secondary';
}

export default function ServiceBookingForm({ 
    buttonText = "Schedule a Consultation", 
    buttonStyle = 'secondary' 
}: ServiceBookingFormProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstname: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "Consultation request submitted successfully!",
            description: "Our team will contact you within 24 hours to discuss your requirements.",
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className={
                    buttonStyle === 'primary' 
                        ? "bg-[#8B4513] hover:bg-[#8B4513]/90 text-white px-8 py-3 text-lg font-medium rounded-md transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                        : "font-neue-regrade text-[1.125rem] hover:text-gray-500 border-b-2 border-black hover:border-gray-500 transition-colors"
                }>
                    {buttonText}
                </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Schedule Your Soft Furnishing Consultation</DialogTitle>
                    <DialogDescription>
                        Tell us about your project and we'll schedule a personalized consultation to discuss your curtains, blinds, wallpapers, or upholstery needs.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`${roboto_slab.className} space-y-4`}>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-medium">First Name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="First name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-medium">Last name*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-medium">Email*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-xs font-medium">Phone*</FormLabel>
                                        <FormControl>
                                            <Input placeholder="xxxxx-xxxxx" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-xs font-medium">Project Details*</FormLabel>
                                    <FormControl>
                                        <Textarea 
                                            placeholder="Please describe your soft furnishing needs - curtains, blinds, wallpapers, upholstery, room dimensions, style preferences, etc."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">Schedule Consultation</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
} 