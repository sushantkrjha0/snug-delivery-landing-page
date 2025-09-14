"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
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

export default function InputForm({tagLine}:{tagLine:string}) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        firstname: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
        title: "You submitted the following values:",
        description: (
            <pre className="mt-2 w-full max-w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
        ),
        })
    }

    return (
        <div className="flex justify-center w-full min-h-[691px] py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={`${roboto_slab.className} max-w-4xl mx-auto flex flex-col gap-6`}>
                        <div className="text-center mb-8">
                            <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">{tagLine}</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We'd love to help make your home even cozier! Drop us a friendly message about what you're dreaming of, and our caring team will reach out to chat about bringing your vision to life.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-sm font-medium text-gray-700">First Name*</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="h-12 text-base border-gray-300 focus:border-[#B4654A] focus:ring-[#B4654A]" 
                                            placeholder="Enter your first name" 
                                            {...field} 
                                        />
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
                                    <FormLabel className="text-sm font-medium text-gray-700">Last Name*</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="h-12 text-base border-gray-300 focus:border-[#B4654A] focus:ring-[#B4654A]" 
                                            placeholder="Enter your last name" 
                                            {...field} 
                                        />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-sm font-medium text-gray-700">Email Address*</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="h-12 text-base border-gray-300 focus:border-[#B4654A] focus:ring-[#B4654A]" 
                                            placeholder="your.email@example.com" 
                                            {...field} 
                                        />
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
                                    <FormLabel className="text-sm font-medium text-gray-700">Phone Number*</FormLabel>
                                    <FormControl>
                                        <Input 
                                            className="h-12 text-base border-gray-300 focus:border-[#B4654A] focus:ring-[#B4654A]" 
                                            placeholder="+91 98765 43210" 
                                            {...field} 
                                        />
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
                                <FormLabel className="text-sm font-medium text-gray-700">Project Details*</FormLabel>
                                <FormControl>
                                    <Textarea 
                                        className="min-h-[120px] text-base border-gray-300 focus:border-[#B4654A] focus:ring-[#B4654A] resize-none" 
                                        placeholder="We'd love to hear about your home dreams! Share details about your rooms, what makes you smile, and any special ideas for curtains, blinds, wallpapers, or upholstery..." 
                                        {...field} 
                                    />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                        <div className="flex justify-center mt-8">
                            <Button 
                                variant={"destructive"} 
                                className="bg-[#B4654A] hover:bg-[#A05A45] text-white font-medium px-12 py-3 h-auto text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-none" 
                                type="submit"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}
