class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.string :idea
      t.references :user, index: true

      t.timestamps
    end
  end
end
