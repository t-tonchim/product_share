# frozen_string_literal: true

module Api
  module V1
    class PingController < ApplicationController # :nodoc:
      render json: { message: 'pong' }
    end
  end
end
