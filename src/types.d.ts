export default interface Service{
  name: string
  description: string
  price: number
  category: string
  serviceProvider: string
  avg_rating: number
  total_reviews: number
  total_bookings: number
}

interface FAQ{
  question: string
  answer: string
}


interface Review{
  username: string
  rating: number
  description: string
  created_at: string
  updated_at: string | null
}