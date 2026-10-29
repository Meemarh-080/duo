const WHATSAPP_NUMBER = '2347068897971'

export function openWhatsAppOrder(productName, price) {
  const message = price
    ? `Hello Hapsat Duo, I would like to order ${productName} for ${price}.`
    : `Hello Hapsat Duo, I would like to order ${productName}.`
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank', 'noopener,noreferrer')
}
