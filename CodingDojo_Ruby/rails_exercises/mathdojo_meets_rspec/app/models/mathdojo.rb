class Mathdojo < ActiveRecord::Base
  attr_accessor :result, :add
  def initialize
    @result = 0
    # @add = add
  end

  def add *numbers
    @result += numbers.flatten.inject(:+)
    return self
  end

  def subtract *numbers
    @result -= numbers.flatten.inject(:+)
    return self
 end

 def multiply_by_the_sum *numbers
  multiply_num = self.result
  @result = (add(numbers).result - multiply_num) * multiply_num
  return self
 end

end
