import { type FC } from "react";
import { UploadButton, UploadDropzone } from "~/utils/uploadthing";

import { type UploadThingImageEnpoints } from "~/types/routerOutputTypes";
import toast from "react-hot-toast";

interface PictureUploaderProps {
  endpoint: UploadThingImageEnpoints;
}

const PictureUploader: FC<PictureUploaderProps> = ({ endpoint }) => {
  return (
    <>
      <UploadButton
        endpoint={endpoint}
        onUploadError={(error: Error) => {
          toast.error(error.message);
          alert(`ERROR! ${error.message}`);
        }}
      />
      <UploadDropzone
        className="sm:w-70  rounded-3xl bg-white ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300 sm:w-80"
        endpoint="managedLocationImageUploader"
        onUploadError={(error: Error) => {
          toast.error(error.message);
          alert(`ERROR! ${error.message}`);
        }}
      />
    </>
  );
};

export default PictureUploader;
