class Mammal
  attr_accessor :alive, :health
  def initialize
    @alive = true
    puts 'I am alive'
    return self
  end
  def breathe
    puts 'inhale and exhale'
    return self
  end
  def display_health
    puts "Health is #{@health}"
  end
end
