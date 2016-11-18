require_relative 'mammal'

class Dragons < Mammal
  def initialize
    @health = 170
  end

  def fly
    @health -= 10
    self
  end

  def attack_town
    @health -= 50
    self
  end

  def eat_humans
    @health += 20
    self
  end

  # def message
  #   puts "this is a dragon"
  #   self
  # end
end
dragon1 = Dragons.new.attack_town.attack_town.attack_town.eat_humans.eat_humans.fly.fly.display_health
