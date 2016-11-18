require_relative '../animals/cat'

class Human
  attr_accessor :strength, :intelligence, :stealth, :health
  def initialize
    @strength = 3
    @intelligence = 3
    @stealth = 3
    @health = 100
  end
  def attack(obj)
    if obj.class.ancestors.include?(Human)
      obj.health -= 10
      puts "Your health went down #{obj.health}"
    else
      return false
    end
  end
end
human1 = Human.new
human2 = Human.new
puts human1.attack(human2)
