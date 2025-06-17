import {
  generateUploadButton,
  generateUploadDropzone,
  generateUploader,
} from '@uploadthing/react';

import { generateReactHelpers } from '@uploadthing/react';

import type { OurFileRouter } from '~/server/uploadthing';

export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
export const Uploarder = generateUploader<OurFileRouter>();

export const { useUploadThing } = generateReactHelpers<OurFileRouter>();
