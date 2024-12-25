const uploadImageToCloudinary = async file => {
  const uploadData = new FormData();
  uploadData.append("file", file);
  uploadData.append("upload_preset", "medical-care");
  uploadData.append("cloud_name", "alicloud865");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/alicloud865/image/upload",
    {
      method: "post",
      body: uploadData,
    }
  );

  const data = await res.json();
  return data;
};

export default uploadImageToCloudinary;
