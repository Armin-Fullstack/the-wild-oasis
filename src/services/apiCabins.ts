import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error.error);
    throw new Error("Cabins could not be loaded!");
  }
  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  if (error) {
    console.log(error.error);
    throw new Error("Cabin could not be deleted!");
  }
  return data;
}

export async function createNewCabin(newCabin) {
  // https://rwtrcyhuingclzghnqgz.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-11-28T13%3A38%3A25.856Z
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  // 1. create a cabin
  const { data, error } = await supabase
    .from("cabins")
    .insert([{ ...newCabin, image: imagePath }])
    .select();
  if (error) {
    console.log(error.error);
    throw new Error("Cabin could not be created!");
  }

  // 2. upload an image
  // Upload file using standard upload
  const { error: errorStorage } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3.Delete cabin if there was an error uploading image
  if (errorStorage) {
    const { data, error } = await supabase
      .from("cabins")
      .delete()
      .eq("id", data.id);

    console.log(errorStorage.error);
    throw new Error(
      "Cabin image could not be uploaded and the cabin was not created!"
    );
  }
  return data;
}
