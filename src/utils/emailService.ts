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
    const response = await fetch('/api/send-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(quoteData),
    })

    if (!response.ok) {
      throw new Error('Failed to send quote request')
    }

    return true
  } catch (error) {
    console.error('Error sending quote request:', error)
    return false
  }
}