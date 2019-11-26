declare global {
  type IQuickScanResult = {
    person?: {
      name: string;
      email: string;
      role: string;
      phone: string;
    };
    company?: {
      companyName: string;
      website: string;
      sector: string;
      region: string;
      employeeCount: number;
    };
    answers: {
      [name: string]: number;
    };
    comment?: string;
  };
}

export {};