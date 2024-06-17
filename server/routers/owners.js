import { Router } from "express";
import Owner from "../models/Owner.js";

const router = Router();
// All our routes go here
router.post("/", async (request, response) => {
  try {
    const newOwner = new Owner(request.body);

    const data = await newOwner.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
// Get all Owner Profile route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}

    const data = await Owner.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
// Get a single Owner profile by ID
router.get("/:id", async (request, response) => {
  try {
    const data = await Owner.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});
// Update a single owner profile by ID
router.put("/:id", async (request, response) => {
  try {
    const body = request.body;

    const data = await Owner.findByIdAndUpdate(
      request.params.id,
      {
        $set: {
          service: body.service,
          email: body.email,
          phoneNumber: body.phoneNumber
        }
      },
      {
        new: true,
        runValidators: true
      }
    );

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});
export default router;
