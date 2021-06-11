Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    resources :doctors do
     resources :appointments
    end

    resources :users
    resources :doctors
  end
end