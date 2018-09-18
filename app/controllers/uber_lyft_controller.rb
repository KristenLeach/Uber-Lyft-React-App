class UberLyftController < ApplicationController

    def uber_estimate()
        startLat = params[:startLat]
        startLng = params[:startLng]
        destinationLat= params[:destinationLat]
        destinationLng = params[:destinationLng]
        byebug
        response = RestClient::Request.execute(
            method: :post,
            url: "https://api.uber.com/v1.2/requests/estimate",
            headers: {
                :Authorization => "Token #{ENV['UBER_ESTIMATE']}", 
                :content_type => :json,
                :accept => :json
                :params => {starting_latitude: startLat, starting_longitude: startLng, destination_latitude: destinationLat, destination_longitude: destinationLng}
            }
            )
            byebug
        render json: response
    end

    def lyft_estimate()

    end

end