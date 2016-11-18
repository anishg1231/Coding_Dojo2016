# Variables
# Local Variable - defined in a method.begins with a lowercase letter or _.
# Instance Variable - Begins with @ and has a default value of nil
# Class Variable - begins with @@ and must be initialized before being used in methods. Class variables are rarely used.
# Global Variable - Begins with $ and has a default value of nil. Avoid using this, if possible, since it is avilable everywhere.

class CodingDojo
  @@no_of_branches = 0
  def initialize(id, name, address)
    @branch_id = id
    @branch_name = name
    @branch_address = address
    @@no_of_branches += 1
    puts "\nCreated branch #{@@no_of_branches}"
  end
  def hello
    puts "Hello CodingDojo!"
  end
  def displayAll
    puts "Branch ID: %d" % @branch_id
    puts "Branch Name: %s" % @branch_name
    puts "Branch Address: %s" % @branch_address
  end
end
# now using above class to create objects
branch = CodingDojo.new(253, "SF CodingDojo", "Sunnyvale CA")
branch.displayAll
branch2 = CodingDojo.new(155, "Boston CodingDojo", "Boston MA")
branch2.displayAll
