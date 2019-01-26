module Api::V1
  class HarassesController < ApplicationController
    before_action :set_harass, only: [:update, :show, :edit]
    def index
      @harasses = Harass.all
      render json: @harasses
    end

    def new
      @harass = Harass.new
    end

    def show
      render json: @harass
    end

    def create
      @harass = Harass.new(harass_params)
      if @harass.create
        render json: @harass
      else
        head: :no_content, status: :unprocessable_entity
      end
    end

    def update
      @harass.
    end
    private
      def set_harass
        @harass ||= Harass.fin(params[:id])
      end

      def harass_params
        params.require(:harass).permit(:start_address, :description, :longitude, :latitude)
      end
  end
end