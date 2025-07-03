export interface QuoteRequest {
  productName: string
  customerName: string
  customerEmail: string
  customerPhone?: string
  company?: string
  message?: string
  quantity?: string
}

export const sendQuoteRequest = async (quoteData: QuoteRequest): Promise<boolean> => {
  try {
    console.log('Sending quote request:', quoteData);
    
    const response = await fetch('/api/send-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    })

    const result = await response.json();
    console.log('API Response:', result);

    if (!response.ok) {
      console.error('API Error:', result);
      throw new Error(result.error || 'Failed to send quote request')
    }

    console.log('Quote request sent successfully');
    return true
  } catch (error) {
    console.error('Error sending quote request:', error)
    return false
  }
}