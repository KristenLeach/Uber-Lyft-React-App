class UberLyftController < ApplicationController

    def uber_estimate
        startLat = params[:startLat]
        startLng = params[:startLng]
        destinationLat= params[:destinationLat]
        destinationLng = params[:destinationLng]
        response = RestClient.get("https://api.uber.com/v1.2/estimates/price?start_latitude=#{startLat}&start_longitude=#{startLng}&end_latitude=#{destinationLat}&end_longitude=#{destinationLng}", headers={:Authorization => "Token #{ENV['UBER_ESTIMATE']}"})
        render json: response
    end

    def lyft_estimate
        startLat = params[:startLat]
        startLng = params[:startLng]
        destinationLat= params[:destinationLat]
        destinationLng = params[:destinationLng]
        response = RestClient.get("https://api.lyft.com/v1/cost?start_lat=#{startLat}&start_lng=#{startLng}&end_lat=#{destinationLat}&end_lng=#{destinationLng}", headers={:Authorization => "bearer #{ENV['LYFT_ESTIMATE']}"})
        render json: response
    end

end