"use client";
import React from "react";
import { Stack, Button, TextField } from "@mui/material";
import { Manrope } from "next/font/google";
import { sendEmail } from "@/lib/actions";
import { toast } from "react-hot-toast";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from './classes.module.css'
const manrope = Manrope({ weight: "400", subsets: ["latin"] });
type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const LetsConnectForm = () => {
  const errorMessage = "This Field is required";
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    // e.preventDefault();
    // const form = e.target as HTMLFormElement;
    try {
      // const formData = new FormData(form);
      const response = await sendEmail(data);
      if (response?.statusCode == 200) {
        toast.success(response?.message);
        // form.reset();
      } else {
        toast.error(response?.message);
      }
    } catch (error) {
      toast.error("An error occurred while sending the email.");
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "2.4rem" }}
    >
      <Stack>
        <TextField
          {...register("name", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Name"
          variant="filled"
          error={!!errors?.name}
        />
        {errors.name && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          {...register("email", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Email"
          type="email"
          variant="filled"
          error={!!errors?.email}
        />
        {errors.email && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          {...register("subject", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Subject"
          variant="filled"
          error={!!errors?.subject}
        />
        {errors.subject && <span className={classes.error}>{errorMessage}</span>}
      </Stack>
      <Stack>
        <TextField
          {...register("message", {
            required: true,
            pattern: {
              value: /^(?!\s*$).+$/i,
              message: errorMessage,
            },
          })}
          label="Message"
          multiline
          variant="filled"
          error={!!errors?.message}
        />
        {errors.message && <span className={classes.error}>{errorMessage}</span>}
      </Stack>

      <Button
        sx={{
          backgroundColor: "#61d5ff",
          color: "#0A0A0A",
          borderRadius: "10rem",
          width: "fit-content",
          paddingRight: "2.5rem",
          paddingLeft: "2.5rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          fontFamily: manrope.style.fontFamily,
          fontSize: "1.6rem",
          fontWeight: "700",
          "&:hover": {
            backgroundColor: "#387e97",
            color: "#fff",
          },
        }}
        type="submit"
        disabled={isSubmitting}
      >
        {!isSubmitting?'SUBMIT':'Loading ...'}
      </Button>
    </form>
  );
};

export default LetsConnectForm;
