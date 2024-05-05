"use client";

import Image from "next/image";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import { getImagePath } from "@/src/utils";

const ImageUpload = ({ image }: { image: string | undefined }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <>
      <CldUploadWidget
        // uploadPreset="ndseojzg"
        uploadPreset="kiosco-app-cole"
        options={{ maxFiles: 1 }}
        onSuccess={(result, { widget }) => {
          if (result.event === "success") {
            widget.close();
            //@ts-ignore
            setImageUrl(result.info?.secure_url);
          }
        }}
      >
        {({ open }) => (
          <>
            <div className="space-y-2">
              <label className="text-slate-800">
                <div
                  onClick={() => open()}
                  className="relative cursor-pointer hover:opacity-70 transition p-10 
                border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100"
                >
                  <TbPhotoPlus size={50} />
                  <p className="text-lg font-semibold">Agergar Imagen</p>

                  {imageUrl && (
                    <div className="absolute inset-0 w-full h-full">
                      <Image
                        fill
                        style={{ objectFit: "contain" }}
                        src={imageUrl}
                        alt="Imagen Producto"
                      />
                    </div>
                  )}
                </div>
              </label>
            </div>

            {image && !imageUrl && (
              <div className="space-y-2 flex flex-col justify-center items-center">
                <label>Imagen Actual</label>
                <div className="relative w-20 h-20">
                  <Image fill src={getImagePath(image)} alt="Imagen Producto" />
                </div>
              </div>
            )}

            <input
              type="hidden"
              name="image"
              defaultValue={imageUrl ? imageUrl : image}
            />
          </>
        )}
      </CldUploadWidget>
    </>
  );
};

export default ImageUpload;
