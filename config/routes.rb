Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    get '/search_locations/:input', to: 'search#search_locations'
    get '/confirm_route/convert_lat_long/:location', to: 'confirm_route#get_lat_long'
    get '/confirm_route/mapbox', to: 'confirm_route#mapbox'
  end
end
