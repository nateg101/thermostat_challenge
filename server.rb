require 'sinatra'
require 'json'
require 'pg'
require_relative 'lib/database_helper'

  get "/update" do
    headers 'Access-Control-Allow-Origin' => '*'
    load_temp.to_json
  end

  post "/retrieve" do
    headers 'Access-Control-Allow-Origin' => '*'
    save_temp(temperature: params[:temperature])
  end
