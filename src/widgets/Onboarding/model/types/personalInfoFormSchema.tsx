import { z } from 'zod';
import { ErrorMessage } from '@/shared/lib/helpers/errorMessages';

export const personalInfoFormSchema = z.object({
    firstName: z.string().min(1, { message: ErrorMessage.getRequiredErrorFieldMessage() }),
    lastName: z.string().min(1, { message: ErrorMessage.getRequiredErrorFieldMessage() }),
    middleName: z.string().min(1, { message: ErrorMessage.getRequiredErrorFieldMessage() }),
    email: z.string().min(1, { message: ErrorMessage.getRequiredErrorFieldMessage() }).email({
        message: ErrorMessage.getEmailErrorFieldMessage(),
    }),
    phone: z
        .optional(
            z
                .string()
                .min(11, { message: ErrorMessage.getPhoneErrorFieldMessage() })
                .max(11, { message: ErrorMessage.getPhoneErrorFieldMessage() })
                .refine((value) => !Number.isNaN(Number(value)), ErrorMessage.getPhoneErrorFieldMessage()),
        )
        .optional()
        .or(z.literal('')),
    contacts: z.string(),
});

export type PersonalInfoFormSchema = z.infer<typeof personalInfoFormSchema>;
