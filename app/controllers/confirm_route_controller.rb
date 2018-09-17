class ConfirmRouteController < ApplicationController
    require "uri"

    def get_lat_long
        location = URI.encode(params[:location])
        response = RestClient::Request.execute(
            method: :get,
            url: "https://api.mapbox.com/geocoding/v5/mapbox.places/#{location}.json?access_token=#{ENV['MAPBOX']}",
            )
        render json: response
    end

    def mapbox
        key = ENV['MAPBOX']
        render json: key
    end

end
