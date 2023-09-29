import { FC } from "react";
import ItemStorageForm from "./ItemStorageForm";
import { ItemStorageFormDataType } from "~/utils/validations/add-itemStorage";

interface AddItemStorageFormProps {
  onSubmit: (data: ItemStorageFormDataType) => void;
  managedLocations: {
    label: string;
    value: string;
  }[];
}

const AddItemStorageForm: FC<AddItemStorageFormProps> = ({
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

export default AddItemStorageForm;
