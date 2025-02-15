import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { auto } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadPhoto = ({ setAvatar }) => {
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null); // Store uploaded Cloudinary URL

    const cld = new Cloudinary({ cloud: { cloudName: "dk6mqpzig" } });

    const handleFileChange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setPreview(URL.createObjectURL(file)); 
        await uploadToCloudinary(file);
    };

    const uploadToCloudinary = async (file) => {
        setUploading(true);
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "ml_default");

        try {
            const response = await fetch(
                "https://api.cloudinary.com/v1_1/dk6mqpzig/image/upload",
                { method: "POST", body: formData }
            );
            const data = await response.json();
            if (data.secure_url) {
                setAvatar(data.secure_url); 
                setUploadedImage(data.public_id); 
            } else {
                console.error("Upload failed:", data);
            }
        } catch (error) {
            console.error("Upload failed:", error);
        } finally {
            setUploading(false);
        }
    };

    // Cloudinary image transformation
    const transformedImg = uploadedImage
        ? cld.image(uploadedImage)
            .format("auto") // Auto format for optimization
            .quality("auto") // Auto quality
            .resize(auto().gravity(autoGravity()).width(500).height(500)) // Auto crop & resize
        : null;

    return (
        <div className="attendance-details border border-[#07373F] bg-[#052228] rounded-3xl p-6">
            <h1 className="text-lg font-semibold">Upload Profile Photo</h1>
            <div className="relative h-[200px] w-full bg-[#041B20] md:bg-opacity-20 my-8 flex flex-col items-center justify-center rounded-xl">
                {uploadedImage ? (
                    <img cldImg={transformedImg} className="h-[180px] w-[180px] rounded-full object-cover border-2 border-[#24a0b5]" />
                ) : preview ? (
                    <img
                        src={preview}
                        alt="Preview"
                        className="h-[180px] w-[180px] rounded-full object-cover border-2 border-[#24a0b5]"
                    />
                ) : (
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-2 text-center p-6 bg-[#0e464f] text-base font-normal text-white w-60 h-60 rounded-[32px] border-4 border-[#24a0b5] border-opacity-50">
                        <CloudUploadIcon fontSize="large" />
                        <span>{uploading ? "Uploading..." : "Drag & drop or click to upload"}</span>
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                )}
            </div>
        </div>
    );
};

export default UploadPhoto;
