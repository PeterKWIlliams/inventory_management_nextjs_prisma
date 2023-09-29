import { FC } from "react";
import ItemStorageForm from "./ItemStorageForm";
import { ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

interface UpdateItemStorageFormProps {
  onSubmit: (data: ItemStorageFormDataType) => void;
  managedLocations: {
    label: string;
    value: string;
  }[];
}

const UpdateItemStorageForm: FC<UpdateItemStorageFormProps> = ({
  onSubmit,
  managedLocations,
}) => {
  return (
    <ItemStorageForm
      buttonAction="update"
      onSubmit={onSubmit}
      managedLocations={managedLocations}
    />
  );
};

export default UpdateItemStorageForm;
