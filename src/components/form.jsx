import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";

export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = (data) => {
    request
      .post("/todos", data)
      .then((res) => {
    
        reset();
        refetch();
      })
      .finally(() => {});
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input {...register("title")} type="text" />
      </div>
      <div>
        <input {...register("description")} type="text" />
      </div>
      <button type="submit">send</button>
    </form>
  );
};
