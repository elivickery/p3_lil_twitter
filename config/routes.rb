Rails.application.routes.draw do
  mount JasmineRails::Engine => '/specs' if defined?(JasmineRails)

  get 'tweets/recent', to: 'tweets#recent'
  get 'tweets/search/:keyword', to: 'tweets#search'
  post 'tweets', to: 'tweets#create'
  get 'hashtags/popular', to: 'hashtags#popular'

  root to: 'pages#home'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
