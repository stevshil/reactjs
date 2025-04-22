import { useForm } from "react-hook-form";

function MyForm() {
  const { register, handleSubmit, formState: {errors}, watch } = useForm();
//   const { control } = useForm();
  const onSubmit = (data) => console.log(data);
  const firstName = watch("firstName", "");
  const email = watch("email", "");

  return (
    <>
    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
    <table><tbody>
    <tr><td>Firstname:</td><td><input {...register("firstName")} placeholder="First Name" /></td></tr>
    <tr><td colSpan="2">Current value: {firstName}</td></tr>
    <tr><td>Lastname:</td><td><input {...register("lastName", {required: "Lastname is required"})} placeholder="Last Name" /></td></tr>
    <tr><td colSpan="2">&nbsp;{errors.lastName && <span>{String(errors.lastName.message)}</span>}</td></tr>
    <tr><td>Email:</td><td><input {...register("email", {required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid email address"
      }
    })} placeholder="Email" /></td></tr>
    <tr><td colSpan="2">&nbsp;{errors.email && <span>{String(errors.email.message)}</span>}</td></tr>
    <br/>
    <button type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
    {/* <br /><button type="submit">Submit</button> */}
    {/* </form> */}
    </tbody>
    </table>
    </>
  );
}

export default MyForm;