import { User, UserSchema } from "prisma/generated/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { NextPage } from "next";
import Link from "next/link";

interface HouseholdProps {}

const Household: NextPage = () => {
  return (
    <div>
      <Link href="/households/add">add household</Link>
    </div>
  );
};

export default Household;
