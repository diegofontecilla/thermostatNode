require 'sinatra'
require 'json'
require_relative 'thermostat'

class Controller < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/data' do
    Thermostat.temp = params['temperature']
    Thermostat.psm = params['powerSavingMode']
  end

  get '/data' do
    {
      temperature: Thermostat.temp,
      powerSavingMode: Thermostat.psm
    }.to_json
  end

  run! if __FILE__ == $PROGRAM_NAME
end
