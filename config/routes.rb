Rails.application.routes.draw do
  scope(:path => '/api') do
    get '/search_start/:input', to: 'search#search_start'
  end
end
