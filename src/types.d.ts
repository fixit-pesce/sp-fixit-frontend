export interface Service {
  name: string
  description: string
  price: number
  category: string
  serviceProvider: string
  avg_rating: number
  total_reviews: number
  total_bookings: number
}

export interface FAQ {
  question: string
  answer: string
}

export interface Review {
  username: string
  rating: number
  description: string
  created_at: string
  updated_at: string | null
}

export interface Category {
  name: string
  icon: SVGElement
}

export interface serviceProvider {
  email: string
  username: string
  company_name: string
}

export interface Booking {
  service_name: string
  company_name: string
  category: string
  price: number
  username: string
  phone_no: string
  payment_method: {
    type: string
    card_no: string
  }
  booking_id: string
  status: string
  booked_at: string
  completed_at: string
}
