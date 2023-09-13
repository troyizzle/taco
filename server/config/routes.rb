# frozen_string_literal: true

Rails.application.routes.draw do
  mount Rswag::Ui::Engine => '/api-docs'
  mount Rswag::Api::Engine => '/api-docs'

  devise_for :users, defaults: { format: :json }

  namespace :api do
    namespace :v1 do
      resources :reviews
    end
  end
end
