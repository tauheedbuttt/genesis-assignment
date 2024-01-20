"use client"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ObjectSchema } from "yup";

import Fields, { InputProps } from "./field/Field";
import Loader from "../loader";

export interface FormProps {
  fields?: InputProps[];
  onSubmit?: SubmitHandler<FieldValues>;
  isLoading?: boolean;
  submit?: string;
  values?: any;
  defaultValues?: any;
  validation?: ObjectSchema<FieldValues>;
}

const Form = ({
  fields,
  onSubmit,
  isLoading,
  values,
  defaultValues,
  validation,
  submit = "Submit",
}: FormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    values,
    defaultValues,
    resolver: !validation ? undefined : yupResolver(validation),
  });

  return (
    <form
      onSubmit={!onSubmit ? undefined : handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-col gap-5">{
        fields?.map((field: any, idx: number) => {
          return (
            <div key={idx} className="w-full flex flex-col gap-2">
              <Fields
                item={field}
                register={register}
                errors={errors}
              />
            </div>
          );
        })
      }</div>

      {onSubmit && (
        <button type="submit" className={`rounded-md bg-primary-ATOMIC gap-4 px-5 flex justify-center items-center py-2 text-sm font-semibold w-full text-white hover:opacity-90 `}>
          <Loader color={'white'} size={6} isLoading={isLoading}>
            {submit}
          </Loader>
        </button>
      )}
    </form>
  );
};

export default Form;
