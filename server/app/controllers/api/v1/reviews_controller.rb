# frozen_string_literal: true

module Api
  module V1
    class ReviewsController < ApplicationController
      before_action :set_review, only: %i[show update destroy]
      # before_action :authenticate_user!, only: %i[create]

      # GET /reviews
      def index
        @reviews = Review.all.order(rating: :desc)

        render json: @reviews
      end

      # GET /reviews/1
      def show
        render json: @review
      end

      # POST /reviews
      def create
        @review = Review.new(review_params)

        if @review.save
          render json: @review, status: :created
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /reviews/1
      def update
        if @review.update(review_params)
          render json: @review
        else
          render json: @review.errors, status: :unprocessable_entity
        end
      end

      # DELETE /reviews/1
      def destroy
        @review.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_review
        @review = Review.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def review_params
        params.require(:review).permit(:name, :rating)
      end
    end
  end
end
