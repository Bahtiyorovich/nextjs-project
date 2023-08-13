export interface IMovie {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
    name: string
    original_name: string
  }

  export interface Element {
    type: 'Trailer' | 'Clip' | 'Opening Credits' | 'Behind the Scenes'
  }

  export interface Products {
    default_price: {
      id: string,
      unit_amount: number,
    },
    id:string,
    images:string[],
    metadata:{
      adv:string
    },
    name: string,
  }
  
  export interface Subscription {
    current_period_start: number,
    id: string,
    current_period_end: number,
    plan: {
      nickname: string,
      amount: boolean,
      active: boolean
    },
    default_payment_method: {
      card: {
        brand: string,
        exp_month: number,
        exp_year: number,
        last4: number
      }
    },
    customer: {
      email: string;
      metadata: {
        user_id: string
      }
    }
  }

export interface MyMovies {
  userId: string,
  product: IMovie,
}