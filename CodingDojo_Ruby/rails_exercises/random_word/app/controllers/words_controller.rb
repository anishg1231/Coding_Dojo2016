class WordsController < ApplicationController
  def index
    if !session[:count]
      session[:count] = 0
    end
  end

  def random_word
    session[:count] = session[:count] + 1
    session[:word] = SecureRandom.hex(14)
  end
end
