require 'sinatra'
require 'json'

class Controller < Sinatra::Base
  enable :sessions

  get '/' do
    erb :index
  end

  post '/data' do
    session[:temperature] = request.params['temperature']
    session[:power_saving_mode] = request.params['powerSavingMode']
  end

  get '/data' do
    {
      temperature: session.fetch(:temperature) { '20' },
      powerSavingMode: session.fetch(:power_saving_mode) { 'true' }
    }.to_json
  end

  run! if __FILE__ == $PROGRAM_NAME
end
