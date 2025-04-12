"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import { Slider } from "@/components/ui/slider";

import { Input } from "@/components/ui/input";
import {
  fontFamilies,
  fontWeight,
  imageStyles,
  textAlignments,
} from "@/constants";

const formSchema = z.object({
  imagestyle: z.string({
    required_error: "Please select an image style",
  }),
  heading: z.string().min(2, {
    message: "heading must be at least 2 characters.",
  }),
  content: z.string().min(6, {
    message: "content must be atleast 6 characters.",
  }),
  family: z.string({
    required_error: "Please select a font family",
  }),
  weight: z.string({
    required_error: "Please select a font weight",
  }),
  alignment: z.string({
    required_error: "Please select text alignment",
  }),
  backgroundcolor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Please enter a valid hex color code (e.g., #FF0000)",
  }),
  textcolor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
    message: "Please enter a valid hex color code (e.g., #FF0000)",
  }),
  fontsize: z.number().min(8).max(72),
  imageopacity: z.number().min(0).max(100),
});

const DesignInputForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imagestyle: "color",
      heading: "",
      content: "",
      family: "",
      weight: "",
      alignment: "",
      backgroundcolor: "#f0dda8",
      textcolor: "#000000",
      fontsize: 16,
      imageopacity: 50,
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* background style */}
        <FormField
          control={form.control}
          name="imagestyle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Style</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-4"
                >
                  {imageStyles.map((style) => (
                    <FormItem
                      key={style.value}
                      className="flex space-y-0 items-center space-x-2"
                    >
                      <RadioGroupItem value={style.value} id={style.value} />
                      <FormLabel
                        htmlFor={style.value}
                        className="font-normal space-y-0"
                      >
                        {style.label}
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* heading */}
        <FormField
          control={form.control}
          name="heading"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Heading</FormLabel>
              <FormControl>
                <Input placeholder="Add your design heading..." {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* content */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  className="min-h-[100px]"
                  placeholder="Add your design content..."
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* font family */}
        <FormField
          control={form.control}
          name="family"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font Family</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose font family..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontFamilies.map((font) => (
                    <SelectItem
                      value={font.value}
                      key={font.value}
                      style={{ fontFamily: font.cssValue }}
                    >
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* font weight */}
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Font Weight</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose font weight..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {fontWeight.map((font) => (
                    <SelectItem
                      value={font.value}
                      key={font.value}
                      style={{ fontFamily: font.cssValue }}
                    >
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* text alignment */}
        <FormField
          control={form.control}
          name="alignment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text alignment</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose text alignment..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {textAlignments.map((font) => (
                    <SelectItem
                      value={font.value}
                      key={font.value}
                      style={{ fontFamily: font.cssValue }}
                    >
                      {font.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* background color */}

        <FormField
          control={form.control}
          name="backgroundcolor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background color</FormLabel>
              <div className="flex items-center gap-2">
                <div className="bg-transparent p-1.5 border rounded-sm">
                  <div
                    style={{ backgroundColor: field.value }}
                    className="w-8 h-5"
                  ></div>
                </div>
                <FormControl>
                  <Input
                    placeholder="Pick your background color..."
                    {...field}
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
        {/* Text color */}
        <FormField
          control={form.control}
          name="textcolor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text color</FormLabel>
              <div className="flex items-center gap-2">
                <div className="bg-transparent p-1.5 border rounded-sm">
                  <div
                    style={{ backgroundColor: field.value }}
                    className="w-8 h-5"
                  ></div>
                </div>
                <FormControl>
                  <Input placeholder="Pick your text color..." {...field} />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* font size */}
        <FormField
          control={form.control}
          name="fontsize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Font Size: ${field.value}px `}</FormLabel>
              <FormControl>
                <Slider
                  min={8}
                  max={72}
                  step={1}
                  defaultValue={[field.value]}
                  onValueChange={(value) => field.onChange(value[0])}
                />
              </FormControl>
            </FormItem>
          )}
        />
        {/* image opacity */}
        <FormField
          control={form.control}
          name="imageopacity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{`Image opacity: ${field.value}% `}</FormLabel>
              <FormControl>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  defaultValue={[field.value]}
                  onValueChange={(value) => field.onChange(value[0])}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default DesignInputForm;
