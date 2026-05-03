"use server"

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { success, z } from "zod"

const validationSchema = z.object({
    phone: z.string().min(1, "ورود اطلاعات این فیلد اجباری است"),
    password: z.string().min(1, "ورود اطلاعات این فیلد اجباری است")
})
export const handeluser = async (prevstate, formData) => {
    console.log(formData);
    const phone = formData.get("phone");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on" ? 1 : 0;
    const params = { phone, password, remember }
    const validationFields = validationSchema.safeParse(params)
    if (!validationFields.success) {
        const response = {
            errors: validationFields.error?.flatten().fieldErrors,
            success: false
        }

        return response
    }
    const resault = await axios.post("https://ecomadminapi.azhadev.ir/api/auth/login", params);
    if (resault.status == 200) {
        const token = resault.data.token;
        (await cookies()).set("logintoken", token);
        redirect("/userpanel")
    }
    else {
        return ({ eror: "unauthrozation" })
    }

}
export const handellogout = async () => {
    (await cookies()).delete("logintoken");
    redirect("/")
}

export const isLoggedIn = async ()=>{
    const token = (await cookies()).get("logntoken")?.value

    if (!token) return false

    const res = await fetch("https://ecomadminapi.azhadev.ir/api/auth/user", {
            method: "GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        }) 

    if (res.status !== 200)  return false

    return true
}