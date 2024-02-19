"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { useUser } from "@clerk/nextjs";

export type FormData = {
  name: string;
  description: string;
  location: string;
  author: string;
  salary: string;
  img: string;
  employmentType: string;
  
};

export async function createJob(data: FormData) {
  const user = useUser(); // Fetching authenticated user from Clerk
  const userId = user.id; // Getting the userId from the authenticated user
  await prisma.jobPosting.create({
    data: {
      name: data.name,
      description: data.description,
      location: data.location,
      author: data.author,
      salary: parseFloat(data.salary),
      img: data.img,
      employmentType: data.employmentType,
      userId: userId, // Adding the userId to the data being stored
    },
  });

  revalidatePath("/create");
}