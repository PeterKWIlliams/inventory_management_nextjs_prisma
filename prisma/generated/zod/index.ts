import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const AddressScalarFieldEnumSchema = z.enum(['id','street','city','postcode']);

export const HouseholdScalarFieldEnumSchema = z.enum(['id','name','addressId']);

export const InventoryManagementScalarFieldEnumSchema = z.enum(['id','userId','familyId']);

export const InventoryScalarFieldEnumSchema = z.enum(['id','inventoryManagementId','storageFacilityId']);

export const ProductScalarFieldEnumSchema = z.enum(['id','name','purchase_link','image_url','price']);

export const ProductsScalarFieldEnumSchema = z.enum(['id','supplierId','productId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const StorageFacilityScalarFieldEnumSchema = z.enum(['id','name','location']);

export const StoredItemsScalarFieldEnumSchema = z.enum(['id','name','expiry_date','purchase_date','purchase_link','image_url','desired_quantity','quantity','storageFacilityId']);

export const SupplierScalarFieldEnumSchema = z.enum(['id','name','address']);

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const UserScalarFieldEnumSchema = z.enum(['id','email','first_name','last_name','addressId','clerkId']);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.number().int(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  addressId: z.number().int(),
  clerkId: z.string(),
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// HOUSEHOLD SCHEMA
/////////////////////////////////////////

export const HouseholdSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  addressId: z.number().int(),
})

export type Household = z.infer<typeof HouseholdSchema>

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.number().int(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
})

export type Address = z.infer<typeof AddressSchema>

/////////////////////////////////////////
// INVENTORY MANAGEMENT SCHEMA
/////////////////////////////////////////

export const InventoryManagementSchema = z.object({
  id: z.number().int(),
  userId: z.number().int(),
  familyId: z.number().int(),
})

export type InventoryManagement = z.infer<typeof InventoryManagementSchema>

/////////////////////////////////////////
// INVENTORY SCHEMA
/////////////////////////////////////////

export const InventorySchema = z.object({
  id: z.number().int(),
  inventoryManagementId: z.number().int(),
  storageFacilityId: z.number().int(),
})

export type Inventory = z.infer<typeof InventorySchema>

/////////////////////////////////////////
// STORAGE FACILITY SCHEMA
/////////////////////////////////////////

export const StorageFacilitySchema = z.object({
  id: z.number().int(),
  name: z.string(),
  location: z.string(),
})

export type StorageFacility = z.infer<typeof StorageFacilitySchema>

/////////////////////////////////////////
// STORED ITEMS SCHEMA
/////////////////////////////////////////

export const StoredItemsSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  expiry_date: z.coerce.date().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().nullable(),
  quantity: z.number().int(),
  storageFacilityId: z.number().int(),
})

export type StoredItems = z.infer<typeof StoredItemsSchema>

/////////////////////////////////////////
// SUPPLIER SCHEMA
/////////////////////////////////////////

export const SupplierSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  address: z.string().nullable(),
})

export type Supplier = z.infer<typeof SupplierSchema>

/////////////////////////////////////////
// PRODUCTS SCHEMA
/////////////////////////////////////////

export const ProductsSchema = z.object({
  id: z.number().int(),
  supplierId: z.number().int(),
  productId: z.number().int(),
})

export type Products = z.infer<typeof ProductsSchema>

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  purchase_link: z.string().nullable(),
  image_url: z.string().nullable(),
  price: z.number().nullable(),
})

export type Product = z.infer<typeof ProductSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  user_address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  inventoryManagement: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  first_name: z.boolean().optional(),
  last_name: z.boolean().optional(),
  addressId: z.boolean().optional(),
  clerkId: z.boolean().optional(),
  user_address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// HOUSEHOLD
//------------------------------------------------------

export const HouseholdIncludeSchema: z.ZodType<Prisma.HouseholdInclude> = z.object({
  household_address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HouseholdCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const HouseholdArgsSchema: z.ZodType<Prisma.HouseholdArgs> = z.object({
  select: z.lazy(() => HouseholdSelectSchema).optional(),
  include: z.lazy(() => HouseholdIncludeSchema).optional(),
}).strict();

export const HouseholdCountOutputTypeArgsSchema: z.ZodType<Prisma.HouseholdCountOutputTypeArgs> = z.object({
  select: z.lazy(() => HouseholdCountOutputTypeSelectSchema).nullish(),
}).strict();

export const HouseholdCountOutputTypeSelectSchema: z.ZodType<Prisma.HouseholdCountOutputTypeSelect> = z.object({
  inventoryManagement: z.boolean().optional(),
}).strict();

export const HouseholdSelectSchema: z.ZodType<Prisma.HouseholdSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  addressId: z.boolean().optional(),
  household_address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => HouseholdCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ADDRESS
//------------------------------------------------------

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z.object({
  household: z.union([z.boolean(),z.lazy(() => HouseholdFindManyArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const AddressArgsSchema: z.ZodType<Prisma.AddressArgs> = z.object({
  select: z.lazy(() => AddressSelectSchema).optional(),
  include: z.lazy(() => AddressIncludeSchema).optional(),
}).strict();

export const AddressCountOutputTypeArgsSchema: z.ZodType<Prisma.AddressCountOutputTypeArgs> = z.object({
  select: z.lazy(() => AddressCountOutputTypeSelectSchema).nullish(),
}).strict();

export const AddressCountOutputTypeSelectSchema: z.ZodType<Prisma.AddressCountOutputTypeSelect> = z.object({
  household: z.boolean().optional(),
  User: z.boolean().optional(),
}).strict();

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  id: z.boolean().optional(),
  street: z.boolean().optional(),
  city: z.boolean().optional(),
  postcode: z.boolean().optional(),
  household: z.union([z.boolean(),z.lazy(() => HouseholdFindManyArgsSchema)]).optional(),
  User: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => AddressCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVENTORY MANAGEMENT
//------------------------------------------------------

export const InventoryManagementIncludeSchema: z.ZodType<Prisma.InventoryManagementInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  household: z.union([z.boolean(),z.lazy(() => HouseholdArgsSchema)]).optional(),
  inventory: z.union([z.boolean(),z.lazy(() => InventoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InventoryManagementCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const InventoryManagementArgsSchema: z.ZodType<Prisma.InventoryManagementArgs> = z.object({
  select: z.lazy(() => InventoryManagementSelectSchema).optional(),
  include: z.lazy(() => InventoryManagementIncludeSchema).optional(),
}).strict();

export const InventoryManagementCountOutputTypeArgsSchema: z.ZodType<Prisma.InventoryManagementCountOutputTypeArgs> = z.object({
  select: z.lazy(() => InventoryManagementCountOutputTypeSelectSchema).nullish(),
}).strict();

export const InventoryManagementCountOutputTypeSelectSchema: z.ZodType<Prisma.InventoryManagementCountOutputTypeSelect> = z.object({
  inventory: z.boolean().optional(),
}).strict();

export const InventoryManagementSelectSchema: z.ZodType<Prisma.InventoryManagementSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  familyId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  household: z.union([z.boolean(),z.lazy(() => HouseholdArgsSchema)]).optional(),
  inventory: z.union([z.boolean(),z.lazy(() => InventoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InventoryManagementCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVENTORY
//------------------------------------------------------

export const InventoryIncludeSchema: z.ZodType<Prisma.InventoryInclude> = z.object({
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementArgsSchema)]).optional(),
  storageFacility: z.union([z.boolean(),z.lazy(() => StorageFacilityArgsSchema)]).optional(),
}).strict()

export const InventoryArgsSchema: z.ZodType<Prisma.InventoryArgs> = z.object({
  select: z.lazy(() => InventorySelectSchema).optional(),
  include: z.lazy(() => InventoryIncludeSchema).optional(),
}).strict();

export const InventorySelectSchema: z.ZodType<Prisma.InventorySelect> = z.object({
  id: z.boolean().optional(),
  inventoryManagementId: z.boolean().optional(),
  storageFacilityId: z.boolean().optional(),
  inventoryManagement: z.union([z.boolean(),z.lazy(() => InventoryManagementArgsSchema)]).optional(),
  storageFacility: z.union([z.boolean(),z.lazy(() => StorageFacilityArgsSchema)]).optional(),
}).strict()

// STORAGE FACILITY
//------------------------------------------------------

export const StorageFacilityIncludeSchema: z.ZodType<Prisma.StorageFacilityInclude> = z.object({
  storedItems: z.union([z.boolean(),z.lazy(() => StoredItemsFindManyArgsSchema)]).optional(),
  inventory: z.union([z.boolean(),z.lazy(() => InventoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StorageFacilityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const StorageFacilityArgsSchema: z.ZodType<Prisma.StorageFacilityArgs> = z.object({
  select: z.lazy(() => StorageFacilitySelectSchema).optional(),
  include: z.lazy(() => StorageFacilityIncludeSchema).optional(),
}).strict();

export const StorageFacilityCountOutputTypeArgsSchema: z.ZodType<Prisma.StorageFacilityCountOutputTypeArgs> = z.object({
  select: z.lazy(() => StorageFacilityCountOutputTypeSelectSchema).nullish(),
}).strict();

export const StorageFacilityCountOutputTypeSelectSchema: z.ZodType<Prisma.StorageFacilityCountOutputTypeSelect> = z.object({
  storedItems: z.boolean().optional(),
  inventory: z.boolean().optional(),
}).strict();

export const StorageFacilitySelectSchema: z.ZodType<Prisma.StorageFacilitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  location: z.boolean().optional(),
  storedItems: z.union([z.boolean(),z.lazy(() => StoredItemsFindManyArgsSchema)]).optional(),
  inventory: z.union([z.boolean(),z.lazy(() => InventoryFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => StorageFacilityCountOutputTypeArgsSchema)]).optional(),
}).strict()

// STORED ITEMS
//------------------------------------------------------

export const StoredItemsIncludeSchema: z.ZodType<Prisma.StoredItemsInclude> = z.object({
  storageFacility: z.union([z.boolean(),z.lazy(() => StorageFacilityArgsSchema)]).optional(),
}).strict()

export const StoredItemsArgsSchema: z.ZodType<Prisma.StoredItemsArgs> = z.object({
  select: z.lazy(() => StoredItemsSelectSchema).optional(),
  include: z.lazy(() => StoredItemsIncludeSchema).optional(),
}).strict();

export const StoredItemsSelectSchema: z.ZodType<Prisma.StoredItemsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  expiry_date: z.boolean().optional(),
  purchase_date: z.boolean().optional(),
  purchase_link: z.boolean().optional(),
  image_url: z.boolean().optional(),
  desired_quantity: z.boolean().optional(),
  quantity: z.boolean().optional(),
  storageFacilityId: z.boolean().optional(),
  storageFacility: z.union([z.boolean(),z.lazy(() => StorageFacilityArgsSchema)]).optional(),
}).strict()

// SUPPLIER
//------------------------------------------------------

export const SupplierIncludeSchema: z.ZodType<Prisma.SupplierInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SupplierCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const SupplierArgsSchema: z.ZodType<Prisma.SupplierArgs> = z.object({
  select: z.lazy(() => SupplierSelectSchema).optional(),
  include: z.lazy(() => SupplierIncludeSchema).optional(),
}).strict();

export const SupplierCountOutputTypeArgsSchema: z.ZodType<Prisma.SupplierCountOutputTypeArgs> = z.object({
  select: z.lazy(() => SupplierCountOutputTypeSelectSchema).nullish(),
}).strict();

export const SupplierCountOutputTypeSelectSchema: z.ZodType<Prisma.SupplierCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const SupplierSelectSchema: z.ZodType<Prisma.SupplierSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  address: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => SupplierCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRODUCTS
//------------------------------------------------------

export const ProductsIncludeSchema: z.ZodType<Prisma.ProductsInclude> = z.object({
  supplier: z.union([z.boolean(),z.lazy(() => SupplierArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

export const ProductsArgsSchema: z.ZodType<Prisma.ProductsArgs> = z.object({
  select: z.lazy(() => ProductsSelectSchema).optional(),
  include: z.lazy(() => ProductsIncludeSchema).optional(),
}).strict();

export const ProductsSelectSchema: z.ZodType<Prisma.ProductsSelect> = z.object({
  id: z.boolean().optional(),
  supplierId: z.boolean().optional(),
  productId: z.boolean().optional(),
  supplier: z.union([z.boolean(),z.lazy(() => SupplierArgsSchema)]).optional(),
  product: z.union([z.boolean(),z.lazy(() => ProductArgsSchema)]).optional(),
}).strict()

// PRODUCT
//------------------------------------------------------

export const ProductIncludeSchema: z.ZodType<Prisma.ProductInclude> = z.object({
  products: z.union([z.boolean(),z.lazy(() => ProductsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProductArgsSchema: z.ZodType<Prisma.ProductArgs> = z.object({
  select: z.lazy(() => ProductSelectSchema).optional(),
  include: z.lazy(() => ProductIncludeSchema).optional(),
}).strict();

export const ProductCountOutputTypeArgsSchema: z.ZodType<Prisma.ProductCountOutputTypeArgs> = z.object({
  select: z.lazy(() => ProductCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProductCountOutputTypeSelectSchema: z.ZodType<Prisma.ProductCountOutputTypeSelect> = z.object({
  products: z.boolean().optional(),
}).strict();

export const ProductSelectSchema: z.ZodType<Prisma.ProductSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  purchase_link: z.boolean().optional(),
  image_url: z.boolean().optional(),
  price: z.boolean().optional(),
  products: z.union([z.boolean(),z.lazy(() => ProductsFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProductCountOutputTypeArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  clerkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user_address: z.union([ z.lazy(() => AddressRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  user_address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.object({
  id: z.number().int().optional(),
  email: z.string().optional(),
  clerkId: z.string().optional()
}).strict();

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => UserAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => UserSumOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  clerkId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const HouseholdWhereInputSchema: z.ZodType<Prisma.HouseholdWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HouseholdWhereInputSchema),z.lazy(() => HouseholdWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HouseholdWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HouseholdWhereInputSchema),z.lazy(() => HouseholdWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  household_address: z.union([ z.lazy(() => AddressRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementListRelationFilterSchema).optional()
}).strict();

export const HouseholdOrderByWithRelationInputSchema: z.ZodType<Prisma.HouseholdOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  household_address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementOrderByRelationAggregateInputSchema).optional()
}).strict();

export const HouseholdWhereUniqueInputSchema: z.ZodType<Prisma.HouseholdWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const HouseholdOrderByWithAggregationInputSchema: z.ZodType<Prisma.HouseholdOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => HouseholdCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => HouseholdAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HouseholdMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HouseholdMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => HouseholdSumOrderByAggregateInputSchema).optional()
}).strict();

export const HouseholdScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HouseholdScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HouseholdScalarWhereWithAggregatesInputSchema),z.lazy(() => HouseholdScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HouseholdScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HouseholdScalarWhereWithAggregatesInputSchema),z.lazy(() => HouseholdScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const AddressWhereInputSchema: z.ZodType<Prisma.AddressWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postcode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  household: z.lazy(() => HouseholdListRelationFilterSchema).optional(),
  User: z.lazy(() => UserListRelationFilterSchema).optional()
}).strict();

export const AddressOrderByWithRelationInputSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  household: z.lazy(() => HouseholdOrderByRelationAggregateInputSchema).optional(),
  User: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional()
}).strict();

export const AddressWhereUniqueInputSchema: z.ZodType<Prisma.AddressWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const AddressOrderByWithAggregationInputSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AddressAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AddressSumOrderByAggregateInputSchema).optional()
}).strict();

export const AddressScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  street: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postcode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const InventoryManagementWhereInputSchema: z.ZodType<Prisma.InventoryManagementWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryManagementWhereInputSchema),z.lazy(() => InventoryManagementWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryManagementWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryManagementWhereInputSchema),z.lazy(() => InventoryManagementWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  familyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  household: z.union([ z.lazy(() => HouseholdRelationFilterSchema),z.lazy(() => HouseholdWhereInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryListRelationFilterSchema).optional()
}).strict();

export const InventoryManagementOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryManagementOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  household: z.lazy(() => HouseholdOrderByWithRelationInputSchema).optional(),
  inventory: z.lazy(() => InventoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export const InventoryManagementWhereUniqueInputSchema: z.ZodType<Prisma.InventoryManagementWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const InventoryManagementOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryManagementOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryManagementCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InventoryManagementAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryManagementMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryManagementMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InventoryManagementSumOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryManagementScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryManagementScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryManagementScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryManagementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryManagementScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryManagementScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryManagementScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  familyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const InventoryWhereInputSchema: z.ZodType<Prisma.InventoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryWhereInputSchema),z.lazy(() => InventoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inventoryManagementId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inventoryManagement: z.union([ z.lazy(() => InventoryManagementRelationFilterSchema),z.lazy(() => InventoryManagementWhereInputSchema) ]).optional(),
  storageFacility: z.union([ z.lazy(() => StorageFacilityRelationFilterSchema),z.lazy(() => StorageFacilityWhereInputSchema) ]).optional(),
}).strict();

export const InventoryOrderByWithRelationInputSchema: z.ZodType<Prisma.InventoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementOrderByWithRelationInputSchema).optional(),
  storageFacility: z.lazy(() => StorageFacilityOrderByWithRelationInputSchema).optional()
}).strict();

export const InventoryWhereUniqueInputSchema: z.ZodType<Prisma.InventoryWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const InventoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.InventoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => InventoryCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => InventoryAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InventoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InventoryMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => InventorySumOrderByAggregateInputSchema).optional()
}).strict();

export const InventoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InventoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema),z.lazy(() => InventoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  inventoryManagementId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const StorageFacilityWhereInputSchema: z.ZodType<Prisma.StorageFacilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StorageFacilityWhereInputSchema),z.lazy(() => StorageFacilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StorageFacilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StorageFacilityWhereInputSchema),z.lazy(() => StorageFacilityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  storedItems: z.lazy(() => StoredItemsListRelationFilterSchema).optional(),
  inventory: z.lazy(() => InventoryListRelationFilterSchema).optional()
}).strict();

export const StorageFacilityOrderByWithRelationInputSchema: z.ZodType<Prisma.StorageFacilityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  storedItems: z.lazy(() => StoredItemsOrderByRelationAggregateInputSchema).optional(),
  inventory: z.lazy(() => InventoryOrderByRelationAggregateInputSchema).optional()
}).strict();

export const StorageFacilityWhereUniqueInputSchema: z.ZodType<Prisma.StorageFacilityWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const StorageFacilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.StorageFacilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StorageFacilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StorageFacilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StorageFacilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StorageFacilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StorageFacilitySumOrderByAggregateInputSchema).optional()
}).strict();

export const StorageFacilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StorageFacilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StorageFacilityScalarWhereWithAggregatesInputSchema),z.lazy(() => StorageFacilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StorageFacilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StorageFacilityScalarWhereWithAggregatesInputSchema),z.lazy(() => StorageFacilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  location: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const StoredItemsWhereInputSchema: z.ZodType<Prisma.StoredItemsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoredItemsWhereInputSchema),z.lazy(() => StoredItemsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoredItemsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoredItemsWhereInputSchema),z.lazy(() => StoredItemsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiry_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  purchase_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  purchase_link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  desired_quantity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storageFacility: z.union([ z.lazy(() => StorageFacilityRelationFilterSchema),z.lazy(() => StorageFacilityWhereInputSchema) ]).optional(),
}).strict();

export const StoredItemsOrderByWithRelationInputSchema: z.ZodType<Prisma.StoredItemsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  expiry_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional(),
  storageFacility: z.lazy(() => StorageFacilityOrderByWithRelationInputSchema).optional()
}).strict();

export const StoredItemsWhereUniqueInputSchema: z.ZodType<Prisma.StoredItemsWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const StoredItemsOrderByWithAggregationInputSchema: z.ZodType<Prisma.StoredItemsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  expiry_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => StoredItemsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => StoredItemsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => StoredItemsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => StoredItemsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => StoredItemsSumOrderByAggregateInputSchema).optional()
}).strict();

export const StoredItemsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.StoredItemsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => StoredItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => StoredItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoredItemsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoredItemsScalarWhereWithAggregatesInputSchema),z.lazy(() => StoredItemsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  expiry_date: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema),z.coerce.date() ]).optional().nullable(),
  purchase_date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  purchase_link: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  desired_quantity: z.union([ z.lazy(() => IntNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const SupplierWhereInputSchema: z.ZodType<Prisma.SupplierWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SupplierWhereInputSchema),z.lazy(() => SupplierWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SupplierWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SupplierWhereInputSchema),z.lazy(() => SupplierWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict();

export const SupplierOrderByWithRelationInputSchema: z.ZodType<Prisma.SupplierOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const SupplierWhereUniqueInputSchema: z.ZodType<Prisma.SupplierWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const SupplierOrderByWithAggregationInputSchema: z.ZodType<Prisma.SupplierOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SupplierCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => SupplierAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SupplierMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SupplierMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => SupplierSumOrderByAggregateInputSchema).optional()
}).strict();

export const SupplierScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SupplierScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema),z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema),z.lazy(() => SupplierScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  address: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const ProductsWhereInputSchema: z.ZodType<Prisma.ProductsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsWhereInputSchema),z.lazy(() => ProductsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsWhereInputSchema),z.lazy(() => ProductsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  supplierId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  productId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  supplier: z.union([ z.lazy(() => SupplierRelationFilterSchema),z.lazy(() => SupplierWhereInputSchema) ]).optional(),
  product: z.union([ z.lazy(() => ProductRelationFilterSchema),z.lazy(() => ProductWhereInputSchema) ]).optional(),
}).strict();

export const ProductsOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  supplier: z.lazy(() => SupplierOrderByWithRelationInputSchema).optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputSchema).optional()
}).strict();

export const ProductsWhereUniqueInputSchema: z.ZodType<Prisma.ProductsWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const ProductsOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductsSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  supplierId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  productId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const ProductWhereInputSchema: z.ZodType<Prisma.ProductWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductWhereInputSchema),z.lazy(() => ProductWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  purchase_link: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  image_url: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableFilterSchema),z.number() ]).optional().nullable(),
  products: z.lazy(() => ProductsListRelationFilterSchema).optional()
}).strict();

export const ProductOrderByWithRelationInputSchema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  products: z.lazy(() => ProductsOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProductWhereUniqueInputSchema: z.ZodType<Prisma.ProductWhereUniqueInput> = z.object({
  id: z.number().int().optional()
}).strict();

export const ProductOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProductCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProductAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProductMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProductMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProductSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProductScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProductScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductScalarWhereWithAggregatesInputSchema),z.lazy(() => ProductScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  purchase_link: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  image_url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  price: z.union([ z.lazy(() => FloatNullableWithAggregatesFilterSchema),z.number() ]).optional().nullable(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  clerkId: z.string(),
  user_address: z.lazy(() => AddressCreateNestedOneWithoutUserInputSchema),
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  addressId: z.number().int(),
  clerkId: z.string(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_address: z.lazy(() => AddressUpdateOneRequiredWithoutUserNestedInputSchema).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  addressId: z.number().int(),
  clerkId: z.string()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseholdCreateInputSchema: z.ZodType<Prisma.HouseholdCreateInput> = z.object({
  name: z.string(),
  household_address: z.lazy(() => AddressCreateNestedOneWithoutHouseholdInputSchema),
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedManyWithoutHouseholdInputSchema).optional()
}).strict();

export const HouseholdUncheckedCreateInputSchema: z.ZodType<Prisma.HouseholdUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  addressId: z.number().int(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedCreateNestedManyWithoutHouseholdInputSchema).optional()
}).strict();

export const HouseholdUpdateInputSchema: z.ZodType<Prisma.HouseholdUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household_address: z.lazy(() => AddressUpdateOneRequiredWithoutHouseholdNestedInputSchema).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUpdateManyWithoutHouseholdNestedInputSchema).optional()
}).strict();

export const HouseholdUncheckedUpdateInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutHouseholdNestedInputSchema).optional()
}).strict();

export const HouseholdCreateManyInputSchema: z.ZodType<Prisma.HouseholdCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  addressId: z.number().int()
}).strict();

export const HouseholdUpdateManyMutationInputSchema: z.ZodType<Prisma.HouseholdUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseholdUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z.object({
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  household: z.lazy(() => HouseholdCreateNestedManyWithoutHousehold_addressInputSchema).optional(),
  User: z.lazy(() => UserCreateNestedManyWithoutUser_addressInputSchema).optional()
}).strict();

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  household: z.lazy(() => HouseholdUncheckedCreateNestedManyWithoutHousehold_addressInputSchema).optional(),
  User: z.lazy(() => UserUncheckedCreateNestedManyWithoutUser_addressInputSchema).optional()
}).strict();

export const AddressUpdateInputSchema: z.ZodType<Prisma.AddressUpdateInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household: z.lazy(() => HouseholdUpdateManyWithoutHousehold_addressNestedInputSchema).optional(),
  User: z.lazy(() => UserUpdateManyWithoutUser_addressNestedInputSchema).optional()
}).strict();

export const AddressUncheckedUpdateInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household: z.lazy(() => HouseholdUncheckedUpdateManyWithoutHousehold_addressNestedInputSchema).optional(),
  User: z.lazy(() => UserUncheckedUpdateManyWithoutUser_addressNestedInputSchema).optional()
}).strict();

export const AddressCreateManyInputSchema: z.ZodType<Prisma.AddressCreateManyInput> = z.object({
  id: z.number().int().optional(),
  street: z.string(),
  city: z.string(),
  postcode: z.string()
}).strict();

export const AddressUpdateManyMutationInputSchema: z.ZodType<Prisma.AddressUpdateManyMutationInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryManagementCreateInputSchema: z.ZodType<Prisma.InventoryManagementCreateInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutInventoryManagementInputSchema),
  household: z.lazy(() => HouseholdCreateNestedOneWithoutInventoryManagementInputSchema),
  inventory: z.lazy(() => InventoryCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  familyId: z.number().int(),
  inventory: z.lazy(() => InventoryUncheckedCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementUpdateInputSchema: z.ZodType<Prisma.InventoryManagementUpdateInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional(),
  household: z.lazy(() => HouseholdUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional(),
  inventory: z.lazy(() => InventoryUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  familyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryUncheckedUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementCreateManyInputSchema: z.ZodType<Prisma.InventoryManagementCreateManyInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  familyId: z.number().int()
}).strict();

export const InventoryManagementUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryManagementUpdateManyMutationInput> = z.object({
}).strict();

export const InventoryManagementUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  familyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryCreateInputSchema: z.ZodType<Prisma.InventoryCreateInput> = z.object({
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedOneWithoutInventoryInputSchema),
  storageFacility: z.lazy(() => StorageFacilityCreateNestedOneWithoutInventoryInputSchema)
}).strict();

export const InventoryUncheckedCreateInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  inventoryManagementId: z.number().int(),
  storageFacilityId: z.number().int()
}).strict();

export const InventoryUpdateInputSchema: z.ZodType<Prisma.InventoryUpdateInput> = z.object({
  inventoryManagement: z.lazy(() => InventoryManagementUpdateOneRequiredWithoutInventoryNestedInputSchema).optional(),
  storageFacility: z.lazy(() => StorageFacilityUpdateOneRequiredWithoutInventoryNestedInputSchema).optional()
}).strict();

export const InventoryUncheckedUpdateInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagementId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryCreateManyInputSchema: z.ZodType<Prisma.InventoryCreateManyInput> = z.object({
  id: z.number().int().optional(),
  inventoryManagementId: z.number().int(),
  storageFacilityId: z.number().int()
}).strict();

export const InventoryUpdateManyMutationInputSchema: z.ZodType<Prisma.InventoryUpdateManyMutationInput> = z.object({
}).strict();

export const InventoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagementId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StorageFacilityCreateInputSchema: z.ZodType<Prisma.StorageFacilityCreateInput> = z.object({
  name: z.string(),
  location: z.string(),
  storedItems: z.lazy(() => StoredItemsCreateNestedManyWithoutStorageFacilityInputSchema).optional(),
  inventory: z.lazy(() => InventoryCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedCreateInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  location: z.string(),
  storedItems: z.lazy(() => StoredItemsUncheckedCreateNestedManyWithoutStorageFacilityInputSchema).optional(),
  inventory: z.lazy(() => InventoryUncheckedCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityUpdateInputSchema: z.ZodType<Prisma.StorageFacilityUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storedItems: z.lazy(() => StoredItemsUpdateManyWithoutStorageFacilityNestedInputSchema).optional(),
  inventory: z.lazy(() => InventoryUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedUpdateInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storedItems: z.lazy(() => StoredItemsUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema).optional(),
  inventory: z.lazy(() => InventoryUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const StorageFacilityCreateManyInputSchema: z.ZodType<Prisma.StorageFacilityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  location: z.string()
}).strict();

export const StorageFacilityUpdateManyMutationInputSchema: z.ZodType<Prisma.StorageFacilityUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StorageFacilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsCreateInputSchema: z.ZodType<Prisma.StoredItemsCreateInput> = z.object({
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  storageFacility: z.lazy(() => StorageFacilityCreateNestedOneWithoutStoredItemsInputSchema)
}).strict();

export const StoredItemsUncheckedCreateInputSchema: z.ZodType<Prisma.StoredItemsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  storageFacilityId: z.number().int()
}).strict();

export const StoredItemsUpdateInputSchema: z.ZodType<Prisma.StoredItemsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacility: z.lazy(() => StorageFacilityUpdateOneRequiredWithoutStoredItemsNestedInputSchema).optional()
}).strict();

export const StoredItemsUncheckedUpdateInputSchema: z.ZodType<Prisma.StoredItemsUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsCreateManyInputSchema: z.ZodType<Prisma.StoredItemsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int(),
  storageFacilityId: z.number().int()
}).strict();

export const StoredItemsUpdateManyMutationInputSchema: z.ZodType<Prisma.StoredItemsUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.StoredItemsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const SupplierCreateInputSchema: z.ZodType<Prisma.SupplierCreateInput> = z.object({
  name: z.string(),
  address: z.string().optional().nullable(),
  products: z.lazy(() => ProductsCreateNestedManyWithoutSupplierInputSchema).optional()
}).strict();

export const SupplierUncheckedCreateInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  address: z.string().optional().nullable(),
  products: z.lazy(() => ProductsUncheckedCreateNestedManyWithoutSupplierInputSchema).optional()
}).strict();

export const SupplierUpdateInputSchema: z.ZodType<Prisma.SupplierUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductsUpdateManyWithoutSupplierNestedInputSchema).optional()
}).strict();

export const SupplierUncheckedUpdateInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductsUncheckedUpdateManyWithoutSupplierNestedInputSchema).optional()
}).strict();

export const SupplierCreateManyInputSchema: z.ZodType<Prisma.SupplierCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  address: z.string().optional().nullable()
}).strict();

export const SupplierUpdateManyMutationInputSchema: z.ZodType<Prisma.SupplierUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SupplierUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductsCreateInputSchema: z.ZodType<Prisma.ProductsCreateInput> = z.object({
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutProductsInputSchema),
  product: z.lazy(() => ProductCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const ProductsUncheckedCreateInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  productId: z.number().int()
}).strict();

export const ProductsUpdateInputSchema: z.ZodType<Prisma.ProductsUpdateInput> = z.object({
  supplier: z.lazy(() => SupplierUpdateOneRequiredWithoutProductsNestedInputSchema).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductsUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  supplierId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateManyInputSchema: z.ZodType<Prisma.ProductsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int(),
  productId: z.number().int()
}).strict();

export const ProductsUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductsUpdateManyMutationInput> = z.object({
}).strict();

export const ProductsUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  supplierId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductCreateInputSchema: z.ZodType<Prisma.ProductCreateInput> = z.object({
  name: z.string(),
  purchase_link: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  products: z.lazy(() => ProductsCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUncheckedCreateInputSchema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  purchase_link: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  price: z.number().optional().nullable(),
  products: z.lazy(() => ProductsUncheckedCreateNestedManyWithoutProductInputSchema).optional()
}).strict();

export const ProductUpdateInputSchema: z.ZodType<Prisma.ProductUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductsUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductUncheckedUpdateInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  products: z.lazy(() => ProductsUncheckedUpdateManyWithoutProductNestedInputSchema).optional()
}).strict();

export const ProductCreateManyInputSchema: z.ZodType<Prisma.ProductCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  purchase_link: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  price: z.number().optional().nullable()
}).strict();

export const ProductUpdateManyMutationInputSchema: z.ZodType<Prisma.ProductUpdateManyMutationInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const AddressRelationFilterSchema: z.ZodType<Prisma.AddressRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export const InventoryManagementListRelationFilterSchema: z.ZodType<Prisma.InventoryManagementListRelationFilter> = z.object({
  every: z.lazy(() => InventoryManagementWhereInputSchema).optional(),
  some: z.lazy(() => InventoryManagementWhereInputSchema).optional(),
  none: z.lazy(() => InventoryManagementWhereInputSchema).optional()
}).strict();

export const InventoryManagementOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InventoryManagementOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserAvgOrderByAggregateInputSchema: z.ZodType<Prisma.UserAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  first_name: z.lazy(() => SortOrderSchema).optional(),
  last_name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional(),
  clerkId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserSumOrderByAggregateInputSchema: z.ZodType<Prisma.UserSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const HouseholdCountOrderByAggregateInputSchema: z.ZodType<Prisma.HouseholdCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseholdAvgOrderByAggregateInputSchema: z.ZodType<Prisma.HouseholdAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseholdMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HouseholdMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseholdMinOrderByAggregateInputSchema: z.ZodType<Prisma.HouseholdMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseholdSumOrderByAggregateInputSchema: z.ZodType<Prisma.HouseholdSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HouseholdListRelationFilterSchema: z.ZodType<Prisma.HouseholdListRelationFilter> = z.object({
  every: z.lazy(() => HouseholdWhereInputSchema).optional(),
  some: z.lazy(() => HouseholdWhereInputSchema).optional(),
  none: z.lazy(() => HouseholdWhereInputSchema).optional()
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const HouseholdOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HouseholdOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressCountOrderByAggregateInputSchema: z.ZodType<Prisma.AddressCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AddressAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMinOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  postcode: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressSumOrderByAggregateInputSchema: z.ZodType<Prisma.AddressSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const HouseholdRelationFilterSchema: z.ZodType<Prisma.HouseholdRelationFilter> = z.object({
  is: z.lazy(() => HouseholdWhereInputSchema).optional(),
  isNot: z.lazy(() => HouseholdWhereInputSchema).optional()
}).strict();

export const InventoryListRelationFilterSchema: z.ZodType<Prisma.InventoryListRelationFilter> = z.object({
  every: z.lazy(() => InventoryWhereInputSchema).optional(),
  some: z.lazy(() => InventoryWhereInputSchema).optional(),
  none: z.lazy(() => InventoryWhereInputSchema).optional()
}).strict();

export const InventoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InventoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryManagementCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryManagementAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryManagementMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryManagementMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementSumOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryManagementSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  familyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryManagementRelationFilterSchema: z.ZodType<Prisma.InventoryManagementRelationFilter> = z.object({
  is: z.lazy(() => InventoryManagementWhereInputSchema).optional(),
  isNot: z.lazy(() => InventoryManagementWhereInputSchema).optional()
}).strict();

export const StorageFacilityRelationFilterSchema: z.ZodType<Prisma.StorageFacilityRelationFilter> = z.object({
  is: z.lazy(() => StorageFacilityWhereInputSchema).optional(),
  isNot: z.lazy(() => StorageFacilityWhereInputSchema).optional()
}).strict();

export const InventoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryAvgOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.InventoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InventorySumOrderByAggregateInputSchema: z.ZodType<Prisma.InventorySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  inventoryManagementId: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoredItemsListRelationFilterSchema: z.ZodType<Prisma.StoredItemsListRelationFilter> = z.object({
  every: z.lazy(() => StoredItemsWhereInputSchema).optional(),
  some: z.lazy(() => StoredItemsWhereInputSchema).optional(),
  none: z.lazy(() => StoredItemsWhereInputSchema).optional()
}).strict();

export const StoredItemsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.StoredItemsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StorageFacilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.StorageFacilityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StorageFacilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StorageFacilityAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StorageFacilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StorageFacilityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StorageFacilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.StorageFacilityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  location: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StorageFacilitySumOrderByAggregateInputSchema: z.ZodType<Prisma.StorageFacilitySumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableFilterSchema: z.ZodType<Prisma.DateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const IntNullableFilterSchema: z.ZodType<Prisma.IntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const StoredItemsCountOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  expiry_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoredItemsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoredItemsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  expiry_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoredItemsMinOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  expiry_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_date: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StoredItemsSumOrderByAggregateInputSchema: z.ZodType<Prisma.StoredItemsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  desired_quantity: z.lazy(() => SortOrderSchema).optional(),
  quantity: z.lazy(() => SortOrderSchema).optional(),
  storageFacilityId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const DateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const IntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.IntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductsListRelationFilterSchema: z.ZodType<Prisma.ProductsListRelationFilter> = z.object({
  every: z.lazy(() => ProductsWhereInputSchema).optional(),
  some: z.lazy(() => ProductsWhereInputSchema).optional(),
  none: z.lazy(() => ProductsWhereInputSchema).optional()
}).strict();

export const ProductsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProductsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SupplierCountOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SupplierAvgOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SupplierMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SupplierMinOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  address: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const SupplierSumOrderByAggregateInputSchema: z.ZodType<Prisma.SupplierSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const SupplierRelationFilterSchema: z.ZodType<Prisma.SupplierRelationFilter> = z.object({
  is: z.lazy(() => SupplierWhereInputSchema).optional(),
  isNot: z.lazy(() => SupplierWhereInputSchema).optional()
}).strict();

export const ProductRelationFilterSchema: z.ZodType<Prisma.ProductRelationFilter> = z.object({
  is: z.lazy(() => ProductWhereInputSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputSchema).optional()
}).strict();

export const ProductsCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductsSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  supplierId: z.lazy(() => SortOrderSchema).optional(),
  productId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableFilterSchema: z.ZodType<Prisma.FloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const ProductCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProductAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProductMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  purchase_link: z.lazy(() => SortOrderSchema).optional(),
  image_url: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProductSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProductSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.FloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const AddressCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutUserInputSchema),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export const InventoryManagementCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateWithoutUserInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InventoryManagementUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateWithoutUserInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const AddressUpdateOneRequiredWithoutUserNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutUserInputSchema),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutUserInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateWithoutUserInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const InventoryManagementUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.InventoryManagementUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateWithoutUserInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const InventoryManagementUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateWithoutUserInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AddressCreateNestedOneWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutHouseholdInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedCreateWithoutHouseholdInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutHouseholdInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export const InventoryManagementCreateNestedManyWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementCreateNestedManyWithoutHouseholdInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyHouseholdInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InventoryManagementUncheckedCreateNestedManyWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateNestedManyWithoutHouseholdInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyHouseholdInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AddressUpdateOneRequiredWithoutHouseholdNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneRequiredWithoutHouseholdNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedCreateWithoutHouseholdInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutHouseholdInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutHouseholdInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutHouseholdInputSchema) ]).optional(),
}).strict();

export const InventoryManagementUpdateManyWithoutHouseholdNestedInputSchema: z.ZodType<Prisma.InventoryManagementUpdateManyWithoutHouseholdNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyHouseholdInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutHouseholdInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InventoryManagementUncheckedUpdateManyWithoutHouseholdNestedInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateManyWithoutHouseholdNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema).array(),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementCreateOrConnectWithoutHouseholdInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryManagementCreateManyHouseholdInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryManagementWhereUniqueInputSchema),z.lazy(() => InventoryManagementWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUpdateManyWithWhereWithoutHouseholdInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HouseholdCreateNestedManyWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdCreateNestedManyWithoutHousehold_addressInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema).array(),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HouseholdCreateManyHousehold_addressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedManyWithoutUser_addressInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutUser_addressInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserCreateWithoutUser_addressInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema),z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUser_addressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HouseholdUncheckedCreateNestedManyWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUncheckedCreateNestedManyWithoutHousehold_addressInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema).array(),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HouseholdCreateManyHousehold_addressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutUser_addressInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserCreateWithoutUser_addressInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema),z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUser_addressInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HouseholdUpdateManyWithoutHousehold_addressNestedInputSchema: z.ZodType<Prisma.HouseholdUpdateManyWithoutHousehold_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema).array(),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HouseholdCreateManyHousehold_addressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HouseholdUpdateManyWithWhereWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpdateManyWithWhereWithoutHousehold_addressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HouseholdScalarWhereInputSchema),z.lazy(() => HouseholdScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateManyWithoutUser_addressNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutUser_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserCreateWithoutUser_addressInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema),z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutUser_addressInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutUser_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUser_addressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutUser_addressInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutUser_addressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutUser_addressInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutUser_addressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HouseholdUncheckedUpdateManyWithoutHousehold_addressNestedInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateManyWithoutHousehold_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema).array(),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdCreateOrConnectWithoutHousehold_addressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HouseholdCreateManyHousehold_addressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HouseholdWhereUniqueInputSchema),z.lazy(() => HouseholdWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HouseholdUpdateManyWithWhereWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUpdateManyWithWhereWithoutHousehold_addressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HouseholdScalarWhereInputSchema),z.lazy(() => HouseholdScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutUser_addressNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUser_addressNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserCreateWithoutUser_addressInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema),z.lazy(() => UserCreateOrConnectWithoutUser_addressInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutUser_addressInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutUser_addressInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserCreateManyUser_addressInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutUser_addressInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutUser_addressInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutUser_addressInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutUser_addressInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInventoryManagementInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedCreateWithoutInventoryManagementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryManagementInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const HouseholdCreateNestedOneWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdCreateNestedOneWithoutInventoryManagementInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutInventoryManagementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HouseholdCreateOrConnectWithoutInventoryManagementInputSchema).optional(),
  connect: z.lazy(() => HouseholdWhereUniqueInputSchema).optional()
}).strict();

export const InventoryCreateNestedManyWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryCreateNestedManyWithoutInventoryManagementInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyInventoryManagementInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InventoryUncheckedCreateNestedManyWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateNestedManyWithoutInventoryManagementInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyInventoryManagementInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutInventoryManagementNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutInventoryManagementNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedCreateWithoutInventoryManagementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInventoryManagementInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInventoryManagementInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInventoryManagementInputSchema) ]).optional(),
}).strict();

export const HouseholdUpdateOneRequiredWithoutInventoryManagementNestedInputSchema: z.ZodType<Prisma.HouseholdUpdateOneRequiredWithoutInventoryManagementNestedInput> = z.object({
  create: z.union([ z.lazy(() => HouseholdCreateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutInventoryManagementInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => HouseholdCreateOrConnectWithoutInventoryManagementInputSchema).optional(),
  upsert: z.lazy(() => HouseholdUpsertWithoutInventoryManagementInputSchema).optional(),
  connect: z.lazy(() => HouseholdWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => HouseholdUpdateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedUpdateWithoutInventoryManagementInputSchema) ]).optional(),
}).strict();

export const InventoryUpdateManyWithoutInventoryManagementNestedInputSchema: z.ZodType<Prisma.InventoryUpdateManyWithoutInventoryManagementNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryUpsertWithWhereUniqueWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpsertWithWhereUniqueWithoutInventoryManagementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyInventoryManagementInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryUpdateWithWhereUniqueWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpdateWithWhereUniqueWithoutInventoryManagementInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryUpdateManyWithWhereWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpdateManyWithWhereWithoutInventoryManagementInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InventoryUncheckedUpdateManyWithoutInventoryManagementNestedInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyWithoutInventoryManagementNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutInventoryManagementInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryUpsertWithWhereUniqueWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpsertWithWhereUniqueWithoutInventoryManagementInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyInventoryManagementInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryUpdateWithWhereUniqueWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpdateWithWhereUniqueWithoutInventoryManagementInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryUpdateManyWithWhereWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUpdateManyWithWhereWithoutInventoryManagementInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InventoryManagementCreateNestedOneWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementCreateNestedOneWithoutInventoryInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutInventoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InventoryManagementCreateOrConnectWithoutInventoryInputSchema).optional(),
  connect: z.lazy(() => InventoryManagementWhereUniqueInputSchema).optional()
}).strict();

export const StorageFacilityCreateNestedOneWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityCreateNestedOneWithoutInventoryInput> = z.object({
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutInventoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StorageFacilityCreateOrConnectWithoutInventoryInputSchema).optional(),
  connect: z.lazy(() => StorageFacilityWhereUniqueInputSchema).optional()
}).strict();

export const InventoryManagementUpdateOneRequiredWithoutInventoryNestedInputSchema: z.ZodType<Prisma.InventoryManagementUpdateOneRequiredWithoutInventoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutInventoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InventoryManagementCreateOrConnectWithoutInventoryInputSchema).optional(),
  upsert: z.lazy(() => InventoryManagementUpsertWithoutInventoryInputSchema).optional(),
  connect: z.lazy(() => InventoryManagementWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutInventoryInputSchema) ]).optional(),
}).strict();

export const StorageFacilityUpdateOneRequiredWithoutInventoryNestedInputSchema: z.ZodType<Prisma.StorageFacilityUpdateOneRequiredWithoutInventoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutInventoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StorageFacilityCreateOrConnectWithoutInventoryInputSchema).optional(),
  upsert: z.lazy(() => StorageFacilityUpsertWithoutInventoryInputSchema).optional(),
  connect: z.lazy(() => StorageFacilityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StorageFacilityUpdateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedUpdateWithoutInventoryInputSchema) ]).optional(),
}).strict();

export const StoredItemsCreateNestedManyWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsCreateNestedManyWithoutStorageFacilityInput> = z.object({
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoredItemsCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InventoryCreateNestedManyWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryCreateNestedManyWithoutStorageFacilityInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoredItemsUncheckedCreateNestedManyWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUncheckedCreateNestedManyWithoutStorageFacilityInput> = z.object({
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoredItemsCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InventoryUncheckedCreateNestedManyWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateNestedManyWithoutStorageFacilityInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StoredItemsUpdateManyWithoutStorageFacilityNestedInputSchema: z.ZodType<Prisma.StoredItemsUpdateManyWithoutStorageFacilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoredItemsCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoredItemsUpdateManyWithWhereWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpdateManyWithWhereWithoutStorageFacilityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoredItemsScalarWhereInputSchema),z.lazy(() => StoredItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InventoryUpdateManyWithoutStorageFacilityNestedInputSchema: z.ZodType<Prisma.InventoryUpdateManyWithoutStorageFacilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryUpsertWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpsertWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryUpdateWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpdateWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryUpdateManyWithWhereWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpdateManyWithWhereWithoutStorageFacilityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StoredItemsUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema: z.ZodType<Prisma.StoredItemsUncheckedUpdateManyWithoutStorageFacilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => StoredItemsCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => StoredItemsWhereUniqueInputSchema),z.lazy(() => StoredItemsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => StoredItemsUpdateManyWithWhereWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUpdateManyWithWhereWithoutStorageFacilityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => StoredItemsScalarWhereInputSchema),z.lazy(() => StoredItemsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InventoryUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyWithoutStorageFacilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema).array(),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema),z.lazy(() => InventoryCreateOrConnectWithoutStorageFacilityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InventoryUpsertWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpsertWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InventoryCreateManyStorageFacilityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InventoryWhereUniqueInputSchema),z.lazy(() => InventoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InventoryUpdateWithWhereUniqueWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpdateWithWhereUniqueWithoutStorageFacilityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InventoryUpdateManyWithWhereWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUpdateManyWithWhereWithoutStorageFacilityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const StorageFacilityCreateNestedOneWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityCreateNestedOneWithoutStoredItemsInput> = z.object({
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutStoredItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StorageFacilityCreateOrConnectWithoutStoredItemsInputSchema).optional(),
  connect: z.lazy(() => StorageFacilityWhereUniqueInputSchema).optional()
}).strict();

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional().nullable()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const NullableIntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableIntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const StorageFacilityUpdateOneRequiredWithoutStoredItemsNestedInputSchema: z.ZodType<Prisma.StorageFacilityUpdateOneRequiredWithoutStoredItemsNestedInput> = z.object({
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutStoredItemsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => StorageFacilityCreateOrConnectWithoutStoredItemsInputSchema).optional(),
  upsert: z.lazy(() => StorageFacilityUpsertWithoutStoredItemsInputSchema).optional(),
  connect: z.lazy(() => StorageFacilityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => StorageFacilityUpdateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedUpdateWithoutStoredItemsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateNestedManyWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsCreateNestedManyWithoutSupplierInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsCreateWithoutSupplierInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManySupplierInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductsUncheckedCreateNestedManyWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateNestedManyWithoutSupplierInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsCreateWithoutSupplierInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManySupplierInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const ProductsUpdateManyWithoutSupplierNestedInputSchema: z.ZodType<Prisma.ProductsUpdateManyWithoutSupplierNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsCreateWithoutSupplierInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductsUpsertWithWhereUniqueWithoutSupplierInputSchema),z.lazy(() => ProductsUpsertWithWhereUniqueWithoutSupplierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManySupplierInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductsUpdateWithWhereUniqueWithoutSupplierInputSchema),z.lazy(() => ProductsUpdateWithWhereUniqueWithoutSupplierInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductsUpdateManyWithWhereWithoutSupplierInputSchema),z.lazy(() => ProductsUpdateManyWithWhereWithoutSupplierInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductsUncheckedUpdateManyWithoutSupplierNestedInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateManyWithoutSupplierNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsCreateWithoutSupplierInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutSupplierInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductsUpsertWithWhereUniqueWithoutSupplierInputSchema),z.lazy(() => ProductsUpsertWithWhereUniqueWithoutSupplierInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManySupplierInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductsUpdateWithWhereUniqueWithoutSupplierInputSchema),z.lazy(() => ProductsUpdateWithWhereUniqueWithoutSupplierInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductsUpdateManyWithWhereWithoutSupplierInputSchema),z.lazy(() => ProductsUpdateManyWithWhereWithoutSupplierInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const SupplierCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => SupplierCreateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputSchema).optional()
}).strict();

export const ProductCreateNestedOneWithoutProductsInputSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutProductsInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional()
}).strict();

export const SupplierUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.SupplierUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => SupplierCreateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SupplierCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => SupplierUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => SupplierWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SupplierUpdateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const ProductUpdateOneRequiredWithoutProductsNestedInputSchema: z.ZodType<Prisma.ProductUpdateOneRequiredWithoutProductsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductCreateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutProductsInputSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutProductsInputSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProductUpdateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductsCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsCreateWithoutProductInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProductsUncheckedCreateNestedManyWithoutProductInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateNestedManyWithoutProductInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsCreateWithoutProductInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManyProductInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NullableFloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableFloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional().nullable(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const ProductsUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductsUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsCreateWithoutProductInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductsUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductsUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductsUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductsUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductsUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ProductsUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProductsUncheckedUpdateManyWithoutProductNestedInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateManyWithoutProductNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsCreateWithoutProductInputSchema).array(),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema),z.lazy(() => ProductsCreateOrConnectWithoutProductInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProductsUpsertWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductsUpsertWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProductsCreateManyProductInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProductsWhereUniqueInputSchema),z.lazy(() => ProductsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProductsUpdateWithWhereUniqueWithoutProductInputSchema),z.lazy(() => ProductsUpdateWithWhereUniqueWithoutProductInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProductsUpdateManyWithWhereWithoutProductInputSchema),z.lazy(() => ProductsUpdateManyWithWhereWithoutProductInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedDateTimeNullableFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedDateTimeNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeNullableWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional().nullable(),
  in: z.coerce.date().array().optional().nullable(),
  notIn: z.coerce.date().array().optional().nullable(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeNullableFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedIntNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedIntNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableFilterSchema: z.ZodType<Prisma.NestedFloatNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedFloatNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatNullableWithAggregatesFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatNullableFilterSchema).optional()
}).strict();

export const AddressCreateWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateWithoutUserInput> = z.object({
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  household: z.lazy(() => HouseholdCreateNestedManyWithoutHousehold_addressInputSchema).optional()
}).strict();

export const AddressUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  household: z.lazy(() => HouseholdUncheckedCreateNestedManyWithoutHousehold_addressInputSchema).optional()
}).strict();

export const AddressCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutUserInputSchema),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InventoryManagementCreateWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementCreateWithoutUserInput> = z.object({
  household: z.lazy(() => HouseholdCreateNestedOneWithoutInventoryManagementInputSchema),
  inventory: z.lazy(() => InventoryCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateWithoutUserInput> = z.object({
  id: z.number().int().optional(),
  familyId: z.number().int(),
  inventory: z.lazy(() => InventoryUncheckedCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InventoryManagementCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.InventoryManagementCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InventoryManagementCreateManyUserInputSchema),z.lazy(() => InventoryManagementCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AddressUpsertWithoutUserInputSchema: z.ZodType<Prisma.AddressUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutUserInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutUserInputSchema),z.lazy(() => AddressUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const AddressUpdateWithoutUserInputSchema: z.ZodType<Prisma.AddressUpdateWithoutUserInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household: z.lazy(() => HouseholdUpdateManyWithoutHousehold_addressNestedInputSchema).optional()
}).strict();

export const AddressUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household: z.lazy(() => HouseholdUncheckedUpdateManyWithoutHousehold_addressNestedInputSchema).optional()
}).strict();

export const InventoryManagementUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const InventoryManagementUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InventoryManagementUpdateWithoutUserInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const InventoryManagementUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => InventoryManagementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InventoryManagementUpdateManyMutationInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutInventoryManagementInputSchema) ]),
}).strict();

export const InventoryManagementScalarWhereInputSchema: z.ZodType<Prisma.InventoryManagementScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryManagementScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryManagementScalarWhereInputSchema),z.lazy(() => InventoryManagementScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  familyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const AddressCreateWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressCreateWithoutHouseholdInput> = z.object({
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  User: z.lazy(() => UserCreateNestedManyWithoutUser_addressInputSchema).optional()
}).strict();

export const AddressUncheckedCreateWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutHouseholdInput> = z.object({
  id: z.number().int().optional(),
  street: z.string(),
  city: z.string(),
  postcode: z.string(),
  User: z.lazy(() => UserUncheckedCreateNestedManyWithoutUser_addressInputSchema).optional()
}).strict();

export const AddressCreateOrConnectWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutHouseholdInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedCreateWithoutHouseholdInputSchema) ]),
}).strict();

export const InventoryManagementCreateWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementCreateWithoutHouseholdInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutInventoryManagementInputSchema),
  inventory: z.lazy(() => InventoryCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedCreateWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateWithoutHouseholdInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  inventory: z.lazy(() => InventoryUncheckedCreateNestedManyWithoutInventoryManagementInputSchema).optional()
}).strict();

export const InventoryManagementCreateOrConnectWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementCreateOrConnectWithoutHouseholdInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema) ]),
}).strict();

export const InventoryManagementCreateManyHouseholdInputEnvelopeSchema: z.ZodType<Prisma.InventoryManagementCreateManyHouseholdInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InventoryManagementCreateManyHouseholdInputSchema),z.lazy(() => InventoryManagementCreateManyHouseholdInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AddressUpsertWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressUpsertWithoutHouseholdInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutHouseholdInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutHouseholdInputSchema),z.lazy(() => AddressUncheckedCreateWithoutHouseholdInputSchema) ]),
}).strict();

export const AddressUpdateWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressUpdateWithoutHouseholdInput> = z.object({
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUpdateManyWithoutUser_addressNestedInputSchema).optional()
}).strict();

export const AddressUncheckedUpdateWithoutHouseholdInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutHouseholdInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postcode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  User: z.lazy(() => UserUncheckedUpdateManyWithoutUser_addressNestedInputSchema).optional()
}).strict();

export const InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUpsertWithWhereUniqueWithoutHouseholdInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutHouseholdInputSchema) ]),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutHouseholdInputSchema) ]),
}).strict();

export const InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUpdateWithWhereUniqueWithoutHouseholdInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InventoryManagementUpdateWithoutHouseholdInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutHouseholdInputSchema) ]),
}).strict();

export const InventoryManagementUpdateManyWithWhereWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUpdateManyWithWhereWithoutHouseholdInput> = z.object({
  where: z.lazy(() => InventoryManagementScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InventoryManagementUpdateManyMutationInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutInventoryManagementInputSchema) ]),
}).strict();

export const HouseholdCreateWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdCreateWithoutHousehold_addressInput> = z.object({
  name: z.string(),
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedManyWithoutHouseholdInputSchema).optional()
}).strict();

export const HouseholdUncheckedCreateWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUncheckedCreateWithoutHousehold_addressInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedCreateNestedManyWithoutHouseholdInputSchema).optional()
}).strict();

export const HouseholdCreateOrConnectWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdCreateOrConnectWithoutHousehold_addressInput> = z.object({
  where: z.lazy(() => HouseholdWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema) ]),
}).strict();

export const HouseholdCreateManyHousehold_addressInputEnvelopeSchema: z.ZodType<Prisma.HouseholdCreateManyHousehold_addressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HouseholdCreateManyHousehold_addressInputSchema),z.lazy(() => HouseholdCreateManyHousehold_addressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserCreateWithoutUser_addressInputSchema: z.ZodType<Prisma.UserCreateWithoutUser_addressInput> = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  clerkId: z.string(),
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutUser_addressInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  clerkId: z.string(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutUser_addressInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutUser_addressInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema) ]),
}).strict();

export const UserCreateManyUser_addressInputEnvelopeSchema: z.ZodType<Prisma.UserCreateManyUser_addressInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UserCreateManyUser_addressInputSchema),z.lazy(() => UserCreateManyUser_addressInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUpsertWithWhereUniqueWithoutHousehold_addressInput> = z.object({
  where: z.lazy(() => HouseholdWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HouseholdUpdateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedUpdateWithoutHousehold_addressInputSchema) ]),
  create: z.union([ z.lazy(() => HouseholdCreateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutHousehold_addressInputSchema) ]),
}).strict();

export const HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUpdateWithWhereUniqueWithoutHousehold_addressInput> = z.object({
  where: z.lazy(() => HouseholdWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HouseholdUpdateWithoutHousehold_addressInputSchema),z.lazy(() => HouseholdUncheckedUpdateWithoutHousehold_addressInputSchema) ]),
}).strict();

export const HouseholdUpdateManyWithWhereWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUpdateManyWithWhereWithoutHousehold_addressInput> = z.object({
  where: z.lazy(() => HouseholdScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HouseholdUpdateManyMutationInputSchema),z.lazy(() => HouseholdUncheckedUpdateManyWithoutHouseholdInputSchema) ]),
}).strict();

export const HouseholdScalarWhereInputSchema: z.ZodType<Prisma.HouseholdScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HouseholdScalarWhereInputSchema),z.lazy(() => HouseholdScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HouseholdScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HouseholdScalarWhereInputSchema),z.lazy(() => HouseholdScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const UserUpsertWithWhereUniqueWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutUser_addressInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_addressInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedCreateWithoutUser_addressInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutUser_addressInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutUser_addressInputSchema),z.lazy(() => UserUncheckedUpdateWithoutUser_addressInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutUser_addressInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  first_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  last_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  addressId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  clerkId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserCreateWithoutInventoryManagementInput> = z.object({
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  clerkId: z.string(),
  user_address: z.lazy(() => AddressCreateNestedOneWithoutUserInputSchema)
}).strict();

export const UserUncheckedCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutInventoryManagementInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  addressId: z.number().int(),
  clerkId: z.string()
}).strict();

export const UserCreateOrConnectWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const HouseholdCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdCreateWithoutInventoryManagementInput> = z.object({
  name: z.string(),
  household_address: z.lazy(() => AddressCreateNestedOneWithoutHouseholdInputSchema)
}).strict();

export const HouseholdUncheckedCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdUncheckedCreateWithoutInventoryManagementInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  addressId: z.number().int()
}).strict();

export const HouseholdCreateOrConnectWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdCreateOrConnectWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => HouseholdWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HouseholdCreateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const InventoryCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryCreateWithoutInventoryManagementInput> = z.object({
  storageFacility: z.lazy(() => StorageFacilityCreateNestedOneWithoutInventoryInputSchema)
}).strict();

export const InventoryUncheckedCreateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateWithoutInventoryManagementInput> = z.object({
  id: z.number().int().optional(),
  storageFacilityId: z.number().int()
}).strict();

export const InventoryCreateOrConnectWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryCreateOrConnectWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const InventoryCreateManyInventoryManagementInputEnvelopeSchema: z.ZodType<Prisma.InventoryCreateManyInventoryManagementInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InventoryCreateManyInventoryManagementInputSchema),z.lazy(() => InventoryCreateManyInventoryManagementInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserUpsertWithoutInventoryManagementInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInventoryManagementInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInventoryManagementInputSchema),z.lazy(() => UserUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const UserUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserUpdateWithoutInventoryManagementInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user_address: z.lazy(() => AddressUpdateOneRequiredWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInventoryManagementInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HouseholdUpsertWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdUpsertWithoutInventoryManagementInput> = z.object({
  update: z.union([ z.lazy(() => HouseholdUpdateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedUpdateWithoutInventoryManagementInputSchema) ]),
  create: z.union([ z.lazy(() => HouseholdCreateWithoutInventoryManagementInputSchema),z.lazy(() => HouseholdUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const HouseholdUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdUpdateWithoutInventoryManagementInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  household_address: z.lazy(() => AddressUpdateOneRequiredWithoutHouseholdNestedInputSchema).optional()
}).strict();

export const HouseholdUncheckedUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateWithoutInventoryManagementInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryUpsertWithWhereUniqueWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUpsertWithWhereUniqueWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InventoryUpdateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedUpdateWithoutInventoryManagementInputSchema) ]),
  create: z.union([ z.lazy(() => InventoryCreateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const InventoryUpdateWithWhereUniqueWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUpdateWithWhereUniqueWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InventoryUpdateWithoutInventoryManagementInputSchema),z.lazy(() => InventoryUncheckedUpdateWithoutInventoryManagementInputSchema) ]),
}).strict();

export const InventoryUpdateManyWithWhereWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUpdateManyWithWhereWithoutInventoryManagementInput> = z.object({
  where: z.lazy(() => InventoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InventoryUpdateManyMutationInputSchema),z.lazy(() => InventoryUncheckedUpdateManyWithoutInventoryInputSchema) ]),
}).strict();

export const InventoryScalarWhereInputSchema: z.ZodType<Prisma.InventoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InventoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InventoryScalarWhereInputSchema),z.lazy(() => InventoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  inventoryManagementId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const InventoryManagementCreateWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementCreateWithoutInventoryInput> = z.object({
  user: z.lazy(() => UserCreateNestedOneWithoutInventoryManagementInputSchema),
  household: z.lazy(() => HouseholdCreateNestedOneWithoutInventoryManagementInputSchema)
}).strict();

export const InventoryManagementUncheckedCreateWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedCreateWithoutInventoryInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int(),
  familyId: z.number().int()
}).strict();

export const InventoryManagementCreateOrConnectWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementCreateOrConnectWithoutInventoryInput> = z.object({
  where: z.lazy(() => InventoryManagementWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutInventoryInputSchema) ]),
}).strict();

export const StorageFacilityCreateWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityCreateWithoutInventoryInput> = z.object({
  name: z.string(),
  location: z.string(),
  storedItems: z.lazy(() => StoredItemsCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedCreateWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedCreateWithoutInventoryInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  location: z.string(),
  storedItems: z.lazy(() => StoredItemsUncheckedCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityCreateOrConnectWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityCreateOrConnectWithoutInventoryInput> = z.object({
  where: z.lazy(() => StorageFacilityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutInventoryInputSchema) ]),
}).strict();

export const InventoryManagementUpsertWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementUpsertWithoutInventoryInput> = z.object({
  update: z.union([ z.lazy(() => InventoryManagementUpdateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedUpdateWithoutInventoryInputSchema) ]),
  create: z.union([ z.lazy(() => InventoryManagementCreateWithoutInventoryInputSchema),z.lazy(() => InventoryManagementUncheckedCreateWithoutInventoryInputSchema) ]),
}).strict();

export const InventoryManagementUpdateWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementUpdateWithoutInventoryInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional(),
  household: z.lazy(() => HouseholdUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedUpdateWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateWithoutInventoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  familyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StorageFacilityUpsertWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityUpsertWithoutInventoryInput> = z.object({
  update: z.union([ z.lazy(() => StorageFacilityUpdateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedUpdateWithoutInventoryInputSchema) ]),
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutInventoryInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutInventoryInputSchema) ]),
}).strict();

export const StorageFacilityUpdateWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityUpdateWithoutInventoryInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storedItems: z.lazy(() => StoredItemsUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedUpdateWithoutInventoryInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedUpdateWithoutInventoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  storedItems: z.lazy(() => StoredItemsUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const StoredItemsCreateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsCreateWithoutStorageFacilityInput> = z.object({
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int()
}).strict();

export const StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUncheckedCreateWithoutStorageFacilityInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int()
}).strict();

export const StoredItemsCreateOrConnectWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsCreateOrConnectWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => StoredItemsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const StoredItemsCreateManyStorageFacilityInputEnvelopeSchema: z.ZodType<Prisma.StoredItemsCreateManyStorageFacilityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => StoredItemsCreateManyStorageFacilityInputSchema),z.lazy(() => StoredItemsCreateManyStorageFacilityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InventoryCreateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryCreateWithoutStorageFacilityInput> = z.object({
  inventoryManagement: z.lazy(() => InventoryManagementCreateNestedOneWithoutInventoryInputSchema)
}).strict();

export const InventoryUncheckedCreateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUncheckedCreateWithoutStorageFacilityInput> = z.object({
  id: z.number().int().optional(),
  inventoryManagementId: z.number().int()
}).strict();

export const InventoryCreateOrConnectWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryCreateOrConnectWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const InventoryCreateManyStorageFacilityInputEnvelopeSchema: z.ZodType<Prisma.InventoryCreateManyStorageFacilityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InventoryCreateManyStorageFacilityInputSchema),z.lazy(() => InventoryCreateManyStorageFacilityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUpsertWithWhereUniqueWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => StoredItemsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => StoredItemsUpdateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedUpdateWithoutStorageFacilityInputSchema) ]),
  create: z.union([ z.lazy(() => StoredItemsCreateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedCreateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUpdateWithWhereUniqueWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => StoredItemsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => StoredItemsUpdateWithoutStorageFacilityInputSchema),z.lazy(() => StoredItemsUncheckedUpdateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const StoredItemsUpdateManyWithWhereWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUpdateManyWithWhereWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => StoredItemsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => StoredItemsUpdateManyMutationInputSchema),z.lazy(() => StoredItemsUncheckedUpdateManyWithoutStoredItemsInputSchema) ]),
}).strict();

export const StoredItemsScalarWhereInputSchema: z.ZodType<Prisma.StoredItemsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => StoredItemsScalarWhereInputSchema),z.lazy(() => StoredItemsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => StoredItemsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => StoredItemsScalarWhereInputSchema),z.lazy(() => StoredItemsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  expiry_date: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  purchase_date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  purchase_link: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  image_url: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  desired_quantity: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  quantity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  storageFacilityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const InventoryUpsertWithWhereUniqueWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUpsertWithWhereUniqueWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InventoryUpdateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedUpdateWithoutStorageFacilityInputSchema) ]),
  create: z.union([ z.lazy(() => InventoryCreateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedCreateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const InventoryUpdateWithWhereUniqueWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUpdateWithWhereUniqueWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => InventoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InventoryUpdateWithoutStorageFacilityInputSchema),z.lazy(() => InventoryUncheckedUpdateWithoutStorageFacilityInputSchema) ]),
}).strict();

export const InventoryUpdateManyWithWhereWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUpdateManyWithWhereWithoutStorageFacilityInput> = z.object({
  where: z.lazy(() => InventoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InventoryUpdateManyMutationInputSchema),z.lazy(() => InventoryUncheckedUpdateManyWithoutInventoryInputSchema) ]),
}).strict();

export const StorageFacilityCreateWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityCreateWithoutStoredItemsInput> = z.object({
  name: z.string(),
  location: z.string(),
  inventory: z.lazy(() => InventoryCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedCreateWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedCreateWithoutStoredItemsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  location: z.string(),
  inventory: z.lazy(() => InventoryUncheckedCreateNestedManyWithoutStorageFacilityInputSchema).optional()
}).strict();

export const StorageFacilityCreateOrConnectWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityCreateOrConnectWithoutStoredItemsInput> = z.object({
  where: z.lazy(() => StorageFacilityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutStoredItemsInputSchema) ]),
}).strict();

export const StorageFacilityUpsertWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityUpsertWithoutStoredItemsInput> = z.object({
  update: z.union([ z.lazy(() => StorageFacilityUpdateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedUpdateWithoutStoredItemsInputSchema) ]),
  create: z.union([ z.lazy(() => StorageFacilityCreateWithoutStoredItemsInputSchema),z.lazy(() => StorageFacilityUncheckedCreateWithoutStoredItemsInputSchema) ]),
}).strict();

export const StorageFacilityUpdateWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityUpdateWithoutStoredItemsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const StorageFacilityUncheckedUpdateWithoutStoredItemsInputSchema: z.ZodType<Prisma.StorageFacilityUncheckedUpdateWithoutStoredItemsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  location: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryUncheckedUpdateManyWithoutStorageFacilityNestedInputSchema).optional()
}).strict();

export const ProductsCreateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsCreateWithoutSupplierInput> = z.object({
  product: z.lazy(() => ProductCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const ProductsUncheckedCreateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateWithoutSupplierInput> = z.object({
  id: z.number().int().optional(),
  productId: z.number().int()
}).strict();

export const ProductsCreateOrConnectWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutSupplierInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema) ]),
}).strict();

export const ProductsCreateManySupplierInputEnvelopeSchema: z.ZodType<Prisma.ProductsCreateManySupplierInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductsCreateManySupplierInputSchema),z.lazy(() => ProductsCreateManySupplierInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductsUpsertWithWhereUniqueWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutSupplierInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductsUpdateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedUpdateWithoutSupplierInputSchema) ]),
  create: z.union([ z.lazy(() => ProductsCreateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutSupplierInputSchema) ]),
}).strict();

export const ProductsUpdateWithWhereUniqueWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutSupplierInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductsUpdateWithoutSupplierInputSchema),z.lazy(() => ProductsUncheckedUpdateWithoutSupplierInputSchema) ]),
}).strict();

export const ProductsUpdateManyWithWhereWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutSupplierInput> = z.object({
  where: z.lazy(() => ProductsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductsUpdateManyMutationInputSchema),z.lazy(() => ProductsUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const ProductsScalarWhereInputSchema: z.ZodType<Prisma.ProductsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProductsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProductsScalarWhereInputSchema),z.lazy(() => ProductsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  supplierId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  productId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const SupplierCreateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateWithoutProductsInput> = z.object({
  name: z.string(),
  address: z.string().optional().nullable()
}).strict();

export const SupplierUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  address: z.string().optional().nullable()
}).strict();

export const SupplierCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.SupplierCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => SupplierWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SupplierCreateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const ProductCreateWithoutProductsInputSchema: z.ZodType<Prisma.ProductCreateWithoutProductsInput> = z.object({
  name: z.string(),
  purchase_link: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  price: z.number().optional().nullable()
}).strict();

export const ProductUncheckedCreateWithoutProductsInputSchema: z.ZodType<Prisma.ProductUncheckedCreateWithoutProductsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  purchase_link: z.string().optional().nullable(),
  image_url: z.string().optional().nullable(),
  price: z.number().optional().nullable()
}).strict();

export const ProductCreateOrConnectWithoutProductsInputSchema: z.ZodType<Prisma.ProductCreateOrConnectWithoutProductsInput> = z.object({
  where: z.lazy(() => ProductWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const SupplierUpsertWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => SupplierUpdateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => SupplierCreateWithoutProductsInputSchema),z.lazy(() => SupplierUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const SupplierUpdateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const SupplierUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.SupplierUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductUpsertWithoutProductsInputSchema: z.ZodType<Prisma.ProductUpsertWithoutProductsInput> = z.object({
  update: z.union([ z.lazy(() => ProductUpdateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedUpdateWithoutProductsInputSchema) ]),
  create: z.union([ z.lazy(() => ProductCreateWithoutProductsInputSchema),z.lazy(() => ProductUncheckedCreateWithoutProductsInputSchema) ]),
}).strict();

export const ProductUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ProductUpdateWithoutProductsInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductUncheckedUpdateWithoutProductsInputSchema: z.ZodType<Prisma.ProductUncheckedUpdateWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image_url: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  price: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProductsCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductsCreateWithoutProductInput> = z.object({
  supplier: z.lazy(() => SupplierCreateNestedOneWithoutProductsInputSchema)
}).strict();

export const ProductsUncheckedCreateWithoutProductInputSchema: z.ZodType<Prisma.ProductsUncheckedCreateWithoutProductInput> = z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int()
}).strict();

export const ProductsCreateOrConnectWithoutProductInputSchema: z.ZodType<Prisma.ProductsCreateOrConnectWithoutProductInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ProductsCreateManyProductInputEnvelopeSchema: z.ZodType<Prisma.ProductsCreateManyProductInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProductsCreateManyProductInputSchema),z.lazy(() => ProductsCreateManyProductInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProductsUpsertWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductsUpsertWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProductsUpdateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedUpdateWithoutProductInputSchema) ]),
  create: z.union([ z.lazy(() => ProductsCreateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedCreateWithoutProductInputSchema) ]),
}).strict();

export const ProductsUpdateWithWhereUniqueWithoutProductInputSchema: z.ZodType<Prisma.ProductsUpdateWithWhereUniqueWithoutProductInput> = z.object({
  where: z.lazy(() => ProductsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProductsUpdateWithoutProductInputSchema),z.lazy(() => ProductsUncheckedUpdateWithoutProductInputSchema) ]),
}).strict();

export const ProductsUpdateManyWithWhereWithoutProductInputSchema: z.ZodType<Prisma.ProductsUpdateManyWithWhereWithoutProductInput> = z.object({
  where: z.lazy(() => ProductsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProductsUpdateManyMutationInputSchema),z.lazy(() => ProductsUncheckedUpdateManyWithoutProductsInputSchema) ]),
}).strict();

export const InventoryManagementCreateManyUserInputSchema: z.ZodType<Prisma.InventoryManagementCreateManyUserInput> = z.object({
  id: z.number().int().optional(),
  familyId: z.number().int()
}).strict();

export const InventoryManagementUpdateWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUpdateWithoutUserInput> = z.object({
  household: z.lazy(() => HouseholdUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional(),
  inventory: z.lazy(() => InventoryUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  familyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryUncheckedUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedUpdateManyWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateManyWithoutInventoryManagementInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  familyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryManagementCreateManyHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementCreateManyHouseholdInput> = z.object({
  id: z.number().int().optional(),
  userId: z.number().int()
}).strict();

export const InventoryManagementUpdateWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUpdateWithoutHouseholdInput> = z.object({
  user: z.lazy(() => UserUpdateOneRequiredWithoutInventoryManagementNestedInputSchema).optional(),
  inventory: z.lazy(() => InventoryUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const InventoryManagementUncheckedUpdateWithoutHouseholdInputSchema: z.ZodType<Prisma.InventoryManagementUncheckedUpdateWithoutHouseholdInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventory: z.lazy(() => InventoryUncheckedUpdateManyWithoutInventoryManagementNestedInputSchema).optional()
}).strict();

export const HouseholdCreateManyHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdCreateManyHousehold_addressInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export const UserCreateManyUser_addressInputSchema: z.ZodType<Prisma.UserCreateManyUser_addressInput> = z.object({
  id: z.number().int().optional(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  clerkId: z.string()
}).strict();

export const HouseholdUpdateWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUpdateWithoutHousehold_addressInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUpdateManyWithoutHouseholdNestedInputSchema).optional()
}).strict();

export const HouseholdUncheckedUpdateWithoutHousehold_addressInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateWithoutHousehold_addressInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutHouseholdNestedInputSchema).optional()
}).strict();

export const HouseholdUncheckedUpdateManyWithoutHouseholdInputSchema: z.ZodType<Prisma.HouseholdUncheckedUpdateManyWithoutHouseholdInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpdateWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUpdateWithoutUser_addressInput> = z.object({
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutUser_addressInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutUser_addressInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagement: z.lazy(() => InventoryManagementUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  first_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  last_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  clerkId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryCreateManyInventoryManagementInputSchema: z.ZodType<Prisma.InventoryCreateManyInventoryManagementInput> = z.object({
  id: z.number().int().optional(),
  storageFacilityId: z.number().int()
}).strict();

export const InventoryUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUpdateWithoutInventoryManagementInput> = z.object({
  storageFacility: z.lazy(() => StorageFacilityUpdateOneRequiredWithoutInventoryNestedInputSchema).optional()
}).strict();

export const InventoryUncheckedUpdateWithoutInventoryManagementInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateWithoutInventoryManagementInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryUncheckedUpdateManyWithoutInventoryInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateManyWithoutInventoryInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  storageFacilityId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsCreateManyStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsCreateManyStorageFacilityInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  expiry_date: z.coerce.date().optional().nullable(),
  purchase_date: z.coerce.date(),
  purchase_link: z.string(),
  image_url: z.string(),
  desired_quantity: z.number().int().optional().nullable(),
  quantity: z.number().int()
}).strict();

export const InventoryCreateManyStorageFacilityInputSchema: z.ZodType<Prisma.InventoryCreateManyStorageFacilityInput> = z.object({
  id: z.number().int().optional(),
  inventoryManagementId: z.number().int()
}).strict();

export const StoredItemsUpdateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUpdateWithoutStorageFacilityInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsUncheckedUpdateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.StoredItemsUncheckedUpdateWithoutStorageFacilityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StoredItemsUncheckedUpdateManyWithoutStoredItemsInputSchema: z.ZodType<Prisma.StoredItemsUncheckedUpdateManyWithoutStoredItemsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  expiry_date: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  purchase_date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  purchase_link: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  image_url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desired_quantity: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  quantity: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InventoryUpdateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUpdateWithoutStorageFacilityInput> = z.object({
  inventoryManagement: z.lazy(() => InventoryManagementUpdateOneRequiredWithoutInventoryNestedInputSchema).optional()
}).strict();

export const InventoryUncheckedUpdateWithoutStorageFacilityInputSchema: z.ZodType<Prisma.InventoryUncheckedUpdateWithoutStorageFacilityInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  inventoryManagementId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateManySupplierInputSchema: z.ZodType<Prisma.ProductsCreateManySupplierInput> = z.object({
  id: z.number().int().optional(),
  productId: z.number().int()
}).strict();

export const ProductsUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUpdateWithoutSupplierInput> = z.object({
  product: z.lazy(() => ProductUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductsUncheckedUpdateWithoutSupplierInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateWithoutSupplierInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsUncheckedUpdateManyWithoutProductsInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateManyWithoutProductsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  productId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProductsCreateManyProductInputSchema: z.ZodType<Prisma.ProductsCreateManyProductInput> = z.object({
  id: z.number().int().optional(),
  supplierId: z.number().int()
}).strict();

export const ProductsUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductsUpdateWithoutProductInput> = z.object({
  supplier: z.lazy(() => SupplierUpdateOneRequiredWithoutProductsNestedInputSchema).optional()
}).strict();

export const ProductsUncheckedUpdateWithoutProductInputSchema: z.ZodType<Prisma.ProductsUncheckedUpdateWithoutProductInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  supplierId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: UserScalarFieldEnumSchema.array().optional(),
}).strict()

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const HouseholdFindFirstArgsSchema: z.ZodType<Prisma.HouseholdFindFirstArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereInputSchema.optional(),
  orderBy: z.union([ HouseholdOrderByWithRelationInputSchema.array(),HouseholdOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseholdWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseholdScalarFieldEnumSchema.array().optional(),
}).strict()

export const HouseholdFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HouseholdFindFirstOrThrowArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereInputSchema.optional(),
  orderBy: z.union([ HouseholdOrderByWithRelationInputSchema.array(),HouseholdOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseholdWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseholdScalarFieldEnumSchema.array().optional(),
}).strict()

export const HouseholdFindManyArgsSchema: z.ZodType<Prisma.HouseholdFindManyArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereInputSchema.optional(),
  orderBy: z.union([ HouseholdOrderByWithRelationInputSchema.array(),HouseholdOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseholdWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: HouseholdScalarFieldEnumSchema.array().optional(),
}).strict()

export const HouseholdAggregateArgsSchema: z.ZodType<Prisma.HouseholdAggregateArgs> = z.object({
  where: HouseholdWhereInputSchema.optional(),
  orderBy: z.union([ HouseholdOrderByWithRelationInputSchema.array(),HouseholdOrderByWithRelationInputSchema ]).optional(),
  cursor: HouseholdWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const HouseholdGroupByArgsSchema: z.ZodType<Prisma.HouseholdGroupByArgs> = z.object({
  where: HouseholdWhereInputSchema.optional(),
  orderBy: z.union([ HouseholdOrderByWithAggregationInputSchema.array(),HouseholdOrderByWithAggregationInputSchema ]).optional(),
  by: HouseholdScalarFieldEnumSchema.array(),
  having: HouseholdScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const HouseholdFindUniqueArgsSchema: z.ZodType<Prisma.HouseholdFindUniqueArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereUniqueInputSchema,
}).strict()

export const HouseholdFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HouseholdFindUniqueOrThrowArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereUniqueInputSchema,
}).strict()

export const AddressFindFirstArgsSchema: z.ZodType<Prisma.AddressFindFirstArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AddressScalarFieldEnumSchema.array().optional(),
}).strict()

export const AddressFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AddressFindFirstOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AddressScalarFieldEnumSchema.array().optional(),
}).strict()

export const AddressFindManyArgsSchema: z.ZodType<Prisma.AddressFindManyArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: AddressScalarFieldEnumSchema.array().optional(),
}).strict()

export const AddressAggregateArgsSchema: z.ZodType<Prisma.AddressAggregateArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AddressGroupByArgsSchema: z.ZodType<Prisma.AddressGroupByArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithAggregationInputSchema.array(),AddressOrderByWithAggregationInputSchema ]).optional(),
  by: AddressScalarFieldEnumSchema.array(),
  having: AddressScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const AddressFindUniqueArgsSchema: z.ZodType<Prisma.AddressFindUniqueArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict()

export const AddressFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AddressFindUniqueOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict()

export const InventoryManagementFindFirstArgsSchema: z.ZodType<Prisma.InventoryManagementFindFirstArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereInputSchema.optional(),
  orderBy: z.union([ InventoryManagementOrderByWithRelationInputSchema.array(),InventoryManagementOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryManagementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryManagementScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryManagementFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryManagementFindFirstOrThrowArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereInputSchema.optional(),
  orderBy: z.union([ InventoryManagementOrderByWithRelationInputSchema.array(),InventoryManagementOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryManagementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryManagementScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryManagementFindManyArgsSchema: z.ZodType<Prisma.InventoryManagementFindManyArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereInputSchema.optional(),
  orderBy: z.union([ InventoryManagementOrderByWithRelationInputSchema.array(),InventoryManagementOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryManagementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryManagementScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryManagementAggregateArgsSchema: z.ZodType<Prisma.InventoryManagementAggregateArgs> = z.object({
  where: InventoryManagementWhereInputSchema.optional(),
  orderBy: z.union([ InventoryManagementOrderByWithRelationInputSchema.array(),InventoryManagementOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryManagementWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InventoryManagementGroupByArgsSchema: z.ZodType<Prisma.InventoryManagementGroupByArgs> = z.object({
  where: InventoryManagementWhereInputSchema.optional(),
  orderBy: z.union([ InventoryManagementOrderByWithAggregationInputSchema.array(),InventoryManagementOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryManagementScalarFieldEnumSchema.array(),
  having: InventoryManagementScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InventoryManagementFindUniqueArgsSchema: z.ZodType<Prisma.InventoryManagementFindUniqueArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereUniqueInputSchema,
}).strict()

export const InventoryManagementFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryManagementFindUniqueOrThrowArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereUniqueInputSchema,
}).strict()

export const InventoryFindFirstArgsSchema: z.ZodType<Prisma.InventoryFindFirstArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InventoryFindFirstOrThrowArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryFindManyArgsSchema: z.ZodType<Prisma.InventoryFindManyArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: InventoryScalarFieldEnumSchema.array().optional(),
}).strict()

export const InventoryAggregateArgsSchema: z.ZodType<Prisma.InventoryAggregateArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithRelationInputSchema.array(),InventoryOrderByWithRelationInputSchema ]).optional(),
  cursor: InventoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InventoryGroupByArgsSchema: z.ZodType<Prisma.InventoryGroupByArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
  orderBy: z.union([ InventoryOrderByWithAggregationInputSchema.array(),InventoryOrderByWithAggregationInputSchema ]).optional(),
  by: InventoryScalarFieldEnumSchema.array(),
  having: InventoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const InventoryFindUniqueArgsSchema: z.ZodType<Prisma.InventoryFindUniqueArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict()

export const InventoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InventoryFindUniqueOrThrowArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict()

export const StorageFacilityFindFirstArgsSchema: z.ZodType<Prisma.StorageFacilityFindFirstArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereInputSchema.optional(),
  orderBy: z.union([ StorageFacilityOrderByWithRelationInputSchema.array(),StorageFacilityOrderByWithRelationInputSchema ]).optional(),
  cursor: StorageFacilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StorageFacilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const StorageFacilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StorageFacilityFindFirstOrThrowArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereInputSchema.optional(),
  orderBy: z.union([ StorageFacilityOrderByWithRelationInputSchema.array(),StorageFacilityOrderByWithRelationInputSchema ]).optional(),
  cursor: StorageFacilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StorageFacilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const StorageFacilityFindManyArgsSchema: z.ZodType<Prisma.StorageFacilityFindManyArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereInputSchema.optional(),
  orderBy: z.union([ StorageFacilityOrderByWithRelationInputSchema.array(),StorageFacilityOrderByWithRelationInputSchema ]).optional(),
  cursor: StorageFacilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StorageFacilityScalarFieldEnumSchema.array().optional(),
}).strict()

export const StorageFacilityAggregateArgsSchema: z.ZodType<Prisma.StorageFacilityAggregateArgs> = z.object({
  where: StorageFacilityWhereInputSchema.optional(),
  orderBy: z.union([ StorageFacilityOrderByWithRelationInputSchema.array(),StorageFacilityOrderByWithRelationInputSchema ]).optional(),
  cursor: StorageFacilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StorageFacilityGroupByArgsSchema: z.ZodType<Prisma.StorageFacilityGroupByArgs> = z.object({
  where: StorageFacilityWhereInputSchema.optional(),
  orderBy: z.union([ StorageFacilityOrderByWithAggregationInputSchema.array(),StorageFacilityOrderByWithAggregationInputSchema ]).optional(),
  by: StorageFacilityScalarFieldEnumSchema.array(),
  having: StorageFacilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StorageFacilityFindUniqueArgsSchema: z.ZodType<Prisma.StorageFacilityFindUniqueArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereUniqueInputSchema,
}).strict()

export const StorageFacilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StorageFacilityFindUniqueOrThrowArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereUniqueInputSchema,
}).strict()

export const StoredItemsFindFirstArgsSchema: z.ZodType<Prisma.StoredItemsFindFirstArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereInputSchema.optional(),
  orderBy: z.union([ StoredItemsOrderByWithRelationInputSchema.array(),StoredItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: StoredItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoredItemsScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoredItemsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.StoredItemsFindFirstOrThrowArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereInputSchema.optional(),
  orderBy: z.union([ StoredItemsOrderByWithRelationInputSchema.array(),StoredItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: StoredItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoredItemsScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoredItemsFindManyArgsSchema: z.ZodType<Prisma.StoredItemsFindManyArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereInputSchema.optional(),
  orderBy: z.union([ StoredItemsOrderByWithRelationInputSchema.array(),StoredItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: StoredItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: StoredItemsScalarFieldEnumSchema.array().optional(),
}).strict()

export const StoredItemsAggregateArgsSchema: z.ZodType<Prisma.StoredItemsAggregateArgs> = z.object({
  where: StoredItemsWhereInputSchema.optional(),
  orderBy: z.union([ StoredItemsOrderByWithRelationInputSchema.array(),StoredItemsOrderByWithRelationInputSchema ]).optional(),
  cursor: StoredItemsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StoredItemsGroupByArgsSchema: z.ZodType<Prisma.StoredItemsGroupByArgs> = z.object({
  where: StoredItemsWhereInputSchema.optional(),
  orderBy: z.union([ StoredItemsOrderByWithAggregationInputSchema.array(),StoredItemsOrderByWithAggregationInputSchema ]).optional(),
  by: StoredItemsScalarFieldEnumSchema.array(),
  having: StoredItemsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const StoredItemsFindUniqueArgsSchema: z.ZodType<Prisma.StoredItemsFindUniqueArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereUniqueInputSchema,
}).strict()

export const StoredItemsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.StoredItemsFindUniqueOrThrowArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereUniqueInputSchema,
}).strict()

export const SupplierFindFirstArgsSchema: z.ZodType<Prisma.SupplierFindFirstArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereInputSchema.optional(),
  orderBy: z.union([ SupplierOrderByWithRelationInputSchema.array(),SupplierOrderByWithRelationInputSchema ]).optional(),
  cursor: SupplierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SupplierScalarFieldEnumSchema.array().optional(),
}).strict()

export const SupplierFindFirstOrThrowArgsSchema: z.ZodType<Prisma.SupplierFindFirstOrThrowArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereInputSchema.optional(),
  orderBy: z.union([ SupplierOrderByWithRelationInputSchema.array(),SupplierOrderByWithRelationInputSchema ]).optional(),
  cursor: SupplierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SupplierScalarFieldEnumSchema.array().optional(),
}).strict()

export const SupplierFindManyArgsSchema: z.ZodType<Prisma.SupplierFindManyArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereInputSchema.optional(),
  orderBy: z.union([ SupplierOrderByWithRelationInputSchema.array(),SupplierOrderByWithRelationInputSchema ]).optional(),
  cursor: SupplierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: SupplierScalarFieldEnumSchema.array().optional(),
}).strict()

export const SupplierAggregateArgsSchema: z.ZodType<Prisma.SupplierAggregateArgs> = z.object({
  where: SupplierWhereInputSchema.optional(),
  orderBy: z.union([ SupplierOrderByWithRelationInputSchema.array(),SupplierOrderByWithRelationInputSchema ]).optional(),
  cursor: SupplierWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SupplierGroupByArgsSchema: z.ZodType<Prisma.SupplierGroupByArgs> = z.object({
  where: SupplierWhereInputSchema.optional(),
  orderBy: z.union([ SupplierOrderByWithAggregationInputSchema.array(),SupplierOrderByWithAggregationInputSchema ]).optional(),
  by: SupplierScalarFieldEnumSchema.array(),
  having: SupplierScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const SupplierFindUniqueArgsSchema: z.ZodType<Prisma.SupplierFindUniqueArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereUniqueInputSchema,
}).strict()

export const SupplierFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.SupplierFindUniqueOrThrowArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereUniqueInputSchema,
}).strict()

export const ProductsFindFirstArgsSchema: z.ZodType<Prisma.ProductsFindFirstArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductsFindFirstOrThrowArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductsFindManyArgsSchema: z.ZodType<Prisma.ProductsFindManyArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductsScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductsAggregateArgsSchema: z.ZodType<Prisma.ProductsAggregateArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithRelationInputSchema.array(),ProductsOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductsGroupByArgsSchema: z.ZodType<Prisma.ProductsGroupByArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
  orderBy: z.union([ ProductsOrderByWithAggregationInputSchema.array(),ProductsOrderByWithAggregationInputSchema ]).optional(),
  by: ProductsScalarFieldEnumSchema.array(),
  having: ProductsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductsFindUniqueArgsSchema: z.ZodType<Prisma.ProductsFindUniqueArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict()

export const ProductsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductsFindUniqueOrThrowArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict()

export const ProductFindFirstArgsSchema: z.ZodType<Prisma.ProductFindFirstArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProductFindFirstOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductFindManyArgsSchema: z.ZodType<Prisma.ProductFindManyArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: ProductScalarFieldEnumSchema.array().optional(),
}).strict()

export const ProductAggregateArgsSchema: z.ZodType<Prisma.ProductAggregateArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithRelationInputSchema.array(),ProductOrderByWithRelationInputSchema ]).optional(),
  cursor: ProductWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductGroupByArgsSchema: z.ZodType<Prisma.ProductGroupByArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
  orderBy: z.union([ ProductOrderByWithAggregationInputSchema.array(),ProductOrderByWithAggregationInputSchema ]).optional(),
  by: ProductScalarFieldEnumSchema.array(),
  having: ProductScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict()

export const ProductFindUniqueArgsSchema: z.ZodType<Prisma.ProductFindUniqueArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProductFindUniqueOrThrowArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict()

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict()

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict()

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict()

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict()

export const HouseholdCreateArgsSchema: z.ZodType<Prisma.HouseholdCreateArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  data: z.union([ HouseholdCreateInputSchema,HouseholdUncheckedCreateInputSchema ]),
}).strict()

export const HouseholdUpsertArgsSchema: z.ZodType<Prisma.HouseholdUpsertArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereUniqueInputSchema,
  create: z.union([ HouseholdCreateInputSchema,HouseholdUncheckedCreateInputSchema ]),
  update: z.union([ HouseholdUpdateInputSchema,HouseholdUncheckedUpdateInputSchema ]),
}).strict()

export const HouseholdCreateManyArgsSchema: z.ZodType<Prisma.HouseholdCreateManyArgs> = z.object({
  data: z.union([ HouseholdCreateManyInputSchema,HouseholdCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const HouseholdDeleteArgsSchema: z.ZodType<Prisma.HouseholdDeleteArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  where: HouseholdWhereUniqueInputSchema,
}).strict()

export const HouseholdUpdateArgsSchema: z.ZodType<Prisma.HouseholdUpdateArgs> = z.object({
  select: HouseholdSelectSchema.optional(),
  include: HouseholdIncludeSchema.optional(),
  data: z.union([ HouseholdUpdateInputSchema,HouseholdUncheckedUpdateInputSchema ]),
  where: HouseholdWhereUniqueInputSchema,
}).strict()

export const HouseholdUpdateManyArgsSchema: z.ZodType<Prisma.HouseholdUpdateManyArgs> = z.object({
  data: z.union([ HouseholdUpdateManyMutationInputSchema,HouseholdUncheckedUpdateManyInputSchema ]),
  where: HouseholdWhereInputSchema.optional(),
}).strict()

export const HouseholdDeleteManyArgsSchema: z.ZodType<Prisma.HouseholdDeleteManyArgs> = z.object({
  where: HouseholdWhereInputSchema.optional(),
}).strict()

export const AddressCreateArgsSchema: z.ZodType<Prisma.AddressCreateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
}).strict()

export const AddressUpsertArgsSchema: z.ZodType<Prisma.AddressUpsertArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
  create: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
  update: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
}).strict()

export const AddressCreateManyArgsSchema: z.ZodType<Prisma.AddressCreateManyArgs> = z.object({
  data: z.union([ AddressCreateManyInputSchema,AddressCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const AddressDeleteArgsSchema: z.ZodType<Prisma.AddressDeleteArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict()

export const AddressUpdateArgsSchema: z.ZodType<Prisma.AddressUpdateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
  where: AddressWhereUniqueInputSchema,
}).strict()

export const AddressUpdateManyArgsSchema: z.ZodType<Prisma.AddressUpdateManyArgs> = z.object({
  data: z.union([ AddressUpdateManyMutationInputSchema,AddressUncheckedUpdateManyInputSchema ]),
  where: AddressWhereInputSchema.optional(),
}).strict()

export const AddressDeleteManyArgsSchema: z.ZodType<Prisma.AddressDeleteManyArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
}).strict()

export const InventoryManagementCreateArgsSchema: z.ZodType<Prisma.InventoryManagementCreateArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  data: z.union([ InventoryManagementCreateInputSchema,InventoryManagementUncheckedCreateInputSchema ]),
}).strict()

export const InventoryManagementUpsertArgsSchema: z.ZodType<Prisma.InventoryManagementUpsertArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereUniqueInputSchema,
  create: z.union([ InventoryManagementCreateInputSchema,InventoryManagementUncheckedCreateInputSchema ]),
  update: z.union([ InventoryManagementUpdateInputSchema,InventoryManagementUncheckedUpdateInputSchema ]),
}).strict()

export const InventoryManagementCreateManyArgsSchema: z.ZodType<Prisma.InventoryManagementCreateManyArgs> = z.object({
  data: z.union([ InventoryManagementCreateManyInputSchema,InventoryManagementCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InventoryManagementDeleteArgsSchema: z.ZodType<Prisma.InventoryManagementDeleteArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  where: InventoryManagementWhereUniqueInputSchema,
}).strict()

export const InventoryManagementUpdateArgsSchema: z.ZodType<Prisma.InventoryManagementUpdateArgs> = z.object({
  select: InventoryManagementSelectSchema.optional(),
  include: InventoryManagementIncludeSchema.optional(),
  data: z.union([ InventoryManagementUpdateInputSchema,InventoryManagementUncheckedUpdateInputSchema ]),
  where: InventoryManagementWhereUniqueInputSchema,
}).strict()

export const InventoryManagementUpdateManyArgsSchema: z.ZodType<Prisma.InventoryManagementUpdateManyArgs> = z.object({
  data: z.union([ InventoryManagementUpdateManyMutationInputSchema,InventoryManagementUncheckedUpdateManyInputSchema ]),
  where: InventoryManagementWhereInputSchema.optional(),
}).strict()

export const InventoryManagementDeleteManyArgsSchema: z.ZodType<Prisma.InventoryManagementDeleteManyArgs> = z.object({
  where: InventoryManagementWhereInputSchema.optional(),
}).strict()

export const InventoryCreateArgsSchema: z.ZodType<Prisma.InventoryCreateArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  data: z.union([ InventoryCreateInputSchema,InventoryUncheckedCreateInputSchema ]),
}).strict()

export const InventoryUpsertArgsSchema: z.ZodType<Prisma.InventoryUpsertArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
  create: z.union([ InventoryCreateInputSchema,InventoryUncheckedCreateInputSchema ]),
  update: z.union([ InventoryUpdateInputSchema,InventoryUncheckedUpdateInputSchema ]),
}).strict()

export const InventoryCreateManyArgsSchema: z.ZodType<Prisma.InventoryCreateManyArgs> = z.object({
  data: z.union([ InventoryCreateManyInputSchema,InventoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const InventoryDeleteArgsSchema: z.ZodType<Prisma.InventoryDeleteArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  where: InventoryWhereUniqueInputSchema,
}).strict()

export const InventoryUpdateArgsSchema: z.ZodType<Prisma.InventoryUpdateArgs> = z.object({
  select: InventorySelectSchema.optional(),
  include: InventoryIncludeSchema.optional(),
  data: z.union([ InventoryUpdateInputSchema,InventoryUncheckedUpdateInputSchema ]),
  where: InventoryWhereUniqueInputSchema,
}).strict()

export const InventoryUpdateManyArgsSchema: z.ZodType<Prisma.InventoryUpdateManyArgs> = z.object({
  data: z.union([ InventoryUpdateManyMutationInputSchema,InventoryUncheckedUpdateManyInputSchema ]),
  where: InventoryWhereInputSchema.optional(),
}).strict()

export const InventoryDeleteManyArgsSchema: z.ZodType<Prisma.InventoryDeleteManyArgs> = z.object({
  where: InventoryWhereInputSchema.optional(),
}).strict()

export const StorageFacilityCreateArgsSchema: z.ZodType<Prisma.StorageFacilityCreateArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  data: z.union([ StorageFacilityCreateInputSchema,StorageFacilityUncheckedCreateInputSchema ]),
}).strict()

export const StorageFacilityUpsertArgsSchema: z.ZodType<Prisma.StorageFacilityUpsertArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereUniqueInputSchema,
  create: z.union([ StorageFacilityCreateInputSchema,StorageFacilityUncheckedCreateInputSchema ]),
  update: z.union([ StorageFacilityUpdateInputSchema,StorageFacilityUncheckedUpdateInputSchema ]),
}).strict()

export const StorageFacilityCreateManyArgsSchema: z.ZodType<Prisma.StorageFacilityCreateManyArgs> = z.object({
  data: z.union([ StorageFacilityCreateManyInputSchema,StorageFacilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const StorageFacilityDeleteArgsSchema: z.ZodType<Prisma.StorageFacilityDeleteArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  where: StorageFacilityWhereUniqueInputSchema,
}).strict()

export const StorageFacilityUpdateArgsSchema: z.ZodType<Prisma.StorageFacilityUpdateArgs> = z.object({
  select: StorageFacilitySelectSchema.optional(),
  include: StorageFacilityIncludeSchema.optional(),
  data: z.union([ StorageFacilityUpdateInputSchema,StorageFacilityUncheckedUpdateInputSchema ]),
  where: StorageFacilityWhereUniqueInputSchema,
}).strict()

export const StorageFacilityUpdateManyArgsSchema: z.ZodType<Prisma.StorageFacilityUpdateManyArgs> = z.object({
  data: z.union([ StorageFacilityUpdateManyMutationInputSchema,StorageFacilityUncheckedUpdateManyInputSchema ]),
  where: StorageFacilityWhereInputSchema.optional(),
}).strict()

export const StorageFacilityDeleteManyArgsSchema: z.ZodType<Prisma.StorageFacilityDeleteManyArgs> = z.object({
  where: StorageFacilityWhereInputSchema.optional(),
}).strict()

export const StoredItemsCreateArgsSchema: z.ZodType<Prisma.StoredItemsCreateArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  data: z.union([ StoredItemsCreateInputSchema,StoredItemsUncheckedCreateInputSchema ]),
}).strict()

export const StoredItemsUpsertArgsSchema: z.ZodType<Prisma.StoredItemsUpsertArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereUniqueInputSchema,
  create: z.union([ StoredItemsCreateInputSchema,StoredItemsUncheckedCreateInputSchema ]),
  update: z.union([ StoredItemsUpdateInputSchema,StoredItemsUncheckedUpdateInputSchema ]),
}).strict()

export const StoredItemsCreateManyArgsSchema: z.ZodType<Prisma.StoredItemsCreateManyArgs> = z.object({
  data: z.union([ StoredItemsCreateManyInputSchema,StoredItemsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const StoredItemsDeleteArgsSchema: z.ZodType<Prisma.StoredItemsDeleteArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  where: StoredItemsWhereUniqueInputSchema,
}).strict()

export const StoredItemsUpdateArgsSchema: z.ZodType<Prisma.StoredItemsUpdateArgs> = z.object({
  select: StoredItemsSelectSchema.optional(),
  include: StoredItemsIncludeSchema.optional(),
  data: z.union([ StoredItemsUpdateInputSchema,StoredItemsUncheckedUpdateInputSchema ]),
  where: StoredItemsWhereUniqueInputSchema,
}).strict()

export const StoredItemsUpdateManyArgsSchema: z.ZodType<Prisma.StoredItemsUpdateManyArgs> = z.object({
  data: z.union([ StoredItemsUpdateManyMutationInputSchema,StoredItemsUncheckedUpdateManyInputSchema ]),
  where: StoredItemsWhereInputSchema.optional(),
}).strict()

export const StoredItemsDeleteManyArgsSchema: z.ZodType<Prisma.StoredItemsDeleteManyArgs> = z.object({
  where: StoredItemsWhereInputSchema.optional(),
}).strict()

export const SupplierCreateArgsSchema: z.ZodType<Prisma.SupplierCreateArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  data: z.union([ SupplierCreateInputSchema,SupplierUncheckedCreateInputSchema ]),
}).strict()

export const SupplierUpsertArgsSchema: z.ZodType<Prisma.SupplierUpsertArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereUniqueInputSchema,
  create: z.union([ SupplierCreateInputSchema,SupplierUncheckedCreateInputSchema ]),
  update: z.union([ SupplierUpdateInputSchema,SupplierUncheckedUpdateInputSchema ]),
}).strict()

export const SupplierCreateManyArgsSchema: z.ZodType<Prisma.SupplierCreateManyArgs> = z.object({
  data: z.union([ SupplierCreateManyInputSchema,SupplierCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const SupplierDeleteArgsSchema: z.ZodType<Prisma.SupplierDeleteArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  where: SupplierWhereUniqueInputSchema,
}).strict()

export const SupplierUpdateArgsSchema: z.ZodType<Prisma.SupplierUpdateArgs> = z.object({
  select: SupplierSelectSchema.optional(),
  include: SupplierIncludeSchema.optional(),
  data: z.union([ SupplierUpdateInputSchema,SupplierUncheckedUpdateInputSchema ]),
  where: SupplierWhereUniqueInputSchema,
}).strict()

export const SupplierUpdateManyArgsSchema: z.ZodType<Prisma.SupplierUpdateManyArgs> = z.object({
  data: z.union([ SupplierUpdateManyMutationInputSchema,SupplierUncheckedUpdateManyInputSchema ]),
  where: SupplierWhereInputSchema.optional(),
}).strict()

export const SupplierDeleteManyArgsSchema: z.ZodType<Prisma.SupplierDeleteManyArgs> = z.object({
  where: SupplierWhereInputSchema.optional(),
}).strict()

export const ProductsCreateArgsSchema: z.ZodType<Prisma.ProductsCreateArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  data: z.union([ ProductsCreateInputSchema,ProductsUncheckedCreateInputSchema ]),
}).strict()

export const ProductsUpsertArgsSchema: z.ZodType<Prisma.ProductsUpsertArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
  create: z.union([ ProductsCreateInputSchema,ProductsUncheckedCreateInputSchema ]),
  update: z.union([ ProductsUpdateInputSchema,ProductsUncheckedUpdateInputSchema ]),
}).strict()

export const ProductsCreateManyArgsSchema: z.ZodType<Prisma.ProductsCreateManyArgs> = z.object({
  data: z.union([ ProductsCreateManyInputSchema,ProductsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductsDeleteArgsSchema: z.ZodType<Prisma.ProductsDeleteArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  where: ProductsWhereUniqueInputSchema,
}).strict()

export const ProductsUpdateArgsSchema: z.ZodType<Prisma.ProductsUpdateArgs> = z.object({
  select: ProductsSelectSchema.optional(),
  include: ProductsIncludeSchema.optional(),
  data: z.union([ ProductsUpdateInputSchema,ProductsUncheckedUpdateInputSchema ]),
  where: ProductsWhereUniqueInputSchema,
}).strict()

export const ProductsUpdateManyArgsSchema: z.ZodType<Prisma.ProductsUpdateManyArgs> = z.object({
  data: z.union([ ProductsUpdateManyMutationInputSchema,ProductsUncheckedUpdateManyInputSchema ]),
  where: ProductsWhereInputSchema.optional(),
}).strict()

export const ProductsDeleteManyArgsSchema: z.ZodType<Prisma.ProductsDeleteManyArgs> = z.object({
  where: ProductsWhereInputSchema.optional(),
}).strict()

export const ProductCreateArgsSchema: z.ZodType<Prisma.ProductCreateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
}).strict()

export const ProductUpsertArgsSchema: z.ZodType<Prisma.ProductUpsertArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
  create: z.union([ ProductCreateInputSchema,ProductUncheckedCreateInputSchema ]),
  update: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
}).strict()

export const ProductCreateManyArgsSchema: z.ZodType<Prisma.ProductCreateManyArgs> = z.object({
  data: z.union([ ProductCreateManyInputSchema,ProductCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export const ProductDeleteArgsSchema: z.ZodType<Prisma.ProductDeleteArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateArgsSchema: z.ZodType<Prisma.ProductUpdateArgs> = z.object({
  select: ProductSelectSchema.optional(),
  include: ProductIncludeSchema.optional(),
  data: z.union([ ProductUpdateInputSchema,ProductUncheckedUpdateInputSchema ]),
  where: ProductWhereUniqueInputSchema,
}).strict()

export const ProductUpdateManyArgsSchema: z.ZodType<Prisma.ProductUpdateManyArgs> = z.object({
  data: z.union([ ProductUpdateManyMutationInputSchema,ProductUncheckedUpdateManyInputSchema ]),
  where: ProductWhereInputSchema.optional(),
}).strict()

export const ProductDeleteManyArgsSchema: z.ZodType<Prisma.ProductDeleteManyArgs> = z.object({
  where: ProductWhereInputSchema.optional(),
}).strict()