"use server";
import { randomUUID } from "crypto";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const createAccount = (formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!username || !email || !password) {
    return {
      message: "Please fill all fields",
      success: false,
    };
  }

  cookies().set("token", randomUUID());

  redirect("/dashboard");
};

export const logoutBtn = () => {
  cookies().delete("token");
  redirect("/");
};
