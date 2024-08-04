'use client'

import React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";

export interface FieldValues {
  [key: string]: string;
}

export interface ContentProps {
  text: string;
  key?: string;
  inputs: {
    inputOne: {
      id: string;
      placeholder: string;
      label: string;
    };
    inputTwo: {
      id: string;
      placeholder: string;
      label: string;
    };
    inputThree: {
      id: string;
      placeholder: string;
      label: string;
    };
  };
}

const Content: React.FC<ContentProps> = ({ text, key, inputs }) => {
  const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col w-full" key={key}>
      <p className="py-8">{text}</p>
      <div className="flex gap-8">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row gap-6 items-center">
          {Object.values(inputs).map((input) => (
            <div key={input.id} className="grid w-full max-w-[250px] items-center gap-1.5">
              <Label htmlFor={input.id}>{input.label}</Label>
              <Controller
                name={input.id}
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    id={input.id}
                    placeholder={input.placeholder}
                    {...field}
                  />
                )}
                rules={{ required: "This field is required" }}
              />
            </div>
          ))}
          <div className="pt-7">
            <Button type="submit">Create Record</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Content;
