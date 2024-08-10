"use server";

import { ID, Query } from "node-appwrite";
import {InputFile} from "node-appwrite/file";

import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    // Create new user
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    // Handle existing user case
    if (error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      
      return existingUser.users[0];
    }
    
    // Log the error for debugging
    console.error("An error occurred while creating a new user:", error);

    // Optionally rethrow the error to let the caller handle it
    throw new Error(`Failed to create user: ${error.message}`);
  }
};


// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  userId, // Ensure userId is passed here
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile =
        identificationDocument &&
        InputFile.fromBuffer(
          identificationDocument?.get("blobFile") as Blob,
          identificationDocument?.get("fileName") as string
        );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        userId, // Ensure userId is stored in the patient document
        identificationDocumentId: file?.$id ? file.$id : null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    console.log("New patient registered:", newPatient);

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
    return null; // Return null in case of an error
  }
};

// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    console.log("Fetching patient for userId:", userId);

    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]  // Use array format if required
    );

    console.log("Executed Query:", { userId });
    console.log("Response from listDocuments:", patients);

    if (patients.documents.length === 0) {
      console.warn(`No patient found for userId: ${userId}`);
      return null;
    }

    console.log("Patient found:", patients.documents[0]);

    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error("An error occurred while retrieving the patient details:", error);
    return null;
  }
};
