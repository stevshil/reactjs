import { Controller, useForm } from "react-hook-form";
// import { TextField } from "@mui/material";

function MyForm() {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();
//   const { control } = useForm();
  const onSubmit = (data) => console.log(data);
  const firstName = watch("firstName", "");

  return (
    <>
    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <input {...register("firstName")} placeholder="First Name" />
    <div>Current value: {firstName}</div>
    <input {...register("lastName", {required: "Lastname is required"})} placeholder="Last Name" />
    <br />{errors.lastName && <span>{errors.lastName.message}</span>}
    {/* <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <TextField {...field} label="Email" />
                )}
            /> */}
            <br/>
            <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
    {/* <br /><button type="submit">Submit</button> */}
    {/* </form> */}
    </>
  );
}

export default MyForm;