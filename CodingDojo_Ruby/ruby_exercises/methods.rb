#if we want our User Class to say who this user is , we can declare it like the following:

class User
  attr_accessor :first_name, :last_name
  def initialize(f_name,l_name)
    @first_name = f_name
    @last_name = l_name
  end
  def my_name
    puts "I am " + @first_name, @last_name
  end
end
  steph = User.new("Stephen", "Curry")
  steph.my_name
