Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root "doctors#index"

  resources :doctors do
    resources :users 
  end

  resources :users do
    resources :appointments
  end

  get '/all', to:'doctors#all'

end
