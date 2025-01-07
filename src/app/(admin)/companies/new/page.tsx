/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';

import React from 'react';
import CompanyForm from '@/app/components/company-form';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}
