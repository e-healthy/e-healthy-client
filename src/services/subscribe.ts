export type TSubscribe = {
  email: string;
  terms: boolean;
  communications?: boolean;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const subscribe = async ({
  email,
  terms,
  communications,
}: TSubscribe) => {
  try {
    const response = await fetch(`${BASE_URL}/emails`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, terms, communications }),
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
