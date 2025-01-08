'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: Promise<{ id: string }>;
}

export default function Page({ params }: PageProps) {
  const router = useRouter();

  params.then((resolvedParams) => {
    console.log(resolvedParams);
  });

  return (
    <PromotionFormModal
      companyId="loading" // Placeholder until params resolve
      show={true}
      onClose={() => router.back()}
    />
  );
}
