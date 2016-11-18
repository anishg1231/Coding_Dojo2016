class Mammal
  def initialize
    puts "I am alive"
  end
  def breathe
    puts "inhale and exhale"
  end
end

class Cat < Mammal #inherits form the Mammal Class
  def jerk
    puts "scratching you..."
    return self # chaining methods
  end
  def speak
    puts "Meow"
    return self # chaining methods
  end
  #self
  def who_am_i
    puts self
    return self # chaining methods
  end
end
chloe = Cat.new # creates new class called Cat, 'i am alive!' should print on the screen
# chloe.jerk # prints 'scraching you' on the screen
# chloe.speak # prints 'Meow'
# chloe.breathe # can access the Mammal methods as well,,, prints 'Inhale and exhale'
chloe.speak.who_am_i.jerk
