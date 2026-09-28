import { Product, ProductSize, ProductVariant } from '../data/products';
import { siteConfig } from '../config/site';

export interface CartItem {
  id: string; // unique ID for cart item
  product: Product;
  size: ProductSize;
  variant?: ProductVariant;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  address: string;
  city: string;
  notes: string;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
};

export const buildOrderMessage = (items: CartItem[], customer: CustomerDetails): string => {
  let message = `*New Order – ${siteConfig.name}*\n━━━━━━━━━━━━━━\n`;
  let totalPrice = 0;
  let hasPriceOnRequest = false;

  items.forEach((item, index) => {
    const itemName = item.variant ? `${item.product.name} (${item.variant.name})` : item.product.name;
    message += `${index + 1}) ${itemName}\n`;
    
    if (item.size.mrp !== null) {
      const itemTotal = item.size.mrp * item.quantity;
      totalPrice += itemTotal;
      message += `   Size: ${item.size.label} | Qty: ${item.quantity} | MRP: ${formatCurrency(item.size.mrp)} | Total: ${formatCurrency(itemTotal)}\n`;
    } else {
      hasPriceOnRequest = true;
      message += `   Size: ${item.size.label} | Qty: ${item.quantity} | Price: On request\n`;
    }
  });

  message += `━━━━━━━━━━━━━━\n`;
  if (totalPrice > 0) {
    message += `*Estimated Total (priced items): ${formatCurrency(totalPrice)}*\n`;
  }
  
  if (hasPriceOnRequest) {
    message += `(Items with "on request" pricing will be confirmed by HECTO)\n`;
  }
  
  message += `\n*Customer Details*\n`;
  message += `Name: ${customer.name}\n`;
  message += `Phone: ${customer.phone}\n`;
  message += `Address: ${customer.address}, ${customer.city}\n`;
  
  if (customer.notes) {
    message += `Notes: ${customer.notes}\n`;
  }

  return message;
};

export const buildSingleProductMessage = (product: Product, size: ProductSize, quantity: number, variant?: ProductVariant): string => {
  let message = `*Enquiry – ${siteConfig.name}*\n━━━━━━━━━━━━━━\n`;
  const itemName = variant ? `${product.name} (${variant.name})` : product.name;
  
  message += `I would like to order:\n`;
  message += `Product: ${itemName}\n`;
  message += `Size: ${size.label}\n`;
  message += `Qty: ${quantity}\n`;
  
  if (size.mrp !== null) {
    message += `MRP: ${formatCurrency(size.mrp)}\n`;
    message += `Total: ${formatCurrency(size.mrp * quantity)}\n`;
  } else {
    message += `Price: On request\n`;
  }
  
  message += `━━━━━━━━━━━━━━\n`;
  message += `Please confirm availability and delivery details.`;
  
  return message;
};

export const sendWhatsAppMessage = (message: string) => {
  const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
