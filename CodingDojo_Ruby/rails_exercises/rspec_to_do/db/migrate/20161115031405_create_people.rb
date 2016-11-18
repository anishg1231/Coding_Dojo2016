class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :person_name
      t.string :pets_name
      t.integer :person_age
      t.integer :pet_age

      t.timestamps
    end
  end
end
