# add an attribute to our User class declaration
class User
  @first_name
end

class User
  def first_name=(val)
    @first_name = val
  end
end

#now we set the value
user1.first_name = "Anish"
