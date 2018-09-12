class SearchController < ApplicationController

    def search_start
        input = params[:input]
        response = RestClient::Request.execute(
            method: :get,
            url: "https://maps.googleapis.com/maps/api/place/autocomplete/xml?input=#{input}&key=#{ENV['GOOGLE_PLACES_KEY']}",
            )
        JSON.parse(response)
    end

    def search_destination

    end

end