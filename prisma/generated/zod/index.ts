import { z } from "zod";
import type { Prisma } from "@prisma/client";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AddressScalarFieldEnumSchema = z.enum([
  "id",
  "street",
  "city",
  "postcode",
]);

export const ItemInfoScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "type",
  "expiryDate",
  "creationDate",
  "purchaseLink",
  "imageUrl",
  "desiredQuantity",
  "quantity",
  "storedItemId",
  "productId",
]);

export const ItemStorageScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "location",
  "managedLocationId",
]);

export const LocationScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "addressId",
  "image_url",
]);

export const ManagedLocationScalarFieldEnumSchema = z.enum([
  "id",
  "userId",
  "locationId",
]);

export const ProductScalarFieldEnumSchema = z.enum(["id", "supplierId"]);

export const SecondaryUsersScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "itemStorageId",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const StoredItemScalarFieldEnumSchema = z.enum(["id", "itemStorageId"]);

export const SupplierScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "addressId",
]);

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "firstName",
  "lastName",
  "email",
  "addressId",
]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.string().cuid(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
});

export type Address = z.infer<typeof AddressSchema>;

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string().cuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  addressId: z.string(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// LOCATION SCHEMA
/////////////////////////////////////////

export const LocationSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  addressId: z.string(),
  image_url: z.string().nullable(),
});

export type Location = z.infer<typeof LocationSchema>;

/////////////////////////////////////////
// MANAGED LOCATION SCHEMA
/////////////////////////////////////////

export const ManagedLocationSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  locationId: z.string(),
});

export type ManagedLocation = z.infer<typeof ManagedLocationSchema>;

/////////////////////////////////////////
// ITEM STORAGE SCHEMA
/////////////////////////////////////////

export const ItemStorageSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  location: z.string(),
  managedLocationId: z.string(),
});

export type ItemStorage = z.infer<typeof ItemStorageSchema>;

/////////////////////////////////////////
// SECONDARY USERS SCHEMA
/////////////////////////////////////////

export const SecondaryUsersSchema = z.object({
  id: z.string().cuid(),
  type: z.string(),
  itemStorageId: z.string(),
});

export type SecondaryUsers = z.infer<typeof SecondaryUsersSchema>;

/////////////////////////////////////////
// STORED ITEM SCHEMA
/////////////////////////////////////////

export const StoredItemSchema = z.object({
  id: z.string().cuid(),
  itemStorageId: z.string(),
});

export type StoredItem = z.infer<typeof StoredItemSchema>;

/////////////////////////////////////////
// ITEM INFO SCHEMA
/////////////////////////////////////////

export const ItemInfoSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  type: z.string(),
  expiryDate: z.coerce.date().nullable(),
  creationDate: z.coerce.date(),
  purchaseLink: z.string().nullable(),
  imageUrl: z.string().nullable(),
  desiredQuantity: z.number().int().nullable(),
  quantity: z.number().int().nullable(),
  storedItemId: z.string().nullable(),
  productId: z.string().nullable(),
});

export type ItemInfo = z.infer<typeof ItemInfoSchema>;

/////////////////////////////////////////
// SUPPLIER SCHEMA
/////////////////////////////////////////

export const SupplierSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  addressId: z.string(),
});

export type Supplier = z.infer<typeof SupplierSchema>;

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.string().cuid(),
  supplierId: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// ADDRESS
//------------------------------------------------------

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z
  .object({
    location: z
      .union([z.boolean(), z.lazy(() => LocationFindManyArgsSchema)])
      .optional(),
    user: z
      .union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)])
      .optional(),
    supplier: z
      .union([z.boolean(), z.lazy(() => SupplierFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const AddressArgsSchema: z.ZodType<Prisma.AddressArgs> = z
  .object({
    select: z.lazy(() => AddressSelectSchema).optional(),
    include: z.lazy(() => AddressIncludeSchema).optional(),
  })
  .strict();

export const AddressCountOutputTypeArgsSchema: z.ZodType<Prisma.AddressCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => AddressCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const AddressCountOutputTypeSelectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> =
  z
    .object({
      location: z.boolean().optional(),
      user: z.boolean().optional(),
      supplier: z.boolean().optional(),
    })
    .strict();

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z
  .object({
    id: z.boolean().optional(),
    street: z.boolean().optional(),
    city: z.boolean().optional(),
    postcode: z.boolean().optional(),
    location: z
      .union([z.boolean(), z.lazy(() => LocationFindManyArgsSchema)])
      .optional(),
    user: z
      .union([z.boolean(), z.lazy(() => UserFindManyArgsSchema)])
      .optional(),
    supplier: z
      .union([z.boolean(), z.lazy(() => SupplierFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => AddressCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({
    userAddress: z
      .union([z.boolean(), z.lazy(() => AddressArgsSchema)])
      .optional(),
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      managedLocation: z.boolean().optional(),
    })
    .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    id: z.boolean().optional(),
    firstName: z.boolean().optional(),
    lastName: z.boolean().optional(),
    email: z.boolean().optional(),
    addressId: z.boolean().optional(),
    userAddress: z
      .union([z.boolean(), z.lazy(() => AddressArgsSchema)])
      .optional(),
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// LOCATION
//------------------------------------------------------

export const LocationIncludeSchema: z.ZodType<Prisma.LocationInclude> = z
  .object({
    address: z.union([z.boolean(), z.lazy(() => AddressArgsSchema)]).optional(),
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LocationCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const LocationArgsSchema: z.ZodType<Prisma.LocationArgs> = z
  .object({
    select: z.lazy(() => LocationSelectSchema).optional(),
    include: z.lazy(() => LocationIncludeSchema).optional(),
  })
  .strict();

export const LocationCountOutputTypeArgsSchema: z.ZodType<Prisma.LocationCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => LocationCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const LocationCountOutputTypeSelectSchema: z.ZodType<Prisma.LocationCountOutputTypeSelect> =
  z
    .object({
      managedLocation: z.boolean().optional(),
    })
    .strict();

export const LocationSelectSchema: z.ZodType<Prisma.LocationSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    addressId: z.boolean().optional(),
    image_url: z.boolean().optional(),
    address: z.union([z.boolean(), z.lazy(() => AddressArgsSchema)]).optional(),
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => LocationCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// MANAGED LOCATION
//------------------------------------------------------

export const ManagedLocationIncludeSchema: z.ZodType<Prisma.ManagedLocationInclude> =
  z
    .object({
      user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
      location: z
        .union([z.boolean(), z.lazy(() => LocationArgsSchema)])
        .optional(),
      itemStorage: z
        .union([z.boolean(), z.lazy(() => ItemStorageFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ManagedLocationCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationArgsSchema: z.ZodType<Prisma.ManagedLocationArgs> =
  z
    .object({
      select: z.lazy(() => ManagedLocationSelectSchema).optional(),
      include: z.lazy(() => ManagedLocationIncludeSchema).optional(),
    })
    .strict();

export const ManagedLocationCountOutputTypeArgsSchema: z.ZodType<Prisma.ManagedLocationCountOutputTypeArgs> =
  z
    .object({
      select: z
        .lazy(() => ManagedLocationCountOutputTypeSelectSchema)
        .nullish(),
    })
    .strict();

export const ManagedLocationCountOutputTypeSelectSchema: z.ZodType<Prisma.ManagedLocationCountOutputTypeSelect> =
  z
    .object({
      itemStorage: z.boolean().optional(),
    })
    .strict();

export const ManagedLocationSelectSchema: z.ZodType<Prisma.ManagedLocationSelect> =
  z
    .object({
      id: z.boolean().optional(),
      userId: z.boolean().optional(),
      locationId: z.boolean().optional(),
      user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
      location: z
        .union([z.boolean(), z.lazy(() => LocationArgsSchema)])
        .optional(),
      itemStorage: z
        .union([z.boolean(), z.lazy(() => ItemStorageFindManyArgsSchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => ManagedLocationCountOutputTypeArgsSchema),
        ])
        .optional(),
    })
    .strict();

// ITEM STORAGE
//------------------------------------------------------

export const ItemStorageIncludeSchema: z.ZodType<Prisma.ItemStorageInclude> = z
  .object({
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationArgsSchema)])
      .optional(),
    storedItem: z
      .union([z.boolean(), z.lazy(() => StoredItemFindManyArgsSchema)])
      .optional(),
    secondaryUsers: z
      .union([z.boolean(), z.lazy(() => SecondaryUsersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ItemStorageCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ItemStorageArgsSchema: z.ZodType<Prisma.ItemStorageArgs> = z
  .object({
    select: z.lazy(() => ItemStorageSelectSchema).optional(),
    include: z.lazy(() => ItemStorageIncludeSchema).optional(),
  })
  .strict();

export const ItemStorageCountOutputTypeArgsSchema: z.ZodType<Prisma.ItemStorageCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => ItemStorageCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ItemStorageCountOutputTypeSelectSchema: z.ZodType<Prisma.ItemStorageCountOutputTypeSelect> =
  z
    .object({
      storedItem: z.boolean().optional(),
      secondaryUsers: z.boolean().optional(),
    })
    .strict();

export const ItemStorageSelectSchema: z.ZodType<Prisma.ItemStorageSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    location: z.boolean().optional(),
    managedLocationId: z.boolean().optional(),
    managedLocation: z
      .union([z.boolean(), z.lazy(() => ManagedLocationArgsSchema)])
      .optional(),
    storedItem: z
      .union([z.boolean(), z.lazy(() => StoredItemFindManyArgsSchema)])
      .optional(),
    secondaryUsers: z
      .union([z.boolean(), z.lazy(() => SecondaryUsersFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ItemStorageCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// SECONDARY USERS
//------------------------------------------------------

export const SecondaryUsersIncludeSchema: z.ZodType<Prisma.SecondaryUsersInclude> =
  z
    .object({
      itemStorage: z
        .union([z.boolean(), z.lazy(() => ItemStorageArgsSchema)])
        .optional(),
    })
    .strict();

export const SecondaryUsersArgsSchema: z.ZodType<Prisma.SecondaryUsersArgs> = z
  .object({
    select: z.lazy(() => SecondaryUsersSelectSchema).optional(),
    include: z.lazy(() => SecondaryUsersIncludeSchema).optional(),
  })
  .strict();

export const SecondaryUsersSelectSchema: z.ZodType<Prisma.SecondaryUsersSelect> =
  z
    .object({
      id: z.boolean().optional(),
      type: z.boolean().optional(),
      itemStorageId: z.boolean().optional(),
      itemStorage: z
        .union([z.boolean(), z.lazy(() => ItemStorageArgsSchema)])
        .optional(),
    })
    .strict();

// STORED ITEM
//------------------------------------------------------

export const StoredItemIncludeSchema: z.ZodType<Prisma.StoredItemInclude> = z
  .object({
    itemStorage: z
      .union([z.boolean(), z.lazy(() => ItemStorageArgsSchema)])
      .optional(),
    ItemInfo: z
      .union([z.boolean(), z.lazy(() => ItemInfoFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StoredItemCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const StoredItemArgsSchema: z.ZodType<Prisma.StoredItemArgs> = z
  .object({
    select: z.lazy(() => StoredItemSelectSchema).optional(),
    include: z.lazy(() => StoredItemIncludeSchema).optional(),
  })
  .strict();

export const StoredItemCountOutputTypeArgsSchema: z.ZodType<Prisma.StoredItemCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => StoredItemCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const StoredItemCountOutputTypeSelectSchema: z.ZodType<Prisma.StoredItemCountOutputTypeSelect> =
  z
    .object({
      ItemInfo: z.boolean().optional(),
    })
    .strict();

export const StoredItemSelectSchema: z.ZodType<Prisma.StoredItemSelect> = z
  .object({
    id: z.boolean().optional(),
    itemStorageId: z.boolean().optional(),
    itemStorage: z
      .union([z.boolean(), z.lazy(() => ItemStorageArgsSchema)])
      .optional(),
    ItemInfo: z
      .union([z.boolean(), z.lazy(() => ItemInfoFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => StoredItemCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// ITEM INFO
//------------------------------------------------------

export const ItemInfoIncludeSchema: z.ZodType<Prisma.ItemInfoInclude> = z
  .object({
    storedItem: z
      .union([z.boolean(), z.lazy(() => StoredItemArgsSchema)])
      .optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
  })
  .strict();

export const ItemInfoArgsSchema: z.ZodType<Prisma.ItemInfoArgs> = z
  .object({
    select: z.lazy(() => ItemInfoSelectSchema).optional(),
    include: z.lazy(() => ItemInfoIncludeSchema).optional(),
  })
  .strict();

export const ItemInfoSelectSchema: z.ZodType<Prisma.ItemInfoSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    type: z.boolean().optional(),
    expiryDate: z.boolean().optional(),
    creationDate: z.boolean().optional(),
    purchaseLink: z.boolean().optional(),
    imageUrl: z.boolean().optional(),
    desiredQuantity: z.boolean().optional(),
    quantity: z.boolean().optional(),
    storedItemId: z.boolean().optional(),
    productId: z.boolean().optional(),
    storedItem: z
      .union([z.boolean(), z.lazy(() => StoredItemArgsSchema)])
      .optional(),
    product: z.union([z.boolean(), z.lazy(() => ProductArgsSchema)]).optional(),
  })
  .strict();

// SUPPLIER
//------------------------------------------------------

export const SupplierIncludeSchema: z.ZodType<Prisma.SupplierInclude> = z
  .object({
    address: z.union([z.boolean(), z.lazy(() => AddressArgsSchema)]).optional(),
    products: z
      .union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => SupplierCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const SupplierArgsSchema: z.ZodType<Prisma.SupplierArgs> = z
  .object({
    select: z.lazy(() => SupplierSelectSchema).optional(),
    include: z.lazy(() => SupplierIncludeSchema).optional(),
  })
  .strict();

export const SupplierCountOutputTypeArgsSchema: z.ZodType<Prisma.SupplierCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => SupplierCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const SupplierCountOutputTypeSelectSchema: z.ZodType<Prisma.SupplierCountOutputTypeSelect> =
  z
    .object({
      products: z.boolean().optional(),
    })
    .strict();

export const SupplierSelectSchema: z.ZodType<Prisma.SupplierSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    addressId: z.boolean().optional(),
    address: z.union([z.boolean(), z.lazy(() => AddressArgsSchema)]).optional(),
    products: z
      .union([z.boolean(), z.lazy(() => ProductFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => SupplierCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z
  .object({
    supplier: z
      .union([z.boolean(), z.lazy(() => SupplierArgsSchema)])
      .optional(),
    itemInfo: z
      .union([z.boolean(), z.lazy(() => ItemInfoFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z
  .object({
    select: z.lazy(() => ProductSelectSchema).optional(),
    include: z.lazy(() => ProductIncludeSchema).optional(),
  })
  .strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeArgs> =
  z
    .object({
      select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> =
  z
    .object({
      itemInfo: z.boolean().optional(),
    })
    .strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z
  .object({
    id: z.boolean().optional(),
    supplierId: z.boolean().optional(),
    supplier: z
      .union([z.boolean(), z.lazy(() => SupplierArgsSchema)])
      .optional(),
    itemInfo: z
      .union([z.boolean(), z.lazy(() => ItemInfoFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => ProductCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const AddressWhereInputSchema: z.ZodType<Prisma.AddressWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AddressWhereInputSchema),
        z.lazy(() => AddressWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AddressWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AddressWhereInputSchema),
        z.lazy(() => AddressWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    street: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    city: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    postcode: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    location: z.lazy(() => LocationListRelationFilterSchema).optional(),
    user: z.lazy(() => UserListRelationFilterSchema).optional(),
    supplier: z.lazy(() => SupplierListRelationFilterSchema).optional(),
  })
  .strict();

export const AddressOrderByWithRelationInputSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      street: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      postcode: z.lazy(() => SortOrderSchema).optional(),
      location: z
        .lazy(() => LocationOrderByRelationAggregateInputSchema)
        .optional(),
      user: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
      supplier: z
        .lazy(() => SupplierOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const AddressWhereUniqueInputSchema: z.ZodType<Prisma.AddressWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const AddressOrderByWithAggregationInputSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      street: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      postcode: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => AddressCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => AddressMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => AddressMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const AddressScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => AddressScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),
          z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      street: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      city: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      postcode: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    firstName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    lastName: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    addressId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    userAddress: z
      .union([
        z.lazy(() => AddressRelationFilterSchema),
        z.lazy(() => AddressWhereInputSchema),
      ])
      .optional(),
    managedLocation: z
      .lazy(() => ManagedLocationListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      userAddress: z
        .lazy(() => AddressOrderByWithRelationInputSchema)
        .optional(),
      managedLocation: z
        .lazy(() => ManagedLocationOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      email: z.string().optional(),
    })
    .strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      firstName: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      lastName: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      addressId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const LocationWhereInputSchema: z.ZodType<Prisma.LocationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LocationWhereInputSchema),
        z.lazy(() => LocationWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LocationWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LocationWhereInputSchema),
        z.lazy(() => LocationWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    addressId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    image_url: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    address: z
      .union([
        z.lazy(() => AddressRelationFilterSchema),
        z.lazy(() => AddressWhereInputSchema),
      ])
      .optional(),
    managedLocation: z
      .lazy(() => ManagedLocationListRelationFilterSchema)
      .optional(),
  })
  .strict();

export const LocationOrderByWithRelationInputSchema: z.ZodType<Prisma.LocationOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      image_url: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
      managedLocation: z
        .lazy(() => ManagedLocationOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const LocationWhereUniqueInputSchema: z.ZodType<Prisma.LocationWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const LocationOrderByWithAggregationInputSchema: z.ZodType<Prisma.LocationOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      image_url: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LocationCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LocationMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LocationMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const LocationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LocationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LocationScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LocationScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LocationScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LocationScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LocationScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      addressId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      image_url: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ManagedLocationWhereInputSchema: z.ZodType<Prisma.ManagedLocationWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ManagedLocationWhereInputSchema),
          z.lazy(() => ManagedLocationWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ManagedLocationWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ManagedLocationWhereInputSchema),
          z.lazy(() => ManagedLocationWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      locationId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      user: z
        .union([
          z.lazy(() => UserRelationFilterSchema),
          z.lazy(() => UserWhereInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.lazy(() => LocationRelationFilterSchema),
          z.lazy(() => LocationWhereInputSchema),
        ])
        .optional(),
      itemStorage: z.lazy(() => ItemStorageListRelationFilterSchema).optional(),
    })
    .strict();

export const ManagedLocationOrderByWithRelationInputSchema: z.ZodType<Prisma.ManagedLocationOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      location: z.lazy(() => LocationOrderByWithRelationInputSchema).optional(),
      itemStorage: z
        .lazy(() => ItemStorageOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ManagedLocationWhereUniqueInputSchema: z.ZodType<Prisma.ManagedLocationWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ManagedLocationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ManagedLocationOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ManagedLocationCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => ManagedLocationMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => ManagedLocationMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ManagedLocationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ManagedLocationScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ManagedLocationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ManagedLocationScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => ManagedLocationScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      userId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      locationId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ItemStorageWhereInputSchema: z.ZodType<Prisma.ItemStorageWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ItemStorageWhereInputSchema),
          z.lazy(() => ItemStorageWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ItemStorageWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ItemStorageWhereInputSchema),
          z.lazy(() => ItemStorageWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      location: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      managedLocationId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      managedLocation: z
        .union([
          z.lazy(() => ManagedLocationRelationFilterSchema),
          z.lazy(() => ManagedLocationWhereInputSchema),
        ])
        .optional(),
      storedItem: z.lazy(() => StoredItemListRelationFilterSchema).optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersListRelationFilterSchema)
        .optional(),
    })
    .strict();

export const ItemStorageOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemStorageOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      managedLocationId: z.lazy(() => SortOrderSchema).optional(),
      managedLocation: z
        .lazy(() => ManagedLocationOrderByWithRelationInputSchema)
        .optional(),
      storedItem: z
        .lazy(() => StoredItemOrderByRelationAggregateInputSchema)
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageWhereUniqueInputSchema: z.ZodType<Prisma.ItemStorageWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ItemStorageOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemStorageOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      managedLocationId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => ItemStorageCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => ItemStorageMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ItemStorageMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ItemStorageScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemStorageScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ItemStorageScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ItemStorageScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ItemStorageScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ItemStorageScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ItemStorageScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      location: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      managedLocationId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SecondaryUsersWhereInputSchema: z.ZodType<Prisma.SecondaryUsersWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SecondaryUsersWhereInputSchema),
          z.lazy(() => SecondaryUsersWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SecondaryUsersWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SecondaryUsersWhereInputSchema),
          z.lazy(() => SecondaryUsersWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      itemStorageId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      itemStorage: z
        .union([
          z.lazy(() => ItemStorageRelationFilterSchema),
          z.lazy(() => ItemStorageWhereInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersOrderByWithRelationInputSchema: z.ZodType<Prisma.SecondaryUsersOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
      itemStorage: z
        .lazy(() => ItemStorageOrderByWithRelationInputSchema)
        .optional(),
    })
    .strict();

export const SecondaryUsersWhereUniqueInputSchema: z.ZodType<Prisma.SecondaryUsersWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const SecondaryUsersOrderByWithAggregationInputSchema: z.ZodType<Prisma.SecondaryUsersOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => SecondaryUsersCountOrderByAggregateInputSchema)
        .optional(),
      _max: z
        .lazy(() => SecondaryUsersMaxOrderByAggregateInputSchema)
        .optional(),
      _min: z
        .lazy(() => SecondaryUsersMinOrderByAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SecondaryUsersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SecondaryUsersScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SecondaryUsersScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SecondaryUsersScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereWithAggregatesInputSchema),
          z
            .lazy(() => SecondaryUsersScalarWhereWithAggregatesInputSchema)
            .array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      itemStorageId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const StoredItemWhereInputSchema: z.ZodType<Prisma.StoredItemWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StoredItemWhereInputSchema),
          z.lazy(() => StoredItemWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StoredItemWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StoredItemWhereInputSchema),
          z.lazy(() => StoredItemWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      itemStorageId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      itemStorage: z
        .union([
          z.lazy(() => ItemStorageRelationFilterSchema),
          z.lazy(() => ItemStorageWhereInputSchema),
        ])
        .optional(),
      ItemInfo: z.lazy(() => ItemInfoListRelationFilterSchema).optional(),
    })
    .strict();

export const StoredItemOrderByWithRelationInputSchema: z.ZodType<Prisma.StoredItemOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
      itemStorage: z
        .lazy(() => ItemStorageOrderByWithRelationInputSchema)
        .optional(),
      ItemInfo: z
        .lazy(() => ItemInfoOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const StoredItemWhereUniqueInputSchema: z.ZodType<Prisma.StoredItemWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const StoredItemOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoredItemOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => StoredItemCountOrderByAggregateInputSchema)
        .optional(),
      _max: z.lazy(() => StoredItemMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => StoredItemMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const StoredItemScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoredItemScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StoredItemScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StoredItemScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StoredItemScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StoredItemScalarWhereWithAggregatesInputSchema),
          z.lazy(() => StoredItemScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      itemStorageId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ItemInfoWhereInputSchema: z.ZodType<Prisma.ItemInfoWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ItemInfoWhereInputSchema),
        z.lazy(() => ItemInfoWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ItemInfoWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ItemInfoWhereInputSchema),
        z.lazy(() => ItemInfoWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    expiryDate: z
      .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
      .optional()
      .nullable(),
    creationDate: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    purchaseLink: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    imageUrl: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    desiredQuantity: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    quantity: z
      .union([z.lazy(() => IntNullableFilterSchema), z.number()])
      .optional()
      .nullable(),
    storedItemId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    productId: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    storedItem: z
      .union([
        z.lazy(() => StoredItemRelationFilterSchema),
        z.lazy(() => StoredItemWhereInputSchema),
      ])
      .optional()
      .nullable(),
    product: z
      .union([
        z.lazy(() => ProductRelationFilterSchema),
        z.lazy(() => ProductWhereInputSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const ItemInfoOrderByWithRelationInputSchema: z.ZodType<Prisma.ItemInfoOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      expiryDate: z.lazy(() => SortOrderSchema).optional(),
      creationDate: z.lazy(() => SortOrderSchema).optional(),
      purchaseLink: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      storedItemId: z.lazy(() => SortOrderSchema).optional(),
      productId: z.lazy(() => SortOrderSchema).optional(),
      storedItem: z
        .lazy(() => StoredItemOrderByWithRelationInputSchema)
        .optional(),
      product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const ItemInfoWhereUniqueInputSchema: z.ZodType<Prisma.ItemInfoWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ItemInfoOrderByWithAggregationInputSchema: z.ZodType<Prisma.ItemInfoOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      expiryDate: z.lazy(() => SortOrderSchema).optional(),
      creationDate: z.lazy(() => SortOrderSchema).optional(),
      purchaseLink: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      storedItemId: z.lazy(() => SortOrderSchema).optional(),
      productId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ItemInfoCountOrderByAggregateInputSchema).optional(),
      _avg: z.lazy(() => ItemInfoAvgOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ItemInfoMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ItemInfoMinOrderByAggregateInputSchema).optional(),
      _sum: z.lazy(() => ItemInfoSumOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ItemInfoScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ItemInfoScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ItemInfoScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ItemInfoScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ItemInfoScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ItemInfoScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ItemInfoScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      expiryDate: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.lazy(() => IntNullableWithAggregatesFilterSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      storedItemId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      productId: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const SupplierWhereInputSchema: z.ZodType<Prisma.SupplierWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SupplierWhereInputSchema),
        z.lazy(() => SupplierWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SupplierWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SupplierWhereInputSchema),
        z.lazy(() => SupplierWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    addressId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    address: z
      .union([
        z.lazy(() => AddressRelationFilterSchema),
        z.lazy(() => AddressWhereInputSchema),
      ])
      .optional(),
    products: z.lazy(() => ProductListRelationFilterSchema).optional(),
  })
  .strict();

export const SupplierOrderByWithRelationInputSchema: z.ZodType<Prisma.SupplierOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
      products: z
        .lazy(() => ProductOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const SupplierWhereUniqueInputSchema: z.ZodType<Prisma.SupplierWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const SupplierOrderByWithAggregationInputSchema: z.ZodType<Prisma.SupplierOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => SupplierCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => SupplierMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => SupplierMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const SupplierScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SupplierScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SupplierScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema),
          z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      addressId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => ProductWhereInputSchema),
        z.lazy(() => ProductWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => ProductWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => ProductWhereInputSchema),
        z.lazy(() => ProductWhereInputSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    supplierId: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    supplier: z
      .union([
        z.lazy(() => SupplierRelationFilterSchema),
        z.lazy(() => SupplierWhereInputSchema),
      ])
      .optional(),
    itemInfo: z.lazy(() => ItemInfoListRelationFilterSchema).optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      supplierId: z.lazy(() => SortOrderSchema).optional(),
      supplier: z.lazy(() => SupplierOrderByWithRelationInputSchema).optional(),
      itemInfo: z
        .lazy(() => ItemInfoOrderByRelationAggregateInputSchema)
        .optional(),
    })
    .strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      supplierId: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProductScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),
          z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      id: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      supplierId: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    street: z.string(),
    city: z.string(),
    postcode: z.string(),
    location: z
      .lazy(() => LocationCreateNestedManyWithoutAddressInputSchema)
      .optional(),
    user: z
      .lazy(() => UserCreateNestedManyWithoutUserAddressInputSchema)
      .optional(),
    supplier: z
      .lazy(() => SupplierCreateNestedManyWithoutAddressInputSchema)
      .optional(),
  })
  .strict();

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      location: z
        .lazy(() => LocationUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUncheckedCreateNestedManyWithoutUserAddressInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressUpdateInputSchema: z.ZodType<Prisma.AddressUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    street: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    city: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    postcode: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    location: z
      .lazy(() => LocationUpdateManyWithoutAddressNestedInputSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateManyWithoutUserAddressNestedInputSchema)
      .optional(),
    supplier: z
      .lazy(() => SupplierUpdateManyWithoutAddressNestedInputSchema)
      .optional(),
  })
  .strict();

export const AddressUncheckedUpdateInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(() => LocationUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUncheckedUpdateManyWithoutUserAddressNestedInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const AddressCreateManyInputSchema: z.ZodType<Prisma.AddressCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
    })
    .strict();

export const AddressUpdateManyMutationInputSchema: z.ZodType<Prisma.AddressUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AddressUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    userAddress: z.lazy(() => AddressCreateNestedOneWithoutUserInputSchema),
    managedLocation: z
      .lazy(() => ManagedLocationCreateNestedManyWithoutUserInputSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      addressId: z.string(),
      managedLocation: z
        .lazy(
          () => ManagedLocationUncheckedCreateNestedManyWithoutUserInputSchema
        )
        .optional(),
    })
    .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    firstName: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    lastName: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    userAddress: z
      .lazy(() => AddressUpdateOneRequiredWithoutUserNestedInputSchema)
      .optional(),
    managedLocation: z
      .lazy(() => ManagedLocationUpdateManyWithoutUserNestedInputSchema)
      .optional(),
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(
          () => ManagedLocationUncheckedUpdateManyWithoutUserNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      addressId: z.string(),
    })
    .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LocationCreateInputSchema: z.ZodType<Prisma.LocationCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      image_url: z.string().optional().nullable(),
      address: z.lazy(() => AddressCreateNestedOneWithoutLocationInputSchema),
      managedLocation: z
        .lazy(() => ManagedLocationCreateNestedManyWithoutLocationInputSchema)
        .optional(),
    })
    .strict();

export const LocationUncheckedCreateInputSchema: z.ZodType<Prisma.LocationUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
      image_url: z.string().optional().nullable(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUncheckedCreateNestedManyWithoutLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const LocationUpdateInputSchema: z.ZodType<Prisma.LocationUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      address: z
        .lazy(() => AddressUpdateOneRequiredWithoutLocationNestedInputSchema)
        .optional(),
      managedLocation: z
        .lazy(() => ManagedLocationUpdateManyWithoutLocationNestedInputSchema)
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUncheckedUpdateManyWithoutLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const LocationCreateManyInputSchema: z.ZodType<Prisma.LocationCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
      image_url: z.string().optional().nullable(),
    })
    .strict();

export const LocationUpdateManyMutationInputSchema: z.ZodType<Prisma.LocationUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const LocationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ManagedLocationCreateInputSchema: z.ZodType<Prisma.ManagedLocationCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutManagedLocationInputSchema),
      location: z.lazy(
        () => LocationCreateNestedOneWithoutManagedLocationInputSchema
      ),
      itemStorage: z
        .lazy(
          () => ItemStorageCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedCreateInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      userId: z.string(),
      locationId: z.string(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUpdateInputSchema: z.ZodType<Prisma.ManagedLocationUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(
          () => UserUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
      location: z
        .lazy(
          () => LocationUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
      itemStorage: z
        .lazy(
          () => ItemStorageUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      locationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationCreateManyInputSchema: z.ZodType<Prisma.ManagedLocationCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      userId: z.string(),
      locationId: z.string(),
    })
    .strict();

export const ManagedLocationUpdateManyMutationInputSchema: z.ZodType<Prisma.ManagedLocationUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      locationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageCreateInputSchema: z.ZodType<Prisma.ItemStorageCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocation: z.lazy(
        () => ManagedLocationCreateNestedOneWithoutItemStorageInputSchema
      ),
      storedItem: z
        .lazy(() => StoredItemCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedCreateInputSchema: z.ZodType<Prisma.ItemStorageUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocationId: z.string(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageUpdateInputSchema: z.ZodType<Prisma.ItemStorageUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUpdateOneRequiredWithoutItemStorageNestedInputSchema
        )
        .optional(),
      storedItem: z
        .lazy(() => StoredItemUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateManyInputSchema: z.ZodType<Prisma.ItemStorageCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocationId: z.string(),
    })
    .strict();

export const ItemStorageUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemStorageUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersCreateInputSchema: z.ZodType<Prisma.SecondaryUsersCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
      itemStorage: z.lazy(
        () => ItemStorageCreateNestedOneWithoutSecondaryUsersInputSchema
      ),
    })
    .strict();

export const SecondaryUsersUncheckedCreateInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
      itemStorageId: z.string(),
    })
    .strict();

export const SecondaryUsersUpdateInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUpdateOneRequiredWithoutSecondaryUsersNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedUpdateInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersCreateManyInputSchema: z.ZodType<Prisma.SecondaryUsersCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
      itemStorageId: z.string(),
    })
    .strict();

export const SecondaryUsersUpdateManyMutationInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StoredItemCreateInputSchema: z.ZodType<Prisma.StoredItemCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemStorage: z.lazy(
        () => ItemStorageCreateNestedOneWithoutStoredItemInputSchema
      ),
      ItemInfo: z
        .lazy(() => ItemInfoCreateNestedManyWithoutStoredItemInputSchema)
        .optional(),
    })
    .strict();

export const StoredItemUncheckedCreateInputSchema: z.ZodType<Prisma.StoredItemUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemStorageId: z.string(),
      ItemInfo: z
        .lazy(
          () => ItemInfoUncheckedCreateNestedManyWithoutStoredItemInputSchema
        )
        .optional(),
    })
    .strict();

export const StoredItemUpdateInputSchema: z.ZodType<Prisma.StoredItemUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () => ItemStorageUpdateOneRequiredWithoutStoredItemNestedInputSchema
        )
        .optional(),
      ItemInfo: z
        .lazy(() => ItemInfoUpdateManyWithoutStoredItemNestedInputSchema)
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ItemInfo: z
        .lazy(
          () => ItemInfoUncheckedUpdateManyWithoutStoredItemNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const StoredItemCreateManyInputSchema: z.ZodType<Prisma.StoredItemCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemStorageId: z.string(),
    })
    .strict();

export const StoredItemUpdateManyMutationInputSchema: z.ZodType<Prisma.StoredItemUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoCreateInputSchema: z.ZodType<Prisma.ItemInfoCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItem: z
        .lazy(() => StoredItemCreateNestedOneWithoutItemInfoInputSchema)
        .optional(),
      product: z
        .lazy(() => ProductCreateNestedOneWithoutItemInfoInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedCreateInputSchema: z.ZodType<Prisma.ItemInfoUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItemId: z.string().optional().nullable(),
      productId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoUpdateInputSchema: z.ZodType<Prisma.ItemInfoUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      storedItem: z
        .lazy(() => StoredItemUpdateOneWithoutItemInfoNestedInputSchema)
        .optional(),
      product: z
        .lazy(() => ProductUpdateOneWithoutItemInfoNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedUpdateInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      storedItemId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      productId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ItemInfoCreateManyInputSchema: z.ZodType<Prisma.ItemInfoCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItemId: z.string().optional().nullable(),
      productId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoUpdateManyMutationInputSchema: z.ZodType<Prisma.ItemInfoUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ItemInfoUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      storedItemId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      productId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const SupplierCreateInputSchema: z.ZodType<Prisma.SupplierCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      address: z.lazy(() => AddressCreateNestedOneWithoutSupplierInputSchema),
      products: z
        .lazy(() => ProductCreateNestedManyWithoutSupplierInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
      products: z
        .lazy(() => ProductUncheckedCreateNestedManyWithoutSupplierInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUpdateInputSchema: z.ZodType<Prisma.SupplierUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      address: z
        .lazy(() => AddressUpdateOneRequiredWithoutSupplierNestedInputSchema)
        .optional(),
      products: z
        .lazy(() => ProductUpdateManyWithoutSupplierNestedInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      products: z
        .lazy(() => ProductUncheckedUpdateManyWithoutSupplierNestedInputSchema)
        .optional(),
    })
    .strict();

export const SupplierCreateManyInputSchema: z.ZodType<Prisma.SupplierCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
    })
    .strict();

export const SupplierUpdateManyMutationInputSchema: z.ZodType<Prisma.SupplierUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    id: z.string().cuid().optional(),
    supplier: z.lazy(() => SupplierCreateNestedOneWithoutProductsInputSchema),
    itemInfo: z
      .lazy(() => ItemInfoCreateNestedManyWithoutProductInputSchema)
      .optional(),
  })
  .strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      supplierId: z.string(),
      itemInfo: z
        .lazy(() => ItemInfoUncheckedCreateNestedManyWithoutProductInputSchema)
        .optional(),
    })
    .strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z
  .object({
    id: z
      .union([
        z.string().cuid(),
        z.lazy(() => StringFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    supplier: z
      .lazy(() => SupplierUpdateOneRequiredWithoutProductsNestedInputSchema)
      .optional(),
    itemInfo: z
      .lazy(() => ItemInfoUpdateManyWithoutProductNestedInputSchema)
      .optional(),
  })
  .strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      supplierId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemInfo: z
        .lazy(() => ItemInfoUncheckedUpdateManyWithoutProductNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      supplierId: z.string(),
    })
    .strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      supplierId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const LocationListRelationFilterSchema: z.ZodType<Prisma.LocationListRelationFilter> =
  z
    .object({
      every: z.lazy(() => LocationWhereInputSchema).optional(),
      some: z.lazy(() => LocationWhereInputSchema).optional(),
      none: z.lazy(() => LocationWhereInputSchema).optional(),
    })
    .strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> =
  z
    .object({
      every: z.lazy(() => UserWhereInputSchema).optional(),
      some: z.lazy(() => UserWhereInputSchema).optional(),
      none: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const SupplierListRelationFilterSchema: z.ZodType<Prisma.SupplierListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SupplierWhereInputSchema).optional(),
      some: z.lazy(() => SupplierWhereInputSchema).optional(),
      none: z.lazy(() => SupplierWhereInputSchema).optional(),
    })
    .strict();

export const LocationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LocationOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SupplierOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SupplierOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AddressCountOrderByAggregateInputSchema: z.ZodType<Prisma.AddressCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      street: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      postcode: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AddressMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      street: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      postcode: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const AddressMinOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      street: z.lazy(() => SortOrderSchema).optional(),
      city: z.lazy(() => SortOrderSchema).optional(),
      postcode: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.union([z.string().array(), z.string()]).optional(),
      notIn: z.union([z.string().array(), z.string()]).optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const AddressRelationFilterSchema: z.ZodType<Prisma.AddressRelationFilter> =
  z
    .object({
      is: z.lazy(() => AddressWhereInputSchema).optional(),
      isNot: z.lazy(() => AddressWhereInputSchema).optional(),
    })
    .strict();

export const ManagedLocationListRelationFilterSchema: z.ZodType<Prisma.ManagedLocationListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ManagedLocationWhereInputSchema).optional(),
      some: z.lazy(() => ManagedLocationWhereInputSchema).optional(),
      none: z.lazy(() => ManagedLocationWhereInputSchema).optional(),
    })
    .strict();

export const ManagedLocationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ManagedLocationOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      firstName: z.lazy(() => SortOrderSchema).optional(),
      lastName: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const LocationCountOrderByAggregateInputSchema: z.ZodType<Prisma.LocationCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      image_url: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LocationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LocationMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      image_url: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LocationMinOrderByAggregateInputSchema: z.ZodType<Prisma.LocationMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
      image_url: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z.lazy(() => UserWhereInputSchema).optional(),
    isNot: z.lazy(() => UserWhereInputSchema).optional(),
  })
  .strict();

export const LocationRelationFilterSchema: z.ZodType<Prisma.LocationRelationFilter> =
  z
    .object({
      is: z.lazy(() => LocationWhereInputSchema).optional(),
      isNot: z.lazy(() => LocationWhereInputSchema).optional(),
    })
    .strict();

export const ItemStorageListRelationFilterSchema: z.ZodType<Prisma.ItemStorageListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ItemStorageWhereInputSchema).optional(),
      some: z.lazy(() => ItemStorageWhereInputSchema).optional(),
      none: z.lazy(() => ItemStorageWhereInputSchema).optional(),
    })
    .strict();

export const ItemStorageOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ItemStorageOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ManagedLocationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ManagedLocationCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ManagedLocationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ManagedLocationMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ManagedLocationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ManagedLocationMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      userId: z.lazy(() => SortOrderSchema).optional(),
      locationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ManagedLocationRelationFilterSchema: z.ZodType<Prisma.ManagedLocationRelationFilter> =
  z
    .object({
      is: z.lazy(() => ManagedLocationWhereInputSchema).optional(),
      isNot: z.lazy(() => ManagedLocationWhereInputSchema).optional(),
    })
    .strict();

export const StoredItemListRelationFilterSchema: z.ZodType<Prisma.StoredItemListRelationFilter> =
  z
    .object({
      every: z.lazy(() => StoredItemWhereInputSchema).optional(),
      some: z.lazy(() => StoredItemWhereInputSchema).optional(),
      none: z.lazy(() => StoredItemWhereInputSchema).optional(),
    })
    .strict();

export const SecondaryUsersListRelationFilterSchema: z.ZodType<Prisma.SecondaryUsersListRelationFilter> =
  z
    .object({
      every: z.lazy(() => SecondaryUsersWhereInputSchema).optional(),
      some: z.lazy(() => SecondaryUsersWhereInputSchema).optional(),
      none: z.lazy(() => SecondaryUsersWhereInputSchema).optional(),
    })
    .strict();

export const StoredItemOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StoredItemOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SecondaryUsersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.SecondaryUsersOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemStorageCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemStorageCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      managedLocationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemStorageMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemStorageMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      managedLocationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemStorageMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemStorageMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      location: z.lazy(() => SortOrderSchema).optional(),
      managedLocationId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemStorageRelationFilterSchema: z.ZodType<Prisma.ItemStorageRelationFilter> =
  z
    .object({
      is: z.lazy(() => ItemStorageWhereInputSchema).optional(),
      isNot: z.lazy(() => ItemStorageWhereInputSchema).optional(),
    })
    .strict();

export const SecondaryUsersCountOrderByAggregateInputSchema: z.ZodType<Prisma.SecondaryUsersCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SecondaryUsersMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SecondaryUsersMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SecondaryUsersMinOrderByAggregateInputSchema: z.ZodType<Prisma.SecondaryUsersMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemInfoListRelationFilterSchema: z.ZodType<Prisma.ItemInfoListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ItemInfoWhereInputSchema).optional(),
      some: z.lazy(() => ItemInfoWhereInputSchema).optional(),
      none: z.lazy(() => ItemInfoWhereInputSchema).optional(),
    })
    .strict();

export const ItemInfoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ItemInfoOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StoredItemCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StoredItemMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const StoredItemMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      itemStorageId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      notIn: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z
  .object({
    equals: z.number().optional().nullable(),
    in: z.union([z.number().array(), z.number()]).optional().nullable(),
    notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z
      .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
      .optional()
      .nullable(),
  })
  .strict();

export const StoredItemRelationFilterSchema: z.ZodType<Prisma.StoredItemRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => StoredItemWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => StoredItemWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> =
  z
    .object({
      is: z
        .lazy(() => ProductWhereInputSchema)
        .optional()
        .nullable(),
      isNot: z
        .lazy(() => ProductWhereInputSchema)
        .optional()
        .nullable(),
    })
    .strict();

export const ItemInfoCountOrderByAggregateInputSchema: z.ZodType<Prisma.ItemInfoCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      expiryDate: z.lazy(() => SortOrderSchema).optional(),
      creationDate: z.lazy(() => SortOrderSchema).optional(),
      purchaseLink: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      storedItemId: z.lazy(() => SortOrderSchema).optional(),
      productId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemInfoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ItemInfoAvgOrderByAggregateInput> =
  z
    .object({
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemInfoMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ItemInfoMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      expiryDate: z.lazy(() => SortOrderSchema).optional(),
      creationDate: z.lazy(() => SortOrderSchema).optional(),
      purchaseLink: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      storedItemId: z.lazy(() => SortOrderSchema).optional(),
      productId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemInfoMinOrderByAggregateInputSchema: z.ZodType<Prisma.ItemInfoMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      type: z.lazy(() => SortOrderSchema).optional(),
      expiryDate: z.lazy(() => SortOrderSchema).optional(),
      creationDate: z.lazy(() => SortOrderSchema).optional(),
      purchaseLink: z.lazy(() => SortOrderSchema).optional(),
      imageUrl: z.lazy(() => SortOrderSchema).optional(),
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
      storedItemId: z.lazy(() => SortOrderSchema).optional(),
      productId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ItemInfoSumOrderByAggregateInputSchema: z.ZodType<Prisma.ItemInfoSumOrderByAggregateInput> =
  z
    .object({
      desiredQuantity: z.lazy(() => SortOrderSchema).optional(),
      quantity: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      notIn: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.union([z.number().array(), z.number()]).optional().nullable(),
      notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    })
    .strict();

export const ProductListRelationFilterSchema: z.ZodType<Prisma.ProductListRelationFilter> =
  z
    .object({
      every: z.lazy(() => ProductWhereInputSchema).optional(),
      some: z.lazy(() => ProductWhereInputSchema).optional(),
      none: z.lazy(() => ProductWhereInputSchema).optional(),
    })
    .strict();

export const ProductOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SupplierCountOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SupplierMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SupplierMinOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      name: z.lazy(() => SortOrderSchema).optional(),
      addressId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const SupplierRelationFilterSchema: z.ZodType<Prisma.SupplierRelationFilter> =
  z
    .object({
      is: z.lazy(() => SupplierWhereInputSchema).optional(),
      isNot: z.lazy(() => SupplierWhereInputSchema).optional(),
    })
    .strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      supplierId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      supplierId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      supplierId: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LocationCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.LocationCreateNestedManyWithoutAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutAddressInputSchema),
          z.lazy(() => LocationCreateWithoutAddressInputSchema).array(),
          z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => LocationUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LocationCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => LocationCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LocationCreateManyAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedManyWithoutUserAddressInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutUserAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserAddressInputSchema),
          z.lazy(() => UserCreateWithoutUserAddressInputSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyUserAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.SupplierCreateNestedManyWithoutAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutAddressInputSchema),
          z.lazy(() => SupplierCreateWithoutAddressInputSchema).array(),
          z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SupplierCreateManyAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LocationUncheckedCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.LocationUncheckedCreateNestedManyWithoutAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutAddressInputSchema),
          z.lazy(() => LocationCreateWithoutAddressInputSchema).array(),
          z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => LocationUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LocationCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => LocationCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LocationCreateManyAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedCreateNestedManyWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutUserAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserAddressInputSchema),
          z.lazy(() => UserCreateWithoutUserAddressInputSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyUserAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateNestedManyWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateNestedManyWithoutAddressInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutAddressInputSchema),
          z.lazy(() => SupplierCreateWithoutAddressInputSchema).array(),
          z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SupplierCreateManyAddressInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const LocationUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.LocationUpdateManyWithoutAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutAddressInputSchema),
          z.lazy(() => LocationCreateWithoutAddressInputSchema).array(),
          z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => LocationUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LocationCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => LocationCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LocationUpsertWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpsertWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LocationCreateManyAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpdateWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LocationUpdateManyWithWhereWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpdateManyWithWhereWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LocationScalarWhereInputSchema),
          z.lazy(() => LocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateManyWithoutUserAddressNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutUserAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserAddressInputSchema),
          z.lazy(() => UserCreateWithoutUserAddressInputSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => UserUpsertWithWhereUniqueWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpsertWithWhereUniqueWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyUserAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithWhereUniqueWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpdateWithWhereUniqueWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputSchema),
          z.lazy(() => UserScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.SupplierUpdateManyWithoutAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutAddressInputSchema),
          z.lazy(() => SupplierCreateWithoutAddressInputSchema).array(),
          z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SupplierUpsertWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpsertWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SupplierCreateManyAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SupplierUpdateWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpdateWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SupplierUpdateManyWithWhereWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpdateManyWithWhereWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SupplierScalarWhereInputSchema),
          z.lazy(() => SupplierScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateManyWithoutAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutAddressInputSchema),
          z.lazy(() => LocationCreateWithoutAddressInputSchema).array(),
          z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => LocationUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LocationCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => LocationCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LocationUpsertWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpsertWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LocationCreateManyAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LocationWhereUniqueInputSchema),
          z.lazy(() => LocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpdateWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LocationUpdateManyWithWhereWithoutAddressInputSchema),
          z
            .lazy(() => LocationUpdateManyWithWhereWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LocationScalarWhereInputSchema),
          z.lazy(() => LocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutUserAddressNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUserAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutUserAddressInputSchema),
          z.lazy(() => UserCreateWithoutUserAddressInputSchema).array(),
          z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema),
          z
            .lazy(() => UserCreateOrConnectWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => UserUpsertWithWhereUniqueWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpsertWithWhereUniqueWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => UserCreateManyUserAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserWhereUniqueInputSchema),
          z.lazy(() => UserWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithWhereUniqueWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpdateWithWhereUniqueWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => UserUpdateManyWithWhereWithoutUserAddressInputSchema),
          z
            .lazy(() => UserUpdateManyWithWhereWithoutUserAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserScalarWhereInputSchema),
          z.lazy(() => UserScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateManyWithoutAddressNestedInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateManyWithoutAddressNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutAddressInputSchema),
          z.lazy(() => SupplierCreateWithoutAddressInputSchema).array(),
          z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema),
          z
            .lazy(() => SupplierCreateOrConnectWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => SupplierUpsertWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpsertWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SupplierCreateManyAddressInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SupplierWhereUniqueInputSchema),
          z.lazy(() => SupplierWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => SupplierUpdateWithWhereUniqueWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpdateWithWhereUniqueWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => SupplierUpdateManyWithWhereWithoutAddressInputSchema),
          z
            .lazy(() => SupplierUpdateManyWithWhereWithoutAddressInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SupplierScalarWhereInputSchema),
          z.lazy(() => SupplierScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AddressCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutUserInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutUserInputSchema)
        .optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ManagedLocationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema).array(),
          z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema).array(),
          z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AddressUpdateOneRequiredWithoutUserNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutUserInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutUserInputSchema)
        .optional(),
      upsert: z.lazy(() => AddressUpsertWithoutUserInputSchema).optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => AddressUpdateWithoutUserInputSchema),
          z.lazy(() => AddressUncheckedUpdateWithoutUserInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ManagedLocationUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema).array(),
          z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ManagedLocationUpsertWithWhereUniqueWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpsertWithWhereUniqueWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateWithWhereUniqueWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateWithWhereUniqueWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateManyWithWhereWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateManyWithWhereWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutUserInputSchema).array(),
          z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema),
          z
            .lazy(() => ManagedLocationCreateOrConnectWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ManagedLocationUpsertWithWhereUniqueWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpsertWithWhereUniqueWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateWithWhereUniqueWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateWithWhereUniqueWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateManyWithWhereWithoutUserInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateManyWithWhereWithoutUserInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AddressCreateNestedOneWithoutLocationInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutLocationInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutLocationInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutLocationInputSchema)
        .optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ManagedLocationCreateNestedManyWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationCreateNestedManyWithoutLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema).array(),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyLocationInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedCreateNestedManyWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateNestedManyWithoutLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema).array(),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyLocationInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
    })
    .strict();

export const AddressUpdateOneRequiredWithoutLocationNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutLocationInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutLocationInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutLocationInputSchema)
        .optional(),
      upsert: z.lazy(() => AddressUpsertWithoutLocationInputSchema).optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => AddressUpdateWithoutLocationInputSchema),
          z.lazy(() => AddressUncheckedUpdateWithoutLocationInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUpdateManyWithoutLocationNestedInputSchema: z.ZodType<Prisma.ManagedLocationUpdateManyWithoutLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema).array(),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ManagedLocationUpsertWithWhereUniqueWithoutLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ManagedLocationUpsertWithWhereUniqueWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyLocationInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateWithWhereUniqueWithoutLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ManagedLocationUpdateWithWhereUniqueWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateManyWithWhereWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateManyWithWhereWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateManyWithoutLocationNestedInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateManyWithoutLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
          z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema).array(),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUncheckedCreateWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationCreateOrConnectWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ManagedLocationUpsertWithWhereUniqueWithoutLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ManagedLocationUpsertWithWhereUniqueWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ManagedLocationCreateManyLocationInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ManagedLocationWhereUniqueInputSchema),
          z.lazy(() => ManagedLocationWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateWithWhereUniqueWithoutLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ManagedLocationUpdateWithWhereUniqueWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => ManagedLocationUpdateManyWithWhereWithoutLocationInputSchema
          ),
          z
            .lazy(
              () => ManagedLocationUpdateManyWithWhereWithoutLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutManagedLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManagedLocationInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutManagedLocationInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManagedLocationInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const LocationCreateNestedOneWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationCreateNestedOneWithoutManagedLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutManagedLocationInputSchema),
          z.lazy(
            () => LocationUncheckedCreateWithoutManagedLocationInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LocationCreateOrConnectWithoutManagedLocationInputSchema)
        .optional(),
      connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ItemStorageCreateNestedManyWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageCreateNestedManyWithoutManagedLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
          z
            .lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema)
            .array(),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStorageCreateManyManagedLocationInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedCreateNestedManyWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUncheckedCreateNestedManyWithoutManagedLocationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
          z
            .lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema)
            .array(),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStorageCreateManyManagedLocationInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutManagedLocationNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutManagedLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutManagedLocationInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutManagedLocationInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutManagedLocationInputSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutManagedLocationInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutManagedLocationInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutManagedLocationInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LocationUpdateOneRequiredWithoutManagedLocationNestedInputSchema: z.ZodType<Prisma.LocationUpdateOneRequiredWithoutManagedLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LocationCreateWithoutManagedLocationInputSchema),
          z.lazy(
            () => LocationUncheckedCreateWithoutManagedLocationInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => LocationCreateOrConnectWithoutManagedLocationInputSchema)
        .optional(),
      upsert: z
        .lazy(() => LocationUpsertWithoutManagedLocationInputSchema)
        .optional(),
      connect: z.lazy(() => LocationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => LocationUpdateWithoutManagedLocationInputSchema),
          z.lazy(
            () => LocationUncheckedUpdateWithoutManagedLocationInputSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageUpdateManyWithoutManagedLocationNestedInputSchema: z.ZodType<Prisma.ItemStorageUpdateManyWithoutManagedLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
          z
            .lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema)
            .array(),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStorageCreateManyManagedLocationInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpdateManyWithWhereWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpdateManyWithWhereWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemStorageScalarWhereInputSchema),
          z.lazy(() => ItemStorageScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateManyWithoutManagedLocationNestedInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateManyWithoutManagedLocationNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
          z
            .lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema)
            .array(),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () => ItemStorageCreateOrConnectWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemStorageCreateManyManagedLocationInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemStorageWhereUniqueInputSchema),
          z.lazy(() => ItemStorageWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ItemStorageUpdateManyWithWhereWithoutManagedLocationInputSchema
          ),
          z
            .lazy(
              () =>
                ItemStorageUpdateManyWithWhereWithoutManagedLocationInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemStorageScalarWhereInputSchema),
          z.lazy(() => ItemStorageScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationCreateNestedOneWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationCreateNestedOneWithoutItemStorageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutItemStorageInputSchema),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutItemStorageInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ManagedLocationCreateOrConnectWithoutItemStorageInputSchema)
        .optional(),
      connect: z.lazy(() => ManagedLocationWhereUniqueInputSchema).optional(),
    })
    .strict();

export const StoredItemCreateNestedManyWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemCreateNestedManyWithoutItemStorageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema).array(),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoredItemCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersCreateNestedManyWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersCreateNestedManyWithoutItemStorageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema)
            .array(),
          z.lazy(
            () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SecondaryUsersCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StoredItemUncheckedCreateNestedManyWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUncheckedCreateNestedManyWithoutItemStorageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema).array(),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoredItemCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedCreateNestedManyWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedCreateNestedManyWithoutItemStorageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema)
            .array(),
          z.lazy(
            () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SecondaryUsersCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationUpdateOneRequiredWithoutItemStorageNestedInputSchema: z.ZodType<Prisma.ManagedLocationUpdateOneRequiredWithoutItemStorageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ManagedLocationCreateWithoutItemStorageInputSchema),
          z.lazy(
            () => ManagedLocationUncheckedCreateWithoutItemStorageInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ManagedLocationCreateOrConnectWithoutItemStorageInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ManagedLocationUpsertWithoutItemStorageInputSchema)
        .optional(),
      connect: z.lazy(() => ManagedLocationWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ManagedLocationUpdateWithoutItemStorageInputSchema),
          z.lazy(
            () => ManagedLocationUncheckedUpdateWithoutItemStorageInputSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const StoredItemUpdateManyWithoutItemStorageNestedInputSchema: z.ZodType<Prisma.StoredItemUpdateManyWithoutItemStorageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema).array(),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => StoredItemUpsertWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpsertWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoredItemCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => StoredItemUpdateWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpdateWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => StoredItemUpdateManyWithWhereWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpdateManyWithWhereWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StoredItemScalarWhereInputSchema),
          z.lazy(() => StoredItemScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUpdateManyWithoutItemStorageNestedInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateManyWithoutItemStorageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema)
            .array(),
          z.lazy(
            () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SecondaryUsersCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SecondaryUsersUpdateManyWithWhereWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpdateManyWithWhereWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereInputSchema),
          z.lazy(() => SecondaryUsersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateManyWithoutItemStorageNestedInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateManyWithoutItemStorageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
          z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema).array(),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema),
          z
            .lazy(() => StoredItemCreateOrConnectWithoutItemStorageInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => StoredItemUpsertWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpsertWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => StoredItemCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => StoredItemWhereUniqueInputSchema),
          z.lazy(() => StoredItemWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => StoredItemUpdateWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpdateWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => StoredItemUpdateManyWithWhereWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => StoredItemUpdateManyWithWhereWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => StoredItemScalarWhereInputSchema),
          z.lazy(() => StoredItemScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedUpdateManyWithoutItemStorageNestedInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedUpdateManyWithoutItemStorageNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
          z
            .lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema)
            .array(),
          z.lazy(
            () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () => SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SecondaryUsersCreateManyItemStorageInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
          z.lazy(() => SecondaryUsersWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => SecondaryUsersUpdateManyWithWhereWithoutItemStorageInputSchema
          ),
          z
            .lazy(
              () =>
                SecondaryUsersUpdateManyWithWhereWithoutItemStorageInputSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereInputSchema),
          z.lazy(() => SecondaryUsersScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageCreateNestedOneWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageCreateNestedOneWithoutSecondaryUsersInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutSecondaryUsersInputSchema),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutSecondaryUsersInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemStorageCreateOrConnectWithoutSecondaryUsersInputSchema)
        .optional(),
      connect: z.lazy(() => ItemStorageWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ItemStorageUpdateOneRequiredWithoutSecondaryUsersNestedInputSchema: z.ZodType<Prisma.ItemStorageUpdateOneRequiredWithoutSecondaryUsersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutSecondaryUsersInputSchema),
          z.lazy(
            () => ItemStorageUncheckedCreateWithoutSecondaryUsersInputSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemStorageCreateOrConnectWithoutSecondaryUsersInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemStorageUpsertWithoutSecondaryUsersInputSchema)
        .optional(),
      connect: z.lazy(() => ItemStorageWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemStorageUpdateWithoutSecondaryUsersInputSchema),
          z.lazy(
            () => ItemStorageUncheckedUpdateWithoutSecondaryUsersInputSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageCreateNestedOneWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageCreateNestedOneWithoutStoredItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemStorageUncheckedCreateWithoutStoredItemInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemStorageCreateOrConnectWithoutStoredItemInputSchema)
        .optional(),
      connect: z.lazy(() => ItemStorageWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ItemInfoCreateNestedManyWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoCreateNestedManyWithoutStoredItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyStoredItemInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedCreateNestedManyWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUncheckedCreateNestedManyWithoutStoredItemInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyStoredItemInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemStorageUpdateOneRequiredWithoutStoredItemNestedInputSchema: z.ZodType<Prisma.ItemStorageUpdateOneRequiredWithoutStoredItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemStorageCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemStorageUncheckedCreateWithoutStoredItemInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ItemStorageCreateOrConnectWithoutStoredItemInputSchema)
        .optional(),
      upsert: z
        .lazy(() => ItemStorageUpsertWithoutStoredItemInputSchema)
        .optional(),
      connect: z.lazy(() => ItemStorageWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ItemStorageUpdateWithoutStoredItemInputSchema),
          z.lazy(() => ItemStorageUncheckedUpdateWithoutStoredItemInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUpdateManyWithoutStoredItemNestedInputSchema: z.ZodType<Prisma.ItemInfoUpdateManyWithoutStoredItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ItemInfoUpsertWithWhereUniqueWithoutStoredItemInputSchema
          ),
          z
            .lazy(
              () => ItemInfoUpsertWithWhereUniqueWithoutStoredItemInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyStoredItemInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ItemInfoUpdateWithWhereUniqueWithoutStoredItemInputSchema
          ),
          z
            .lazy(
              () => ItemInfoUpdateWithWhereUniqueWithoutStoredItemInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemInfoUpdateManyWithWhereWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUpdateManyWithWhereWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedUpdateManyWithoutStoredItemNestedInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateManyWithoutStoredItemNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
          z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => ItemInfoUpsertWithWhereUniqueWithoutStoredItemInputSchema
          ),
          z
            .lazy(
              () => ItemInfoUpsertWithWhereUniqueWithoutStoredItemInputSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyStoredItemInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => ItemInfoUpdateWithWhereUniqueWithoutStoredItemInputSchema
          ),
          z
            .lazy(
              () => ItemInfoUpdateWithWhereUniqueWithoutStoredItemInputSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemInfoUpdateManyWithWhereWithoutStoredItemInputSchema),
          z
            .lazy(() => ItemInfoUpdateManyWithWhereWithoutStoredItemInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StoredItemCreateNestedOneWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemCreateNestedOneWithoutItemInfoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemInfoInputSchema),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemInfoInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoredItemCreateOrConnectWithoutItemInfoInputSchema)
        .optional(),
      connect: z.lazy(() => StoredItemWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ProductCreateNestedOneWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutItemInfoInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutItemInfoInputSchema),
          z.lazy(() => ProductUncheckedCreateWithoutItemInfoInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutItemInfoInputSchema)
        .optional(),
      connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
    })
    .strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional().nullable(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> =
  z
    .object({
      set: z.number().optional().nullable(),
      increment: z.number().optional(),
      decrement: z.number().optional(),
      multiply: z.number().optional(),
      divide: z.number().optional(),
    })
    .strict();

export const StoredItemUpdateOneWithoutItemInfoNestedInputSchema: z.ZodType<Prisma.StoredItemUpdateOneWithoutItemInfoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => StoredItemCreateWithoutItemInfoInputSchema),
          z.lazy(() => StoredItemUncheckedCreateWithoutItemInfoInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => StoredItemCreateOrConnectWithoutItemInfoInputSchema)
        .optional(),
      upsert: z
        .lazy(() => StoredItemUpsertWithoutItemInfoInputSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => StoredItemWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => StoredItemUpdateWithoutItemInfoInputSchema),
          z.lazy(() => StoredItemUncheckedUpdateWithoutItemInfoInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateOneWithoutItemInfoNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneWithoutItemInfoNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutItemInfoInputSchema),
          z.lazy(() => ProductUncheckedCreateWithoutItemInfoInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => ProductCreateOrConnectWithoutItemInfoInputSchema)
        .optional(),
      upsert: z.lazy(() => ProductUpsertWithoutItemInfoInputSchema).optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithoutItemInfoInputSchema),
          z.lazy(() => ProductUncheckedUpdateWithoutItemInfoInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AddressCreateNestedOneWithoutSupplierInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutSupplierInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutSupplierInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutSupplierInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutSupplierInputSchema)
        .optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ProductCreateNestedManyWithoutSupplierInputSchema: z.ZodType<Prisma.ProductCreateNestedManyWithoutSupplierInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSupplierInputSchema),
          z.lazy(() => ProductCreateWithoutSupplierInputSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductCreateManySupplierInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateNestedManyWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUncheckedCreateNestedManyWithoutSupplierInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSupplierInputSchema),
          z.lazy(() => ProductCreateWithoutSupplierInputSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductCreateManySupplierInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const AddressUpdateOneRequiredWithoutSupplierNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutSupplierNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => AddressCreateWithoutSupplierInputSchema),
          z.lazy(() => AddressUncheckedCreateWithoutSupplierInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => AddressCreateOrConnectWithoutSupplierInputSchema)
        .optional(),
      upsert: z.lazy(() => AddressUpsertWithoutSupplierInputSchema).optional(),
      connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => AddressUpdateWithoutSupplierInputSchema),
          z.lazy(() => AddressUncheckedUpdateWithoutSupplierInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpdateManyWithoutSupplierNestedInputSchema: z.ZodType<Prisma.ProductUpdateManyWithoutSupplierNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSupplierInputSchema),
          z.lazy(() => ProductCreateWithoutSupplierInputSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ProductUpsertWithWhereUniqueWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpsertWithWhereUniqueWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductCreateManySupplierInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithWhereUniqueWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpdateWithWhereUniqueWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ProductUpdateManyWithWhereWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpdateManyWithWhereWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductScalarWhereInputSchema),
          z.lazy(() => ProductScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateManyWithoutSupplierNestedInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutSupplierNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ProductCreateWithoutSupplierInputSchema),
          z.lazy(() => ProductCreateWithoutSupplierInputSchema).array(),
          z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema),
          z
            .lazy(() => ProductCreateOrConnectWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ProductUpsertWithWhereUniqueWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpsertWithWhereUniqueWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ProductCreateManySupplierInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ProductWhereUniqueInputSchema),
          z.lazy(() => ProductWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ProductUpdateWithWhereUniqueWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpdateWithWhereUniqueWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ProductUpdateManyWithWhereWithoutSupplierInputSchema),
          z
            .lazy(() => ProductUpdateManyWithWhereWithoutSupplierInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ProductScalarWhereInputSchema),
          z.lazy(() => ProductScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutProductsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutProductsInputSchema),
          z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SupplierCreateOrConnectWithoutProductsInputSchema)
        .optional(),
      connect: z.lazy(() => SupplierWhereUniqueInputSchema).optional(),
    })
    .strict();

export const ItemInfoCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyProductInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUncheckedCreateNestedManyWithoutProductInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyProductInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SupplierUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SupplierCreateWithoutProductsInputSchema),
          z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => SupplierCreateOrConnectWithoutProductsInputSchema)
        .optional(),
      upsert: z.lazy(() => SupplierUpsertWithoutProductsInputSchema).optional(),
      connect: z.lazy(() => SupplierWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => SupplierUpdateWithoutProductsInputSchema),
          z.lazy(() => SupplierUncheckedUpdateWithoutProductsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ItemInfoUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ItemInfoUpsertWithWhereUniqueWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpsertWithWhereUniqueWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyProductInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ItemInfoUpdateWithWhereUniqueWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpdateWithWhereUniqueWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemInfoUpdateManyWithWhereWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpdateManyWithWhereWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateManyWithoutProductNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
          z.lazy(() => ItemInfoCreateWithoutProductInputSchema).array(),
          z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoCreateOrConnectWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => ItemInfoUpsertWithWhereUniqueWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpsertWithWhereUniqueWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ItemInfoCreateManyProductInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ItemInfoWhereUniqueInputSchema),
          z.lazy(() => ItemInfoWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => ItemInfoUpdateWithWhereUniqueWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpdateWithWhereUniqueWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => ItemInfoUpdateManyWithWhereWithoutProductInputSchema),
          z
            .lazy(() => ItemInfoUpdateManyWithWhereWithoutProductInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.union([z.string().array(), z.string()]).optional(),
    notIn: z.union([z.string().array(), z.string()]).optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.union([z.string().array(), z.string()]).optional(),
      notIn: z.union([z.string().array(), z.string()]).optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.union([z.number().array(), z.number()]).optional(),
    notIn: z.union([z.number().array(), z.number()]).optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.union([z.string().array(), z.string()]).optional().nullable(),
      notIn: z.union([z.string().array(), z.string()]).optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.union([z.number().array(), z.number()]).optional().nullable(),
      notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      notIn: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableFilterSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional().nullable(),
      in: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      notIn: z
        .union([z.coerce.date().array(), z.coerce.date()])
        .optional()
        .nullable(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      notIn: z.union([z.coerce.date().array(), z.coerce.date()]).optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.union([z.number().array(), z.number()]).optional().nullable(),
      notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([
          z.number(),
          z.lazy(() => NestedIntNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
      _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedIntNullableFilterSchema).optional(),
    })
    .strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.union([z.number().array(), z.number()]).optional().nullable(),
      notIn: z.union([z.number().array(), z.number()]).optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedFloatNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const LocationCreateWithoutAddressInputSchema: z.ZodType<Prisma.LocationCreateWithoutAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      image_url: z.string().optional().nullable(),
      managedLocation: z
        .lazy(() => ManagedLocationCreateNestedManyWithoutLocationInputSchema)
        .optional(),
    })
    .strict();

export const LocationUncheckedCreateWithoutAddressInputSchema: z.ZodType<Prisma.LocationUncheckedCreateWithoutAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      image_url: z.string().optional().nullable(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUncheckedCreateNestedManyWithoutLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const LocationCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LocationCreateWithoutAddressInputSchema),
        z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const LocationCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.LocationCreateManyAddressInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LocationCreateManyAddressInputSchema),
        z.lazy(() => LocationCreateManyAddressInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserCreateWithoutUserAddressInputSchema: z.ZodType<Prisma.UserCreateWithoutUserAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      managedLocation: z
        .lazy(() => ManagedLocationCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUserAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      managedLocation: z
        .lazy(
          () => ManagedLocationUncheckedCreateNestedManyWithoutUserInputSchema
        )
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutUserAddressInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUserAddressInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutUserAddressInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
      ]),
    })
    .strict();

export const UserCreateManyUserAddressInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyUserAddressInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => UserCreateManyUserAddressInputSchema),
        z.lazy(() => UserCreateManyUserAddressInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SupplierCreateWithoutAddressInputSchema: z.ZodType<Prisma.SupplierCreateWithoutAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      products: z
        .lazy(() => ProductCreateNestedManyWithoutSupplierInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedCreateWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      products: z
        .lazy(() => ProductUncheckedCreateNestedManyWithoutSupplierInputSchema)
        .optional(),
    })
    .strict();

export const SupplierCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutAddressInputSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const SupplierCreateManyAddressInputEnvelopeSchema: z.ZodType<Prisma.SupplierCreateManyAddressInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SupplierCreateManyAddressInputSchema),
        z.lazy(() => SupplierCreateManyAddressInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LocationUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.LocationUpsertWithWhereUniqueWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LocationUpdateWithoutAddressInputSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutAddressInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LocationCreateWithoutAddressInputSchema),
        z.lazy(() => LocationUncheckedCreateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const LocationUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.LocationUpdateWithWhereUniqueWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LocationUpdateWithoutAddressInputSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const LocationUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.LocationUpdateManyWithWhereWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => LocationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LocationUpdateManyMutationInputSchema),
        z.lazy(() => LocationUncheckedUpdateManyWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const LocationScalarWhereInputSchema: z.ZodType<Prisma.LocationScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LocationScalarWhereInputSchema),
          z.lazy(() => LocationScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LocationScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LocationScalarWhereInputSchema),
          z.lazy(() => LocationScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      addressId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      image_url: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export const UserUpsertWithWhereUniqueWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutUserAddressInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => UserUpdateWithoutUserAddressInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutUserAddressInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutUserAddressInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutUserAddressInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithWhereUniqueWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutUserAddressInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => UserUpdateWithoutUserAddressInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutUserAddressInputSchema),
      ]),
    })
    .strict();

export const UserUpdateManyWithWhereWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutUserAddressInput> =
  z
    .object({
      where: z.lazy(() => UserScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => UserUpdateManyMutationInputSchema),
        z.lazy(() => UserUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereInputSchema),
          z.lazy(() => UserScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereInputSchema),
          z.lazy(() => UserScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      firstName: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      lastName: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      addressId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SupplierUpsertWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUpsertWithWhereUniqueWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SupplierUpdateWithoutAddressInputSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutAddressInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutAddressInputSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const SupplierUpdateWithWhereUniqueWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUpdateWithWhereUniqueWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SupplierUpdateWithoutAddressInputSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutAddressInputSchema),
      ]),
    })
    .strict();

export const SupplierUpdateManyWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUpdateManyWithWhereWithoutAddressInput> =
  z
    .object({
      where: z.lazy(() => SupplierScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SupplierUpdateManyMutationInputSchema),
        z.lazy(() => SupplierUncheckedUpdateManyWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const SupplierScalarWhereInputSchema: z.ZodType<Prisma.SupplierScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SupplierScalarWhereInputSchema),
          z.lazy(() => SupplierScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SupplierScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SupplierScalarWhereInputSchema),
          z.lazy(() => SupplierScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      addressId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const AddressCreateWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateWithoutUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      location: z
        .lazy(() => LocationCreateNestedManyWithoutAddressInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierCreateNestedManyWithoutAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      location: z
        .lazy(() => LocationUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => AddressWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AddressCreateWithoutUserInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationCreateWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationCreateWithoutUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      location: z.lazy(
        () => LocationCreateNestedOneWithoutManagedLocationInputSchema
      ),
      itemStorage: z
        .lazy(
          () => ItemStorageCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateWithoutUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      locationId: z.string(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
        z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ManagedLocationCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ManagedLocationCreateManyUserInputSchema),
        z.lazy(() => ManagedLocationCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AddressUpsertWithoutUserInputSchema: z.ZodType<Prisma.AddressUpsertWithoutUserInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AddressUpdateWithoutUserInputSchema),
        z.lazy(() => AddressUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AddressCreateWithoutUserInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const AddressUpdateWithoutUserInputSchema: z.ZodType<Prisma.AddressUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(() => LocationUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(() => LocationUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const ManagedLocationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ManagedLocationUpdateWithoutUserInputSchema),
        z.lazy(() => ManagedLocationUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutUserInputSchema),
        z.lazy(() => ManagedLocationUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ManagedLocationUpdateWithoutUserInputSchema),
        z.lazy(() => ManagedLocationUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ManagedLocationUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            ManagedLocationUncheckedUpdateManyWithoutManagedLocationInputSchema
        ),
      ]),
    })
    .strict();

export const ManagedLocationScalarWhereInputSchema: z.ZodType<Prisma.ManagedLocationScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ManagedLocationScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ManagedLocationScalarWhereInputSchema),
          z.lazy(() => ManagedLocationScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      userId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      locationId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const AddressCreateWithoutLocationInputSchema: z.ZodType<Prisma.AddressCreateWithoutLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      user: z
        .lazy(() => UserCreateNestedManyWithoutUserAddressInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierCreateNestedManyWithoutAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedCreateWithoutLocationInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      user: z
        .lazy(() => UserUncheckedCreateNestedManyWithoutUserAddressInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressCreateOrConnectWithoutLocationInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => AddressWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AddressCreateWithoutLocationInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationCreateWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationCreateWithoutLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutManagedLocationInputSchema),
      itemStorage: z
        .lazy(
          () => ItemStorageCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedCreateWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateWithoutLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      userId: z.string(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedCreateNestedManyWithoutManagedLocationInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationCreateOrConnectWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationCreateOrConnectWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
        z.lazy(() => ManagedLocationUncheckedCreateWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationCreateManyLocationInputEnvelopeSchema: z.ZodType<Prisma.ManagedLocationCreateManyLocationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ManagedLocationCreateManyLocationInputSchema),
        z.lazy(() => ManagedLocationCreateManyLocationInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AddressUpsertWithoutLocationInputSchema: z.ZodType<Prisma.AddressUpsertWithoutLocationInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AddressUpdateWithoutLocationInputSchema),
        z.lazy(() => AddressUncheckedUpdateWithoutLocationInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AddressCreateWithoutLocationInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const AddressUpdateWithoutLocationInputSchema: z.ZodType<Prisma.AddressUpdateWithoutLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateManyWithoutUserAddressNestedInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedUpdateWithoutLocationInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUncheckedUpdateManyWithoutUserAddressNestedInputSchema)
        .optional(),
      supplier: z
        .lazy(() => SupplierUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const ManagedLocationUpsertWithWhereUniqueWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUpsertWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ManagedLocationUpdateWithoutLocationInputSchema),
        z.lazy(() => ManagedLocationUncheckedUpdateWithoutLocationInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutLocationInputSchema),
        z.lazy(() => ManagedLocationUncheckedCreateWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationUpdateWithWhereUniqueWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUpdateWithWhereUniqueWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ManagedLocationUpdateWithoutLocationInputSchema),
        z.lazy(() => ManagedLocationUncheckedUpdateWithoutLocationInputSchema),
      ]),
    })
    .strict();

export const ManagedLocationUpdateManyWithWhereWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUpdateManyWithWhereWithoutLocationInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ManagedLocationUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            ManagedLocationUncheckedUpdateManyWithoutManagedLocationInputSchema
        ),
      ]),
    })
    .strict();

export const UserCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      userAddress: z.lazy(() => AddressCreateNestedOneWithoutUserInputSchema),
    })
    .strict();

export const UserUncheckedCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
      addressId: z.string(),
    })
    .strict();

export const UserCreateOrConnectWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutManagedLocationInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutManagedLocationInputSchema),
      ]),
    })
    .strict();

export const LocationCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      image_url: z.string().optional().nullable(),
      address: z.lazy(() => AddressCreateNestedOneWithoutLocationInputSchema),
    })
    .strict();

export const LocationUncheckedCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationUncheckedCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
      image_url: z.string().optional().nullable(),
    })
    .strict();

export const LocationCreateOrConnectWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationCreateOrConnectWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => LocationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LocationCreateWithoutManagedLocationInputSchema),
        z.lazy(() => LocationUncheckedCreateWithoutManagedLocationInputSchema),
      ]),
    })
    .strict();

export const ItemStorageCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      storedItem: z
        .lazy(() => StoredItemCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedCreateWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUncheckedCreateWithoutManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateOrConnectWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageCreateOrConnectWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
        z.lazy(
          () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageCreateManyManagedLocationInputEnvelopeSchema: z.ZodType<Prisma.ItemStorageCreateManyManagedLocationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ItemStorageCreateManyManagedLocationInputSchema),
        z.lazy(() => ItemStorageCreateManyManagedLocationInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserUpsertWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserUpsertWithoutManagedLocationInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutManagedLocationInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutManagedLocationInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutManagedLocationInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutManagedLocationInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userAddress: z
        .lazy(() => AddressUpdateOneRequiredWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LocationUpsertWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationUpsertWithoutManagedLocationInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => LocationUpdateWithoutManagedLocationInputSchema),
        z.lazy(() => LocationUncheckedUpdateWithoutManagedLocationInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LocationCreateWithoutManagedLocationInputSchema),
        z.lazy(() => LocationUncheckedCreateWithoutManagedLocationInputSchema),
      ]),
    })
    .strict();

export const LocationUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      address: z
        .lazy(() => AddressUpdateOneRequiredWithoutLocationNestedInputSchema)
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUpsertWithWhereUniqueWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ItemStorageUpdateWithoutManagedLocationInputSchema),
        z.lazy(
          () => ItemStorageUncheckedUpdateWithoutManagedLocationInputSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutManagedLocationInputSchema),
        z.lazy(
          () => ItemStorageUncheckedCreateWithoutManagedLocationInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUpdateWithWhereUniqueWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ItemStorageUpdateWithoutManagedLocationInputSchema),
        z.lazy(
          () => ItemStorageUncheckedUpdateWithoutManagedLocationInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageUpdateManyWithWhereWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUpdateManyWithWhereWithoutManagedLocationInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ItemStorageUpdateManyMutationInputSchema),
        z.lazy(
          () => ItemStorageUncheckedUpdateManyWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageScalarWhereInputSchema: z.ZodType<Prisma.ItemStorageScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ItemStorageScalarWhereInputSchema),
          z.lazy(() => ItemStorageScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ItemStorageScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ItemStorageScalarWhereInputSchema),
          z.lazy(() => ItemStorageScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      location: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      managedLocationId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ManagedLocationCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutManagedLocationInputSchema),
      location: z.lazy(
        () => LocationCreateNestedOneWithoutManagedLocationInputSchema
      ),
    })
    .strict();

export const ManagedLocationUncheckedCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      userId: z.string(),
      locationId: z.string(),
    })
    .strict();

export const ManagedLocationCreateOrConnectWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationCreateOrConnectWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => ManagedLocationWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutItemStorageInputSchema),
        z.lazy(
          () => ManagedLocationUncheckedCreateWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const StoredItemCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      ItemInfo: z
        .lazy(() => ItemInfoCreateNestedManyWithoutStoredItemInputSchema)
        .optional(),
    })
    .strict();

export const StoredItemUncheckedCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUncheckedCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      ItemInfo: z
        .lazy(
          () => ItemInfoUncheckedCreateNestedManyWithoutStoredItemInputSchema
        )
        .optional(),
    })
    .strict();

export const StoredItemCreateOrConnectWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemCreateOrConnectWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => StoredItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
        z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
      ]),
    })
    .strict();

export const StoredItemCreateManyItemStorageInputEnvelopeSchema: z.ZodType<Prisma.StoredItemCreateManyItemStorageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => StoredItemCreateManyItemStorageInputSchema),
        z.lazy(() => StoredItemCreateManyItemStorageInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SecondaryUsersCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
    })
    .strict();

export const SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedCreateWithoutItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
    })
    .strict();

export const SecondaryUsersCreateOrConnectWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersCreateOrConnectWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
        z.lazy(
          () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const SecondaryUsersCreateManyItemStorageInputEnvelopeSchema: z.ZodType<Prisma.SecondaryUsersCreateManyItemStorageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => SecondaryUsersCreateManyItemStorageInputSchema),
        z.lazy(() => SecondaryUsersCreateManyItemStorageInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ManagedLocationUpsertWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationUpsertWithoutItemStorageInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ManagedLocationUpdateWithoutItemStorageInputSchema),
        z.lazy(
          () => ManagedLocationUncheckedUpdateWithoutItemStorageInputSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ManagedLocationCreateWithoutItemStorageInputSchema),
        z.lazy(
          () => ManagedLocationUncheckedCreateWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const ManagedLocationUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(
          () => UserUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
      location: z
        .lazy(
          () => LocationUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      locationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StoredItemUpsertWithWhereUniqueWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUpsertWithWhereUniqueWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => StoredItemWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => StoredItemUpdateWithoutItemStorageInputSchema),
        z.lazy(() => StoredItemUncheckedUpdateWithoutItemStorageInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StoredItemCreateWithoutItemStorageInputSchema),
        z.lazy(() => StoredItemUncheckedCreateWithoutItemStorageInputSchema),
      ]),
    })
    .strict();

export const StoredItemUpdateWithWhereUniqueWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUpdateWithWhereUniqueWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => StoredItemWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => StoredItemUpdateWithoutItemStorageInputSchema),
        z.lazy(() => StoredItemUncheckedUpdateWithoutItemStorageInputSchema),
      ]),
    })
    .strict();

export const StoredItemUpdateManyWithWhereWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUpdateManyWithWhereWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => StoredItemScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => StoredItemUpdateManyMutationInputSchema),
        z.lazy(() => StoredItemUncheckedUpdateManyWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const StoredItemScalarWhereInputSchema: z.ZodType<Prisma.StoredItemScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => StoredItemScalarWhereInputSchema),
          z.lazy(() => StoredItemScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => StoredItemScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => StoredItemScalarWhereInputSchema),
          z.lazy(() => StoredItemScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      itemStorageId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUpsertWithWhereUniqueWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => SecondaryUsersUpdateWithoutItemStorageInputSchema),
        z.lazy(
          () => SecondaryUsersUncheckedUpdateWithoutItemStorageInputSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => SecondaryUsersCreateWithoutItemStorageInputSchema),
        z.lazy(
          () => SecondaryUsersUncheckedCreateWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateWithWhereUniqueWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => SecondaryUsersWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => SecondaryUsersUpdateWithoutItemStorageInputSchema),
        z.lazy(
          () => SecondaryUsersUncheckedUpdateWithoutItemStorageInputSchema
        ),
      ]),
    })
    .strict();

export const SecondaryUsersUpdateManyWithWhereWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateManyWithWhereWithoutItemStorageInput> =
  z
    .object({
      where: z.lazy(() => SecondaryUsersScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => SecondaryUsersUpdateManyMutationInputSchema),
        z.lazy(
          () =>
            SecondaryUsersUncheckedUpdateManyWithoutSecondaryUsersInputSchema
        ),
      ]),
    })
    .strict();

export const SecondaryUsersScalarWhereInputSchema: z.ZodType<Prisma.SecondaryUsersScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereInputSchema),
          z.lazy(() => SecondaryUsersScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => SecondaryUsersScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => SecondaryUsersScalarWhereInputSchema),
          z.lazy(() => SecondaryUsersScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      itemStorageId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const ItemStorageCreateWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageCreateWithoutSecondaryUsersInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocation: z.lazy(
        () => ManagedLocationCreateNestedOneWithoutItemStorageInputSchema
      ),
      storedItem: z
        .lazy(() => StoredItemCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedCreateWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageUncheckedCreateWithoutSecondaryUsersInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocationId: z.string(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateOrConnectWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageCreateOrConnectWithoutSecondaryUsersInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutSecondaryUsersInputSchema),
        z.lazy(
          () => ItemStorageUncheckedCreateWithoutSecondaryUsersInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageUpsertWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageUpsertWithoutSecondaryUsersInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ItemStorageUpdateWithoutSecondaryUsersInputSchema),
        z.lazy(
          () => ItemStorageUncheckedUpdateWithoutSecondaryUsersInputSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutSecondaryUsersInputSchema),
        z.lazy(
          () => ItemStorageUncheckedCreateWithoutSecondaryUsersInputSchema
        ),
      ]),
    })
    .strict();

export const ItemStorageUpdateWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageUpdateWithoutSecondaryUsersInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUpdateOneRequiredWithoutItemStorageNestedInputSchema
        )
        .optional(),
      storedItem: z
        .lazy(() => StoredItemUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateWithoutSecondaryUsersInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageCreateWithoutStoredItemInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocation: z.lazy(
        () => ManagedLocationCreateNestedOneWithoutItemStorageInputSchema
      ),
      secondaryUsers: z
        .lazy(() => SecondaryUsersCreateNestedManyWithoutItemStorageInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedCreateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageUncheckedCreateWithoutStoredItemInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
      managedLocationId: z.string(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedCreateNestedManyWithoutItemStorageInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateOrConnectWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageCreateOrConnectWithoutStoredItemInput> =
  z
    .object({
      where: z.lazy(() => ItemStorageWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutStoredItemInputSchema),
        z.lazy(() => ItemStorageUncheckedCreateWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const ItemInfoCreateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoCreateWithoutStoredItemInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      product: z
        .lazy(() => ProductCreateNestedOneWithoutItemInfoInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedCreateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUncheckedCreateWithoutStoredItemInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      productId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoCreateOrConnectWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoCreateOrConnectWithoutStoredItemInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
        z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const ItemInfoCreateManyStoredItemInputEnvelopeSchema: z.ZodType<Prisma.ItemInfoCreateManyStoredItemInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ItemInfoCreateManyStoredItemInputSchema),
        z.lazy(() => ItemInfoCreateManyStoredItemInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ItemStorageUpsertWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageUpsertWithoutStoredItemInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ItemStorageUpdateWithoutStoredItemInputSchema),
        z.lazy(() => ItemStorageUncheckedUpdateWithoutStoredItemInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemStorageCreateWithoutStoredItemInputSchema),
        z.lazy(() => ItemStorageUncheckedCreateWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const ItemStorageUpdateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageUpdateWithoutStoredItemInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUpdateOneRequiredWithoutItemStorageNestedInputSchema
        )
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateWithoutStoredItemInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemInfoUpsertWithWhereUniqueWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUpsertWithWhereUniqueWithoutStoredItemInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ItemInfoUpdateWithoutStoredItemInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateWithoutStoredItemInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemInfoCreateWithoutStoredItemInputSchema),
        z.lazy(() => ItemInfoUncheckedCreateWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const ItemInfoUpdateWithWhereUniqueWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUpdateWithWhereUniqueWithoutStoredItemInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ItemInfoUpdateWithoutStoredItemInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateWithoutStoredItemInputSchema),
      ]),
    })
    .strict();

export const ItemInfoUpdateManyWithWhereWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUpdateManyWithWhereWithoutStoredItemInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ItemInfoUpdateManyMutationInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateManyWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const ItemInfoScalarWhereInputSchema: z.ZodType<Prisma.ItemInfoScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ItemInfoScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ItemInfoScalarWhereInputSchema),
          z.lazy(() => ItemInfoScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      name: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      type: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      expiryDate: z
        .union([z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date()])
        .optional()
        .nullable(),
      creationDate: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      purchaseLink: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      imageUrl: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      quantity: z
        .union([z.lazy(() => IntNullableFilterSchema), z.number()])
        .optional()
        .nullable(),
      storedItemId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
      productId: z
        .union([z.lazy(() => StringNullableFilterSchema), z.string()])
        .optional()
        .nullable(),
    })
    .strict();

export const StoredItemCreateWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemCreateWithoutItemInfoInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemStorage: z.lazy(
        () => ItemStorageCreateNestedOneWithoutStoredItemInputSchema
      ),
    })
    .strict();

export const StoredItemUncheckedCreateWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemUncheckedCreateWithoutItemInfoInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemStorageId: z.string(),
    })
    .strict();

export const StoredItemCreateOrConnectWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemCreateOrConnectWithoutItemInfoInput> =
  z
    .object({
      where: z.lazy(() => StoredItemWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => StoredItemCreateWithoutItemInfoInputSchema),
        z.lazy(() => StoredItemUncheckedCreateWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const ProductCreateWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductCreateWithoutItemInfoInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      supplier: z.lazy(() => SupplierCreateNestedOneWithoutProductsInputSchema),
    })
    .strict();

export const ProductUncheckedCreateWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutItemInfoInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      supplierId: z.string(),
    })
    .strict();

export const ProductCreateOrConnectWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutItemInfoInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutItemInfoInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const StoredItemUpsertWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemUpsertWithoutItemInfoInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => StoredItemUpdateWithoutItemInfoInputSchema),
        z.lazy(() => StoredItemUncheckedUpdateWithoutItemInfoInputSchema),
      ]),
      create: z.union([
        z.lazy(() => StoredItemCreateWithoutItemInfoInputSchema),
        z.lazy(() => StoredItemUncheckedCreateWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const StoredItemUpdateWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemUpdateWithoutItemInfoInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () => ItemStorageUpdateOneRequiredWithoutStoredItemNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateWithoutItemInfoInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateWithoutItemInfoInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorageId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ProductUpsertWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductUpsertWithoutItemInfoInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => ProductUpdateWithoutItemInfoInputSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutItemInfoInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutItemInfoInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductUpdateWithoutItemInfoInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      supplier: z
        .lazy(() => SupplierUpdateOneRequiredWithoutProductsNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateWithoutItemInfoInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutItemInfoInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      supplierId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const AddressCreateWithoutSupplierInputSchema: z.ZodType<Prisma.AddressCreateWithoutSupplierInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      location: z
        .lazy(() => LocationCreateNestedManyWithoutAddressInputSchema)
        .optional(),
      user: z
        .lazy(() => UserCreateNestedManyWithoutUserAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedCreateWithoutSupplierInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      street: z.string(),
      city: z.string(),
      postcode: z.string(),
      location: z
        .lazy(() => LocationUncheckedCreateNestedManyWithoutAddressInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUncheckedCreateNestedManyWithoutUserAddressInputSchema)
        .optional(),
    })
    .strict();

export const AddressCreateOrConnectWithoutSupplierInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => AddressWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => AddressCreateWithoutSupplierInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const ProductCreateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductCreateWithoutSupplierInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemInfo: z
        .lazy(() => ItemInfoCreateNestedManyWithoutProductInputSchema)
        .optional(),
    })
    .strict();

export const ProductUncheckedCreateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      itemInfo: z
        .lazy(() => ItemInfoUncheckedCreateNestedManyWithoutProductInputSchema)
        .optional(),
    })
    .strict();

export const ProductCreateOrConnectWithoutSupplierInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSupplierInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const ProductCreateManySupplierInputEnvelopeSchema: z.ZodType<Prisma.ProductCreateManySupplierInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ProductCreateManySupplierInputSchema),
        z.lazy(() => ProductCreateManySupplierInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AddressUpsertWithoutSupplierInputSchema: z.ZodType<Prisma.AddressUpsertWithoutSupplierInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => AddressUpdateWithoutSupplierInputSchema),
        z.lazy(() => AddressUncheckedUpdateWithoutSupplierInputSchema),
      ]),
      create: z.union([
        z.lazy(() => AddressCreateWithoutSupplierInputSchema),
        z.lazy(() => AddressUncheckedCreateWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const AddressUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.AddressUpdateWithoutSupplierInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(() => LocationUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUpdateManyWithoutUserAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const AddressUncheckedUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutSupplierInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      street: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      city: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      postcode: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(() => LocationUncheckedUpdateManyWithoutAddressNestedInputSchema)
        .optional(),
      user: z
        .lazy(() => UserUncheckedUpdateManyWithoutUserAddressNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutSupplierInputSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutSupplierInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutSupplierInputSchema),
        z.lazy(() => ProductUncheckedCreateWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutSupplierInputSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutSupplierInputSchema),
      ]),
    })
    .strict();

export const ProductUpdateManyWithWhereWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUpdateManyWithWhereWithoutSupplierInput> =
  z
    .object({
      where: z.lazy(() => ProductScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ProductUpdateManyMutationInputSchema),
        z.lazy(() => ProductUncheckedUpdateManyWithoutProductsInputSchema),
      ]),
    })
    .strict();

export const ProductScalarWhereInputSchema: z.ZodType<Prisma.ProductScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => ProductScalarWhereInputSchema),
          z.lazy(() => ProductScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => ProductScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => ProductScalarWhereInputSchema),
          z.lazy(() => ProductScalarWhereInputSchema).array(),
        ])
        .optional(),
      id: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
      supplierId: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const SupplierCreateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateWithoutProductsInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      address: z.lazy(() => AddressCreateNestedOneWithoutSupplierInputSchema),
    })
    .strict();

export const SupplierUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutProductsInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      addressId: z.string(),
    })
    .strict();

export const SupplierCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutProductsInput> =
  z
    .object({
      where: z.lazy(() => SupplierWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutProductsInputSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema),
      ]),
    })
    .strict();

export const ItemInfoCreateWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoCreateWithoutProductInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItem: z
        .lazy(() => StoredItemCreateNestedOneWithoutItemInfoInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUncheckedCreateWithoutProductInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItemId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoCreateOrConnectWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
        z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
      ]),
    })
    .strict();

export const ItemInfoCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ItemInfoCreateManyProductInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => ItemInfoCreateManyProductInputSchema),
        z.lazy(() => ItemInfoCreateManyProductInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SupplierUpsertWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUpsertWithoutProductsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => SupplierUpdateWithoutProductsInputSchema),
        z.lazy(() => SupplierUncheckedUpdateWithoutProductsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => SupplierCreateWithoutProductsInputSchema),
        z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema),
      ]),
    })
    .strict();

export const SupplierUpdateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUpdateWithoutProductsInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      address: z
        .lazy(() => AddressUpdateOneRequiredWithoutSupplierNestedInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateWithoutProductsInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      addressId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUpsertWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => ItemInfoUpdateWithoutProductInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateWithoutProductInputSchema),
      ]),
      create: z.union([
        z.lazy(() => ItemInfoCreateWithoutProductInputSchema),
        z.lazy(() => ItemInfoUncheckedCreateWithoutProductInputSchema),
      ]),
    })
    .strict();

export const ItemInfoUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUpdateWithWhereUniqueWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => ItemInfoUpdateWithoutProductInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateWithoutProductInputSchema),
      ]),
    })
    .strict();

export const ItemInfoUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUpdateManyWithWhereWithoutProductInput> =
  z
    .object({
      where: z.lazy(() => ItemInfoScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => ItemInfoUpdateManyMutationInputSchema),
        z.lazy(() => ItemInfoUncheckedUpdateManyWithoutItemInfoInputSchema),
      ]),
    })
    .strict();

export const LocationCreateManyAddressInputSchema: z.ZodType<Prisma.LocationCreateManyAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      image_url: z.string().optional().nullable(),
    })
    .strict();

export const UserCreateManyUserAddressInputSchema: z.ZodType<Prisma.UserCreateManyUserAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      firstName: z.string(),
      lastName: z.string(),
      email: z.string(),
    })
    .strict();

export const SupplierCreateManyAddressInputSchema: z.ZodType<Prisma.SupplierCreateManyAddressInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
    })
    .strict();

export const LocationUpdateWithoutAddressInputSchema: z.ZodType<Prisma.LocationUpdateWithoutAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      managedLocation: z
        .lazy(() => ManagedLocationUpdateManyWithoutLocationNestedInputSchema)
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateWithoutAddressInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateWithoutAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      managedLocation: z
        .lazy(
          () =>
            ManagedLocationUncheckedUpdateManyWithoutLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const LocationUncheckedUpdateManyWithoutLocationInputSchema: z.ZodType<Prisma.LocationUncheckedUpdateManyWithoutLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      image_url: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const UserUpdateWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUpdateWithoutUserAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(() => ManagedLocationUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutUserAddressInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUserAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      managedLocation: z
        .lazy(
          () => ManagedLocationUncheckedUpdateManyWithoutUserNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      firstName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      lastName: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SupplierUpdateWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUpdateWithoutAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      products: z
        .lazy(() => ProductUpdateManyWithoutSupplierNestedInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateWithoutAddressInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateWithoutAddressInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      products: z
        .lazy(() => ProductUncheckedUpdateManyWithoutSupplierNestedInputSchema)
        .optional(),
    })
    .strict();

export const SupplierUncheckedUpdateManyWithoutSupplierInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateManyWithoutSupplierInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationCreateManyUserInputSchema: z.ZodType<Prisma.ManagedLocationCreateManyUserInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      locationId: z.string(),
    })
    .strict();

export const ManagedLocationUpdateWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .lazy(
          () => LocationUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
      itemStorage: z
        .lazy(
          () => ItemStorageUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateWithoutUserInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      locationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateManyWithoutManagedLocationInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateManyWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      locationId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ManagedLocationCreateManyLocationInputSchema: z.ZodType<Prisma.ManagedLocationCreateManyLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      userId: z.string(),
    })
    .strict();

export const ManagedLocationUpdateWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUpdateWithoutLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(
          () => UserUpdateOneRequiredWithoutManagedLocationNestedInputSchema
        )
        .optional(),
      itemStorage: z
        .lazy(
          () => ItemStorageUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ManagedLocationUncheckedUpdateWithoutLocationInputSchema: z.ZodType<Prisma.ManagedLocationUncheckedUpdateWithoutLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      userId: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemStorage: z
        .lazy(
          () =>
            ItemStorageUncheckedUpdateManyWithoutManagedLocationNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageCreateManyManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageCreateManyManagedLocationInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      location: z.string(),
    })
    .strict();

export const ItemStorageUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      storedItem: z
        .lazy(() => StoredItemUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
      secondaryUsers: z
        .lazy(() => SecondaryUsersUpdateManyWithoutItemStorageNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateWithoutManagedLocationInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateWithoutManagedLocationInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      storedItem: z
        .lazy(
          () => StoredItemUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
      secondaryUsers: z
        .lazy(
          () =>
            SecondaryUsersUncheckedUpdateManyWithoutItemStorageNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const ItemStorageUncheckedUpdateManyWithoutItemStorageInputSchema: z.ZodType<Prisma.ItemStorageUncheckedUpdateManyWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      location: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const StoredItemCreateManyItemStorageInputSchema: z.ZodType<Prisma.StoredItemCreateManyItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const SecondaryUsersCreateManyItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersCreateManyItemStorageInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      type: z.string(),
    })
    .strict();

export const StoredItemUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ItemInfo: z
        .lazy(() => ItemInfoUpdateManyWithoutStoredItemNestedInputSchema)
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      ItemInfo: z
        .lazy(
          () => ItemInfoUncheckedUpdateManyWithoutStoredItemNestedInputSchema
        )
        .optional(),
    })
    .strict();

export const StoredItemUncheckedUpdateManyWithoutStoredItemInputSchema: z.ZodType<Prisma.StoredItemUncheckedUpdateManyWithoutStoredItemInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedUpdateWithoutItemStorageInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedUpdateWithoutItemStorageInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const SecondaryUsersUncheckedUpdateManyWithoutSecondaryUsersInputSchema: z.ZodType<Prisma.SecondaryUsersUncheckedUpdateManyWithoutSecondaryUsersInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoCreateManyStoredItemInputSchema: z.ZodType<Prisma.ItemInfoCreateManyStoredItemInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      productId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoUpdateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUpdateWithoutStoredItemInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      product: z
        .lazy(() => ProductUpdateOneWithoutItemInfoNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedUpdateWithoutStoredItemInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateWithoutStoredItemInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      productId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ItemInfoUncheckedUpdateManyWithoutItemInfoInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateManyWithoutItemInfoInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      productId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const ProductCreateManySupplierInputSchema: z.ZodType<Prisma.ProductCreateManySupplierInput> =
  z
    .object({
      id: z.string().cuid().optional(),
    })
    .strict();

export const ProductUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUpdateWithoutSupplierInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemInfo: z
        .lazy(() => ItemInfoUpdateManyWithoutProductNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutSupplierInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      itemInfo: z
        .lazy(() => ItemInfoUncheckedUpdateManyWithoutProductNestedInputSchema)
        .optional(),
    })
    .strict();

export const ProductUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyWithoutProductsInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const ItemInfoCreateManyProductInputSchema: z.ZodType<Prisma.ItemInfoCreateManyProductInput> =
  z
    .object({
      id: z.string().cuid().optional(),
      name: z.string(),
      type: z.string(),
      expiryDate: z.coerce.date().optional().nullable(),
      creationDate: z.coerce.date().optional(),
      purchaseLink: z.string().optional().nullable(),
      imageUrl: z.string().optional().nullable(),
      desiredQuantity: z.number().int().optional().nullable(),
      quantity: z.number().int().optional().nullable(),
      storedItemId: z.string().optional().nullable(),
    })
    .strict();

export const ItemInfoUpdateWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUpdateWithoutProductInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      storedItem: z
        .lazy(() => StoredItemUpdateOneWithoutItemInfoNestedInputSchema)
        .optional(),
    })
    .strict();

export const ItemInfoUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ItemInfoUncheckedUpdateWithoutProductInput> =
  z
    .object({
      id: z
        .union([
          z.string().cuid(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      expiryDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      creationDate: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      purchaseLink: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      imageUrl: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      desiredQuantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      quantity: z
        .union([
          z.number().int(),
          z.lazy(() => NullableIntFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      storedItemId: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const AddressFindFirstArgsSchema: z.ZodType<Prisma.AddressFindFirstArgs> =
  z
    .object({
      select: AddressSelectSchema.optional(),
      include: AddressIncludeSchema.optional(),
      where: AddressWhereInputSchema.optional(),
      orderBy: z
        .union([
          AddressOrderByWithRelationInputSchema.array(),
          AddressOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AddressWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AddressScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const AddressFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AddressFindFirstOrThrowArgs> =
  z
    .object({
      select: AddressSelectSchema.optional(),
      include: AddressIncludeSchema.optional(),
      where: AddressWhereInputSchema.optional(),
      orderBy: z
        .union([
          AddressOrderByWithRelationInputSchema.array(),
          AddressOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AddressWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AddressScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const AddressFindManyArgsSchema: z.ZodType<Prisma.AddressFindManyArgs> =
  z
    .object({
      select: AddressSelectSchema.optional(),
      include: AddressIncludeSchema.optional(),
      where: AddressWhereInputSchema.optional(),
      orderBy: z
        .union([
          AddressOrderByWithRelationInputSchema.array(),
          AddressOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AddressWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: AddressScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const AddressAggregateArgsSchema: z.ZodType<Prisma.AddressAggregateArgs> =
  z
    .object({
      where: AddressWhereInputSchema.optional(),
      orderBy: z
        .union([
          AddressOrderByWithRelationInputSchema.array(),
          AddressOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: AddressWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const AddressGroupByArgsSchema: z.ZodType<Prisma.AddressGroupByArgs> = z
  .object({
    where: AddressWhereInputSchema.optional(),
    orderBy: z
      .union([
        AddressOrderByWithAggregationInputSchema.array(),
        AddressOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: AddressScalarFieldEnumSchema.array(),
    having: AddressScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const AddressFindUniqueArgsSchema: z.ZodType<Prisma.AddressFindUniqueArgs> =
  z
    .object({
      select: AddressSelectSchema.optional(),
      include: AddressIncludeSchema.optional(),
      where: AddressWhereUniqueInputSchema,
    })
    .strict();

export const AddressFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AddressFindUniqueOrThrowArgs> =
  z
    .object({
      select: AddressSelectSchema.optional(),
      include: AddressIncludeSchema.optional(),
      where: AddressWhereUniqueInputSchema,
    })
    .strict();

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: UserScalarFieldEnumSchema.array().optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: UserScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: UserScalarFieldEnumSchema.array().optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const LocationFindFirstArgsSchema: z.ZodType<Prisma.LocationFindFirstArgs> =
  z
    .object({
      select: LocationSelectSchema.optional(),
      include: LocationIncludeSchema.optional(),
      where: LocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          LocationOrderByWithRelationInputSchema.array(),
          LocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: LocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const LocationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LocationFindFirstOrThrowArgs> =
  z
    .object({
      select: LocationSelectSchema.optional(),
      include: LocationIncludeSchema.optional(),
      where: LocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          LocationOrderByWithRelationInputSchema.array(),
          LocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: LocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const LocationFindManyArgsSchema: z.ZodType<Prisma.LocationFindManyArgs> =
  z
    .object({
      select: LocationSelectSchema.optional(),
      include: LocationIncludeSchema.optional(),
      where: LocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          LocationOrderByWithRelationInputSchema.array(),
          LocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: LocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const LocationAggregateArgsSchema: z.ZodType<Prisma.LocationAggregateArgs> =
  z
    .object({
      where: LocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          LocationOrderByWithRelationInputSchema.array(),
          LocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const LocationGroupByArgsSchema: z.ZodType<Prisma.LocationGroupByArgs> =
  z
    .object({
      where: LocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          LocationOrderByWithAggregationInputSchema.array(),
          LocationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: LocationScalarFieldEnumSchema.array(),
      having: LocationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const LocationFindUniqueArgsSchema: z.ZodType<Prisma.LocationFindUniqueArgs> =
  z
    .object({
      select: LocationSelectSchema.optional(),
      include: LocationIncludeSchema.optional(),
      where: LocationWhereUniqueInputSchema,
    })
    .strict();

export const LocationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LocationFindUniqueOrThrowArgs> =
  z
    .object({
      select: LocationSelectSchema.optional(),
      include: LocationIncludeSchema.optional(),
      where: LocationWhereUniqueInputSchema,
    })
    .strict();

export const ManagedLocationFindFirstArgsSchema: z.ZodType<Prisma.ManagedLocationFindFirstArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          ManagedLocationOrderByWithRelationInputSchema.array(),
          ManagedLocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ManagedLocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ManagedLocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ManagedLocationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ManagedLocationFindFirstOrThrowArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          ManagedLocationOrderByWithRelationInputSchema.array(),
          ManagedLocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ManagedLocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ManagedLocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ManagedLocationFindManyArgsSchema: z.ZodType<Prisma.ManagedLocationFindManyArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          ManagedLocationOrderByWithRelationInputSchema.array(),
          ManagedLocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ManagedLocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ManagedLocationScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ManagedLocationAggregateArgsSchema: z.ZodType<Prisma.ManagedLocationAggregateArgs> =
  z
    .object({
      where: ManagedLocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          ManagedLocationOrderByWithRelationInputSchema.array(),
          ManagedLocationOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ManagedLocationWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ManagedLocationGroupByArgsSchema: z.ZodType<Prisma.ManagedLocationGroupByArgs> =
  z
    .object({
      where: ManagedLocationWhereInputSchema.optional(),
      orderBy: z
        .union([
          ManagedLocationOrderByWithAggregationInputSchema.array(),
          ManagedLocationOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ManagedLocationScalarFieldEnumSchema.array(),
      having: ManagedLocationScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ManagedLocationFindUniqueArgsSchema: z.ZodType<Prisma.ManagedLocationFindUniqueArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereUniqueInputSchema,
    })
    .strict();

export const ManagedLocationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ManagedLocationFindUniqueOrThrowArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereUniqueInputSchema,
    })
    .strict();

export const ItemStorageFindFirstArgsSchema: z.ZodType<Prisma.ItemStorageFindFirstArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemStorageOrderByWithRelationInputSchema.array(),
          ItemStorageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemStorageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemStorageScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemStorageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemStorageFindFirstOrThrowArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemStorageOrderByWithRelationInputSchema.array(),
          ItemStorageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemStorageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemStorageScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemStorageFindManyArgsSchema: z.ZodType<Prisma.ItemStorageFindManyArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemStorageOrderByWithRelationInputSchema.array(),
          ItemStorageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemStorageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemStorageScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemStorageAggregateArgsSchema: z.ZodType<Prisma.ItemStorageAggregateArgs> =
  z
    .object({
      where: ItemStorageWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemStorageOrderByWithRelationInputSchema.array(),
          ItemStorageOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemStorageWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ItemStorageGroupByArgsSchema: z.ZodType<Prisma.ItemStorageGroupByArgs> =
  z
    .object({
      where: ItemStorageWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemStorageOrderByWithAggregationInputSchema.array(),
          ItemStorageOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ItemStorageScalarFieldEnumSchema.array(),
      having: ItemStorageScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ItemStorageFindUniqueArgsSchema: z.ZodType<Prisma.ItemStorageFindUniqueArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereUniqueInputSchema,
    })
    .strict();

export const ItemStorageFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemStorageFindUniqueOrThrowArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereUniqueInputSchema,
    })
    .strict();

export const SecondaryUsersFindFirstArgsSchema: z.ZodType<Prisma.SecondaryUsersFindFirstArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereInputSchema.optional(),
      orderBy: z
        .union([
          SecondaryUsersOrderByWithRelationInputSchema.array(),
          SecondaryUsersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SecondaryUsersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SecondaryUsersScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SecondaryUsersFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SecondaryUsersFindFirstOrThrowArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereInputSchema.optional(),
      orderBy: z
        .union([
          SecondaryUsersOrderByWithRelationInputSchema.array(),
          SecondaryUsersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SecondaryUsersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SecondaryUsersScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SecondaryUsersFindManyArgsSchema: z.ZodType<Prisma.SecondaryUsersFindManyArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereInputSchema.optional(),
      orderBy: z
        .union([
          SecondaryUsersOrderByWithRelationInputSchema.array(),
          SecondaryUsersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SecondaryUsersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SecondaryUsersScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SecondaryUsersAggregateArgsSchema: z.ZodType<Prisma.SecondaryUsersAggregateArgs> =
  z
    .object({
      where: SecondaryUsersWhereInputSchema.optional(),
      orderBy: z
        .union([
          SecondaryUsersOrderByWithRelationInputSchema.array(),
          SecondaryUsersOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SecondaryUsersWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SecondaryUsersGroupByArgsSchema: z.ZodType<Prisma.SecondaryUsersGroupByArgs> =
  z
    .object({
      where: SecondaryUsersWhereInputSchema.optional(),
      orderBy: z
        .union([
          SecondaryUsersOrderByWithAggregationInputSchema.array(),
          SecondaryUsersOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: SecondaryUsersScalarFieldEnumSchema.array(),
      having: SecondaryUsersScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SecondaryUsersFindUniqueArgsSchema: z.ZodType<Prisma.SecondaryUsersFindUniqueArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereUniqueInputSchema,
    })
    .strict();

export const SecondaryUsersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SecondaryUsersFindUniqueOrThrowArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereUniqueInputSchema,
    })
    .strict();

export const StoredItemFindFirstArgsSchema: z.ZodType<Prisma.StoredItemFindFirstArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StoredItemOrderByWithRelationInputSchema.array(),
          StoredItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StoredItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: StoredItemScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const StoredItemFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoredItemFindFirstOrThrowArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StoredItemOrderByWithRelationInputSchema.array(),
          StoredItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StoredItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: StoredItemScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const StoredItemFindManyArgsSchema: z.ZodType<Prisma.StoredItemFindManyArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StoredItemOrderByWithRelationInputSchema.array(),
          StoredItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StoredItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: StoredItemScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const StoredItemAggregateArgsSchema: z.ZodType<Prisma.StoredItemAggregateArgs> =
  z
    .object({
      where: StoredItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StoredItemOrderByWithRelationInputSchema.array(),
          StoredItemOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: StoredItemWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const StoredItemGroupByArgsSchema: z.ZodType<Prisma.StoredItemGroupByArgs> =
  z
    .object({
      where: StoredItemWhereInputSchema.optional(),
      orderBy: z
        .union([
          StoredItemOrderByWithAggregationInputSchema.array(),
          StoredItemOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: StoredItemScalarFieldEnumSchema.array(),
      having: StoredItemScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const StoredItemFindUniqueArgsSchema: z.ZodType<Prisma.StoredItemFindUniqueArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereUniqueInputSchema,
    })
    .strict();

export const StoredItemFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoredItemFindUniqueOrThrowArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereUniqueInputSchema,
    })
    .strict();

export const ItemInfoFindFirstArgsSchema: z.ZodType<Prisma.ItemInfoFindFirstArgs> =
  z
    .object({
      select: ItemInfoSelectSchema.optional(),
      include: ItemInfoIncludeSchema.optional(),
      where: ItemInfoWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemInfoOrderByWithRelationInputSchema.array(),
          ItemInfoOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemInfoWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemInfoScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemInfoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ItemInfoFindFirstOrThrowArgs> =
  z
    .object({
      select: ItemInfoSelectSchema.optional(),
      include: ItemInfoIncludeSchema.optional(),
      where: ItemInfoWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemInfoOrderByWithRelationInputSchema.array(),
          ItemInfoOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemInfoWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemInfoScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemInfoFindManyArgsSchema: z.ZodType<Prisma.ItemInfoFindManyArgs> =
  z
    .object({
      select: ItemInfoSelectSchema.optional(),
      include: ItemInfoIncludeSchema.optional(),
      where: ItemInfoWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemInfoOrderByWithRelationInputSchema.array(),
          ItemInfoOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemInfoWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ItemInfoScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ItemInfoAggregateArgsSchema: z.ZodType<Prisma.ItemInfoAggregateArgs> =
  z
    .object({
      where: ItemInfoWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemInfoOrderByWithRelationInputSchema.array(),
          ItemInfoOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ItemInfoWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ItemInfoGroupByArgsSchema: z.ZodType<Prisma.ItemInfoGroupByArgs> =
  z
    .object({
      where: ItemInfoWhereInputSchema.optional(),
      orderBy: z
        .union([
          ItemInfoOrderByWithAggregationInputSchema.array(),
          ItemInfoOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: ItemInfoScalarFieldEnumSchema.array(),
      having: ItemInfoScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ItemInfoFindUniqueArgsSchema: z.ZodType<Prisma.ItemInfoFindUniqueArgs> =
  z
    .object({
      select: ItemInfoSelectSchema.optional(),
      include: ItemInfoIncludeSchema.optional(),
      where: ItemInfoWhereUniqueInputSchema,
    })
    .strict();

export const ItemInfoFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ItemInfoFindUniqueOrThrowArgs> =
  z
    .object({
      select: ItemInfoSelectSchema.optional(),
      include: ItemInfoIncludeSchema.optional(),
      where: ItemInfoWhereUniqueInputSchema,
    })
    .strict();

export const SupplierFindFirstArgsSchema: z.ZodType<Prisma.SupplierFindFirstArgs> =
  z
    .object({
      select: SupplierSelectSchema.optional(),
      include: SupplierIncludeSchema.optional(),
      where: SupplierWhereInputSchema.optional(),
      orderBy: z
        .union([
          SupplierOrderByWithRelationInputSchema.array(),
          SupplierOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SupplierWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SupplierScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SupplierFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SupplierFindFirstOrThrowArgs> =
  z
    .object({
      select: SupplierSelectSchema.optional(),
      include: SupplierIncludeSchema.optional(),
      where: SupplierWhereInputSchema.optional(),
      orderBy: z
        .union([
          SupplierOrderByWithRelationInputSchema.array(),
          SupplierOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SupplierWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SupplierScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SupplierFindManyArgsSchema: z.ZodType<Prisma.SupplierFindManyArgs> =
  z
    .object({
      select: SupplierSelectSchema.optional(),
      include: SupplierIncludeSchema.optional(),
      where: SupplierWhereInputSchema.optional(),
      orderBy: z
        .union([
          SupplierOrderByWithRelationInputSchema.array(),
          SupplierOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SupplierWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: SupplierScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const SupplierAggregateArgsSchema: z.ZodType<Prisma.SupplierAggregateArgs> =
  z
    .object({
      where: SupplierWhereInputSchema.optional(),
      orderBy: z
        .union([
          SupplierOrderByWithRelationInputSchema.array(),
          SupplierOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: SupplierWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SupplierGroupByArgsSchema: z.ZodType<Prisma.SupplierGroupByArgs> =
  z
    .object({
      where: SupplierWhereInputSchema.optional(),
      orderBy: z
        .union([
          SupplierOrderByWithAggregationInputSchema.array(),
          SupplierOrderByWithAggregationInputSchema,
        ])
        .optional(),
      by: SupplierScalarFieldEnumSchema.array(),
      having: SupplierScalarWhereWithAggregatesInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const SupplierFindUniqueArgsSchema: z.ZodType<Prisma.SupplierFindUniqueArgs> =
  z
    .object({
      select: SupplierSelectSchema.optional(),
      include: SupplierIncludeSchema.optional(),
      where: SupplierWhereUniqueInputSchema,
    })
    .strict();

export const SupplierFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SupplierFindUniqueOrThrowArgs> =
  z
    .object({
      select: SupplierSelectSchema.optional(),
      include: SupplierIncludeSchema.optional(),
      where: SupplierWhereUniqueInputSchema,
    })
    .strict();

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProductScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProductScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: ProductScalarFieldEnumSchema.array().optional(),
    })
    .strict();

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> =
  z
    .object({
      where: ProductWhereInputSchema.optional(),
      orderBy: z
        .union([
          ProductOrderByWithRelationInputSchema.array(),
          ProductOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: ProductWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z
  .object({
    where: ProductWhereInputSchema.optional(),
    orderBy: z
      .union([
        ProductOrderByWithAggregationInputSchema.array(),
        ProductOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: ProductScalarFieldEnumSchema.array(),
    having: ProductScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereUniqueInputSchema,
    })
    .strict();

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> =
  z
    .object({
      select: ProductSelectSchema.optional(),
      include: ProductIncludeSchema.optional(),
      where: ProductWhereUniqueInputSchema,
    })
    .strict();

export const AddressCreateArgsSchema: z.ZodType<Prisma.AddressCreateArgs> = z
  .object({
    select: AddressSelectSchema.optional(),
    include: AddressIncludeSchema.optional(),
    data: z.union([
      AddressCreateInputSchema,
      AddressUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const AddressUpsertArgsSchema: z.ZodType<Prisma.AddressUpsertArgs> = z
  .object({
    select: AddressSelectSchema.optional(),
    include: AddressIncludeSchema.optional(),
    where: AddressWhereUniqueInputSchema,
    create: z.union([
      AddressCreateInputSchema,
      AddressUncheckedCreateInputSchema,
    ]),
    update: z.union([
      AddressUpdateInputSchema,
      AddressUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const AddressCreateManyArgsSchema: z.ZodType<Prisma.AddressCreateManyArgs> =
  z
    .object({
      data: z.union([
        AddressCreateManyInputSchema,
        AddressCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const AddressDeleteArgsSchema: z.ZodType<Prisma.AddressDeleteArgs> = z
  .object({
    select: AddressSelectSchema.optional(),
    include: AddressIncludeSchema.optional(),
    where: AddressWhereUniqueInputSchema,
  })
  .strict();

export const AddressUpdateArgsSchema: z.ZodType<Prisma.AddressUpdateArgs> = z
  .object({
    select: AddressSelectSchema.optional(),
    include: AddressIncludeSchema.optional(),
    data: z.union([
      AddressUpdateInputSchema,
      AddressUncheckedUpdateInputSchema,
    ]),
    where: AddressWhereUniqueInputSchema,
  })
  .strict();

export const AddressUpdateManyArgsSchema: z.ZodType<Prisma.AddressUpdateManyArgs> =
  z
    .object({
      data: z.union([
        AddressUpdateManyMutationInputSchema,
        AddressUncheckedUpdateManyInputSchema,
      ]),
      where: AddressWhereInputSchema.optional(),
    })
    .strict();

export const AddressDeleteManyArgsSchema: z.ZodType<Prisma.AddressDeleteManyArgs> =
  z
    .object({
      where: AddressWhereInputSchema.optional(),
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const LocationCreateArgsSchema: z.ZodType<Prisma.LocationCreateArgs> = z
  .object({
    select: LocationSelectSchema.optional(),
    include: LocationIncludeSchema.optional(),
    data: z.union([
      LocationCreateInputSchema,
      LocationUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const LocationUpsertArgsSchema: z.ZodType<Prisma.LocationUpsertArgs> = z
  .object({
    select: LocationSelectSchema.optional(),
    include: LocationIncludeSchema.optional(),
    where: LocationWhereUniqueInputSchema,
    create: z.union([
      LocationCreateInputSchema,
      LocationUncheckedCreateInputSchema,
    ]),
    update: z.union([
      LocationUpdateInputSchema,
      LocationUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const LocationCreateManyArgsSchema: z.ZodType<Prisma.LocationCreateManyArgs> =
  z
    .object({
      data: z.union([
        LocationCreateManyInputSchema,
        LocationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LocationDeleteArgsSchema: z.ZodType<Prisma.LocationDeleteArgs> = z
  .object({
    select: LocationSelectSchema.optional(),
    include: LocationIncludeSchema.optional(),
    where: LocationWhereUniqueInputSchema,
  })
  .strict();

export const LocationUpdateArgsSchema: z.ZodType<Prisma.LocationUpdateArgs> = z
  .object({
    select: LocationSelectSchema.optional(),
    include: LocationIncludeSchema.optional(),
    data: z.union([
      LocationUpdateInputSchema,
      LocationUncheckedUpdateInputSchema,
    ]),
    where: LocationWhereUniqueInputSchema,
  })
  .strict();

export const LocationUpdateManyArgsSchema: z.ZodType<Prisma.LocationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        LocationUpdateManyMutationInputSchema,
        LocationUncheckedUpdateManyInputSchema,
      ]),
      where: LocationWhereInputSchema.optional(),
    })
    .strict();

export const LocationDeleteManyArgsSchema: z.ZodType<Prisma.LocationDeleteManyArgs> =
  z
    .object({
      where: LocationWhereInputSchema.optional(),
    })
    .strict();

export const ManagedLocationCreateArgsSchema: z.ZodType<Prisma.ManagedLocationCreateArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      data: z.union([
        ManagedLocationCreateInputSchema,
        ManagedLocationUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ManagedLocationUpsertArgsSchema: z.ZodType<Prisma.ManagedLocationUpsertArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereUniqueInputSchema,
      create: z.union([
        ManagedLocationCreateInputSchema,
        ManagedLocationUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ManagedLocationUpdateInputSchema,
        ManagedLocationUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ManagedLocationCreateManyArgsSchema: z.ZodType<Prisma.ManagedLocationCreateManyArgs> =
  z
    .object({
      data: z.union([
        ManagedLocationCreateManyInputSchema,
        ManagedLocationCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ManagedLocationDeleteArgsSchema: z.ZodType<Prisma.ManagedLocationDeleteArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      where: ManagedLocationWhereUniqueInputSchema,
    })
    .strict();

export const ManagedLocationUpdateArgsSchema: z.ZodType<Prisma.ManagedLocationUpdateArgs> =
  z
    .object({
      select: ManagedLocationSelectSchema.optional(),
      include: ManagedLocationIncludeSchema.optional(),
      data: z.union([
        ManagedLocationUpdateInputSchema,
        ManagedLocationUncheckedUpdateInputSchema,
      ]),
      where: ManagedLocationWhereUniqueInputSchema,
    })
    .strict();

export const ManagedLocationUpdateManyArgsSchema: z.ZodType<Prisma.ManagedLocationUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ManagedLocationUpdateManyMutationInputSchema,
        ManagedLocationUncheckedUpdateManyInputSchema,
      ]),
      where: ManagedLocationWhereInputSchema.optional(),
    })
    .strict();

export const ManagedLocationDeleteManyArgsSchema: z.ZodType<Prisma.ManagedLocationDeleteManyArgs> =
  z
    .object({
      where: ManagedLocationWhereInputSchema.optional(),
    })
    .strict();

export const ItemStorageCreateArgsSchema: z.ZodType<Prisma.ItemStorageCreateArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      data: z.union([
        ItemStorageCreateInputSchema,
        ItemStorageUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const ItemStorageUpsertArgsSchema: z.ZodType<Prisma.ItemStorageUpsertArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereUniqueInputSchema,
      create: z.union([
        ItemStorageCreateInputSchema,
        ItemStorageUncheckedCreateInputSchema,
      ]),
      update: z.union([
        ItemStorageUpdateInputSchema,
        ItemStorageUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const ItemStorageCreateManyArgsSchema: z.ZodType<Prisma.ItemStorageCreateManyArgs> =
  z
    .object({
      data: z.union([
        ItemStorageCreateManyInputSchema,
        ItemStorageCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ItemStorageDeleteArgsSchema: z.ZodType<Prisma.ItemStorageDeleteArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      where: ItemStorageWhereUniqueInputSchema,
    })
    .strict();

export const ItemStorageUpdateArgsSchema: z.ZodType<Prisma.ItemStorageUpdateArgs> =
  z
    .object({
      select: ItemStorageSelectSchema.optional(),
      include: ItemStorageIncludeSchema.optional(),
      data: z.union([
        ItemStorageUpdateInputSchema,
        ItemStorageUncheckedUpdateInputSchema,
      ]),
      where: ItemStorageWhereUniqueInputSchema,
    })
    .strict();

export const ItemStorageUpdateManyArgsSchema: z.ZodType<Prisma.ItemStorageUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ItemStorageUpdateManyMutationInputSchema,
        ItemStorageUncheckedUpdateManyInputSchema,
      ]),
      where: ItemStorageWhereInputSchema.optional(),
    })
    .strict();

export const ItemStorageDeleteManyArgsSchema: z.ZodType<Prisma.ItemStorageDeleteManyArgs> =
  z
    .object({
      where: ItemStorageWhereInputSchema.optional(),
    })
    .strict();

export const SecondaryUsersCreateArgsSchema: z.ZodType<Prisma.SecondaryUsersCreateArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      data: z.union([
        SecondaryUsersCreateInputSchema,
        SecondaryUsersUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const SecondaryUsersUpsertArgsSchema: z.ZodType<Prisma.SecondaryUsersUpsertArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereUniqueInputSchema,
      create: z.union([
        SecondaryUsersCreateInputSchema,
        SecondaryUsersUncheckedCreateInputSchema,
      ]),
      update: z.union([
        SecondaryUsersUpdateInputSchema,
        SecondaryUsersUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const SecondaryUsersCreateManyArgsSchema: z.ZodType<Prisma.SecondaryUsersCreateManyArgs> =
  z
    .object({
      data: z.union([
        SecondaryUsersCreateManyInputSchema,
        SecondaryUsersCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SecondaryUsersDeleteArgsSchema: z.ZodType<Prisma.SecondaryUsersDeleteArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      where: SecondaryUsersWhereUniqueInputSchema,
    })
    .strict();

export const SecondaryUsersUpdateArgsSchema: z.ZodType<Prisma.SecondaryUsersUpdateArgs> =
  z
    .object({
      select: SecondaryUsersSelectSchema.optional(),
      include: SecondaryUsersIncludeSchema.optional(),
      data: z.union([
        SecondaryUsersUpdateInputSchema,
        SecondaryUsersUncheckedUpdateInputSchema,
      ]),
      where: SecondaryUsersWhereUniqueInputSchema,
    })
    .strict();

export const SecondaryUsersUpdateManyArgsSchema: z.ZodType<Prisma.SecondaryUsersUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SecondaryUsersUpdateManyMutationInputSchema,
        SecondaryUsersUncheckedUpdateManyInputSchema,
      ]),
      where: SecondaryUsersWhereInputSchema.optional(),
    })
    .strict();

export const SecondaryUsersDeleteManyArgsSchema: z.ZodType<Prisma.SecondaryUsersDeleteManyArgs> =
  z
    .object({
      where: SecondaryUsersWhereInputSchema.optional(),
    })
    .strict();

export const StoredItemCreateArgsSchema: z.ZodType<Prisma.StoredItemCreateArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      data: z.union([
        StoredItemCreateInputSchema,
        StoredItemUncheckedCreateInputSchema,
      ]),
    })
    .strict();

export const StoredItemUpsertArgsSchema: z.ZodType<Prisma.StoredItemUpsertArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereUniqueInputSchema,
      create: z.union([
        StoredItemCreateInputSchema,
        StoredItemUncheckedCreateInputSchema,
      ]),
      update: z.union([
        StoredItemUpdateInputSchema,
        StoredItemUncheckedUpdateInputSchema,
      ]),
    })
    .strict();

export const StoredItemCreateManyArgsSchema: z.ZodType<Prisma.StoredItemCreateManyArgs> =
  z
    .object({
      data: z.union([
        StoredItemCreateManyInputSchema,
        StoredItemCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const StoredItemDeleteArgsSchema: z.ZodType<Prisma.StoredItemDeleteArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      where: StoredItemWhereUniqueInputSchema,
    })
    .strict();

export const StoredItemUpdateArgsSchema: z.ZodType<Prisma.StoredItemUpdateArgs> =
  z
    .object({
      select: StoredItemSelectSchema.optional(),
      include: StoredItemIncludeSchema.optional(),
      data: z.union([
        StoredItemUpdateInputSchema,
        StoredItemUncheckedUpdateInputSchema,
      ]),
      where: StoredItemWhereUniqueInputSchema,
    })
    .strict();

export const StoredItemUpdateManyArgsSchema: z.ZodType<Prisma.StoredItemUpdateManyArgs> =
  z
    .object({
      data: z.union([
        StoredItemUpdateManyMutationInputSchema,
        StoredItemUncheckedUpdateManyInputSchema,
      ]),
      where: StoredItemWhereInputSchema.optional(),
    })
    .strict();

export const StoredItemDeleteManyArgsSchema: z.ZodType<Prisma.StoredItemDeleteManyArgs> =
  z
    .object({
      where: StoredItemWhereInputSchema.optional(),
    })
    .strict();

export const ItemInfoCreateArgsSchema: z.ZodType<Prisma.ItemInfoCreateArgs> = z
  .object({
    select: ItemInfoSelectSchema.optional(),
    include: ItemInfoIncludeSchema.optional(),
    data: z.union([
      ItemInfoCreateInputSchema,
      ItemInfoUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ItemInfoUpsertArgsSchema: z.ZodType<Prisma.ItemInfoUpsertArgs> = z
  .object({
    select: ItemInfoSelectSchema.optional(),
    include: ItemInfoIncludeSchema.optional(),
    where: ItemInfoWhereUniqueInputSchema,
    create: z.union([
      ItemInfoCreateInputSchema,
      ItemInfoUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ItemInfoUpdateInputSchema,
      ItemInfoUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ItemInfoCreateManyArgsSchema: z.ZodType<Prisma.ItemInfoCreateManyArgs> =
  z
    .object({
      data: z.union([
        ItemInfoCreateManyInputSchema,
        ItemInfoCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ItemInfoDeleteArgsSchema: z.ZodType<Prisma.ItemInfoDeleteArgs> = z
  .object({
    select: ItemInfoSelectSchema.optional(),
    include: ItemInfoIncludeSchema.optional(),
    where: ItemInfoWhereUniqueInputSchema,
  })
  .strict();

export const ItemInfoUpdateArgsSchema: z.ZodType<Prisma.ItemInfoUpdateArgs> = z
  .object({
    select: ItemInfoSelectSchema.optional(),
    include: ItemInfoIncludeSchema.optional(),
    data: z.union([
      ItemInfoUpdateInputSchema,
      ItemInfoUncheckedUpdateInputSchema,
    ]),
    where: ItemInfoWhereUniqueInputSchema,
  })
  .strict();

export const ItemInfoUpdateManyArgsSchema: z.ZodType<Prisma.ItemInfoUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ItemInfoUpdateManyMutationInputSchema,
        ItemInfoUncheckedUpdateManyInputSchema,
      ]),
      where: ItemInfoWhereInputSchema.optional(),
    })
    .strict();

export const ItemInfoDeleteManyArgsSchema: z.ZodType<Prisma.ItemInfoDeleteManyArgs> =
  z
    .object({
      where: ItemInfoWhereInputSchema.optional(),
    })
    .strict();

export const SupplierCreateArgsSchema: z.ZodType<Prisma.SupplierCreateArgs> = z
  .object({
    select: SupplierSelectSchema.optional(),
    include: SupplierIncludeSchema.optional(),
    data: z.union([
      SupplierCreateInputSchema,
      SupplierUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const SupplierUpsertArgsSchema: z.ZodType<Prisma.SupplierUpsertArgs> = z
  .object({
    select: SupplierSelectSchema.optional(),
    include: SupplierIncludeSchema.optional(),
    where: SupplierWhereUniqueInputSchema,
    create: z.union([
      SupplierCreateInputSchema,
      SupplierUncheckedCreateInputSchema,
    ]),
    update: z.union([
      SupplierUpdateInputSchema,
      SupplierUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const SupplierCreateManyArgsSchema: z.ZodType<Prisma.SupplierCreateManyArgs> =
  z
    .object({
      data: z.union([
        SupplierCreateManyInputSchema,
        SupplierCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const SupplierDeleteArgsSchema: z.ZodType<Prisma.SupplierDeleteArgs> = z
  .object({
    select: SupplierSelectSchema.optional(),
    include: SupplierIncludeSchema.optional(),
    where: SupplierWhereUniqueInputSchema,
  })
  .strict();

export const SupplierUpdateArgsSchema: z.ZodType<Prisma.SupplierUpdateArgs> = z
  .object({
    select: SupplierSelectSchema.optional(),
    include: SupplierIncludeSchema.optional(),
    data: z.union([
      SupplierUpdateInputSchema,
      SupplierUncheckedUpdateInputSchema,
    ]),
    where: SupplierWhereUniqueInputSchema,
  })
  .strict();

export const SupplierUpdateManyArgsSchema: z.ZodType<Prisma.SupplierUpdateManyArgs> =
  z
    .object({
      data: z.union([
        SupplierUpdateManyMutationInputSchema,
        SupplierUncheckedUpdateManyInputSchema,
      ]),
      where: SupplierWhereInputSchema.optional(),
    })
    .strict();

export const SupplierDeleteManyArgsSchema: z.ZodType<Prisma.SupplierDeleteManyArgs> =
  z
    .object({
      where: SupplierWhereInputSchema.optional(),
    })
    .strict();

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    data: z.union([
      ProductCreateInputSchema,
      ProductUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    where: ProductWhereUniqueInputSchema,
    create: z.union([
      ProductCreateInputSchema,
      ProductUncheckedCreateInputSchema,
    ]),
    update: z.union([
      ProductUpdateInputSchema,
      ProductUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> =
  z
    .object({
      data: z.union([
        ProductCreateManyInputSchema,
        ProductCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    where: ProductWhereUniqueInputSchema,
  })
  .strict();

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z
  .object({
    select: ProductSelectSchema.optional(),
    include: ProductIncludeSchema.optional(),
    data: z.union([
      ProductUpdateInputSchema,
      ProductUncheckedUpdateInputSchema,
    ]),
    where: ProductWhereUniqueInputSchema,
  })
  .strict();

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> =
  z
    .object({
      data: z.union([
        ProductUpdateManyMutationInputSchema,
        ProductUncheckedUpdateManyInputSchema,
      ]),
      where: ProductWhereInputSchema.optional(),
    })
    .strict();

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> =
  z
    .object({
      where: ProductWhereInputSchema.optional(),
    })
    .strict();
