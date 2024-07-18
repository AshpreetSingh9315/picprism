/* eslint-disable no-empty-pattern */
/* eslint-disable no-unused-vars */
import axios from "axios";

const useUpload = async ({ image, onUploadProgress }) => {

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_URL
      );
      formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
        withCredentials: false,
      };

      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`
      );
      const data = await res.data;
      if (!data) return console.log(`Image Upload Failed`);
    } catch (error) {
      return error.message;
    }
  };


  const {public_id , secure_url} =  await upload();
  return {public_id , secure_url}

  
};

export default useUpload;
