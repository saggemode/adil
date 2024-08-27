'use client'

import { useTransition, useState } from 'react'
import { updateProfile } from '@/actions/services/userService'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { InputForm } from '@/components/ui/input-form'
import { useToast } from '@/components/ui/use-toast'
import { updateProfileSchema } from '@/schemas'

import { zodResolver } from '@hookform/resolvers/zod'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const ProfileForm = () => {
  const { data: session, update } = useSession()

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: session?.user.name!,
      email: session?.user.email!,
      phone: session?.user.phone!,
    },
  })
  const { toast } = useToast()

  async function onSubmit(values: z.infer<typeof updateProfileSchema>) {
    const res = await updateProfile(values)
    if (!res.success)
      return toast({
        variant: 'destructive',
        description: res.message,
      })

    const newSession = {
      ...session,
      user: {
        ...session?.user,
        name: values.name,
        phone: values.phone,
      },
    }
    await update(newSession)
    toast({
      description: res.message,
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5">
          <InputForm
            control={form.control}
            name="name"
            label="Name"
            placeholder="Product Name"
            disabled={form.formState.isSubmitting}
          />

          <InputForm
            control={form.control}
            name="email"
            label="Email"
            placeholder="Email"
            disabled
          />

          <InputForm
            control={form.control}
            name="phone"
            label="Phone"
            placeholder="phone number"
            disabled={form.formState.isSubmitting}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? 'Submitting...' : 'Update Profile'}
        </Button>
      </form>
    </Form>
  )
}

export default ProfileForm
