class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :author
      t.string :message
      t.integer :post_id

      t.timestamps
    end
  end
end
# ninja4 = Ninja.new(first_name:"kevin", last_name:"Gheewala", dojo_id:Dojo.find(3).id)
